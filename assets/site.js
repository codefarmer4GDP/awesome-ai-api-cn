"use strict";

const form = document.getElementById("cost-form");
const named = (name) => form.elements.namedItem(name);
const numberFields = [...form.querySelectorAll('input[type="number"]')];
const fields = [...form.querySelectorAll("input, select")];
const status = document.getElementById("calculation-status");
let currentEstimate = null;

function formatMoney(value, currency) {
  return new Intl.NumberFormat("zh-CN", {
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
  error.textContent = valid ? "" : "请填完整方案名称与非负数字；任务次数须为正整数，Token 用量须为整数。数值过大时请缩小任务量。";
  document.getElementById("share-calculation").disabled = !valid;
  document.getElementById("download-calculation").disabled = !valid;
  status.textContent = "";
  for (const prefix of ["a", "b"]) {
    const plan = currentEstimate?.plans.find((item) => item.prefix === prefix);
    document.getElementById(`${prefix}-table-name`).textContent = plan?.name || `方案 ${prefix.toUpperCase()}`;
    for (const [id, key] of [["input", "input"], ["cache", "cache"], ["output", "output"], ["extra", "extra"], ["base", "base"], ["cash", "cash"], ["per-task", "perTask"]]) {
      document.getElementById(`${prefix}-${id}-result`).textContent = plan ? formatMoney(plan[key], currentEstimate.currency) : "—";
    }
  }
  const difference = document.getElementById("result-difference");
  if (!valid) { difference.textContent = "待输入完整报价"; return; }
  const [a, b] = currentEstimate.plans;
  const gap = Math.abs(a.cash - b.cash);
  difference.textContent = gap < 0.00005 ? "两方案估算现金成本相同" : `方案 ${a.cash < b.cash ? "A" : "B"} 估算少花 ${formatMoney(gap, currentEstimate.currency)}，仅比较费用`;
}

function shareUrl() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams({ v: "1" });
  for (const field of fields) params.set(field.name, field.value);
  url.hash = params.toString();
  return url.href;
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
  try {
    await navigator.clipboard.writeText(url);
    status.textContent = "链接已复制，包含当前方案名称、用量与报价。";
  } catch {
    status.textContent = "浏览器未允许复制；当前地址栏已保存参数，可以直接复制地址。";
  }
});

document.getElementById("download-calculation").addEventListener("click", () => {
  if (!currentEstimate) return;
  const record = {
    format_version: "1.0",
    record_type: "budget_estimate_not_observed_billing",
    created_at: new Date().toISOString(),
    inputs: Object.fromEntries(fields.map((field) => [field.name, field.type === "number" ? field.valueAsNumber : field.value])),
    results: currentEstimate,
    assumptions: document.getElementById("cost-assumptions").textContent,
    source: "https://codefarmer4gdp.github.io/awesome-ai-api-cn/",
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
  status.textContent = "已导出预算估算 JSON；这份文件不代表实际扣费或调用实测。";
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
  document.getElementById("filter-count").textContent = `显示 ${count} / ${cards.length} 项服务`;
  document.getElementById("no-results").hidden = count !== 0;
}
document.getElementById("directory-filters").hidden = false;
search.addEventListener("input", filterServices);
category.addEventListener("change", filterServices);
