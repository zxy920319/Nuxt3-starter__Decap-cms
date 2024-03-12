<template>
	<main>
		<!-- <SeoHead
			v-if="about.data.seo"
			:seo="about.data.seo"
		/> -->
		<!-- <ContentDoc :value="data" /> -->
		about
	</main>
</template>

<script setup>
	// definePageMeta({
	// 	title: "about",
	// });
	// const AFXenabled = useState("AFXenabled", () => true);
	// const api = useRuntimeConfig().public.apiUrl;
	// const { data } = await useAsyncData('blog', () => queryContent('/blog').findOne())
	// const { data: about } = await useFetch(`${api}/about?populate=deep,3`);

</script>

<style lang="scss" scoped>
	main {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: auto 1fr;
		gap: $spacing4;
		padding: $spacing4;
		@include media(xsm) {
			display: block;
		}
		@include media(sm) {
			overflow: unset !important;
		}
	}
</style>
