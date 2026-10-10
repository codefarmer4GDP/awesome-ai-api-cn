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

### How many cache hits make the caching plan cheaper?

Keep the fictional prices and 1,000 tasks above: each task has 2,000 fresh input tokens, 6,000 reusable tokens and 1,000 output tokens. Let `h` be the fraction of **reusable tokens** served from cache, from 0 to 1. Assume A charges misses at $3 / 1M and hits at $0.30 / 1M, while B always charges all input at $2 / 1M.

```text
A model cost = 2M × $3 + 6M × [h × $0.30 + (1 − h) × $3] + 1M × $15
             = $39 − $16.20 × h
B model cost = 8M × $2 + 1M × $12 = $28
A is cheaper when h > 11 / 16.20 ≈ 67.90%
```

| Reusable-token hit rate | A model cost | A with a 5.5% top-up fee | B cost | Prefilled example without fees |
| --- | ---: | ---: | ---: | --- |
| 0% | $39.00 | $41.1450 | $28.00 | [Open 0% example](https://codefarmer4gdp.github.io/awesome-ai-api-cn/index.en.html#v=1&currency=USD&tasks=1000&fresh=8000&cached=0&output=1000&a_name=Fictional%20A%3A%200%25%20hits&a_input=3&a_output=15&a_cache=0.3&a_extra=0&a_fee=0&a_bonus=0&b_name=Fictional%20B%3A%20ordinary%20input&b_input=2&b_output=12&b_cache=2&b_extra=0&b_fee=0&b_bonus=0) |
| 50% | $30.90 | $32.5995 | $28.00 | [Open 50% example](https://codefarmer4gdp.github.io/awesome-ai-api-cn/index.en.html#v=1&currency=USD&tasks=1000&fresh=5000&cached=3000&output=1000&a_name=Fictional%20A%3A%2050%25%20hits&a_input=3&a_output=15&a_cache=0.3&a_extra=0&a_fee=0&a_bonus=0&b_name=Fictional%20B%3A%20ordinary%20input&b_input=2&b_output=12&b_cache=2&b_extra=0&b_fee=0&b_bonus=0) |
| 70% | $27.66 | $29.1813 | $28.00 | [Open 70% example](https://codefarmer4gdp.github.io/awesome-ai-api-cn/index.en.html#v=1&currency=USD&tasks=1000&fresh=3800&cached=4200&output=1000&a_name=Fictional%20A%3A%2070%25%20hits&a_input=3&a_output=15&a_cache=0.3&a_extra=0&a_fee=0&a_bonus=0&b_name=Fictional%20B%3A%20ordinary%20input&b_input=2&b_output=12&b_cache=2&b_extra=0&b_fee=0&b_bonus=0) |
| 100% | $22.80 | $24.0540 | $28.00 | [Open 100% example](https://codefarmer4gdp.github.io/awesome-ai-api-cn/index.en.html#v=1&currency=USD&tasks=1000&fresh=2000&cached=6000&output=1000&a_name=Fictional%20A%3A%20100%25%20hits&a_input=3&a_output=15&a_cache=0.3&a_extra=0&a_fee=0&a_bonus=0&b_name=Fictional%20B%3A%20ordinary%20input&b_input=2&b_output=12&b_cache=2&b_extra=0&b_fee=0&b_bonus=0) |

If only A adds a 5.5% top-up fee and all purchased credit is used, the condition becomes `(39 − 16.20 × h) × 1.055 < 28`. The threshold rises to **about 76.91%**. [Open the 70%-hit example with A's 5.5% fee](https://codefarmer4gdp.github.io/awesome-ai-api-cn/index.en.html#v=1&currency=USD&tasks=1000&fresh=3800&cached=4200&output=1000&a_name=Fictional%20A%3A%2070%25%20hits&a_input=3&a_output=15&a_cache=0.3&a_extra=0&a_fee=5.5&a_bonus=0&b_name=Fictional%20B%3A%20ordinary%20input&b_input=2&b_output=12&b_cache=2&b_extra=0&b_fee=0&b_bonus=0): A requires $29.1813 and B requires $28. Percentages are rounded; costs are equal at the exact boundary.

Prefilled links put A's reusable misses into uncached input and hits into cache reads. B's cache-read rate is set to its ordinary input rate, leaving its total input cost unchanged. These links contain fictional budgets, not observations or real quotes.

The denominator is all 6M reusable tokens, rather than all input tokens or the number of requests with any hit. Actual costs also depend on cache-write prices, expiry, prefix length, request spacing, routing and returned usage definitions. This example assumes misses incur only ordinary input charges without an extra write fee. Add any extra charges before applying a threshold to your own workload. Keep task volume fixed and check that outputs meet the same task requirements.

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
