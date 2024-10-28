<template>
	<main id="main" class="home">
		<div class="banner">
			<img src="/images/dsc_9660-2.jpg" alt="banner">
			<div class="title">第 15 届 FCPAE 欧洲论坛<br>2024 11月15日-16日<br>Paris</div>
		</div>
		<div class="content">
			<MiscParseMarkdown :markdownString="home[locale].content" />
		</div>
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
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-items: center;
	align-items: center;

	.content {
		max-width: 50em;
	}

	// assets/scss/mixins
	@include fade-in;

}

.banner {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;

	img {
		width: 100%;
	}
	.title {
		position: absolute;
		color: white;
		text-align: center;
		font-size: 3.4rem;
		font-weight: 400;
		font-family: "Abril Fatface", "serif";
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);
	}

}
</style>
