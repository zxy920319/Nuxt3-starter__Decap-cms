<template>
	<div id="header__logo" class="company-logo">
		<NuxtLink to="/">
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
	.logo-wrapper {
		display: flex;
		justify-content: start;
		align-items: center;
		.org {
			display: block;
			margin-left: 0.5rem;
			font-family: fangsong;
		}
	}
}
</style>
