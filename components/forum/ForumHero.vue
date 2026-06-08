<template>
	<header class="hero">
		<div class="hero-glow" />
		<div class="hero-content container">
			<div class="hero-forum-brand">
				<span class="hfb-ucpae">UCPAE</span>
				<span class="hfb-line" />
				<span class="hfb-forum">欧洲论坛</span>
				<span class="hfb-en">EUROPE FORUM</span>
			</div>

			<div class="hero-meta">
				<span class="pill green">
					<img draggable="false" role="img" class="emoji" alt="📅" src="/images/forum-2026/1f4c5.svg">
					2026年10月9–10日
				</span>
				<span class="pill">
					<img draggable="false" role="img" class="emoji" alt="🇳🇱" src="/images/forum-2026/1f1f3-1f1f1.svg">
					荷兰 · 埃因霍温
				</span>
			</div>

			<h1>
				共建合作新格局<br>
				<span class="gradient-text">中欧交流与未来发展</span>
			</h1>
			<p class="hero-sub">汇聚全欧华人精英 · 搭建政产学研跨国桥梁 · 共探中欧合作新机遇</p>

			<div class="hero-stats">
				<template v-for="(stat, index) in stats" :key="stat.label">
					<div v-if="index > 0" class="stat-div" />
					<div class="stat-item">
						<span class="stat-num">
							{{ stat.value }}<sup v-if="stat.suffix">{{ stat.suffix }}</sup>
						</span>
						<span class="stat-label">{{ stat.label }}</span>
					</div>
				</template>
			</div>

			<div class="hero-btns">
				<a href="https://vcwi.nl/europe-forum-2026-register/" class="btn-primary">立即报名</a>
				<a href="#sponsors" class="btn-secondary">成为合作伙伴</a>
			</div>
		</div>

		<div class="hero-scroll-hint">
			<span>向下探索</span>
			<div class="scroll-arrow" />
		</div>
	</header>
</template>

<script setup>
const stats = [
	{ value: '300', suffix: '+', label: '预期参会嘉宾' },
	{ value: '30', suffix: '+', label: '欧洲成员协会' },
	{ value: '5', suffix: '', label: '专题分论坛' },
	{ value: '2', suffix: '', label: '天沉浸式议程' },
]
</script>
