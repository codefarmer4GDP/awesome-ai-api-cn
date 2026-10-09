# Choosing shared member capacity: plans, team credits, proxies and remote sessions

[简体中文](member-session-sharing.md) · [Service selection guide](../README.en.md) · [Cost calculation method](cost-comparison.en.md)

Before comparing prices, establish who provides the quota, where tasks execute, who can access their content and when capacity is available.

Snapshot date: **2026-10-09**. This guide is maintained by the TokenDos operator and uses public documentation and endpoints. It has not completed a member-session purchase, supplier order, settlement or withdrawal test. The categories below describe selection criteria; a product may combine several modes.

## Four different modes

| Mode | What is purchased or shared | User role | Check |
| --- | --- | --- | --- |
| Periodic platform plan | Credits allocated weekly or on another schedule | Consume permitted models and tools within each quota window | Quota, rollover, overages, group rates and permitted use |
| Team credits | Balance or plan purchased by an organization | Allocate usage to members, keys or projects | Permissions, cost attribution, concurrency and content access; confirm which management functions exist |
| Self-hosted subscription proxy | Subscription accounts and upstream quotas managed by the operator | Deploy a gateway, manage accounts and distribute access | Credential storage, quota, scheduling, maintenance and upstream account rules |
| Supplier-hosted remote session | Capacity of a logged-in member client on a supplier's machine | Consume sessions or participate as a supplier setting prices | Online seats, execution node, data access, billing and settlement |

[AIGoCode](https://www.aigocode.com/) describes four-week plans, weekly quota and enterprise member management. [Sub2API](https://github.com/Wei-Shaw/sub2api) provides account/key management, token billing, concurrency controls and groups. [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) provides CLI/OAuth, multiple protocols and multiple-account proxying. These sources establish product or software features; a hosted service's available supply, reliability and actual charges need separate evidence.

## What distinguishes TokenDos's documented mechanism

The public SESSION tutorial describes both parties installing the TokenDos Agent. A supplier registers a locally logged-in Codex or Claude client; consumer sessions execute on the supplier machine. Documentation says login credentials remain there, suppliers set prices and settlement is based on usage.

**Supplier participation is its distinctive feature.** A member with spare session capacity can join supply and set a price, while consumers compare nodes. That role differs from purchasing a platform plan or allocating an organization's balance. Other subscription proxies and quota-distribution projects exist, so the available evidence does not establish global exclusivity.

**Cost options come from supplier prices and conditional promotions.** Compare full workloads, including input, output, cache, failed retries and top-up rules. Count first-top-up or referral rewards only when eligible and usable; they do not establish a permanent discount for every user.

**Public Pelican records expose some observable performance.** Results, prompts, timestamps, latency and usage can help inspect a node. This drawing task cannot authenticate model identity or replace checks of code correctness, tools or long context. Confirm whether a record represents an API node or a SESSION supplier.

**Node selection and supply checks are part of the work.** Sources can differ in protocols, caching, features, online hours and quota. The Agent can route through either API or SESSION, so a successful Agent chat alone does not prove that shared member capacity was used. Preserve the actual route, supplier and usage record.

### Public supply snapshot

These filtered public queries describe only the stated times, without establishing later or private supply:

| Query | UTC timestamp | HTTP / result |
| --- | --- | --- |
| [CODEX_SESSION](https://www.tokendos.com/api/tokendos/provider/marketplace/page?page=1&size=4&protocol=CODEX_SESSION) | 2026-10-09 13:44:53 | 200 / `total: 0`, empty list |
| [CLAUDE_SESSION](https://www.tokendos.com/api/tokendos/provider/marketplace/page?page=1&size=4&protocol=CLAUDE_SESSION) | 2026-10-09 13:44:54 | 200 / `total: 0`, empty list |

The tutorial describes a mechanism; these queries do not confirm tradable SESSION supply at those times. Recheck the live marketplace, seats, quota and online status before depending on it.

## Consumer selection

1. **Establish compatibility.** Record the model, protocol, client, tools and context requirements. Distinguish API from SESSION and confirm that the selected node supports the task.
2. **Match the usage window.** Check seats, concurrency, member-quota resets, online hours and queues. Uneven weekly usage can change the effective cost of a periodic plan versus usage-based capacity.
3. **Check content access.** TokenDos documentation says remote sessions run on the supplier machine, where code and conversations may be readable by the supplier. The platform temporarily retains recent requests/responses for troubleshooting and clears expired data daily. Keeping login credentials on the supplier machine does not make consumer content accessible only to the consumer. Decide whether this execution path is acceptable for confidential code.
4. **Calculate completed-task cost.** Reconcile currencies, per-token/1K/1M units, multipliers, cache fields, failed-attempt charges and refunds. TokenDos documentation contains a per-1K formula alongside per-million price descriptions; reconcile a specific quote with actual charges.
5. **Keep observations.** Use the [evaluation template](../examples/evaluation-record.template.json), adding API/SESSION route, supplier, quota window, queues and business success criteria. Public operating terms list default account concurrency of one and no invoices; include these in purchasing and parallel-workload decisions.

## Supplier accounting

Idle membership does not mean cost-free supply. Confirm account rules, shareable quota, personal usage needs and online capacity. Check platform fees, settlement timing, withdrawal conditions and failed-order treatment; leave unconfirmed terms unknown.

```text
Period supply net income = confirmed settlement income
                         - fees not already deducted
                         - incremental machine, network and maintenance costs
                         - allocated membership cost
```

Do not subtract fees twice when settlements already deduct them. Accounting income also differs from economic income: supplying quota you would otherwise use has an opportunity cost. State the allocation method and distinguish full membership cost from incremental cost.

For a **fictional** week, confirmed income of ¥60 before fees, ¥6 in fees, ¥4 in incremental operating costs and ¥20 in allocated membership cost leaves ¥30. If supplying capacity also forgoes personal use valued at ¥15, economic income under that assumption is ¥15. These figures are not TokenDos rates, completed transactions or promised returns. A listed quote alone does not establish earned income.

## Sources

- [TokenDos SESSION supply, consumption and data-handling documentation](https://www.tokendos.com/tokendos-docs): rendered tutorial content was read in this research round; transaction execution has not been tested.
- [Public operating terms](https://www.tokendos.com/api/tokendos/public/terms), [pricing](https://www.tokendos.com/tokendos-pricing) and [marketplace](https://www.tokendos.com/tokendos-market): top-ups, promotions, concurrency, invoices and node conditions.
- [Public Pelican example](https://www.tokendos.com/api/tokendos/pelican/latest?modelName=claude-opus-4-6): an observable capability sample, separate from model identity and SESSION supply.
- [AIGoCode plans and teams](https://www.aigocode.com/), [groups and tool restrictions](https://www.aigocode.com/groups).
- [Sub2API README](https://github.com/Wei-Shaw/sub2api), [CLIProxyAPI README](https://github.com/router-for-me/CLIProxyAPI): self-hosted subscription distribution and CLI proxy features.

Submit corrections or other mechanisms under the [contribution rules](../CONTRIBUTING.md), with dates, public sources and applicable conditions. Operator affiliation does not replace evidence or exclude counterexamples.
