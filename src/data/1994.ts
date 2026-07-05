import type { Letter } from '../types/letter';

const letter: Letter = {
  year: 1994,
  title: 'The 30th Anniversary: Rules, Mistakes, and the Unforgiving Nature of Derivatives',
  subtitle: 'Celebrating three decades of Berkshire, with timeless investment rules and a warning about equity put options',
  paragraphs: [
    {
      en: '1994 marks the 30th anniversary of our stewardship of Berkshire Hathaway. Over these three decades, the company\'s per-share book value has grown from $19 to $10,083, a compound annual rate of 23%. We have learned a great deal, made many mistakes, and developed a set of principles that we believe will serve us well in the decades ahead. I want to share some of those lessons, because they are as true today as they were when we first learned them—often the hard way.',
      zh: '1994年是我们管理伯克希尔·哈撒韦的第30个年头。在这三十年里，公司每股账面价值从19美元增长到10,083美元，年复合增长率达23%。我们学到了很多，犯了许多错误，并形成了一套我们相信在未来几十年里会让我们受益匪浅的原则。我想分享其中一些经验，因为它们今天和当初我们学到时同样真实——通常是以惨痛的方式学到的。',
    },
    {
      en: 'Let me start with the two most important rules of investing, which I have stated many times but can never repeat too often. Rule No. 1: Don\'t lose money. Rule No. 2: Don\'t forget Rule No. 1. This sounds like a joke, but it is anything but. The mathematics of loss are brutal and asymmetric: a 50% loss requires a 100% gain just to break even. Conversely, avoiding large losses, even if it means missing some large gains, is the surest path to long-term compounding. Every investment decision we make at Berkshire begins with this question: What is the probability of permanent capital loss? If that probability is materially above zero, we pass—regardless of how enticing the potential upside might appear.',
      zh: '让我从两条最重要的投资规则开始，我已说过许多次，但再怎么重复也不为过。规则一：不要亏钱。规则二：不要忘记规则一。这听起来像个笑话，但绝非如此。亏损的数学是残酷且不对称的：50%的亏损需要100%的盈利才能勉强回本。反之，避免大额亏损，即使这意味着错失一些大额收益，是长期复利最可靠的路径。我们在伯克希尔做出的每一项投资决策都始于这个问题：永久性资本损失的概率是多少？如果这个概率显著高于零，我们就放弃——不管潜在的上行空间看起来多么诱人。',
    },
    {
      en: 'For several years, Berkshire has been selling equity put options—contracts that obligate us to buy stocks at pre-agreed prices if those stocks fall below certain levels. We have sold these options on major market indices and on individual stocks that we would be happy to own at the strike prices. The premiums we receive are substantial, reflecting the market\'s appetite for protection. But let me be clear: selling put options is not a risk-free activity. If the market falls sharply, we will be required to purchase stocks at prices that are above the then-prevailing market levels. The key is that we only sell puts on securities we would want to own anyway, at prices we would be happy to pay, and we always maintain the financial capacity to fulfill our obligations. We will never, under any circumstances, write a check that we cannot cover.',
      zh: '过去几年里，伯克希尔一直在出售股票看跌期权——如果股票跌破特定价格，这些合约要求我们以预先约定的价格买入股票。我们对主要市场指数和我们乐于以执行价持有的个股出售了这类期权。我们收到的权利金相当可观，反映了市场对保护的需求。但让我明确说明：出售看跌期权并非无风险的活动。如果市场大幅下跌，我们将被要求以高于当时市场价格的水平购买股票。关键在于，我们只对无论如何都愿意持有的证券出售看跌期权，而且是以我们乐于支付的价格，同时我们始终保持履行义务的财务能力。在任何情况下，我们都绝不会开出一张无法兑现的支票。',
    },
    {
      en: 'The derivatives market more broadly is a domain that troubles me. I once described derivatives as "financial weapons of mass destruction"—and I stand by that characterization. The notional value of derivatives contracts outstanding has grown to staggering levels, and the interconnections among counterparties create a systemic risk that is poorly understood and inadequately regulated. When I look at certain derivatives positions on the books of major financial institutions, I see risks that are not merely large but potentially unknowable. The problem is not the instruments themselves—derivatives have legitimate hedging uses—but rather the scale at which they are employed and the asymmetries in knowledge between the parties involved. At Berkshire, we will use derivatives sparingly, only when we fully understand the risks, and only when we are certain that we are being adequately compensated.',
      zh: '更广泛的衍生品市场是一个令我困扰的领域。我曾将衍生品描述为"大规模杀伤性金融武器"——我今天仍然坚持这个描述。未平仓衍生品合约的名义价值已经增长到惊人的水平，而交易对手之间的相互关联所带来的系统性风险，既没有被充分理解，也没有得到充分监管。当我看到主要金融机构账面上的某些衍生品头寸时，我看到的不仅仅是巨大的风险，还有可能是不可知的风险。问题不在于这些工具本身——衍生品具有合法的对冲用途——而在于它们被使用的规模，以及参与各方之间知识的不对称性。在伯克希尔，我们将谨慎使用衍生品，只有在完全理解风险、且确信我们获得了足够补偿时才使用。',
    },
    {
      en: 'Looking back over 30 years, I am often asked what I would do differently if I could start over. The honest answer is that I would study failure more. Not my own—though that too—but the failure of others. Throughout business history, there are identifiable patterns that precede almost every major corporate collapse: excessive leverage, hubris in the executive suite, herd behavior by boards, and a systematic underestimation of risks that seem remote but that can arrive with devastating speed. If I had devoted more time to understanding why seemingly invincible businesses failed, I might have avoided some of our own costly errors. The market is an expensive teacher, but at least it is a patient one.',
      zh: '回顾三十年，我常被问到如果能重新开始，我会做哪些不同的事。诚实的回答是，我会更多地研究失败。不是我自己经历的失败——尽管也应该研究——而是他人的失败。纵观商业史，几乎每一次重大企业崩溃之前都有一些可识别的模式：过度杠杆、高管的狂妄自大、董事会的羊群行为，以及系统性地低估那些看似遥远但能以毁灭性速度降临的风险。如果我当时花更多时间去理解那些看似无敌的企业为何失败，我或许能避免我们自身一些代价高昂的错误。市场是一位昂贵的老师，但至少它是一位耐心的老师。',
    },
    {
      en: 'Despite the inevitable mistakes, the thirty-year record suggests that a simple philosophy, consistently applied, produces satisfactory results. Find wonderful businesses, buy them at sensible prices, hold them for a very long time, and resist the temptation to trade. The power of this approach lies not in its complexity but in its simplicity—and in the discipline required to stick with it when the crowd is chasing something flashier. As we enter our fourth decade, Charlie Munger and I remain as committed to these principles as ever. The business landscape changes, technology advances, and new industries emerge. But the fundamental laws of economics, and the fundamentals of human behavior in markets, remain immutable.',
      zh: '尽管不可避免会犯错，但三十年的记录表明，一个简单的哲学，如果持续地应用，会产生令人满意的结果。找到优秀的企业，以合理的价格买入，长期持有，并抵制频繁交易的诱惑。这种方法的力量不在于其复杂性，而在于其简单性——以及当大众追逐更光鲜的东西时坚持所需的自律。进入我们的第四个十年，查理·芒格和我对这些原则的承诺一如既往。商业格局在变化，技术在进步，新行业在涌现。但经济学的基本法则，以及市场中人类行为的基本原理，保持不变。',
    },
  ],
};

export default letter;
