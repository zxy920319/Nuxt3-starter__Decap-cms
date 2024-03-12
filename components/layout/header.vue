<template>
	<header id="header">
		<LayoutLogo />
		<NavigationMainMenu />
	</header>
</template>


<style lang="scss" scoped>
#header {
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	grid-template-rows: 1fr;

	@include media(xsm) {
		display: block;

		#locale-toggle {
			display: none;
		}
	}
}

#header__logo {
	grid-column: 1;
	grid-row: 1;
}

#main-menu {
	grid-column: 2;
	grid-row: 1;
	align-self: center;
	justify-self: center;
}
</style>
