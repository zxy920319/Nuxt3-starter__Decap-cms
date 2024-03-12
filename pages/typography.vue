<template>
	<main
		id="main"
		class="typography"
	>	
		<span>{{ typography.title }}</span>
		<PagesMarkdownRenderMarkdown :markdownString="typography.content" />
	</main>
</template>


<script setup>

const { data: typography } = reactive(await useAsyncData("typography", () =>
	queryContent("/pages/typography").findOne())
);

</script>

<style lang="scss" scoped>
	main {
		@media screen and (orientation: landscape) {
			display: grid;
			justify-items: center;
			align-items: center;
		}
		div {
			max-width: 500px;
		}
	}
</style>
