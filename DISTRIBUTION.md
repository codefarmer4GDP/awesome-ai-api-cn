# 分发与运营记录

这份记录把仓库的公开分发动作和可核对指标放在一起。目标是让更多开发者找到并修订选型资料；Star 是触达信号，不是服务质量证明，也不是可以购买或交换的结果。

## 当前基线

快照时间：2026-10-09 13:53 UTC（本轮 GitHub API 快照）。

| 指标 | 数值 | 说明 |
| --- | ---: | --- |
| Star | 0 | `stargazers_count` |
| Fork | 0 | `forks_count` |
| 最近 14 天 Views | 0 | GitHub Traffic API；新仓库数据可能延迟 |
| 最近 14 天 Clones | 0 | GitHub Traffic API |
| 最新发布 | v0.3.0 | 在线目录、成本计算器与公开运营记录 |
| 在线页面 | 已构建 | [GitHub Pages](https://codefarmer4gdp.github.io/awesome-ai-api-cn/) |

这些数字只描述查询时的状态，不构成增长预测。

## TokenDos 服务收录申请

以下申请均使用无邀请参数的官方仓库或服务链接；开放状态不代表已经收录。

| 目录 | 申请 | 状态（2026-10-09） |
| --- | --- | --- |
| [carrot](https://github.com/xx025/carrot) | [#1048](https://github.com/xx025/carrot/issues/1048) | open |
| [relayAPI](https://github.com/zzsting88/relayAPI) | [#74](https://github.com/zzsting88/relayAPI/issues/74) | open |
| [awesome-claude-api](https://github.com/peter123023/awesome-claude-api) | [PR #24](https://github.com/peter123023/awesome-claude-api/pull/24) | open，未合并 |
| [awesome-ai-api-proxy](https://github.com/howardpen9/awesome-ai-api-proxy) | [TokenDos #84](https://github.com/howardpen9/awesome-ai-api-proxy/issues/84) · [PR #110](https://github.com/howardpen9/awesome-ai-api-proxy/pull/110) | open |
| [awesome-ai-tools](https://github.com/mahseema/awesome-ai-tools) | [PR #2353](https://github.com/mahseema/awesome-ai-tools/pull/2353) | open，未合并，0 条评论 |

awesome-ai-tools 的 README 明确邀请免费 PR，模板要求每次仅新增一个工具并放在分类末尾。本次先查重、阅读模板，再在 Developer tools 末尾添加一条 TokenDos，介绍供应方报价、Agent 会员会话共享与公开鹈鹕记录，同时说明可用性与数据处理依赖所选供应方。PR 正文披露运营关系、当前 CODEX_SESSION 查询为空、供应端可读取会话及平台临时留存条件，并链接本指南。GitHub API 核对只有 README 一行新增，正文与本地稿件一致。

该目录当日为 6,377 Star、2,298 Fork；最近可见的已合并 PR 为 2025-08-26 的 [#382](https://github.com/mahseema/awesome-ai-tools/pull/382)。近期仍有新投稿，但不能据此判断审核或合并活跃，本次不预估收录时间。原有八项服务、工具和周刊申请也均仍 open、0 条评论，现有 PR 未合并。

## 指南与成本工具分发

| 目录 | 投稿对象与申请 | 状态（2026-10-09） |
| --- | --- | --- |
| [awesome-generative-ai-apis](https://github.com/foss42/awesome-generative-ai-apis) | 双方案成本估算工具，[#483](https://github.com/foss42/awesome-generative-ai-apis/issues/483) | open，等待维护者确认范围及分配；尚未提交 PR 或收录 |
| [Awesome-LLMOps](https://github.com/tensorchord/Awesome-LLMOps) | 双方案成本估算工具，[PR #925](https://github.com/tensorchord/Awesome-LLMOps/pull/925) | open，未合并，0 条评论 |
| [awesome-ai-api-proxy](https://github.com/howardpen9/awesome-ai-api-proxy) | 选型指南，[#120](https://github.com/howardpen9/awesome-ai-api-proxy/issues/120)、[#121](https://github.com/howardpen9/awesome-ai-api-proxy/issues/121)、[#122](https://github.com/howardpen9/awesome-ai-api-proxy/issues/122) | 均被自动关闭；当前无待审的指南申请 |

向 awesome-generative-ai-apis 的成本工具申请按其 Issue-first 流程提交，披露 TokenDos 维护关系、中文界面与英文核算说明，并注明默认价格为虚构示例。它比较读者自行填写的方案；本次申请未把它描述成实时价格 API 或跨平台性能实测。

选型指南的三次 API 投稿均因未使用目录要求的 Issue Form 被自动关闭；API 创建未取得表单标签，外部贡献者后续补标签又因权限不足失败。后续不重复发送自由格式 Issue；如需再次投稿，应使用其网页表单并保留关联披露。

仓库已发布一条 [公开运营讨论](https://github.com/codefarmer4GDP/awesome-ai-api-cn/discussions/2)，说明目录的证据标准、投稿方式和维护关系，供读者直接反馈。

2026-10-09 补齐英文版五家其他服务的评价与来源，并发布 [英文成本核算指南](guides/cost-comparison.en.md)。资料公开和投稿完成均不代表已产生外部流量。

同日补齐 [英文在线目录与成本计算器](https://codefarmer4gdp.github.io/awesome-ai-api-cn/index.en.html#calculator)，包括英文服务卡片、筛选、费用表、输入提示和导出说明；中英文页面共用计算逻辑，语言切换保留已填报价和用量。计算器仍使用虚构默认价格，不提供实时价格、供给或性能排名。交互验证按项目约定由用户完成。

英文入口发布后，已更新原有工具申请 [#483](https://github.com/foss42/awesome-generative-ai-apis/issues/483) 的正文与建议收录行，注明中英文界面和共享计算逻辑；未新建重复申请或提交 PR。GitHub API 核对正文与本地更新稿一致；状态仍为 open、未分配、0 条评论。

Awesome-LLMOps 允许逐项提交 PR。阅读贡献规则并查重后，在其 Optimizations 表格按字母顺序新增一条 `AI API Two-Plan Cost Estimator`，介绍同任务量、用户自填报价、充值费用与赠送额度的比较，以及英文/中文界面、参数分享和 JSON 导出。PR 正文披露 TokenDos 关系、虚构默认价格与未进行交互验证；GitHub API 核对只有 README 一行新增，正文与本地稿件一致。申请待审核，不代表已收录。

## 会员共享专题

新增[中文会员共享选型指南](guides/member-session-sharing.md)与[英文版](guides/member-session-sharing.en.md)，中英文 README、网页与 llms.txt 同步入口。专题区分周期套餐、团队额度、自建订阅代理与供应方远程会话，并说明实际路由、在线供给、数据处理、消费成本和供应方成本分摊。

本轮读取了 TokenDos 渲染后的公开 SESSION 教程正文，确认其文档描述的双方 Agent、本机登录客户端、供应端执行、API / SESSION 选路与临时数据留存机制；这解决了此前只能获取 SPA 壳页、不能重新核验教程正文的限制。仍未完成消费、供应接单、结算或提现实测。2026-10-09 13:44:53–54 UTC 的公开 CODEX_SESSION 与 CLAUDE_SESSION 过滤查询均 HTTP 200、`total: 0`、空列表，不能据教程或 Agent 聊天成功确认当时有可交易的共享供给。

专题同时引用 Sub2API 与 CLIProxyAPI 的公开软件能力，不作“全网独家”结论；供应方收益例子明确为虚构核算，公开鹈鹕样本不作为模型身份认证或 SESSION 交易证明。新增内容没有改变此前投稿的待审状态，也未产生已核实的 Star 增长。

## 周刊自荐修订

已修订既有 [科技爱好者周刊 #12175](https://github.com/ruanyf/weekly/issues/12175)，没有另发重复投稿。标题与正文改为介绍会员算力共享、节点报价与活动、公开鹈鹕测试，并补充本指南及成本工具链接。正文明确运营方身份，同时说明渠道筛选、Agent 与在线供给、数据处理、并发和发票条件；删除未经充分核实的兼容性、延迟承诺与旧模型清单。

同日重新读取公开条款、CODEX_SESSION 市场与鹈鹕示例接口：CODEX_SESSION 查询仍为 `total: 0`，鹈鹕示例返回 9 个节点记录。共享机制、当前可见供给和能力样本分别表述，没有据此声称共享流程已实测或模型身份已认证。GitHub API 核对投稿正文与本地更新稿一致；申请仍为 open、0 条评论，尚未核实周刊收录。

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
