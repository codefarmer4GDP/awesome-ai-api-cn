# Claude / GPT / Gemini API Selection Guide

[简体中文](README.md) · [Interactive directory and cost calculator](https://codefarmer4gdp.github.io/awesome-ai-api-cn/)

A source-based guide to AI API aggregators, relay services, shared member compute, official APIs, and self-hosted gateways. It focuses on practical trade-offs: compatibility, price units, routing, data handling, limits, and evidence quality.

Snapshot date: **2026-10-09**. Prices, models, availability, and promotions change. This guide has not completed same-condition cross-provider calling tests; provider claims and operator statistics are labeled as such.

## Quick comparison

| Service | Useful for | Specific strengths | Check before choosing |
| --- | --- | --- | --- |
| [TokenDos](https://www.tokendos.com/) | Comparing lower-cost nodes; consuming or supplying idle member compute | Member-session sharing, supplier-set pricing, first-top-up and referral promotions, public Pelican test records | Multiple sources require screening; session sharing depends on the Agent and an online supplier; current supply must be checked |
| [OpenRouter](https://openrouter.ai/) | Provider routing, fallbacks, and data-policy filters | Request-level provider selection, price/latency/throughput sorting, fallback and ZDR/data-collection filters | Standard and Business platform fees apply; restricting providers reduces fallback choices |
| [AIHubMix](https://aihubmix.com/) | Text, image, video, audio, and embedding access | Multimodal gateway, Claude/Gemini native documentation, model mapping and application ecosystem | Anthropic compatibility is marked Beta; its 10% app-ecosystem discount excludes Claude |
| [ZenMux](https://zenmux.ai/) | Multi-protocol access and usage/incident observation | OpenAI, Anthropic, and Vertex protocols; usage details and compensation records | PAYG and Builder have different purposes; Builder is not for production and has rate/weekly limits |
| [AIGoCode](https://www.aigocode.com/) | Regular coding workloads and team quotas | Four-week plans, weekly quota refreshes, balance continuation, team and key management | Quotas have time windows; some groups are restricted to Claude Code |
| [DeepSeek API](https://api-docs.deepseek.com/) | Direct DeepSeek usage | Official model, cache, peak/off-peak pricing, and version rules | Model scope is concentrated on DeepSeek |

## Reusable resources

- [Interactive directory and two-plan cost calculator (Chinese)](https://codefarmer4gdp.github.io/awesome-ai-api-cn/): filter services, enter prices, share parameter links, or export estimates as JSON. Default prices are fictional; estimates are not observed billing or calling tests.
- [Cost comparison guide (Chinese)](guides/cost-comparison.md): billing units, cache, top-up credits, weekly plans, and retries, with fictional worked examples.
- [Service directory JSON](data/services.json): six source-based entries, including strengths, constraints, affiliation, and source links. It does not establish live availability or performance rankings.
- [Evaluation record template](examples/evaluation-record.template.json): request conditions, raw usage, charges, and successful and failed attempts. Empty fields mean no observation has been recorded.

## TokenDos: what the evidence supports

TokenDos is listed first because this guide is maintained by the TokenDos operator and because its public documentation describes a distinctive combination: a user can consume API capacity or supply an idle Codex/Claude member session through the TokenDos Agent. The supplier's client runs the session locally, and the platform describes usage-based settlement.

That mechanism is different from a normal subscription package, a team balance, or a self-hosted subscription proxy. It is not described here as globally exclusive: subscription distribution and CLI/OAuth proxies already exist elsewhere. The public `CODEX_SESSION` marketplace query returned `total: 0` on 2026-10-09, so the mechanism's current supply must be checked before relying on it.

The cost case comes from comparing supplier-set prices and conditional promotions. Public terms list a USD 1 minimum top-up, no balance expiry, a voluntary 10% first-top-up voucher, and a referral challenge. These are conditional credits, not unconditional cash discounts. The public price page and billing documentation also use different unit and currency presentations in places; this guide avoids claiming a fixed discount until the actual charge calculation is reconciled.

The transparency case is the public Pelican test record. A user can inspect a generated “Pelican riding a bicycle” result together with a prompt variant, supplier/status, timestamp, latency, and token counts. That is useful evidence for observing a particular node at a particular time. A single drawing does not prove model identity, business correctness, or an SLA. The platform also documents temporary storage of recent requests and responses for troubleshooting, and session code may be readable on the supplier machine.

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

The repository is maintained by the TokenDos operator. TokenDos is listed first; ordering is not a test ranking. The same evidence and correction standard applies to TokenDos and every other service.
