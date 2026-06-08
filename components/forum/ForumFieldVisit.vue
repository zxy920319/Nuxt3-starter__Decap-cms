<template>
	<section class="section visit-section">
		<div class="container">
			<div class="sec-hd">
				<span class="sec-label">FIELD VISIT</span>
				<h2 class="sec-title">参访考察：荷兰现代农业</h2>
				<p class="sec-desc">荷兰以全球0.3%的耕地面积，实现了仅次于美国的全球第二大农产品出口——深入了解这背后的科技力量</p>
			</div>
			<div class="visit-grid">
				<div v-for="item in visitItems" :key="item.title" class="visit-card">
					<span class="visit-icon">
						<img draggable="false" role="img" class="emoji" :alt="item.alt" :src="item.icon">
					</span>
					<div>
						<h4>{{ item.title }}</h4>
						<p>{{ item.description }}</p>
					</div>
				</div>
			</div>
			<p class="visit-note">此次参访不仅是一次技术学习之旅，更是探索中荷农业科技合作潜力的绝佳契机</p>
		</div>
	</section>
</template>

<script setup>
const visitItems = [
	{ alt: '🌿', icon: '/images/forum-2026/1f33f.svg', title: '精准温室农业', description: '参观世界最先进的温室大棚，了解传感器、AI调控与水肥一体化智能技术' },
	{ alt: '🤖', icon: '/images/forum-2026/1f916.svg', title: '农业机器人', description: '近距离观摩采摘机器人、自动除草系统与无人化农场管理的应用实例' },
	{ alt: '💧', icon: '/images/forum-2026/1f4a7.svg', title: '可持续农业', description: '学习荷兰循环经济农业模式，了解零排放农场与生物能源利用实践' },
	{ alt: '📊', icon: '/images/forum-2026/1f4ca.svg', title: '数字农业平台', description: '探索农业大数据、物联网与区块链在食品供应链溯源中的创新应用' },
]
</script>
