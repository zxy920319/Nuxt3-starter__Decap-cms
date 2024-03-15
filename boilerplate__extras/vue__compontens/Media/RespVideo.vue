<template>
	<video loading="lazy" :muted="muted" :loop="loop" :id="vidId" width="800" height="600">
		<source :src="videoUrl" />
	</video>
</template>

<script setup>

const props = defineProps({
	url: String,
	muted: Boolean,
	autoplay: Boolean,
	loop: Boolean,
	id: String
});

const rtc = useRuntimeConfig();
const cEnv = rtc.public.cloudinaryEnvUrl;
const videoUrl = cEnv + "/video/upload/w_1920/q_auto:good/" + props.url;

const vidId = ref('video--' + props.id);


// AUTOPLAY: when in view
onMounted(() => {
	if (process.client && props.autoplay) {
		// Intersection Observer for Autoplay attr
		const target = document.getElementById(vidId.value);

		const options = {
			rootMargin: "0px",
			threshold: 0.5,
		};

		function doShit(entries) {
			entries.forEach((entry) => {
				entry.isIntersecting ? entry.target.play() : entry.target.pause();
			})
		}

		let observer = new IntersectionObserver(doShit, options);

		observer.observe(target);
	}
})

</script>

<style lang="scss" scoped>
video {
	position: relative;
	width: 100%;
	height: auto;
	max-height: 100vh;
}
</style>
