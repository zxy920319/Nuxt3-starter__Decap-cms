<template>
	<section id="about" class="section">
		<div class="container">
			<div class="sec-hd">
				<span class="sec-label">{{ t[locale]['forum']['about']['label'] }}</span>
				<h2 class="sec-title">{{ t[locale]['forum']['about']['title'] }}</h2>
				<p class="sec-desc" v-html="t[locale]['forum']['about']['descHtml']"></p>
			</div>

			<div class="org-row">
				<div class="org-card">
					<div class="org-tag">{{ t[locale]['forum']['about']['organizer_tag'] }}</div>
					<h3>UCPAE</h3>
					<p class="org-sub"><a href="https://ucpae.com/" target="_blank" rel="noopener">{{ t[locale]['forum']['about']['organizer_name'] }}</a></p>
					<p class="org-desc">{{ t[locale]['forum']['about']['organizer_desc'] }}</p>
				</div>
				<div class="org-x">×</div>
				<div class="org-card blue-border">
					<div class="org-tag blue">{{ t[locale]['forum']['about']['coorganizer_tag'] }}</div>
					<h3 class="blue-text">VCWI</h3>
					<p class="org-sub"><a href="https://vcwi.nl/" target="_blank" rel="noopener">{{ t[locale]['forum']['about']['coorganizer_name'] }}</a></p>
					<p class="org-desc">{{ t[locale]['forum']['about']['coorganizer_desc'] }}</p>
				</div>
			</div>

			<div class="why-box">
				<h3 class="why-title">{{ t[locale]['forum']['about']['why_title'] }}</h3>
				<div class="why-grid">
					<div v-for="item in whyItems" :key="item.title" class="why-item">
						<span class="why-icon">
							<img draggable="false" role="img" class="emoji" :alt="item.alt" :src="item.icon">
						</span>
						<div>
							<strong>{{ item.title }}</strong>
							<p>{{ item.description }}</p>
						</div>
					</div>
				</div>
			</div>

			<div class="attend-section">
				<h3 class="sub-title text-center">{{ t[locale]['forum']['about']['who_should_attend'] }}</h3>
				<div class="audience-grid">
					<div v-for="audience in audiences" :key="audience.num" class="audience-card fade-in">
						<div class="aud-num">{{ audience.num }}</div>
						<h4>{{ audience.title }}</h4>
						<p>{{ audience.description }}</p>
						<div class="aud-gain">
							<span class="gain-label">{{ t[locale]['forum']['about']['you_will_gain'] }}</span>
							<ul>
								<li v-for="gain in audience.gains" :key="gain">{{ gain }}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useLocaleStore } from '@/store/locale'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
const store = useLocaleStore()
const { locale } = storeToRefs(store)
const { data: t } = await useAsyncData('lang', () => queryContent('/i18n/locales').findOne())

const whyItems = computed(() => [
	{ alt: '🏭', icon: '/images/forum-2026/1f3ed.svg', title: t.value[locale.value]['forum']['about']['why_items'][0]['title'], description: t.value[locale.value]['forum']['about']['why_items'][0]['desc'] },
	{ alt: '🌍', icon: '/images/forum-2026/1f30d.svg', title: t.value[locale.value]['forum']['about']['why_items'][1]['title'], description: t.value[locale.value]['forum']['about']['why_items'][1]['desc'] },
	{ alt: '💡', icon: '/images/forum-2026/1f4a1.svg', title: t.value[locale.value]['forum']['about']['why_items'][2]['title'], description: t.value[locale.value]['forum']['about']['why_items'][2]['desc'] },
	{ alt: '🤝', icon: '/images/forum-2026/1f91d.svg', title: t.value[locale.value]['forum']['about']['why_items'][3]['title'], description: t.value[locale.value]['forum']['about']['why_items'][3]['desc'] },
])

const audiences = computed(() => [
	{
		num: '01',
		title: t.value[locale.value]['forum']['about']['audiences'][0]['title'],
		description: t.value[locale.value]['forum']['about']['audiences'][0]['desc'],
		gains: t.value[locale.value]['forum']['about']['audiences'][0]['gains'],
	},
	{
		num: '02',
		title: t.value[locale.value]['forum']['about']['audiences'][1]['title'],
		description: t.value[locale.value]['forum']['about']['audiences'][1]['desc'],
		gains: t.value[locale.value]['forum']['about']['audiences'][1]['gains'],
	},
	{
		num: '03',
		title: t.value[locale.value]['forum']['about']['audiences'][2]['title'],
		description: t.value[locale.value]['forum']['about']['audiences'][2]['desc'],
		gains: t.value[locale.value]['forum']['about']['audiences'][2]['gains'],
	},
	{
		num: '04',
		title: t.value[locale.value]['forum']['about']['audiences'][3]['title'],
		description: t.value[locale.value]['forum']['about']['audiences'][3]['desc'],
		gains: t.value[locale.value]['forum']['about']['audiences'][3]['gains'],
	},
])
</script>
