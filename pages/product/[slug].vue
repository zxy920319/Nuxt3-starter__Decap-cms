<template>
	<main :key="setLocale">
		<div class="singular-product">
			<h1>{{ product.title }}</h1>
			<blockquote>{{ product.description }}</blockquote>
			<img :src="assetUrlBase + product.image" />
			<PagesMarkdownRenderMarkdown :markdownString="product.content" />
		</div>
	</main>
</template>
<script setup>

const route = useRoute();

const setLocale = useState("setLocale");

const { data: productsData } = reactive(await useAsyncData("product", () =>
	queryContent("/products", route.params.slug).findOne())
);

const product = computed(() => {
	return productsData[setLocale.value]
})

const rtc = useRuntimeConfig();
const cEnv = rtc.public.cloudinaryEnvUrl;
const assetUrlBase = cEnv + "/image/upload" + '/c_scale/w_600/q_auto:best'
</script>


<style lang="scss">
.singular-product {
	max-width: 45em;
	margin-inline: auto;
	img {
		position: relative;
		width: 100%;
	}
}
</style>