<template>
	<main id="main" class="dynamic-fields-showcase">
		<PagesDynamicFields v-for="(zone, i) in dynamicFields.sections" :zone="zone"
            :sid="'section-' + i" :key="i" />
	</main>
</template>

<script setup>

const { data: dynamicFields } = reactive(await useAsyncData("dynamic-fields", () =>
	queryContent("/pages/dynamic-fields").findOne())
);

</script>

<style lang="scss" scoped></style>
