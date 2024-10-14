<template>
	<div id="fcpae-wrapper">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
import { useLocaleStore } from '@/store/locale';

const store = useLocaleStore()
const route = useRoute();

const { setLocale } = store

watch(() => route.query, () => {
	if (route.query.locale) setLocale(route.query.locale)
}, { immediate: true })
</script>