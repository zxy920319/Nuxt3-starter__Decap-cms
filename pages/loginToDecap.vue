<template>
    <p>Log into Decap CMS from here</p>
</template>

<script setup>
useHead({
    title: 'load decap from this page',
    script: [{ src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }],
})
</script>