<template>
	<div
		id="header__logo"
		class="company-logo"
	>
		<NuxtLink to="https://nuxt.com" target="_blank">
			<img
				src="/images/header/nuxt-logo.svg"
				alt="logo"
				width="200"
				height="100"
			/>
		</NuxtLink>
		<NuxtLink to="https://decapcms.org" target="_blank">
			<img
				src="/images/header/decap-logo.svg"
				alt="logo"
				width="200"
				height="100"
			/>
		</NuxtLink>
		<span>Boilerplate</span>
	</div>
</template>

<style lang="scss" scoped>
	.company-logo {
		position: relative;
		height: 2em; 
		margin: 1em;
		padding-bottom: 3em;
		padding-right: 1em;
		width: max-content;
		border-right: 1px solid $light-grey;
		img {
			position: relative;
			height: 2em;
			width: auto;
		}
		span {
			position: absolute;
			font-size: 0.8em;
			right: 1em;
			bottom: 0;
			transform: translateX(5%);
			font-style: italic;
			font-family: $font-art;
			color: $dark-grey;
		}
	}
</style>
