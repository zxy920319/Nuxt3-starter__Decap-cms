<template>
	<main id="main" class="test">
		<MiscParseMarkdown :markdownString="test.content" />
	</main>

</template>

<script setup>

const { data: test } = reactive(await useAsyncData("test", () =>
	queryContent("/pages/test").findOne())
);

// setSeoHead(test.SEOmetaData);

</script>

<style lang="scss" scoped>
main {
	display: grid;
	justify-items: center;
	align-items: center;
	div {
		max-width: 50em;
	}
	// assets/scss/mixins
	@include fade-in;
}
</style>
