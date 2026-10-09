# 分发与运营记录

这份记录把仓库的公开分发动作和可核对指标放在一起。目标是让更多开发者找到并修订选型资料；Star 是触达信号，不是服务质量证明，也不是可以购买或交换的结果。

## 当前基线

指标快照时间：2026-10-09 15:37 UTC；六项申请的清理结果更新至 15:40 UTC。原始字段、逐项观察时间与公开来源见[机器可读运营快照](data/operations/2026-10-09.json)。

| 指标 | 数值 | 说明 |
| --- | ---: | --- |
| Star | 0 | `stargazers_count` |
| Fork | 0 | `forks_count` |
| 最近 14 天 Views | 0 | GitHub Traffic API；新仓库数据可能延迟 |
| 最近 14 天 Clones | 0 | GitHub Traffic API |
| 最新发布 | v0.3.0 | 在线目录、成本计算器与公开运营记录 |
| 在线页面 | 已构建 | [GitHub Pages](https://codefarmer4gdp.github.io/awesome-ai-api-cn/) |

这些数字只描述查询时的状态，不构成增长预测。Pages API 已确认提交 `831da6b` 构建成功；尚未观察到 Star 增长或外部收录。

本轮修正两项保留申请、关闭四项申请，没有新增投稿或催审评论。搜索与逐项 API 查询覆盖 30 项当前及历史记录，其中 22 项 open、8 项 closed；这包含本仓库 Issue 和历史集成申请，不能当作 22 个待审导航渠道。以下表格列明本轮导航运营相关申请。

## TokenDos 服务收录申请

以下申请均使用无邀请参数的官方仓库或服务链接；开放状态不代表已经收录。

| 目录 | 申请 | 状态（2026-10-09） |
| --- | --- | --- |
| [carrot](https://github.com/xx025/carrot) | [#1027](https://github.com/xx025/carrot/issues/1027) | open；已修正；重复 #1048 已撤回 |
| [relayAPI](https://github.com/zzsting88/relayAPI) | [#74](https://github.com/zzsting88/relayAPI/issues/74) | open |
| [awesome-claude-api](https://github.com/peter123023/awesome-claude-api) | [PR #24](https://github.com/peter123023/awesome-claude-api/pull/24) | open，未合并 |
| [awesome-ai-api-proxy](https://github.com/howardpen9/awesome-ai-api-proxy) | [TokenDos #84](https://github.com/howardpen9/awesome-ai-api-proxy/issues/84) · [PR #110](https://github.com/howardpen9/awesome-ai-api-proxy/pull/110) | open |
| [awesome-ai-tools](https://github.com/mahseema/awesome-ai-tools) | [PR #2353](https://github.com/mahseema/awesome-ai-tools/pull/2353) | open，未合并，0 条评论 |
| [Claws-ZH/awesome-ai-api](https://github.com/Claws-ZH/awesome-ai-api) | [PR #50](https://github.com/Claws-ZH/awesome-ai-api/pull/50) | open，候选待审，未合并，0 条评论 |
| [mn-api/awesome-ai-proxy](https://github.com/mn-api/awesome-ai-proxy) | [#63](https://github.com/mn-api/awesome-ai-proxy/issues/63) | open；已修正；重复 #53 已撤回 |
| [ai-api-gongyi-nav](https://github.com/bubblevv/ai-api-gongyi-nav) | [#16](https://github.com/bubblevv/ai-api-gongyi-nav/issues/16) | open，0 条评论 |
| [relay-radar](https://github.com/AetherCore-Dev/relay-radar) | [#14](https://github.com/AetherCore-Dev/relay-radar/issues/14) | open，0 条评论 |
| [awesome-claude-code-relay](https://github.com/cfrs2005/awesome-claude-code-relay) | [#11](https://github.com/cfrs2005/awesome-claude-code-relay/issues/11) | open，0 条评论 |
| [awesome-ai-tools-zh](https://github.com/shyshyshyyyy/awesome-ai-tools-zh) | [#18](https://github.com/shyshyshyyyy/awesome-ai-tools-zh/issues/18) | open，0 条评论 |
| [ai-api-proxy-list](https://github.com/deverzh/ai-api-proxy-list) | [PR #12](https://github.com/deverzh/ai-api-proxy-list/pull/12) | open，未合并，0 条评论 |
| [ai-coding-welfare](https://github.com/panxunying/ai-coding-welfare) | [#22](https://github.com/panxunying/ai-coding-welfare/issues/22) · [#24](https://github.com/panxunying/ai-coding-welfare/issues/24) | 两项均主动撤回，当前无待审申请 |

新增到状态表的历史申请只核对了状态，不代表本轮已重新核验其正文、模型清单或性能表述。howardpen9 的 Issue 与 PR 均保留在表中，属于同一服务的申请与变更记录，不计为两个独立收录结果。

awesome-ai-tools 的 README 明确邀请免费 PR，模板要求每次仅新增一个工具并放在分类末尾。本次先查重、阅读模板，再在 Developer tools 末尾添加一条 TokenDos，介绍供应方报价、Agent 会员会话共享与公开鹈鹕记录，同时说明可用性与数据处理依赖所选供应方。PR 正文披露运营关系、当前 CODEX_SESSION 查询为空、供应端可读取会话及平台临时留存条件，并链接本指南。GitHub API 核对只有 README 一行新增，正文与本地稿件一致。

该目录当日为 6,377 Star、2,298 Fork；最近可见的已合并 PR 为 2025-08-26 的 [#382](https://github.com/mahseema/awesome-ai-tools/pull/382)。近期仍有新投稿，但不能据此判断审核或合并活跃，本次不预估收录时间。原有八项服务、工具和周刊申请也均仍 open、0 条评论，现有 PR 未合并。

## 指南与成本工具分发

| 目录 | 投稿对象与申请 | 状态（2026-10-09） |
| --- | --- | --- |
| [awesome-generative-ai-apis](https://github.com/foss42/awesome-generative-ai-apis) | 双方案成本估算工具，[#483](https://github.com/foss42/awesome-generative-ai-apis/issues/483) | open，等待维护者确认范围及分配；尚未提交 PR 或收录 |
| [Awesome-LLMOps](https://github.com/tensorchord/Awesome-LLMOps) | 双方案成本估算工具，[PR #925](https://github.com/tensorchord/Awesome-LLMOps/pull/925) | open，未合并，0 条评论；DCO 通过 |
| [awesome-LLM-resources](https://github.com/WangRongsheng/awesome-LLM-resources) | 成本核算指南与中英文计算器，[PR #256](https://github.com/WangRongsheng/awesome-LLM-resources/pull/256) | open，未合并，0 条评论 |
| [awesome-ai-api-proxy](https://github.com/howardpen9/awesome-ai-api-proxy) | 选型指南，[#120](https://github.com/howardpen9/awesome-ai-api-proxy/issues/120)、[#121](https://github.com/howardpen9/awesome-ai-api-proxy/issues/121)、[#122](https://github.com/howardpen9/awesome-ai-api-proxy/issues/122) | 均被自动关闭；当前无待审的指南申请 |

向 awesome-generative-ai-apis 的成本工具申请按其 Issue-first 流程提交，披露 TokenDos 维护关系、中文界面与英文核算说明，并注明默认价格为虚构示例。它比较读者自行填写的方案；本次申请未把它描述成实时价格 API 或跨平台性能实测。

选型指南的三次 API 投稿均因未使用目录要求的 Issue Form 被自动关闭；API 创建未取得表单标签，外部贡献者后续补标签又因权限不足失败。后续不重复发送自由格式 Issue；如需再次投稿，应使用其网页表单并保留关联披露。

仓库已发布一条 [公开运营讨论](https://github.com/codefarmer4GDP/awesome-ai-api-cn/discussions/2)，说明目录的证据标准、投稿方式和维护关系，供读者直接反馈。

2026-10-09 补齐英文版五家其他服务的评价与来源，并发布 [英文成本核算指南](guides/cost-comparison.en.md)。资料公开和投稿完成均不代表已产生外部流量。

同日补齐 [英文在线目录与成本计算器](https://codefarmer4gdp.github.io/awesome-ai-api-cn/index.en.html#calculator)，包括英文服务卡片、筛选、费用表、输入提示和导出说明；中英文页面共用计算逻辑，语言切换保留已填报价和用量。计算器仍使用虚构默认价格，不提供实时价格、供给或性能排名。交互验证按项目约定由用户完成。

英文入口发布后，已更新原有工具申请 [#483](https://github.com/foss42/awesome-generative-ai-apis/issues/483) 的正文与建议收录行，注明中英文界面和共享计算逻辑；未新建重复申请或提交 PR。GitHub API 核对正文与本地更新稿一致；状态仍为 open、未分配、0 条评论。

Awesome-LLMOps 允许逐项提交 PR。阅读贡献规则并查重后，在其 Optimizations 表格按字母顺序新增一条 `AI API Two-Plan Cost Estimator`，介绍同任务量、用户自填报价、充值费用与赠送额度的比较，以及英文/中文界面、参数分享和 JSON 导出。PR 正文披露 TokenDos 关系、虚构默认价格与未进行交互验证；GitHub API 核对只有 README 一行新增，正文与本地稿件一致。申请待审核，不代表已收录。

awesome-LLM-resources 的「技巧 Tips」已收录 LLM Pricing，适合补充任务成本核算方法。投稿前已阅读 README、CODE_OF_CONDUCT.md，并检查贡献规则、模板与既有申请；当前文件树未发现另设贡献文件或模板，也未发现本项目的重复投稿。该目录当日 9,012 Star，最近 push 为 2026-10-07；已确认一条教程投稿 [PR #215](https://github.com/WangRongsheng/awesome-LLM-resources/pull/215) 于 2026-09-02 合并。近期合并记录是筛选依据，不是本申请的收录承诺。

[PR #256](https://github.com/WangRongsheng/awesome-LLM-resources/pull/256) 仅在 Tips 末尾新增第 39 项通用成本指南，说明单位、缓存、充值赠送、周期套餐与重试，并链接中英文计算器。正文披露 TokenDos 运营关系、虚构示例价格、用户自填报价、非实时价格/性能排名及未进行交互测试。GitHub API 核对正文与本地稿件一致，1 个文件、1 行新增、0 行删除；申请已提交，尚未收录。

## 会员共享专题

新增[中文会员共享选型指南](guides/member-session-sharing.md)与[英文版](guides/member-session-sharing.en.md)，中英文 README、网页与 llms.txt 同步入口。专题区分周期套餐、团队额度、自建订阅代理与供应方远程会话，并说明实际路由、在线供给、数据处理、消费成本和供应方成本分摊。

本轮读取了 TokenDos 渲染后的公开 SESSION 教程正文，确认其文档描述的双方 Agent、本机登录客户端、供应端执行、API / SESSION 选路与临时数据留存机制；这解决了此前只能获取 SPA 壳页、不能重新核验教程正文的限制。仍未完成消费、供应接单、结算或提现实测。2026-10-09 13:44:53–54 UTC 的公开 CODEX_SESSION 与 CLAUDE_SESSION 过滤查询均 HTTP 200、`total: 0`、空列表，不能据教程或 Agent 聊天成功确认当时有可交易的共享供给。

专题同时引用 Sub2API 与 CLIProxyAPI 的公开软件能力，不作“全网独家”结论；供应方收益例子明确为虚构核算，公开鹈鹕样本不作为模型身份认证或 SESSION 交易证明。新增内容没有改变此前投稿的待审状态，也未产生已核实的 Star 增长。

## 周刊自荐修订

已修订既有 [科技爱好者周刊 #12175](https://github.com/ruanyf/weekly/issues/12175)，没有另发重复投稿。标题与正文改为介绍会员算力共享、节点报价与活动、公开鹈鹕测试，并补充本指南及成本工具链接。正文明确运营方身份，同时说明渠道筛选、Agent 与在线供给、数据处理、并发和发票条件；删除未经充分核实的兼容性、延迟承诺与旧模型清单。

同日重新读取公开条款、CODEX_SESSION 市场与鹈鹕示例接口：CODEX_SESSION 查询仍为 `total: 0`，鹈鹕示例返回 9 个节点记录。共享机制、当前可见供给和能力样本分别表述，没有据此声称共享流程已实测或模型身份已认证。GitHub API 核对投稿正文与本地更新稿一致；申请仍为 open、0 条评论，尚未核实周刊收录。

## 导航项目复核与分发选择

2026-10-09 14:24 UTC 读取三个项目的仓库信息、完整文件树、README 和可见提交记录：

| 项目 | Star / Fork | 文件与内容 | 可借鉴的做法 |
| --- | --- | --- | --- |
| [xx025/carrot](https://github.com/xx025/carrot) | 17,205 / 1,451 | 3 个文件：README 和两份 Issue 模板；分类导航与自有站点入口 | 长期维护分类、提供更新与纠错入口 |
| [zzsting88/relayAPI](https://github.com/zzsting88/relayAPI) | 4,949 / 163 | 96 个文件，包含 React 检测界面；README 中 28 个禾维跳转链接含 `source=git` | 对照表连接检测工具，并记录入口来源 |
| [peter123023/awesome-claude-api](https://github.com/peter123023/awesome-claude-api) | 454 / 28 | README 与 LICENSE；统一服务表、检测工具和 Star History 入口 | 围绕明确选型问题组织可收藏的资料 |

文件少并不等于没有维护价值；导流链接也不能证明 Star 来源。当前 stargazers API 查询均返回 HTTP 404，没有取得点星时间序列或账号样本，不能判定刷星或给出自然增长比例。上述公开内容支持对维护、工具入口和商业导流方式的观察，不能据此计算它们对 Star 的贡献。

本轮也阅读了两个候选目录的贡献规则：[awesome-freellm-apis](https://github.com/open-free-llm-api/awesome-freellm-apis/blob/main/CONTRIBUTING.md)要求真实、可用的免费层，首充券和邀请奖励不能替代免费额度；[awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh/blob/main/resources/style-guide.md)要求新收录的第三方 GitHub 项目至少 1,000 Star，并有明确教学价值。当前资料不满足这些投稿依据，因此没有向它们提交申请。

14:30 UTC 的已有服务、周刊和工具申请仍全部 open、0 条评论，现有 PR 未合并；仓库仍为 0 Star、0 Fork、Views 0、Clones 0。调研和资料发布属于准备进展，尚未观察到增长。本轮没有新增外部申请、发表评论或催审。

## 渠道证据指南

新增[中文渠道证据指南](guides/channel-evidence.md)与[英文版](guides/channel-evidence.en.md)，同步中英文 README、在线目录与 llms.txt。指南把报价、请求路由、API / SESSION 供给、鹈鹕样本、数据处理和真实账单分别对应到可支持的结论，并区分公开文档、平台记录和读者自己的调用观察。

[记录模板](examples/evaluation-record.template.json)升级为 1.1，补充证据范围、请求选路、共享条件，以及每次尝试的交付模式、供应节点、回退和排队字段。模板保留空值与 `not_conducted`，不把一次绘图、HTTP 200 或 Agent 聊天成功写成模型认证、持续可用性或会员共享交易实测。仅核对资料引用、锚点与 JSON 语法，未运行项目测试、构建、开发服务或交互验证。

## 自动探测目录候选投稿

2026-10-09 阅读 [Claws-ZH/awesome-ai-api](https://github.com/Claws-ZH/awesome-ai-api) 的 README、贡献规则、评分方法、候选输入、站点覆盖配置与每日工作流。目录快照为 68 Star、30 Fork、186 个网关，数据与排行榜每日自动更新。现有运营方自荐申请说明它允许投稿；近期可见的多个服务 PR 仍待审，自动更新不等于人工收录活跃，不能据此预计审核时间。

[PR #50](https://github.com/Claws-ZH/awesome-ai-api/pull/50) 按 README 的候选流程新增官网 URL、`needs_review` 站点配置和一份 TokenDos 资料，共 3 个文件、81 行新增。正文与条目首部均披露运营方身份，介绍多供应方报价与活动、公开鹈鹕样本和 Agent 会员会话共享，同时说明渠道筛选、数据访问、并发及发票条件。排行榜、评分、历史和监测数据由目录维护者处理。

公开[价格快照接口](https://www.tokendos.com/api/tokendos/public/transit-snapshot)明确提供 USD 币种与 `price_usd_per_m`。条目记录 14:58 UTC 的三个逐模型输入、输出和缓存读价，注明聚合最低价可能来自不同供应方，并非一个节点的完整报价；没有据含汇率换算的参考倍率计算折扣百分比。上线月份与客服入口来自公开条款，域名年龄、持续运营、客服响应、注册完成和实际收费仍未独立核验。

14:57 UTC 的无鉴权请求显示：`api.tokendos.com/v1/models` 返回 401 JSON，官网 `/v1/models` 返回 HTML，API 根路径返回 404。目录脚本只探测候选 URL 的同一域名，因此本次注明 API 分域并保留待复核状态，没有据鉴权响应声称生成成功。14:58 UTC 的 CODEX_SESSION 与 CLAUDE_SESSION 公开查询仍均 `total: 0`；共享机制有文档说明，当前供给和交易完成另需确认。

GitHub API 已核对提交文件与本地资料一致、PR 正文一致，申请为 open、未合并、0 条评论。检查列表为空、commit status 为 pending，没有可报告的 CI 通过结论。15:04 UTC 的既有十项申请均仍 open、0 条评论，现有 PR 未合并；本仓库仍 0 Star、0 Fork、Views 0、Clones 0。本轮新增了一项待审候选申请，尚未观察到收录或增长；未运行测试、构建或开发服务。

## 报价证据补充

2026-10-09 15:14 UTC 复读公开报价接口，补充[有日期的价格 JSON](data/pricing-snapshots/tokendos-2026-10-09.json)，记录三个目录模型的 USD / 百万 Token 输入、输出及缓存费率。中英文 README、服务 JSON、网页卡片、渠道证据指南与 llms.txt 同步来源与范围，替换此前笼统的「价格口径待核对」说明。

快照保留站方生成时间、采集完成时间及原字段；这些是市场聚合的各项最低价，可能分别属于不同供应方。资料说明应使用同一节点的完整报价核算，不拼接最低值，不据含汇率换算的参考倍率声称固定折扣。没有新增付费调用、扣费实测或模型身份认证。

同轮 CODEX_SESSION 与 CLAUDE_SESSION 查询仍均为空。十一项已有申请仍 open、0 条评论，PR 均未合并；本仓库为 0 Star、0 Fork、最近 14 天 Views 0、Clones 0。Claws 候选 PR 没有已报告的检查结果，commit status 为 pending；本轮没有新增投稿或催审。

报价资料已发布为提交 `cacac2d`；GitHub Pages API 确认该提交于 2026-10-09 15:24 UTC 构建完成。上轮候选投稿的运营记录提交 `988bfb9` 也已补齐发布。发布与 Pages 构建状态仅说明资料上线，交互验证仍由用户完成。

## 成本工具投稿署名修正

复核 [Awesome-LLMOps PR #925](https://github.com/tensorchord/Awesome-LLMOps/pull/925) 时，发现原提交署名格式有误，且缺少 DCO 要求的 `Signed-off-by`。本轮修正作者和提交者格式并补齐签署行，文件树保持一致，仍仅新增一条工具链接。Git 推送超时后，通过 GitHub API 更新自有投稿分支，更新前两次确认远端仍指向原提交；新提交为 `0562493`，本地分支已同步。

GitHub 的 DCO 检查已完成并返回 `success`，摘要为「All commits are signed off!」。PR 仍 open、未合并、0 条评论；该结果仅说明署名检查通过，不代表内容已获审核或工具已经实测。

## 申请去重与事实修正

2026-10-09 15:40 UTC 完成六项既有申请的正文或状态修订，逐项从 GitHub API 重新读取确认。关闭原因由提交方写入原正文，没有新增评论或催审。

| 目录 | 保留与关闭结果 | 依据 |
| --- | --- | --- |
| carrot | 保留 #1027，关闭 #1048 | #1027 已使用目录的四字段模板并带 `add-site` 标签；保留标签和原申请身份 |
| mn-api/awesome-ai-proxy | 保留 #63，关闭 #53 | 在 #63 补齐符合 README 的服务表、运营关系、证据与限制 |
| ai-coding-welfare | 关闭 #22 和 #24 | [贡献规则](https://github.com/panxunying/ai-coding-welfare/blob/main/CONTRIBUTING.md)与表单要求确认免费额度；现有资料不能支持原确认 |

两项保留申请介绍会员会话共享、多供应方价格与活动、公开鹈鹕记录，并补充渠道筛选、在线供给、数据访问、并发和开票条件。删除原来的「秒级直连」「完美兼容」等未经实测支持的承诺；市场报价不再用参考倍率写成固定折扣。

福利目录的撤回正文更正了注册免费额度、延迟、折扣和第三方评分等旧表述。公开条款确认最低充值 USD 1、首充可选 10% 代金券；这不能证明注册即可免费获得额度。撤回表示当前证据不足，不表示已经确认服务不存在任何免费活动。四项关闭均为提交方主动处理，不能记成维护者拒收。

完整快照还包含历史 [Chatbox #3981](https://github.com/chatboxai/chatbox/issues/3981)、[Cherry Studio PR #21402](https://github.com/CherryHQ/cherry-studio/pull/21402) 与 APIs-guru [#2831](https://github.com/APIs-guru/openapi-directory/issues/2831)、[#2835](https://github.com/APIs-guru/openapi-directory/issues/2835)。它们仍 open，属于集成或 API 描述申请；本轮只记录状态，没有复核内容或处理 APIs-guru 两项的可能重复。

本轮没有新增外部投稿。相关既有 PR 仍未合并，指标仍为 0 Star、0 Fork、Views 0、Clones 0。

## 分发规则

1. 使用普通 HTTPS 官方入口，不使用邀请、返佣、UTM 或隐藏归因参数。
2. 维护者与 TokenDos 的关系在仓库和投稿附近披露；TokenDos 排在首行不代表性能排名。
3. 每个目录只保留一个待审申请；被拒或自动关闭时先读维护规则，再决定是否重提。
4. 不购买、交换或批量制造 Star、Fork、Issue、评论或虚假使用记录。
5. 不把供应商自述、一次鹈鹕测试或流量估算写成横向性能结论。
6. 任何价格、活动、模型和可用性变化都附来源与日期，并同步中英文 README、服务 JSON 和网页卡片。

## 每周运营动作

- 检查首屏服务的价格、协议、用途限制和数据处理页面；失效链接进入 Issue。
- 检查上述收录申请的状态；已有申请未处理前不重复提交。
- 记录仓库 Views、独立访客、Star、Fork、有效 Issue/PR、外部链接点击和首次成功调用；未知值保留为空。
- 在允许自荐的社区以维护者身份分享选型方法和可复核记录，分享前注明维护关系，并使用无推广参数的链接。

## 目标

长期触达目标为 10,000 Star。能否达到取决于资料质量、持续维护、社区分发和真实使用需求，无法由仓库所有者保证。阶段目标、证据门槛和不做事项见 [ROADMAP.md](ROADMAP.md) 与 [MAINTENANCE.md](MAINTENANCE.md)。
