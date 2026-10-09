# Comparing AI API costs: units, cache, credits and plans

[简体中文](cost-comparison.md) · [Service selection guide](../README.en.md)

Start with a fixed workload, then calculate what each service would charge to complete it. Preserve the model version, node, protocol, context and tool settings. Different conditions can support a budget comparison, but they cannot establish a quality ranking.

All A/B prices below are fictional examples. This guide is maintained by the TokenDos operator; it explains a method that applies to any provider, without establishing which one is cheapest.

The [two-plan browser calculator](https://codefarmer4gdp.github.io/awesome-ai-api-cn/index.en.html#calculator) is available in English and [Chinese](https://codefarmer4gdp.github.io/awesome-ai-api-cn/#calculator). Enter your own quotes in one currency; it supports input, output, cache reads, extra charges, top-up fees and usable bonus credits. Its defaults are fictional. Convert platform credit prices to cash first if credits are not exchanged at 1:1. Cache writes, tools and retry charges can be included in the extra-charges total. Weekly subscriptions need a separate calculation.

## 1. Normalize the units

| Quoted price | Price per million tokens |
| --- | --- |
| $0.003 per 1K tokens | $3 per 1M tokens |
| $0.000003 per token | $3 per 1M tokens |
| ¥21 per 1M tokens | ¥21 per 1M; record an exchange rate and date for conversion |

A dollar-denominated platform balance is not necessarily one dollar of cash. Check cash paid, credits received, group multipliers and whether displayed prices already include those multipliers. Do not apply the same multiplier twice. Token, request, image, second and subscription prices need their own workload assumptions.

## 2. Separate input, output and cache charges

For billing categories that do not overlap:

```text
Model cost = uncached input × input rate
           + cache reads × cache-read rate
           + cache writes × applicable write rate
           + output × output rate
```

Convert each rate to a price per 1M tokens, then divide its token count by 1,000,000. Some providers charge a cache-write surcharge in addition to ordinary input; follow that rule rather than treating the write price as a replacement. Usage fields can include cached tokens inside input or report them separately. Check field definitions, reasoning-token billing, context surcharges and tool charges before summing them.

### Example: a lower input price can produce a higher total

Run a task 1,000 times, with 2,000 fresh input tokens, 6,000 reusable input tokens and 1,000 output tokens per task. For this example, A's reusable input always hits an existing cache; initial cache creation is excluded and must be added separately. B bills that input at its ordinary rate.

| Component | Fictional plan A | Fictional plan B |
| --- | ---: | ---: |
| Input rate ($/1M) | 3 | 2 |
| Cache-read rate ($/1M) | 0.30 | Ordinary input rate |
| Output rate ($/1M) | 15 | 12 |
| Input cost | 2M × $3 = $6 | 8M × $2 = $16 |
| Cache-read cost | 6M × $0.30 = $1.80 | Included in input |
| Output cost | 1M × $15 = $15 | 1M × $12 = $12 |
| Model cost | $22.80 | $28.00 |

If A adds a 5.5% fee on purchased credit and all that credit is used, cash required is $22.80 × 1.055 = $24.054. Add initial cache writes, minimum fees, taxes and currency charges where applicable. The example compares a full workload, without drawing a conclusion about any real provider.

## 3. A bonus is different from a cash discount

Paying $10 for $10 of balance plus a $1 voucher provides $11 of usable credit only if the voucher qualifies and is fully spent. The cash cost per credit dollar is then 10 / 11 ≈ 0.9091, a 9.09% reduction. A “10% bonus” does not mean a 10% cash discount.

Count only the portion you can use. Eligibility, expiry, model restrictions and stacking rules affect vouchers; first-top-up and referral rewards should not become permanent budget assumptions for every user.

For a prepaid balance, record cash outlay, credit consumed and remaining usable credit separately. Do not assign the entire top-up to this month's tasks if some balance remains. Distinguish unexpired balances from expired vouchers.

## 4. Calculate weekly plans week by week

Suppose a four-week plan costs ¥400 and grants $100 of platform credit each week without rollover. Weekly use of $20, $20, $80 and $0 consumes $120 in total, rather than the advertised $400 allocation.

Price those same tasks under the applicable pay-as-you-go rates, then compare that cash cost with the ¥400 subscription plus overages. Platform credit is not necessarily vendor cash credit. Consuming all the credit does not itself prove savings: group multipliers, quota windows, permitted tools and supported models also matter.

## 5. Include failed attempts and retries

```text
Average cost per successful task
  = net charges for all attempts / successfully completed tasks
```

Preserve failed and retried attempts, including charges and confirmed refunds. Count business success using the task's criteria; HTTP 200 alone does not establish completion. If no task succeeds, the ratio is undefined: report costs and failures rather than a finite cost per success.

Member-session sharing adds supply conditions: available seats, online suppliers, quota windows, queues and client compatibility. Supplier-set prices and promotions, weekly coding plans and credit-purchase fees each need their own calculation.

## Record enough to reproduce the comparison

Use the [evaluation record template](../examples/evaluation-record.template.json). Its empty fields represent unobserved information; it is not a completed test.

| Record | Purpose |
| --- | --- |
| Model, node, protocol, date and request settings | Establish comparable workloads |
| Price source, currency, unit and multipliers | Recalculate charges |
| Raw input/output/cache fields and definitions | Avoid counting usage twice |
| Actual deductions, top-up fees and used rewards | Reconcile cash cost |
| All attempts, confirmed refunds and task outcomes | Calculate cost per completed task |

Sources and maintenance affiliation are in the [selection guide](../README.en.md). Submit corrections with dates and evidence under [CONTRIBUTING.md](../CONTRIBUTING.md).
