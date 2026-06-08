<template>
	<section id="sponsors" class="section bg-alt">
		<div class="container">
			<div class="sec-hd">
				<span class="sec-label">PARTNERSHIP</span>
				<h2 class="sec-title">成为我们的合作伙伴</h2>
				<p class="sec-desc">与欧洲华人精英社群建立深度连接，共同塑造中欧合作的未来叙事</p>
			</div>

			<div class="sponsor-tiers">
				<div v-for="tier in tiers" :key="tier.name" class="tier-card fade-in" :class="tier.className">
					<div class="tier-icon">
						<img draggable="false" role="img" class="emoji" :alt="tier.alt" :src="tier.icon">
					</div>
					<div class="tier-name">{{ tier.name }}</div>
					<div class="tier-en">{{ tier.en }}</div>
					<div class="tier-price">
						{{ tier.price }}<span v-if="tier.priceSuffix">{{ tier.priceSuffix }}</span>
					</div>
					<ul class="tier-list">
						<li v-for="benefit in tier.benefits" :key="benefit">{{ benefit }}</li>
					</ul>
					<a :href="tier.mailto" class="tier-btn" :class="tier.btnClass">立即咨询</a>
				</div>
			</div>

			<div class="custom-box">
				<h3>定制化合作方案</h3>
				<p>除标准套餐外，我们还提供：<strong>分论坛独家冠名</strong>、<strong>晚宴赞助</strong>、<strong>参访活动赞助</strong>、<strong>媒体合作</strong>等定制方案，欢迎联系我们共同设计最适合您的合作模式。</p>
				<a href="mailto:Officer%20VCWI%20%3Coffice@vcwi.nl%3E?subject=%E5%AE%9A%E5%88%B6%E5%90%88%E4%BD%9C%E5%92%A8%E8%AF%A2" class="btn-primary">联系我们定制方案</a>
			</div>
		</div>
	</section>
</template>

<script setup>
const mailtoBase = 'mailto:Officer%20VCWI%20%3Coffice@vcwi.nl%3E'

const tiers = [
	{
		className: 'tier-plat',
		alt: '👑',
		icon: '/images/forum-2026/1f451.svg',
		name: '铂金赞助',
		en: 'PLATINUM',
		price: '€ 15,000',
		priceSuffix: '起',
		btnClass: '',
		mailto: `${mailtoBase}?subject=%E9%93%82%E9%87%91%E8%B5%9E%E5%8A%A9%E5%92%A8%E8%AF%A2`,
		benefits: [
			'主舞台15分钟品牌演讲',
			'头版 LOGO（全部物料）',
			'专属8㎡展台',
			'8张全程参会名额',
			'晚宴专属桌位',
			'独家1v1高管午餐对接',
			'赞助商专属商务撮合服务',
			'社媒专题推送（3次）',
		],
	},
	{
		className: 'tier-gold featured-tier',
		alt: '⭐',
		icon: '/images/forum-2026/2b50.svg',
		name: '黄金赞助',
		en: 'GOLD',
		price: '€ 8,000',
		priceSuffix: '',
		btnClass: 'gold-btn',
		mailto: `${mailtoBase}?subject=%E9%BB%84%E9%87%91%E8%B5%9E%E5%8A%A9%E5%92%A8%E8%AF%A2`,
		benefits: [
			'分论坛独家冠名（1个）',
			'LOGO展示（主要位置）',
			'4㎡专属展台',
			'5张全程参会名额',
			'晚宴指定席位',
			'社媒推送（2次）',
			'会刊半页广告',
		],
	},
	{
		className: 'tier-silver',
		alt: '🥈',
		icon: '/images/forum-2026/1f948.svg',
		name: '白银赞助',
		en: 'SILVER',
		price: '€ 4,000',
		priceSuffix: '',
		btnClass: '',
		mailto: `${mailtoBase}?subject=%E7%99%BD%E9%93%B6%E8%B5%9E%E5%8A%A9%E5%92%A8%E8%AF%A2`,
		benefits: [
			'LOGO展示（标准位置）',
			'3张全程参会名额',
			'展示台1个',
			'社媒推送（1次）',
			'会刊1/4页广告',
		],
	},
]
</script>
