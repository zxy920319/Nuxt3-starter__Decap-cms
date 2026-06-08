<template>
	<section id="keynotes" class="section bg-alt">
		<div class="container">
			<div class="sec-hd">
				<span class="sec-label">KEYNOTE SPEECHES</span>
				<h2 class="sec-title">四大主旨演讲</h2>
				<p class="sec-desc">邀请政产学研各界顶级嘉宾，深度探讨中欧合作的核心议题与未来路径</p>
			</div>
			<div class="keynote-grid">
				<div v-for="keynote in keynotes" :key="keynote.badge" class="keynote-card fade-in">
					<div class="kn-badge">{{ keynote.badge }}</div>
					<div class="kn-tag">{{ keynote.tag }}</div>
					<h3>{{ keynote.title }}</h3>
					<p>{{ keynote.description }}</p>
					<div class="kn-topics">
						<span v-for="topic in keynote.topics" :key="topic">{{ topic }}</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const keynotes = [
	{
		badge: 'K1',
		tag: '地缘政治 & 中欧关系',
		title: '中欧合作的新机遇与挑战',
		description: '在全球地缘格局深刻变化背景下，探讨中欧关系走向、双边合作的战略机遇窗口，分析技术竞争、贸易摩擦与绿色转型中的合作空间。',
		topics: ['地缘博弈新态势', '贸易互补性分析', '政策对话路径'],
	},
	{
		badge: 'K2',
		tag: '人才战略 & 职业发展',
		title: '国际化人才需求与流动',
		description: '聚焦高层次国际化人才的培养与引进。从欧洲顶尖科研机构到跨国企业，如何在全球竞争中规划中欧人才的职业发展路径？',
		topics: ['欧洲人才政策解读', '职业发展路径规划', '跨国人才引进机制'],
	},
	{
		badge: 'K3',
		tag: '创新创业 & 投资趋势',
		title: '中欧创新与创业的未来',
		description: '关注创业生态、投资趋势及跨国合作模式。在欧洲创业如何把握DeepTech投资浪潮？中欧双边创新合作正在形成哪些全新范式？',
		topics: ['欧洲VC投资图谱', '跨国孵化模式', 'DeepTech创业路径'],
	},
	{
		badge: 'K4',
		tag: '可持续发展 & ESG',
		title: '可持续发展与社会责任',
		description: '聚焦绿色转型、气候应对与能源可持续发展。中欧在绿色经济领域合作潜力巨大，如何在双碳目标下实现产业链的深度融合？',
		topics: ['欧洲绿色新政解读', '碳中和技术路线', 'ESG投资新趋势'],
	},
]
</script>
