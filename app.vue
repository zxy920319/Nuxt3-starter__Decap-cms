<template>
	<div id="ucpae-wrapper">
		<ConfigProvider :theme="{ hashed: false }">
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</ConfigProvider>
	</div>
</template>

<script setup>
import { ConfigProvider } from 'ant-design-vue';
import { useLocaleStore } from '@/store/locale';

const store = useLocaleStore()
const route = useRoute();

const { setLocale } = store

watch(() => route.query, () => {
	if (route.query.locale) setLocale(route.query.locale)
}, { immediate: true })

useHead({
	link: [{ rel: 'preconnect', href: 'https://fonts.googleapis.com' }, { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap' }]
})
</script>