<template>
	<section id="sessions" class="section">
		<div class="container">
			<div class="sec-hd">
				<span class="sec-label">{{ t[locale]['forum']['sessions']['label'] }}</span>
				<h2 class="sec-title">{{ t[locale]['forum']['sessions']['title'] }}</h2>
				<p class="sec-desc">{{ t[locale]['forum']['sessions']['desc'] }}</p>
			</div>
			<div class="sessions-grid">
				<div v-for="session in sessions" :key="session.track" class="session-card fade-in">
					<div class="track-label">{{ session.track }}</div>
					<span class="s-icon">
						<img draggable="false" role="img" class="emoji" :alt="session.alt" :src="session.icon">
					</span>
					<h3>{{ session.title }}</h3>
					<p>{{ session.description }}</p>
					<div class="s-topics">
						<span v-for="topic in session.topics" :key="topic">{{ topic }}</span>
					</div>
					<div class="s-format">
						<span v-for="format in session.formats" :key="format">{{ format }}</span>
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

const sessions = computed(() => t.value[locale.value]['forum']['sessions']['items'])
</script>
