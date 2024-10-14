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

if (home.SEOmetaData) setSeoHead(home.SEOmetaData);

// const { data } = await useAsyncData("posts", () => {
// 	const data = queryContent("posts");
// 	console.log(data);
// 	return data.find();
// })

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

<script>
export default {
	async asyncData({ $content }) {
		const posts = await $content("posts").fetch();
		console.log('posts', posts);

		return {
			posts,
		};
	},
};
</script>