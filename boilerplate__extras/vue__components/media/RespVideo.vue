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

// Get Cloudinary enviroment url
const rtc = useRuntimeConfig();
const cEnv = rtc.public.cloudinaryEnvUrl;


// Preset Cloudinary imaga size transformation
const respSize = ref("w_1920")

// Change image transformation to 1920 or 1024
// NOTE: adding more variables will lead to more transformations! Keep your transformations per month in check ;)
onMounted(() => {
	if(process.client) {
		window.innerWidth < 1024 ? respSize.value = "w_1024" : respSize.value = "w_1920"
	}
})
// Build absolute url
const videoUrl = computed(() => {
	return cEnv + "/video/upload/c_scale," + respSize.value + ",q_auto:best" + props.url;
})

// set an id on the video element for JS reference
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
