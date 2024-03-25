<template>
	<div id="main-menu">
		<div id="mobile-menu__toggle-button" @click="toggleMobileMenu()" :class="{ mobileMenuOpen: mobileMenuActive }">
			<span>&#x2630;</span>
			MENU 
		</div>

		<nav :class="{ mobileMenuOpen: mobileMenuActive }">
			<menu class="main-menu__items">
				<NuxtLink to="/" class="menu-item item--home" prefetch>
					<span>home</span>
				</NuxtLink>
				<NuxtLink to="/typography" class="menu-item" prefetch>
					<span>typography</span>
				</NuxtLink>
			</menu>
		</nav>
	</div>
</template>

<script setup>

const mobileMenuActive = ref(false);
const route = useRoute();
watch(route, () => {
	mobileMenuActive.value = false; 
});

function toggleMobileMenu() {
	mobileMenuActive.value = !mobileMenuActive.value;
}

function menuItemSelected() {
	mobileMenuActive.value = false;
}

watch(
    // closes menu on route change
    () => route.path,
    () => {
        mobileMenuActive.value = false
    }
)

</script>

<style lang="scss" scoped>
menu.main-menu__items {
	position: relative;
	display: flex;
	gap: $spacing5;
	max-width: max-content;
	margin-inline: auto $spacing4;
	right: 0;
	@include media(xsm) {
		position: absolute;
		display: block;
		height: 100%;
		margin: 0;
		padding-left: 0;
		padding-top: 8em; // pushes item below 'header' (toggle-button span:before)
		background: $white;
	}

	.menu-item {
		$item-img-height: 1.2em;
		position: relative;
		cursor: pointer;
		display: inline-block;

		* {
			transition: $transition1;
		}

		img {
			position: relative;
			height: $item-img-height;
			width: 100%;
			object-fit: contain;
		}

		span {
			display: block;
			width: 100%;
			padding: $spacing0 $spacing2;
			text-align: center;
			list-style: none;
		}

		@include media(xsm) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding: $spacing1 $spacing3;

			&.router-link-active {
				background: grey;
				color: white;
			}
		}
	}
}



// toggle states/ mobile

nav {
	@include media(xsm) {
		display: none;
	}
}

nav.mobileMenuOpen {
	position: fixed;
	display: block;
	height: 100vh;
	width: 70vw;
	top: 0;
	left: 30%;

	&::before {
		position: fixed;
		content: "";
		width: 100%;
		height: 100vh;
		backdrop-filter: blur(0.3em);
		inset: 0;
	}
}

#mobile-menu__toggle-button {
	display: none;
	cursor: pointer;
	@include media(xsm) {
		position: absolute;
		z-index: 99;
		display: block;
		font-size: 0.8em;
		text-align: center;
		width: max-content;
		margin-inline: auto;
		justify-self: center;
		padding: $spacing1;
		margin-top: $spacing0;
		right: 0;
	}
	span {
		font-size: $font-size2;
		display: block;
	}
}

#mobile-menu__toggle-button.mobileMenuOpen {
	position: fixed;

	span::after {
		display: block;
	}
}

#main-menu {
	@include media(xsm) {
		position: absolute;
		z-index: 99;
		top: 0;
		right: 0;
	}
}
</style>
