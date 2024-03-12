<template>
	<section :id="props.sid" :class="[
		'__' + props.zone.dfSettings.size,
		'__' + props.zone.dfSettings.background
	]" class="dynamic-fields">
		<div class="__dynamic-field" :class="['df__' + field.type]" v-for="field in zone.dynamicField">
			<PagesMarkdownRenderMarkdown v-if="field.type == 'text'" :markdownString="field.dfText"
				:key="[field.type, setLocale]" />
			<DynamicRespImage v-if="field.type == 'image'" :url="field.image" :key="setLocale" />
			<DynamicCarousel v-if="field.type == 'images' && field.displayType == 'carousel'" :imageOnly="true"
				:slides="field.images" :hasEnlarge="true" :key="setLocale" />
			<DynamicLightbox v-if="field.type == 'images' && field.displayType == 'lightbox'" :images="field.images"
				:ligtbox="true" :key="setLocale" />
			<DynamicRespVideo v-if="field.type == 'video'" :url="field.video" :muted="field.muted"
				:autoplay="field.autoplay" :loop="field.loop" :id="props.sid" :key="setLocale" />
		</div>
	</section>
</template>

<script setup>
const setLocale = useState("setLocale")

const props = defineProps([
    "zone",
    "sid",
])

</script>

<style lang="scss">
section.dynamic-fields {
	position: relative;
	margin: $spacing4;
	&.__large {
		width: 100%;
	}
	&.__small {
		width: 50%;
		margin-inline: auto;
	}

	&.__light {
		background: $light-grey;
	}

	&.__dark {
		background: $dark-grey;
		color: $white;
	}
}
</style>
