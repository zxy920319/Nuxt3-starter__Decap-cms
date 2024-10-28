<template>
	<ALayoutContent>
		<h2>{{ data['title'] }}</h2>
		<ContentRenderer :value="data"></ContentRenderer>
	</ALayoutContent>
</template>
<script setup>
import { LayoutContent as ALayoutContent } from 'ant-design-vue'

const route = useRoute();

const { data } = reactive(await useAsyncData("posts", () =>
	queryContent("posts").where({ slug: route.params.slug }).findOne())
);

console.log(data);

</script>


<style lang="scss">
h2 {
	margin: 2rem;
	text-align: center;
}
.singular-product {
	max-width: 45em;
	margin-inline: auto;

	img {
		position: relative;
		width: 100%;
	}
}
</style>