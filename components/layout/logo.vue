<template>
	<div
		id="header__logo"
		class="company-logo"
	>
		<NuxtLink to="https://nuxt.com" target="_blank">
			<img
				src="/images/logos/nuxt-logo.svg"
				alt="logo"
				width="800"
				height="200"
			/>
		</NuxtLink>
		<NuxtLink to="https://decapcms.org" target="_blank">
			<img
				src="/images/logos/decap-logo.svg"
				alt="logo"
				width="104"
				height="30"
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
