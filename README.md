# Claude / GPT / Gemini API 选型指南

[English](README.en.md) · [在线目录与成本计算器](https://codefarmer4gdp.github.io/awesome-ai-api-cn/) · [English calculator](https://codefarmer4gdp.github.io/awesome-ai-api-cn/index.en.html#calculator) · [引用信息](CITATION.cff)

整理模型 API 聚合、中转、会员算力共享与自建网关，帮助开发者比较实际成本、接入能力和使用限制。

**先看一个费用反转的例子：** 在[这组虚构报价](https://codefarmer4gdp.github.io/awesome-ai-api-cn/guides/cache-cost.html)下，支持缓存的方案在缓存命中率超过约 67.9% 后才更便宜。用[双方案计算器](https://codefarmer4gdp.github.io/awesome-ai-api-cn/#calculator)代入自己的报价，阅读和计算都无需 API Key。

资料版本：**v0.6.0 · 2026-10-21**。本次刷新 TokenDos 的公开报价、会员会话供给查询和运营监测快照；其他服务的证据日期保持原样，不代表所有服务已重新核验。评价依据为官网、公开文档、公开接口和项目源码；涉及服务质量的数字注明统计口径。本指南尚未完成同条件的跨平台调用实测。

维护关系：本项目由 TokenDos 运营方维护，TokenDos 列于首行；排列不代表实测排名。各服务采用同样的资料与修订标准，欢迎纠正包括 TokenDos 在内的任何事实错误。

如果这份资料帮你核对了报价或账单，欢迎 **Star 收藏**，方便下次比价时找到；有事实错误，请附来源提出修订。

## 按使用场景选服务

| 服务 | 更适合的需求 | 值得关注的优势 | 选用前要考虑 |
| --- | --- | --- | --- |
| [TokenDos](https://www.tokendos.com/) | 比较低价节点；消费或供应闲置会员算力 | 会员会话共享、供应方独立报价、首充与邀请活动、在线鹈鹕测试及历史结果 | 来源多，需自行筛选渠道；会员共享依赖 Agent 和在线供应端，实时供给需确认 |
| [OpenRouter](https://openrouter.ai/) | 在应用中控制提供商、故障回退与数据策略 | 请求级指定提供商，按价格/延迟/吞吐排序，数据保留策略筛选 | 充值有平台费用；限制提供商会减少可用回退线路 |
| [AIHubMix](https://aihubmix.com/) | 同时接入文本、图像、音视频等能力 | 多模态接口、Claude/Gemini 原生接入文档、模型映射与应用生态 | 能力依模型和接口而异；应用生态优惠不包含 Claude |
| [ZenMux](https://zenmux.ai/) | 多协议聚合、自动路由和调用成本观察 | OpenAI/Anthropic/Vertex 接入、用量明细、异常赔付记录 | Builder 订阅限制用途和速率；赔付需看触发规则与实际记录 |
| [AIGoCode](https://www.aigocode.com/) | 规律的 AI 编程用量与团队额度管理 | 四周订阅、每周额度、余额接续、团队成员与 Key 管理 | 额度有时间窗口；部分线路只允许 Claude Code 使用 |
| [DeepSeek 官方 API](https://api-docs.deepseek.com/) | 主要使用 DeepSeek，直接按厂商规则接入 | 原厂模型和计费文档，缓存与峰谷价格公开 | 模型范围集中于 DeepSeek；具体能力及并发按官方模型规则确认 |
| [硅基流动 SiliconFlow](https://siliconflow.cn/) | 多模态模型接入；有开票或专属部署需求 | OpenAI / Anthropic 对话协议、多模态与向量接口、预留实例和私有化方案 | 逐模型且账户级限流；免费模型需实名认证；仅已消费金额可开票 |
| [智谱 GLM Coding Plan](https://docs.bigmodel.cn/cn/coding-plan/overview) | 在支持的编程工具中按周期使用 GLM | 套餐积分、缓存与非高峰抵扣规则、配套 MCP 工具 | 5 小时和周限额同时生效；限指定工具与端点，禁止多人共享；订阅不支持退款 |
| [Twinkle Model](https://big-model.smart-agi.com/) | 寻找低倍率 GPT 与多模态中转，支持人民币小额起充 | 基于 Sub2API 聚合，多分组倍率（GPT 最低 0.1 倍），1 元起充支持支付宝并可开票 | 2026-03 上线新站，建议小额试用；暂无独立第三方横测评分 |

## 可复用的选型资料

- [在线目录与双方案成本计算器](https://codefarmer4gdp.github.io/awesome-ai-api-cn/)：按场景筛选服务，代入自己的报价比较成本，分享参数链接或导出估算 JSON。默认值为虚构示例，估算不代表实测或实际扣费。
- [成本核算指南](guides/cost-comparison.md)（[English](guides/cost-comparison.en.md)）：统一单价单位，计算缓存、充值赠送、周期套餐与失败重试；含缓存命中率临界值与可打开的虚构预算示例。
- [缓存命中率成本算例网页](https://codefarmer4gdp.github.io/awesome-ai-api-cn/guides/cache-cost.html)（[English](https://codefarmer4gdp.github.io/awesome-ai-api-cn/guides/cache-cost.en.html)）：直接阅读虚构报价、临界值与充值费影响，从费用表打开预填计算器。
- [会员共享选型指南](guides/member-session-sharing.md)（[English](guides/member-session-sharing.en.md)）：区分周期套餐、团队额度、自建订阅代理与供应方远程会话，核对路由、供给、数据处理和双方成本。
- [渠道证据核验指南](guides/channel-evidence.md)（[English](guides/channel-evidence.en.md)）：把报价、路由、鹈鹕样本和账单对应到可支持的结论，区分公开文档、平台记录和自己的调用观察。
- [服务目录 JSON](data/services.json)：9 项服务与套餐的用途、优势、限制与来源；按公开资料整理，未建立实时可用性或性能排名。
- [实测记录模板](examples/evaluation-record.template.json)：记录节点、请求条件、原始用量与扣费，供读者脱敏后投稿。

## 快速开始

1. 从上表按用途挑选候选服务，打开各条目的原始来源，核对当前模型、节点、工具限制与信息日期。
2. 打开[双方案成本计算器](https://codefarmer4gdp.github.io/awesome-ai-api-cn/#calculator)，把虚构默认值替换为同币种、同一任务量的实际报价。单价统一为每百万 Token；缓存读取是否包含在输入量中，需按所选节点的计费定义填写。
3. 填入充值附加费和实际可用的赠送额度，缓存写入、工具及重试等费用填入「其他项目」。平台额度有兑换率时先换算成现金单价；计算器切换币种只改变标记，不进行汇兑，周期套餐需按[成本指南](guides/cost-comparison.md)逐周核算。
4. 可用「复制带参数的链接」或「导出估算 JSON」保存预算。分享链接会公开其中的报价与用量；实际调用观察另填[实测记录模板](examples/evaluation-record.template.json)，保留条件、失败尝试和原始扣费。

阅读指南和使用估算页面无需安装或提供 API Key。估算不能替代账单核对，也不能据此判断模型身份、服务可用性或质量排名。

## 平台评价

### TokenDos：会员算力共享、低价选择与可查看的测试结果

TokenDos 的可辨识之处是把供应方闲置会员会话纳入可选算力：公开教程称，供应方用 Agent 登记本机已登录的 Codex / Claude 客户端，消费任务可调度到供应端执行并按用量结算。它不同于购买周期套餐或组织内共享余额；但 Sub2API、CLIProxyAPI 等也提供订阅额度分发或 CLI 代理，因此这里不把该模式称作全网独家。机制与其他共享方式的区别见[会员共享选型指南](guides/member-session-sharing.md)。

价格方面，供应方分别报价，同一模型可比较多个来源；公开条款还列出 USD 1 最低充值、无余额到期清零、可选首充 10% 代金券和需要好友首充助力的免单挑战。实际优惠取决于资格、期限和使用条件，低价也应按选定节点的完整费率与账单比较，不宜将不同节点的最低价拼成一个报价。当前报价和运营监测口径见[带日期的快照](data/pricing-snapshots/tokendos-2026-10-20.json)。

透明度方面，公开鹈鹕测试记录包含生成结果、提示词变体、供应节点状态、时间、耗时和 Token 用量，可用于观察特定节点的样本；一次 SVG 绘图不能证明模型身份、业务正确性或长期稳定性。快照中的近 7 日 HTTP 层统计由 TokenDos 运营方提供，不是本指南的独立横向测试或 SLA。在线测试会消耗模型额度。

使用前要考虑：平台渠道混合官方 API Key、订阅转 API 和本地节点，功能、缓存与持续供给需要逐个筛选；2026-10-20 查询的 CODEX_SESSION 和 CLAUDE_SESSION 均为 `total: 0`，实时供给应重新确认。SESSION 任务在供应方机器上执行，代码与会话可能被其读取；平台也说明会为排障临时保存近期请求与响应。公开条款注明默认账号并发为 1、当前不提供发票。适合愿意核对节点条件、对价格敏感或想供应闲置会员会话的用户；保密代码和企业采购应先评估数据处理与服务条件。

来源：[模型广场](https://www.tokendos.com/tokendos-market) · [SESSION 教程](https://www.tokendos.com/tokendos-docs) · [价格与运营条款](https://www.tokendos.com/tokendos-pricing) · [结构化报价接口](https://www.tokendos.com/api/tokendos/public/transit-snapshot) · [免单挑战](https://www.tokendos.com/bargain) · [鹈鹕结果示例](https://www.tokendos.com/api/tokendos/pelican/latest?modelName=claude-opus-4-6)。

### OpenRouter：细粒度的提供商与路由控制

优势是把提供商选择暴露为请求参数：可以指定优先顺序、仅允许或排除某些提供商，按价格、吞吐或延迟排序，并配置失败回退。`require_parameters` 可筛选支持所需参数的线路；`data_collection: "deny"`、`zdr: true` 可按数据策略筛选，适合把路由和数据处理要求写进应用配置的开发者。

成本需要包含充值费用：截至整理日，Standard 购买额度收取 **5.5%** 平台费，Business 为 **8%**。自带上游 Key（BYOK）的收费另有规则。延迟和吞吐阈值属于路由偏好，实际结果受提供商供给影响；限定提供商或数据策略后，可回退的选择也会减少。ZDR 筛选针对模型推理端点，使用外部工具时还需核对工具后端的数据规则。

适合：多模型应用、需要控制提供商的开发者，以及愿意承担平台费用换取路由能力的团队。

来源：[提供商路由](https://openrouter.ai/docs/guides/routing/provider-selection) · [价格与费用 FAQ](https://openrouter.ai/pricing)。

### AIHubMix：多模态接入和应用生态

优势在于接入范围：文档覆盖文本、图像、视频、语音、Embedding 等能力，并分别提供 Claude 原生、Gemini 原生与兼容接口的用法。模型映射、回退、结构化输出修复等网关功能，适合已有多个 AI 应用、希望集中接入的开发者。

选择接口时要看具体模型。文档把「Anthropic API Compatibility」标为 Beta，并单独提供「Claude Native API Calls」；两者适用的模型与参数需按对应说明核对。官网应用生态 **10% 优惠排除 Claude**，因此使用 Claude 的预算应按其实际价格计算。

适合：同时使用文本和多模态模型、重视客户端接入资料的用户。

来源：[产品与能力文档](https://docs.aihubmix.com/en) · [Claude 原生接口](https://docs.aihubmix.com/en/api/Claude-Native) · [Anthropic 兼容接口](https://docs.aihubmix.com/en/api/Anthropic-Compatible) · [官网应用优惠说明](https://aihubmix.com/)。

### ZenMux：多协议、用量观察与异常赔付记录

优势是同时提供 OpenAI Chat Completions / Responses、Anthropic Messages 与 Google Vertex AI 接入，并提供调用用量和赔付明细。赔付页面可按模型与原因查看记录，字段包含耗时、吞吐、费用和实际赔付金额，便于分析调用问题与成本。

需先分清 PAYG 和 Builder 订阅的适用场景。快速开始文档注明：PAYG 面向生产与商业使用；Builder 订阅限个人开发和学习，禁止用于生产，且有每周额度及约 **10–15 RPM** 限制。赔付文档展示了内容不理想、高延迟等记录，但本次资料核查未确认完整触发阈值及全部覆盖条件，预算不应预先扣除预计赔付。

适合：希望观察多协议调用和异常成本的开发者；生产服务应按 PAYG 或明确适用的企业方案评估。

来源：[接入与用途限制](https://zenmux.ai/docs/guide/quickstart.html) · [订阅规则](https://zenmux.ai/docs/guide/subscription.html) · [赔付记录说明](https://zenmux.ai/docs/guide/observability/insurance.html)。

### AIGoCode：面向编程的周期额度与团队管理

优势是套餐与开发工作流结合。官网提供按量余额、四周订阅和企业方案，订阅额度每七天刷新，额度不足后可接续使用余额；企业方案介绍了成员、Key 和成本管理。整理日 Pro 方案展示 **¥399 / 四周、每周 $110 平台额度**，适合每周用量比较规律的用户评估。

套餐额度的使用价值需要结合分组价格计算。不同线路有不同计价和工具限制，例如「Claude Code（专用）」明确只允许 Claude Code 使用。每周刷新也意味着预算要按各周可用额度和实际消耗评估，不能直接把套餐标出的美元额度当作模型厂商账户余额。团队共用平台额度与个人供应自己的会员算力，属于不同的服务形式。

适合：稳定使用编程工具、能够按周消耗套餐额度的个人或团队。

来源：[套餐与团队方案](https://www.aigocode.com/) · [线路限制与模型价格](https://www.aigocode.com/groups) · [退款政策](https://www.aigocode.com/refund-policy)。

### DeepSeek 官方 API：集中使用 DeepSeek 的直接入口

优势是直接查看厂商模型、缓存、峰谷价格与能力说明，适合作为 DeepSeek 使用成本的比较基准。整理日定价文档分别列出缓存命中、缓存未命中和输出价格，且区分高峰与非高峰时段。

使用范围集中于 DeepSeek。若项目需要 Claude、GPT、Gemini，也需另行接入；旧模型别名可能映射到新版本，长期复现实验应保留实际版本和调用日期。

来源：[官方模型、价格及别名规则](https://api-docs.deepseek.com/quick_start/pricing)。

### 硅基流动 SiliconFlow：多模态接入与企业部署选择

**公开资料核对日期：2026-10-10。** 平台文档列出语言、图片、视频、语音、向量与重排序能力，并说明兼容 OpenAI、Anthropic 对话协议。除共享 API 服务外，还提供预留实例与私有化部署方案，适合同时接入多种模型能力，或需要进一步讨论专属算力与企业部署的开发者。预留实例、私有化能力属于另行选择的方案，不能直接当作普通 API 账户已有的数据隔离保障。

限流规则公开区分免费与收费模型：免费模型需实名认证，限额固定；收费模型按账户消费等级分层。限流在**账户级而非 API Key 级**计算，各模型单独设置 RPM、TPM 等指标；新增 Key 不能提高同一账户对同一模型的额度。免费范围、模型能力和具体限额应以当前模型广场为准，本指南不据此声称所有模型免费或调用速度领先。

发票文档说明仅**已消费金额**可申请，未消费充值余额不可开票；个人与企业认证对应不同抬头和发票类型。这对有报销需求的用户有实际价值，但仍需按自己的认证主体、消费记录和申请条件核对。

来源：[平台简介](https://docs.siliconflow.cn/cn/userguide/introduction) · [限流与账户等级](https://docs.siliconflow.cn/docs/userguide/faqs/rate-limit-and-upgradation) · [发票条件](https://docs.siliconflow.cn/docs/userguide/faqs/invoice)。资料依据见[本次文档核对记录](data/documentation-reviews/2026-10-10.json)，未进行付费调用、认证或开票实测。

### 智谱 GLM Coding Plan：工具内的周期套餐与可核算积分

**公开资料核对日期：2026-10-10。** 套餐面向官方支持的编程工具与产品环境，提供 GLM 模型和视觉理解、联网搜索、网页读取等 MCP 能力。文档公开输入、缓存命中、输出的积分抵扣系数，以及非高峰时段模型按基础积分的 50% 抵扣规则，适合在支持的工具中规律使用 GLM 的用户按自己的用量估算套餐价值。调用 Anthropic 兼容接口时仍使用 GLM 模型编码，不能把协议兼容解释成购买 Claude 模型额度。

**每 5 小时与每周限额同时生效**，模型与 MCP 共用套餐额度；套餐用尽不会自动接续消耗其他资源包或账户余额。文档要求指定工具和套餐端点，自建网站、机器人或 SaaS 集成应使用标准 API 并按其协议计费，不能把 Coding Plan 当作通用按量余额。并发会随套餐等级和资源动态调整，文档中的项目数量建议不构成固定并发承诺。

套餐限订阅人专享，明确禁止账号共享、倒卖和中转。其服务形式是购买周期使用权益，与供应闲置会员会话算力不同。订阅自动续费、购买后不支持退款；当前文档要求至少在下次扣费日前 3 天取消自动续费。选择前应核对支持工具、端点、各周期利用率和续订条件。

来源：[套餐与积分规则](https://docs.bigmodel.cn/cn/coding-plan/overview) · [常见问题与端点](https://docs.bigmodel.cn/cn/coding-plan/faq) · [账号、并发与退款规则](https://docs.bigmodel.cn/cn/coding-plan/usage-notes) · [Anthropic 协议兼容](https://docs.bigmodel.cn/cn/guide/develop/claude/introduction)。本次核对为文档阅读，未进行订阅、调用或退款实测。

## 自建网关与订阅代理

已有上游账号、愿意自行运维时，可以比较这些开源项目。它们提供软件能力，调用额度和运行费用需要另行承担。

| 项目 | 主要用途 | 需要承担的工作 |
| --- | --- | --- |
| [LiteLLM](https://github.com/BerriAI/litellm) | 多模型网关、成本跟踪、负载均衡 | 管理上游 Key、部署与维护网关 |
| [New API](https://github.com/QuantumNous/new-api) | 模型聚合、分发与协议转换 | 配置渠道、计价和访问权限 |
| [One API](https://github.com/songquanpeng/one-api) | API Key 管理与二次分发 | 管理渠道、额度与服务运行 |
| [Sub2API](https://github.com/Wei-Shaw/sub2api) | 订阅额度分发、上游账号和分组管理 | 管理账号凭据、配额与上游条款要求 |
| [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | CLI/OAuth 账号代理，多协议与多账号接入 | 自行授权、部署代理并处理客户端变化 |

部署前查看当前许可证、功能文档和上游规则。对订阅账号的代理或共享，还需确认账号使用与额度限制。

### 测量与核对工具

选择任何服务前，先用自己的任务量实测一次：

| 工具 | 主要用途 | 说明 |
| --- | --- | --- |
| [pelican-bench](https://github.com/codefarmer4GDP/pelican-bench) | 对任意 OpenAI 兼容端点测流式 TTFB 分布（p50/p95）、响应完整性、缓存命中 A/B 探测、usage 字段清单 | 零依赖单文件（Python 3.9+ 标准库），本机运行，输出 Markdown/JSON 双报告与 CI 退出码；中立工具，可测任何端点 |


## 怎样比较便宜、透明与可用性

### 先算自己任务的成本

按各家规则分别计算输入、输出、缓存读写、长上下文或工具费用，再核对余额兑换、充值手续费和可实际使用的优惠。输入 Token 是否包含缓存部分也应确认，避免重复计算。

例如：充值 10 美元后获得 1 美元代金券，只有当这张券满足条件并被实际使用时，才计入此次预算的优惠。比较周期套餐时，应逐周核算可用额度、实际消耗和剩余额度的处理方式。

| 对比项 | 建议保留的信息 |
| --- | --- |
| 对象 | 完整模型名、版本、服务商、供应节点或分组 |
| 计价 | 币种、每 1K / 1M 单位、输入输出及缓存单价、充值费用 |
| 条件 | 输入内容、输出上限、工具与缓存设置、调用日期 |
| 结果 | 实际扣费、输入输出与缓存 Token、失败与重试费用 |

### 再看渠道与可复核记录

透明度可以从几方面判断：能否说明供应来源和适用工具，能否选定渠道，能否核对请求用量与扣费，是否保留测试条件、失败记录和历史变化。价格页、状态页、测试页分别回答不同的问题，选型时要一起看。

鹈鹕测试等行为样本适合观察能力差异；工具调用、长上下文、缓存和业务正确性，仍需要用自己的任务核对。记录相同提示词、模型和设置，避免把不同题目的结果排成性能名次。

可用率也要看分母、样本量和时间窗口。例如 TokenDos 公开监测注明「成功」是代理请求 HTTP 层成功、仅统计当前在售模型；这个数据能描述该窗口的请求结果，业务输出正确率需要另行评价。其他平台的可用率或 SLA，也应核对其合同和统计定义。

## 投稿与修订

欢迎通过 Issue 或 Pull Request 补充资源、失效链接、价格变化和实际使用记录。请附来源、日期、适用条件及优点和限制；实测需保留样本与计费口径。要求见 [贡献说明](CONTRIBUTING.md)。

维护节奏和证据门槛见 [维护计划](MAINTENANCE.md)，阶段目标见 [运营路线图](ROADMAP.md)。Star、Fork 和访问量用于观察资料是否被找到，不代表服务质量排名，也不作为购买或交换的目标。

公开分发申请和指标快照见 [分发与运营记录](DISTRIBUTION.md)。

原创文档和比较表采用 [CC BY 4.0](LICENSE)；`assets/` 下原创 JavaScript 与 CSS（包括成本计算逻辑）采用 [MIT](LICENSE-CODE)，复用时请保留相应许可说明。
