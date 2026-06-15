<template>
	<section class="section visit-section">
		<div class="container">
			<div class="sec-hd">
				<span class="sec-label">{{ t[locale]['forum']['visit']['label'] }}</span>
				<h2 class="sec-title">{{ t[locale]['forum']['visit']['title'] }}</h2>
				<p class="sec-desc">{{ t[locale]['forum']['visit']['desc'] }}</p>
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
			<p class="visit-note">{{ t[locale]['forum']['visit']['note'] }}</p>
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

const visitItems = computed(() => t.value[locale.value]['forum']['visit']['items'])
</script>