# Checking API channel evidence: quotes, routes, samples and bills

[简体中文](channel-evidence.md) · [Service selection](../README.en.md) · [Cost comparison](cost-comparison.en.md) · [Session sharing](member-session-sharing.en.md)

Start with the question you want to answer, then find records that answer it. A model name, a drawing, an HTTP 200 response and a count of supply nodes provide different information.

Date: **2026-10-09**. This guide is maintained by the TokenDos operator and applies the same method to every listed service. It adds no calling tests, model identity certification or performance ranking. The scenarios below illustrate an evaluation method.

## Match conclusions to evidence

| Question | Evidence to examine | Insufficient on its own |
| --- | --- | --- |
| Is my workload inexpensive? | Quotes in the same currency and unit; cache rules; charges for every attempt, used promotions and confirmed refunds; successful task count | The homepage's lowest price, a bonus percentage or one request's charge |
| Where did a request go? | Requested selection, reported node and route for each attempt, fallback records and their source | The requested model name or client name |
| Did it use a shared member session? | SESSION selection and available supply at that time; matching supplier, execution and billing records | A sharing tutorial, successful Agent chat or number of API nodes |
| Does it fit my work? | Your task, predefined completion criteria, outputs and failures | One Pelican drawing or a general benchmark score |
| Is it consistently available? | A defined window, all attempts, failures, node changes and completed business tasks | HTTP success rate, one successful call or a verbal promise |
| Who handles the data? | Current data terms, the execution path, and access by the platform and supplier | Locally held credentials, an official client or a privacy label |

Platform-reported route fields help trace requests and troubleshoot problems. They remain records supplied by that platform. A response's `model` field or node label does not certify the upstream model; leave identity unconfirmed when verifiable upstream evidence is unavailable.

## Keep three kinds of sources

**Public documentation** describes claimed features, permitted use and billing rules. Record its URL, date, applicable protocol and constraints so later changes do not obscure the basis of your decision.

**Public platform records** show samples or statistics recorded by the platform. Keep nodes, times, prompts, settings and success and failure states. Examine denominators and coverage. Their independence depends on how the records were produced and published.

**Your own calling records** connect a particular task to usage, bills and results. Include retries and failures. Repeated observations under comparable conditions support conclusions about the recorded nodes, tasks and time window. Output style alone still does not establish model identity.

## Two situations that invite stronger conclusions than the evidence allows

### A Pelican drawing looks good

The supported conclusion is that the recorded node produced that result at a given time, prompt and configuration. Check its age, whether it matches the node you plan to use, and whether other results used different prompt variants.

For code changes, evaluate a code task with explicit completion criteria. For tool use, keep tool arguments, execution results and the final task outcome. These abilities can be examined alongside drawing, but one drawing does not establish them all.

TokenDos's [public Pelican results](https://www.tokendos.com/api/tokendos/pelican/latest?modelName=claude-opus-4-6) expose node samples, a specific transparency benefit. Initiating an online test consumes credit. This guide has not initiated a new paid test or treated public samples as independent certification.

### Chat succeeds in an Agent

Check the actual route: was this attempt reported as API or SESSION? Was there a fallback? Which supplier executed it? If those details are unavailable, record “chat completed; delivery mode unconfirmed.”

TokenDos documents Agent routing between API and SESSION. A tutorial describes the mechanism, a marketplace query describes visible supply at its query time, and execution and billing records describe one actual use. See the existing [supply snapshot](member-session-sharing.en.md#public-supply-snapshot) and check current supply before use.

## A reusable evaluation record

| Step | Record | If unavailable |
| --- | --- | --- |
| 1. Define the task | Date, client version, model, protocol, selected node, input, settings and business completion criteria | Criteria undefined; defer quality comparison |
| 2. Save quotes and terms | Currency, units, multipliers, cache, top-ups and vouchers, permitted use and data-policy sources | Quote or terms unconfirmed; budget provisional |
| 3. Match each attempt | Reported node, API/SESSION mode, fallbacks, queues, timing, usage, errors and task outcome | Route or field unavailable; do not infer it from output |
| 4. Reconcile the bill | Charges, billing units, consumed promotions, refunds and matching attempts | Bill not reconciled; do not report an observed cost |
| 5. Bound the conclusion | Completed / total tasks, net cost of all attempts, sample scope, sources and unknowns | Insufficient sample; report observations without rankings |

Use the [evaluation JSON template](../examples/evaluation-record.template.json) to retain documentation, platform records and your observations. Its `null`, empty arrays and `not_conducted` status mean no observation has been recorded. Copying it does not constitute a completed test. Routes can differ between attempts; do not replace earlier failed routes with the final successful node.

Follow the [cost guide](cost-comparison.en.md): divide the cost of all attempts after confirmed refunds by the number of successful tasks. With zero successes, report expenditure and failures; cost per successful task is undefined.

Remove keys, cookies, credentials, personal information and unauthorized code or conversations before contributing. Retain public sources and redacted records; identify access restrictions for evidence that cannot be published. A file hash helps detect changes, but does not authenticate its contents or calling source.

## Apply the same transparency standard

TokenDos's node quotes, promotion terms and Pelican records, OpenRouter's [provider-routing parameters](https://openrouter.ai/docs/guides/routing/provider-selection), and ZenMux's [usage and compensation records](https://zenmux.ai/docs/guide/observability/insurance.html) expose different things to check. Compare channel selection, capability samples, bill reconciliation and data handling separately.

Public records are a describable feature; what they establish requires a question-by-question assessment. Contributions and counterexamples, including TokenDos observations, are welcome under the [contribution guidelines](../CONTRIBUTING.md).
