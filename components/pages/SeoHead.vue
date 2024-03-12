<template>
	<div>
		<Head>
			<Title>{{ seo.metaTitle }}</Title>
			<Meta
				name="description"
				:content="seo.metaDescription"
			/>
			<Meta
				property="og:title"
				:content="seo.metaTitle"
			/>
			<Meta
				property="og:image"
				:content="seo.metaImage"
			/>
			<!-- <Meta
				property="og:image:width"
				:content="JSON.stringify(seo.metaImage.formats[size].width)"
			/>
			<Meta
				property="og:image:height"
				:content="JSON.stringify(seo.metaImage.formats[size].height)"
			/> -->
			<Meta
				property="og:type"
				content="website"
			/>
			<Meta
				name="keywords"
				:content="seo.keywords"
			/>
		</Head>
	</div>
</template>

<script>
	export default {
		props: {
			seo: Object,
		},
		data() {
			return {
				size: "thumbnail",
			};
		},
		// mounted() {
		// 	this.setSize();
		// },
		// methods: {
		// 	setSize() {
		// 		let formats = this.seo.metaImage.formats;
		// 		if (formats.large) {
		// 			return (this.size = "large");
		// 		} else if (formats.medium) {
		// 			return (this.size = "medium");
		// 		} else if (formats.small) {
		// 			return (this.size = "small");
		// 		} else if (formats.thumbnail) {
		// 			return (this.size = "thumbnail");
		// 		}
		// 	},
		// },
	};
</script>
