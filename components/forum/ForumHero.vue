<template>
	<header class="hero">
		<div class="hero-glow" />
		<div class="hero-content container">
			<div class="hero-forum-brand">
				<span class="hfb-ucpae">UCPAE</span>
				<span class="hfb-line" />
				<span class="hfb-forum">{{ t[locale]['forum']['brand_forum'] }}</span>
				<span class="hfb-en">{{ t[locale]['forum']['brand_en'] }}</span>
			</div>

			<div class="hero-meta">
				<span class="pill green">
					<img draggable="false" role="img" class="emoji" alt="📅" src="/images/forum-2026/1f4c5.svg">
					{{ t[locale]['forum']['hero']['date'] }}
				</span>
				<span class="pill">
					<img draggable="false" role="img" class="emoji" alt="🇳🇱" src="/images/forum-2026/1f1f3-1f1f1.svg">
					{{ t[locale]['forum']['hero']['location'] }}
				</span>
			</div>

			<h1 class="title">
				{{ t[locale]['forum']['hero']['h1_line1'] }}<br>
				<span class="gradient-text">{{ t[locale]['forum']['hero']['h1_gradient'] }}</span>
			</h1>
			<p class="hero-sub">{{ t[locale]['forum']['hero']['sub'] }}</p>

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
				<a :href="t[locale]['forum']['links']['register_href']" class="btn-primary">{{
					t[locale]['forum']['hero']['register'] }}</a>
				<a :href="t[locale]['forum']['links']['partners_href']" class="btn-secondary">{{
					t[locale]['forum']['hero']['partners'] }}</a>
			</div>
		</div>

		<div class="hero-scroll-hint">
			<span>{{ t[locale]['forum']['hero']['explore_more'] }}</span>
			<div class="scroll-arrow" />
		</div>
	</header>
</template>

<script setup>
import { useLocaleStore } from '@/store/locale'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
const store = useLocaleStore()
const { locale } = storeToRefs(store)
const { data: t } = await useAsyncData('lang', () => queryContent('/i18n/locales').findOne())

const stats = computed(() => [
	{ value: '36', suffix: '', label: t.value[locale.value]['forum']['hero']['stats']['attendees'] },
	{ value: '14', suffix: '', label: t.value[locale.value]['forum']['hero']['stats']['member_assocs'] },
	{ value: '5', suffix: '', label: t.value[locale.value]['forum']['hero']['stats']['sessions'] },
	{ value: '2', suffix: '', label: t.value[locale.value]['forum']['hero']['stats']['days'] },
])
</script>

<style scss="lang">
h1.title {
	margin-top: 0px;

	&:before {
		content: none
	}
}
</style>
