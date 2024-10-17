<template>
	<main id="main" class="home">
		<MiscParseMarkdown :markdownString="home[locale].content" />
		<!-- <ContentRenderer :value="data[0]"></ContentRenderer> -->
	</main>

</template>

<script setup>
import { useLocaleStore } from '@/store/locale';
import { storeToRefs } from 'pinia'

const store = useLocaleStore()
const { locale } = storeToRefs(store)

const { data: home } = reactive(await useAsyncData("home", () =>
	queryContent("/pages/home").findOne())
);

setSeoHead(home.en.SEOmetaData);

</script>

<style lang="scss" scoped>
main {
	display: grid;
	justify-items: center;
	align-items: center;

	:deep(div) {
		max-width: 50em;
	}

	// assets/scss/mixins
	@include fade-in;
}
</style>
