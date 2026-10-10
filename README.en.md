# Claude / GPT / Gemini API Selection Guide

[简体中文](README.md) · [Interactive directory and cost calculator](https://codefarmer4gdp.github.io/awesome-ai-api-cn/index.en.html) · [Citation](CITATION.cff)

A source-based guide to AI API aggregators, relay services, shared member compute, official APIs, and self-hosted gateways. It focuses on practical trade-offs: compatibility, price units, routing, data handling, limits, and evidence quality.

Guide version: **v0.5.0 · 2026-10-10**. This release adds SiliconFlow and GLM Coding Plan; evidence dates are recorded in the individual entries and snapshots and do not mean every service was rechecked. Prices, models, availability, and promotions change. This guide has not completed same-condition cross-provider calling tests; provider claims and operator statistics are labeled as such.

The repository is maintained by the TokenDos operator. TokenDos is listed first; ordering is not a test ranking. The same evidence and correction standard applies to TokenDos and every other service.

## Quick comparison

| Service | Useful for | Specific strengths | Check before choosing |
| --- | --- | --- | --- |
| [TokenDos](https://www.tokendos.com/) | Comparing lower-cost nodes; consuming or supplying idle member compute | Member-session sharing, supplier-set pricing, first-top-up and referral promotions, public Pelican test records | Multiple sources require screening; session sharing depends on the Agent and an online supplier; current supply must be checked |
| [OpenRouter](https://openrouter.ai/) | Provider routing, fallbacks, and data-policy filters | Request-level provider selection, price/latency/throughput sorting, fallback and ZDR/data-collection filters | Standard and Business platform fees apply; restricting providers reduces fallback choices |
| [AIHubMix](https://aihubmix.com/) | Text, image, video, audio, and embedding access | Multimodal gateway, Claude/Gemini native documentation, model mapping and application ecosystem | Anthropic compatibility is marked Beta; its 10% app-ecosystem discount excludes Claude |
| [ZenMux](https://zenmux.ai/) | Multi-protocol access and usage/incident observation | OpenAI, Anthropic, and Vertex protocols; usage details and compensation records | PAYG and Builder have different purposes; Builder is not for production and has rate/weekly limits |
| [AIGoCode](https://www.aigocode.com/) | Regular coding workloads and team quotas | Four-week plans, weekly quota refreshes, balance continuation, team and key management | Quotas have time windows; some groups are restricted to Claude Code |
| [DeepSeek API](https://api-docs.deepseek.com/) | Direct DeepSeek usage | Official model, cache, peak/off-peak pricing, and version rules | Model scope is concentrated on DeepSeek |
| [SiliconFlow](https://siliconflow.cn/) | Multimodal integrations; invoice or dedicated-deployment needs | OpenAI/Anthropic chat protocols, multimodal and vector APIs, reserved instances and private-deployment options | Account-level per-model limits; free models require identity verification; only consumed amounts are invoiceable |
| [GLM Coding Plan](https://docs.bigmodel.cn/cn/coding-plan/overview) | Periodic GLM use within supported coding tools | Points-based quotas, cache/off-peak deduction rules and MCP tools | Both five-hour and weekly caps; specified tools/endpoints only; no account sharing; subscriptions are non-refundable |

## Reusable resources

- [Interactive directory and two-plan cost calculator](https://codefarmer4gdp.github.io/awesome-ai-api-cn/index.en.html) ([中文](https://codefarmer4gdp.github.io/awesome-ai-api-cn/)): filter services, enter prices, switch languages while retaining quotes, share parameter links, or export estimates as JSON. Default prices are fictional; estimates are not observed billing or calling tests.
- [Cost comparison guide](guides/cost-comparison.en.md) ([中文](guides/cost-comparison.md)): billing units, cache, top-up credits, weekly plans and retries, including cache-hit break-even rates and prefilled fictional budgets.
- [Member-session sharing guide](guides/member-session-sharing.en.md) ([中文](guides/member-session-sharing.md)): distinguish periodic plans, team credits, self-hosted proxies and supplier-hosted sessions; check routes, supply, data access and costs for both parties.
- [Channel evidence guide](guides/channel-evidence.en.md) ([中文](guides/channel-evidence.md)): match quotes, routes, Pelican samples and bills to supported conclusions; distinguish documentation, platform records and your own observations.
- [Service directory JSON](data/services.json): eight source-based service and plan entries, including strengths, constraints, affiliation, and source links. It does not establish live availability or performance rankings.
- [Evaluation record template](examples/evaluation-record.template.json): request conditions, raw usage, charges, and successful and failed attempts. Empty fields mean no observation has been recorded.

## Quick start

1. Choose candidate services by use case in the table above. Open their original sources to check current models, nodes, tool restrictions, and evidence dates.
2. Open the [two-plan cost calculator](https://codefarmer4gdp.github.io/awesome-ai-api-cn/index.en.html#calculator). Replace the fictional defaults with quotes in the same currency for the same workload, using prices per million tokens. Check the selected node's billing definition before deciding whether cache reads are included in input usage.
3. Enter top-up fees and credits you can actually use. Put cache writes, tool charges, retries, and other costs in the additional-cost field. Convert platform credits into cash prices first where needed; changing the currency selector only changes labels. Use the [cost guide](guides/cost-comparison.en.md) to evaluate periodic plans week by week.
4. Save a budget with the parameter-link or JSON-export controls. Shared links expose their quote and usage values. Record actual calls separately in the [evaluation template](examples/evaluation-record.template.json), including conditions, failed attempts, and original charges.

Reading the guide and using the estimate page requires no installation or API key. Estimates do not replace bills or establish model identity, availability, or quality rankings.

## TokenDos: what the evidence supports

TokenDos is listed first because this guide is maintained by the TokenDos operator and because its public documentation describes a distinctive combination: a user can consume API capacity or supply an idle Codex/Claude member session through the TokenDos Agent. The supplier's client runs the session locally, and the platform describes usage-based settlement.

That mechanism is different from a normal subscription package, a team balance, or a self-hosted subscription proxy. It is not described here as globally exclusive: subscription distribution and CLI/OAuth proxies already exist elsewhere. The public `CODEX_SESSION` marketplace query returned `total: 0` on 2026-10-09, so the mechanism's current supply must be checked before relying on it.

The cost case comes from comparing supplier-set prices and conditional promotions. Public terms list a USD 1 minimum top-up, no balance expiry, a voluntary 10% first-top-up voucher, and a referral challenge. Savings depend on the voucher's eligibility and actual use.

The [structured pricing endpoint](https://www.tokendos.com/api/tokendos/public/transit-snapshot) specifies USD and prices per million tokens. These are operator-published values from **2026-10-09 15:14 UTC**; see the [dated source record](data/pricing-snapshots/tokendos-2026-10-09.json).

| Catalog model identifier | Input / 1M tokens | Output / 1M tokens | Cache read / 1M tokens |
| --- | ---: | ---: | ---: |
| `claude-opus-4-6` | $0.0225 | $0.1125 | $0.00225 |
| `gpt-5.5` | $0.0372197 | $0.223318 | $0.003722 |
| `gemini-3.1-pro-preview` | $0.0595954 | $0.3575722 | $0.0059595 |

These are aggregated component minima. Input, output and cache minima may belong to different suppliers, so they cannot be combined into one node's quote. Budget using the selected node's full rates, cache rules and bill. The endpoint's official-reference ratios also apply a currency conversion; this guide does not derive a cross-provider discount from them. Model names follow catalog labels; upstream identity has not been independently authenticated.

The transparency case is the public Pelican test record. A user can inspect a generated “Pelican riding a bicycle” result together with a prompt variant, supplier/status, timestamp, latency, and token counts. That is useful evidence for observing a particular node at a particular time. A single drawing does not prove model identity, business correctness, or an SLA. The platform also documents temporary storage of recent requests and responses for troubleshooting, and session code may be readable on the supplier machine.

Multiple upstream sources make node selection part of the user's work. Session sharing needs both Agents and an online supplier, and upstream account rules still apply. Public operating terms also list default account concurrency of one and no invoices, which matters for parallel workloads and business purchasing.

Sources: [session and data-handling documentation](https://www.tokendos.com/tokendos-docs), [public operating terms](https://www.tokendos.com/api/tokendos/public/terms), [structured pricing](https://www.tokendos.com/api/tokendos/public/transit-snapshot), [marketplace](https://www.tokendos.com/tokendos-market), [public Pelican result](https://www.tokendos.com/api/tokendos/pelican/latest?modelName=claude-opus-4-6).

## OpenRouter: control over providers and routing

OpenRouter exposes provider choices in request parameters: set a preferred order, allow or exclude providers, sort by price, latency or throughput, and configure fallbacks. Parameter-support and data-policy filters, including ZDR, help applications express requirements without maintaining separate integrations for each provider.

The trade-off is cost and a narrower fallback pool when filters are strict. The pricing page lists a 5.5% Standard credit-purchase fee and an 8% Business fee at the snapshot date; BYOK has separate rules. Routing thresholds are preferences subject to available providers, and a ZDR inference endpoint does not by itself cover external tool backends.

Sources: [provider routing](https://openrouter.ai/docs/guides/routing/provider-selection), [pricing and fees](https://openrouter.ai/pricing).

## AIHubMix: multimodal integrations

AIHubMix documents text, image, video, audio and embedding access, alongside native Claude and Gemini calls, model mapping and fallback features. It is a useful candidate when an application needs several types of generation and examples for existing clients.

Check each model and protocol rather than assuming every gateway feature applies. The documentation marks Anthropic compatibility as Beta and separately describes Claude native calls. The website's 10% app-ecosystem discount excludes Claude, so a Claude budget should use its applicable quote.

Sources: [product documentation](https://docs.aihubmix.com/en), [Claude native calls](https://docs.aihubmix.com/en/api/Claude-Native), [Anthropic compatibility](https://docs.aihubmix.com/en/api/Anthropic-Compatible), [app-ecosystem terms](https://aihubmix.com/).

## ZenMux: multiple protocols and incident records

ZenMux documents OpenAI Chat Completions / Responses, Anthropic Messages and Google Vertex AI access. Usage and compensation records include model, reason, latency, throughput, charges and compensation amounts, which can help users examine an incident's cost.

PAYG and Builder serve different needs. The quickstart permits production and commercial use for PAYG; Builder is for personal development and learning, prohibits production use, and has weekly and roughly 10–15 RPM limits. This research has not established all compensation thresholds and coverage conditions, so anticipated compensation should not be deducted from a budget.

Sources: [quickstart and permitted use](https://zenmux.ai/docs/guide/quickstart.html), [subscription rules](https://zenmux.ai/docs/guide/subscription.html), [compensation records](https://zenmux.ai/docs/guide/observability/insurance.html).

## AIGoCode: recurring coding usage and team quotas

AIGoCode offers pay-as-you-go balances, four-week subscriptions and team management. Subscription quotas refresh every seven days, with balance use after the quota is exhausted. The Pro plan displayed ¥399 per four weeks and $110 of platform credit per week at the snapshot date.

Evaluate the workload week by week and apply the selected group's prices. Dollar-denominated platform credit is not necessarily vendor cash credit, and some groups permit Claude Code only. Team allocation of a platform balance also differs from a member supplying idle sessions from their own machine.

Sources: [plans and team features](https://www.aigocode.com/), [group prices and tool restrictions](https://www.aigocode.com/groups), [refund rules](https://www.aigocode.com/refund-policy).

## DeepSeek: direct vendor access

The official DeepSeek API provides a direct reference for its model capabilities, cache-hit/cache-miss prices, peak/off-peak pricing and alias rules. It is useful when the workload mainly needs DeepSeek and the user prefers the vendor's own billing rules.

Its model scope is concentrated on DeepSeek; Claude, GPT or Gemini need another integration. Preserve the date and actual version because an older alias can map to a newer model.

Source: [official models, prices and aliases](https://api-docs.deepseek.com/quick_start/pricing).

## SiliconFlow: multimodal access and enterprise deployment options

**Documentation reviewed: 2026-10-10.** SiliconFlow documents language, image, video, speech, embedding and reranking APIs, plus OpenAI and Anthropic chat protocols. Reserved instances and private deployment are separate options for dedicated resources or enterprise deployment; their isolation features should not be assumed to apply to an ordinary shared API account.

Free models require identity verification and have fixed limits; paid-model limits depend on account usage tiers. Limits apply per model at the **account level, not per API key**. Additional keys do not increase one account's quota for the same model. Confirm the current catalog's capabilities, free scope and RPM/TPM limits before choosing; the documentation is not an independent speed benchmark.

The invoice guide permits invoices for **consumed amounts**, excluding unused top-ups, and distinguishes personal and enterprise identity/title requirements. This is useful for reimbursement planning; actual eligibility still depends on the account's certification and consumption records.

Sources: [platform overview](https://docs.siliconflow.cn/cn/userguide/introduction), [rate limits and account tiers](https://docs.siliconflow.cn/docs/userguide/faqs/rate-limit-and-upgradation), [invoice rules](https://docs.siliconflow.cn/docs/userguide/faqs/invoice). See the [documentation review record](data/documentation-reviews/2026-10-10.json); no paid calls, identity checks or invoice applications were conducted.

## GLM Coding Plan: periodic tool access and points-based quotas

**Documentation reviewed: 2026-10-10.** The plan provides GLM models and MCP features such as vision, search and page reading in supported tools and product environments. Its documentation publishes input/cache/output deduction coefficients and a 50% base-point deduction for off-peak model calls. These rules help estimate value from actual tool usage. The Anthropic-compatible endpoint uses GLM model identifiers; protocol compatibility does not provide Claude model credit.

**Five-hour and weekly caps apply together**, and models and MCP tools share plan quotas. Exhausting a plan does not automatically consume other resource packages or the account balance. Supported tools and plan endpoints are required; custom applications, websites, bots and SaaS integrations use the standard API under its own billing terms. Concurrency adjusts by tier and available resources; suggested project counts are not fixed concurrency commitments.

The plan is personal to its subscriber and prohibits account sharing, resale and relaying. Buying periodic usage rights differs from supplying idle member sessions. Subscriptions renew automatically and are non-refundable; the reviewed guidance requires cancellation at least three days before the next charge. Check tool eligibility, endpoints, usage in each quota window and renewal conditions.

Sources: [plan and deduction rules](https://docs.bigmodel.cn/cn/coding-plan/overview), [FAQ and endpoints](https://docs.bigmodel.cn/cn/coding-plan/faq), [account, concurrency and refund rules](https://docs.bigmodel.cn/cn/coding-plan/usage-notes), [Anthropic protocol compatibility](https://docs.bigmodel.cn/cn/guide/develop/claude/introduction). This is a documentation review, not a subscription, calling or refund test.

## How to compare services

- Record the full model name, version, provider or node, date, protocol, input/output/cache prices, and currency.
- Separate provider documentation, operator statistics, and independently reproduced tests.
- Check tool support, context limits, concurrency, data handling, refund and invoice rules.
- Treat a promotion as useful only after its eligibility, expiry, stacking, and actual use are verified.
- Keep both advantages and constraints. “Lowest price”, “best”, and “exclusive” require a defined comparison scope and evidence.

## Self-hosted software

- [LiteLLM](https://github.com/BerriAI/litellm): gateway, cost tracking, load balancing.
- [New API](https://github.com/QuantumNous/new-api): aggregation, distribution, and protocol conversion.
- [One API](https://github.com/songquanpeng/one-api): key management and redistribution.
- [Sub2API](https://github.com/Wei-Shaw/sub2api): subscription quota distribution and account groups.
- [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI): CLI/OAuth and multi-account proxying.

These projects provide software. Operators still manage upstream credentials, deployment, quotas, and provider rules.

## Contributing

Please submit sources, dates, applicable models/protocols, price units, limits, and any invitation, referral, sponsorship, or paid relationship. See [CONTRIBUTING.md](CONTRIBUTING.md), [MAINTENANCE.md](MAINTENANCE.md), [ROADMAP.md](ROADMAP.md), or open a [correction issue](https://github.com/codefarmer4GDP/awesome-ai-api-cn/issues/new?template=factual-correction.md).

See [distribution and operations](DISTRIBUTION.md) for public submission status and metric snapshots.

Original documentation and comparison tables use [CC BY 4.0](LICENSE). Original JavaScript and CSS in `assets/`, including the cost calculation logic, use [MIT](LICENSE-CODE); retain the applicable notices when reusing them.
