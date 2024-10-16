<template>
	<div id="fcpae-wrapper">
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
</script>