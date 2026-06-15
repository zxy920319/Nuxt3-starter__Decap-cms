<template>
	<section id="schedule" class="section bg-alt">
		<div class="container">
			<div class="sec-hd">
				<span class="sec-label">{{ t[locale]['forum']['schedule']['label'] }}</span>
				<h2 class="sec-title">{{ t[locale]['forum']['schedule']['title'] }}</h2>
				<p class="sec-desc">{{ t[locale]['forum']['schedule']['desc'] }}</p>
			</div>

			<div class="schedule-tabs">
				<button
					v-for="tab in tabs"
					:key="tab.day"
					type="button"
					class="tab-btn"
					:class="{ active: activeDay === tab.day }"
					@click="activeDay = tab.day"
				>
					{{ tab.label }}
				</button>
			</div>

			<div
				v-for="tab in tabs"
				:key="tab.day"
				class="day-content"
				:class="{ active: activeDay === tab.day }"
			>
				<div class="timeline">
					<div v-for="item in tab.items" :key="item.time + item.title" class="tl-item fade-in">
						<div class="tl-time">{{ item.time }}</div>
						<div class="tl-dot" :class="item.dotClass" />
						<div class="tl-card">
							<span class="tl-badge" :class="item.badgeClass">{{ item.badge }}</span>
							<h4>{{ item.title }}</h4>
							<p>{{ item.description }}</p>
							<div v-if="item.tags?.length" class="tl-tags">
								<span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
							</div>
							<div v-if="item.tracks?.length" class="tl-tracks">
								<span
									v-for="track in item.tracks"
									:key="track.label"
									:class="track.className"
								>{{ track.label }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue'
import { useLocaleStore } from '@/store/locale'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
const store = useLocaleStore()
const { locale } = storeToRefs(store)
const { data: t } = await useAsyncData('lang', () => queryContent('/i18n/locales').findOne())

const activeDay = ref(1)
const tabs = computed(() => t.value[locale.value]['forum']['schedule']['tabs'])
</script>
