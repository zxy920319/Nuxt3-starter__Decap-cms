<!-- <script setup>
import markdownParser from "@nuxt/content/transformers/markdown"

// Massive thanks to: https://stackoverflow.com/questions/67012728/use-nuxt-content-to-display-markdown-fetched-from-a-database
const props = defineProps({
  markdownString: {
    type: String,
    required: true,
  }
});

const record = ref("");

watchEffect(async () => {
  await markdownParser.parse("custom.md", props.markdownString).then((md) => record.value = md);
});
</script>

<template>
  <ContentRendererMarkdown :value="record" v-if="record" />
</template> -->



<script setup>

const props = defineProps({
	markdownString: {
		type: String,
		required: true,
	}
});

// const newHtml = await useAsyncData('new-html', () => mdToHtml(props.markdownString))

const newHtml = await mdToHtml(props.markdownString)

// console.log(newHtml)
// const test = computed(() => {
// 	return newHtml.data.innerHTML
// })

// const test = ref(newHtml.data.value)

// console.log('test: ', test.value)

onMounted(() => {
	// function sethtml() {
	let div = document.getElementById('me-here')
	div.innerHTML += "test"
	console.log(newHtml)

	for (let i = 0; i < newHtml.length; i++) {
		// create element from tag type
		const element = document.createElement(newHtml[i].tag);
		// create text node with children[0].value 
		element.innerHTML += (newHtml[i].value);
		// test element attributes
		// console.log(element)
		div.appendChild(element)
	}
	// }
	// div.innerHTML += newHtml.data 
	console.log('hello?', div)
	// }
})
</script>

<template>
	<div id="me-here"></div>
</template>