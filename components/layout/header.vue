<template>
	<header
		id="header"
	>
		<LayoutLogo />
		<NavigationMainMenu />
		<NavigationLocales />
	</header>
</template>


<style lang="scss" scoped>
	#header {
		border: 0.1em solid $light-grey;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
	}
	#header__logo {
		grid-column: 1;
	}
	#main-menu {
		grid-column: 2;
		align-self: center;
		justify-self: center;
	}
	#locale-toggle {
		grid-column: 3;
		align-self: center;
		justify-self: end;
		position: relative;
		margin-right: $spacing3;
	}
</style>
