<template>
	<main>
		<h1>contact</h1>
		<!-- Place the ~/boilerplate__extras/nuxt__components/forms folder in ~/components for use of: -->
		<FormsBasicInquery />
	</main>
</template>

<script setup></script>

<style lang="scss" scoped>
	main {
		background-position: center top;
		background-size: 100%;
		display: grid;
		justify-items: center;
		align-items: center;
		@include media(xsm) {
			display: block;
		}
		@include media(sm) {
			@media screen and (orientation: portrait) {
				display: block;
			}
		}
	}
	#basic-inquery {
		max-width: 35em;
		padding: $spacing4;
		border: 3px solid black;
	}
</style>
