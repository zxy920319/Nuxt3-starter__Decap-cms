<template>
	<section id="keynotes" class="section bg-alt">
		<div class="container">
			<div class="sec-hd">
				<span class="sec-label">{{ t[locale]['forum']['keynotes']['label'] }}</span>
				<h2 class="sec-title">{{ t[locale]['forum']['keynotes']['title'] }}</h2>
				<p class="sec-desc">{{ t[locale]['forum']['keynotes']['desc'] }}</p>
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
import { useLocaleStore } from '@/store/locale'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
const store = useLocaleStore()
const { locale } = storeToRefs(store)
const { data: t } = await useAsyncData('lang', () => queryContent('/i18n/locales').findOne())

const keynotes = computed(() => t.value[locale.value]['forum']['keynotes']['items'])
</script>
