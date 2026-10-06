<template>
	<div id="header__logo" class="company-logo">
		<NuxtLink :to="{ path: '/', query: route.query }">
			<div class="logo-wrapper">
				<img src="/images/logos/ucpae-logo.jpg" alt="logo" width="107" height="60" />
				<div class="org">
					<div>欧洲华人专业协会联盟</div>
					<div>United Chinese Professional Associations in Europe (UCPAE)</div>
				</div>
			</div>

		</NuxtLink>
	</div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped>
.company-logo {
	position: relative;
	height: auto;
	min-height: 60px;
	margin: 1em;
	padding-bottom: 0;
	padding-right: 1em;
	width: auto;
	min-width: 0;
	max-width: 100%;
	border-right: 1px solid $light-grey;

	img {
		position: relative;
		height: 60px;
		width: auto;
		flex-shrink: 0;
	}
	.logo-wrapper {
		display: flex;
		min-width: 0;
		justify-content: start;
		align-items: center;
		.org {
			display: block;
			min-width: 0;
			overflow-wrap: anywhere;
			margin-left: 0.5rem;
			font-family: fangsong;
		}
	}
}
</style>
