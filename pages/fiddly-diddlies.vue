<template>
	<main id="main" class="fiddles">
		<span>{{ fiddles.title }}</span>
		<!-- {{ fiddles.content }} -->
		<MiscParseMarkdown :markdownString="fiddles.content" />
	</main>
</template>


<script setup>

const { data: fiddles } = reactive(await useAsyncData("fiddly-diddlies", () =>
	queryContent("/pages/fiddly-diddlies").findOne())
);

</script>

<style lang="scss" scoped>
main {
	display: grid;
	justify-items: center;
	align-items: center;

	div {
		max-width: 500px;
	}
}
</style>
