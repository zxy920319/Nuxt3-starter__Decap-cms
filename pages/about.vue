<template>
    <ALayoutContent>
        <MiscParseMarkdown :markdownString="about[locale].content" />
    </ALayoutContent>
</template>

<script setup>
import { LayoutContent as ALayoutContent } from 'ant-design-vue'
import { useLocaleStore } from '@/store/locale';
import { storeToRefs } from 'pinia'

const store = useLocaleStore()
const { locale } = storeToRefs(store)

const { data: about } = reactive(await useAsyncData("about", () =>
    queryContent("/pages/about").findOne())
);

</script>
