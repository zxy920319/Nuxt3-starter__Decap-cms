<template>
	<div ref="root" class="forum-2026-page vcwi-forum-2026-page">
		<ForumHero />
		<ForumAbout />
		<ForumKeynotes />
		<ForumSessions />
		<ForumSchedule />
		<ForumFieldVisit />
		<ForumSponsors />
		<ForumRegister />
	</div>
</template>

<script setup>
const root = ref(null)
useForumFadeIn(root)
</script>

<style lang="scss">
@import '@/assets/scss/forum-2026.scss';

.forum-2026-page {
	.emoji {
		height: 1em;
		width: 1em;
		margin: 0 0.05em 0 0.1em;
		vertical-align: -0.1em;
	}

	a {
		color: inherit;
	}
}
</style>
