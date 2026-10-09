"use strict";

const locale = document.documentElement.lang === "en" ? "en-US" : "zh-CN";
const messages = locale === "en-US" ? {
  invalid: "Enter a plan name and finite, non-negative numbers. Task count must be a positive integer, and token counts must be integers. Reduce the workload if values are too large.",
  plan: (letter) => `Plan ${letter}`,
  pending: "Enter complete quotes to compare costs",
  equal: "Both plans have the same estimated cash cost",
  difference: (letter, amount) => `Plan ${letter} costs an estimated ${amount} less; cost comparison only`,
  copied: "Link copied, including the current plan names, workload and quotes.",
  copyFallback: "Clipboard access was unavailable. The address bar now contains the parameters; copy its URL to share.",
  downloaded: "Budget estimate exported as JSON. This file is not evidence of actual billing or calling tests.",
  count: (count, total) => `Showing ${count} / ${total} services`
} : {
  invalid: "请填完整方案名称与非负数字；任务次数须为正整数，Token 用量须为整数。数值过大时请缩小任务量。",
  plan: (letter) => `方案 ${letter}`,
  pending: "待输入完整报价",
  equal: "两方案估算现金成本相同",
  difference: (letter, amount) => `方案 ${letter} 估算少花 ${amount}，仅比较费用`,
  copied: "链接已复制，包含当前方案名称、用量与报价。",
  copyFallback: "浏览器未允许复制；当前地址栏已保存参数，可以直接复制地址。",
  downloaded: "已导出预算估算 JSON；这份文件不代表实际扣费或调用实测。",
  count: (count, total) => `显示 ${count} / ${total} 项服务`
};
const form = document.getElementById("cost-form");
const named = (name) => form.elements.namedItem(name);
const numberFields = [...form.querySelectorAll('input[type="number"]')];
const fields = [...form.querySelectorAll("input, select")];
const status = document.getElementById("calculation-status");
let currentEstimate = null;

function formatMoney(value, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency", currency, minimumFractionDigits: 2, maximumFractionDigits: 4
  }).format(value);
}

function readEstimate() {
  if (!form.checkValidity() || numberFields.some((field) => field.value.trim() === "" || !Number.isFinite(field.valueAsNumber))) {
    return null;
  }
  const n = (name) => named(name).valueAsNumber;
  const tasks = n("tasks");
  const plans = ["a", "b"].map((prefix) => {
    const input = tasks * n("fresh") * n(`${prefix}_input`) / 1000000;
    const cache = tasks * n("cached") * n(`${prefix}_cache`) / 1000000;
    const output = tasks * n("output") * n(`${prefix}_output`) / 1000000;
    const extra = n(`${prefix}_extra`);
    const base = input + cache + output + extra;
    const cash = base / (1 + n(`${prefix}_bonus`) / 100) * (1 + n(`${prefix}_fee`) / 100);
    return { prefix, name: named(`${prefix}_name`).value.trim(), input, cache, output, extra, base, cash, perTask: cash / tasks };
  });
  if (plans.some((plan) => !plan.name || Object.values(plan).some((v) => typeof v === "number" && !Number.isFinite(v)))) return null;
  return { currency: named("currency").value, tasks, plans };
}

function updateEstimate() {
  currentEstimate = readEstimate();
  const error = document.getElementById("input-error");
  const valid = currentEstimate !== null;
  error.hidden = valid;
  error.textContent = valid ? "" : messages.invalid;
  document.getElementById("share-calculation").disabled = !valid;
  document.getElementById("download-calculation").disabled = !valid;
  status.textContent = "";
  for (const prefix of ["a", "b"]) {
    const plan = currentEstimate?.plans.find((item) => item.prefix === prefix);
    document.getElementById(`${prefix}-table-name`).textContent = plan?.name || messages.plan(prefix.toUpperCase());
    for (const [id, key] of [["input", "input"], ["cache", "cache"], ["output", "output"], ["extra", "extra"], ["base", "base"], ["cash", "cash"], ["per-task", "perTask"]]) {
      document.getElementById(`${prefix}-${id}-result`).textContent = plan ? formatMoney(plan[key], currentEstimate.currency) : "—";
    }
  }
  const difference = document.getElementById("result-difference");
  refreshLanguageLinks();
  if (!valid) { difference.textContent = messages.pending; return; }
  const [a, b] = currentEstimate.plans;
  const gap = Math.abs(a.cash - b.cash);
  difference.textContent = gap < 0.00005 ? messages.equal : messages.difference(a.cash < b.cash ? "A" : "B", formatMoney(gap, currentEstimate.currency));
}

