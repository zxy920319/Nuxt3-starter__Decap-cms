<template>
	<main id="main" class="home">
		<ForumLanding />
	</main>
</template>

<script setup>
const { data: home } = await useAsyncData('home', () =>
	queryContent('/pages/home').findOne(),
)

if (home.value?.en?.SEOmetaData) {
	setSeoHead(home.value.en.SEOmetaData)
}
</script>

<style lang="scss" scoped>
main.home {
	display: block;
	width: 100%;
	max-width: none;
	padding: 0;
}
</style>
