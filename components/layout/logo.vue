<template>
	<div
		id="header__logo"
		class="company-logo"
	>
		<NuxtLink to="/">
			<img
				src="/images/logos/t-l-chargement-standard.webp"
				alt="logo"
				width="959"
				height="719"
			/>
		</NuxtLink>
	</div>
</template>

<style lang="scss" scoped>
	.company-logo {
		position: relative;
		height: 60px; 
		margin: 1em;
		padding-bottom: 3em;
		padding-right: 1em;
		width: max-content;
		border-right: 1px solid $light-grey;
		img {
			position: relative;
			height: 60px;
			width: auto;
		}
	}
</style>
