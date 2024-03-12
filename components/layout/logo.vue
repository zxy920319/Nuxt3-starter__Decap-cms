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
	</div>
</template>

<style lang="scss" scoped>
	.company-logo {
		position: relative;
		height: 2em; // exact according to design
		img {
			position: relative;
			height: 100%;
			width: auto;
			margin: 1em;
		}
	}
</style>
