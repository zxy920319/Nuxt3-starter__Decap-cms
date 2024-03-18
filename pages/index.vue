<template>
	<main id="main" class="home">
		<div class="links">
			<NuxtLink to="https://nuxt.com" target="_blank">
				<img src="/images/header/nuxt-logo.svg" alt="logo" width="200" height="100" />
			</NuxtLink>
			<NuxtLink to="https://decapcms.org" target="_blank">
				<img src="/images/header/decap-logo.svg" alt="logo" width="200" height="100" />
			</NuxtLink>
		</div>
		<MiscParseMarkdown :markdownString="home.content" />
	</main>

</template>

<script setup>

const { data: home } = reactive(await useAsyncData("home", () =>
	queryContent("/pages/home").findOne())
);

setSeoHead(home.SEOmetaData);

</script>

<style lang="scss" scoped>
main {
	@media screen and (orientation: landscape) {
		display: grid;
		justify-items: center;
		align-items: start;
	}
}
</style>
