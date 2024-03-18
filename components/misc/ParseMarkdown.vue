<script setup>
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
</template>