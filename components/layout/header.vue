<template>
	<header id="header">
		<LayoutLogo />
		<NavigationMainMenu />

		<ADropdown>
			<template #overlay>
				<AMenu @click="handleMenuClick">
					<AMenuItem key="zh">
						中文
					</AMenuItem>
					<AMenuItem key="en">
						English
					</AMenuItem>
				</AMenu>
			</template>
			<AButton type="text" :icon="h(GlobalOutlined)" class="i18n-btn">
				{{ locale.toUpperCase() }}
			</AButton>
		</ADropdown>
	</header>
</template>


<script setup>
import { Dropdown as ADropdown, Button as AButton, Menu as AMenu, MenuItem as AMenuItem } from 'ant-design-vue';
import { GlobalOutlined } from '@ant-design/icons-vue';
import { h } from 'vue';

import { useLocaleStore } from '@/store/locale';
import { storeToRefs } from 'pinia'

const router = useRouter()
const store = useLocaleStore()
const { locale } = storeToRefs(store)

function handleMenuClick(lang) {
	const { key } = lang
	router.push({ query: { locale: key } })
}
</script>

<style lang="scss" scoped>
#header {
	position: relative;
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	grid-template-rows: 1fr;
	padding: $spacing2;

	&::before {
		position: absolute;
		content: "";
		width: 100%;
		height: 0.1em;
		top: 100%;
		background-image: linear-gradient(90deg, $base-color, $secondary-color);
	}

	@include media(xsm) {
		display: block;
		padding: $spacing1 0;

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

.i18n-btn {
	grid-column: 3;
	grid-row: 1;
	align-self: center;
	justify-self: center;
}
</style>
