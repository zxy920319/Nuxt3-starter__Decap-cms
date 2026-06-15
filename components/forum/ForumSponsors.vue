<template>
	<section id="sponsors" class="section bg-alt">
		<div class="container">
			<div class="sec-hd">
				<span class="sec-label">{{ t[locale]['forum']['sponsors']['label'] }}</span>
				<h2 class="sec-title">{{ t[locale]['forum']['sponsors']['title'] }}</h2>
				<p class="sec-desc">{{ t[locale]['forum']['sponsors']['desc'] }}</p>
			</div>

			<div class="sponsor-tiers">
				<div v-for="tier in tiers" :key="tier.key" class="tier-card fade-in" :class="tier.className">
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
					<a :href="tier.mailto" class="tier-btn" :class="tier.btnClass">{{ t[locale]['forum']['sponsors']['inquire_button'] }}</a>
				</div>
			</div>

			<div class="custom-box">
				<h3>{{ t[locale]['forum']['sponsors']['custom_title'] }}</h3>
				<p v-html="t[locale]['forum']['sponsors']['custom_desc_html']"></p>
				<a :href="t[locale]['forum']['sponsors']['custom_mailto']" class="btn-primary">{{ t[locale]['forum']['sponsors']['custom_button'] }}</a>
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

const tiers = computed(() => t.value[locale.value]['forum']['sponsors']['tiers'].map((tier, i) => ({
	key: `tier-${i}`,
	className: tier.className,
	alt: tier.alt,
	icon: tier.icon,
	name: tier.name,
	en: tier.en,
	price: tier.price,
	priceSuffix: tier.priceSuffix,
	btnClass: tier.btnClass,
	mailto: tier.mailto,
	benefits: tier.benefits,
})))
</script>