function shareUrl(base = window.location.href) {
  const url = new URL(base);
  const params = new URLSearchParams({ v: "1" });
  for (const field of fields) params.set(field.name, field.value);
  url.hash = params.toString();
  return url.href;
}

function refreshLanguageLinks() {
  const shared = new URLSearchParams(window.location.hash.slice(1)).get("v") === "1";
  const edited = fields.some((field) => field.value !== (field.tagName === "SELECT"
    ? [...field.options].find((option) => option.defaultSelected)?.value || field.options[0].value
    : field.defaultValue));
  for (const link of document.querySelectorAll("[data-language-switch]")) {
    const url = new URL(link.href);
    url.hash = shared || edited ? new URL(shareUrl()).hash : window.location.hash;
    link.href = url.href;
  }
}

function restoreSharedValues() {
  const params = new URLSearchParams(window.location.hash.slice(1));
  if (params.get("v") !== "1") return;
  for (const field of fields) {
    if (!params.has(field.name)) continue;
    const value = params.get(field.name);
    if (field.tagName === "SELECT") {
      if ([...field.options].some((option) => option.value === value)) field.value = value;
    } else {
      field.value = value.slice(0, field.type === "number" ? 100 : 80);
    }
  }
}

form.hidden = false;
restoreSharedValues();
updateEstimate();
form.addEventListener("input", updateEstimate);
form.addEventListener("change", updateEstimate);
form.addEventListener("submit", (event) => event.preventDefault());
form.addEventListener("reset", () => {
  const url = new URL(window.location.href);
  url.hash = "calculator";
  window.history.replaceState(null, "", url.href);
  setTimeout(updateEstimate, 0);
});
window.addEventListener("hashchange", () => { restoreSharedValues(); updateEstimate(); });

document.getElementById("share-calculation").addEventListener("click", async () => {
  if (!currentEstimate) return;
  const url = shareUrl();
  window.history.replaceState(null, "", url);
  refreshLanguageLinks();
  try {
    await navigator.clipboard.writeText(url);
    status.textContent = messages.copied;
  } catch {
    status.textContent = messages.copyFallback;
  }
});

document.getElementById("download-calculation").addEventListener("click", () => {
  if (!currentEstimate) return;
  const record = {
    format_version: "1.0",
    record_type: "budget_estimate_not_observed_billing",
    ui_locale: locale,
    created_at: new Date().toISOString(),
    inputs: Object.fromEntries(fields.map((field) => [field.name, field.type === "number" ? field.valueAsNumber : field.value])),
    results: currentEstimate,
    assumptions: document.getElementById("cost-assumptions").textContent,
    source: document.querySelector('link[rel="canonical"]').href,
    share_url: shareUrl()
  };
  const blob = new Blob([JSON.stringify(record, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ai-api-cost-estimate.json";
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  status.textContent = messages.downloaded;
});

const search = document.getElementById("service-search");
const category = document.getElementById("service-category");
const cards = [...document.querySelectorAll(".service-card")];
function filterServices() {
  const query = search.value.trim().toLocaleLowerCase();
  let count = 0;
  for (const card of cards) {
    const matches = card.textContent.toLocaleLowerCase().includes(query) && (category.value === "all" || card.dataset.category.split(" ").includes(category.value));
    card.hidden = !matches;
    if (matches) count += 1;
  }
  document.getElementById("filter-count").textContent = messages.count(count, cards.length);
  document.getElementById("no-results").hidden = count !== 0;
}
document.getElementById("directory-filters").hidden = false;
filterServices();
search.addEventListener("input", filterServices);
category.addEventListener("change", filterServices);
