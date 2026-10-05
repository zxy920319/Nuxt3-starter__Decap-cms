<template>
  <section id="sponsors" class="section bg-alt">
    <div class="container">
      <div class="sec-hd">
        <span class="sec-label">{{ forum.sponsors.label }}</span>
        <h2 class="sec-title">{{ forum.sponsors.title }}</h2>
        <p class="sec-desc">{{ forum.sponsors.desc }}</p>
      </div>
      <a class="final-partner-poster-link" :href="forum.sponsors.poster" target="_blank" rel="noopener noreferrer">
        <img class="final-partner-poster" :src="forum.sponsors.poster" :alt="forum.sponsors.poster_alt" width="1347" height="1167" loading="lazy" decoding="async">
      </a>
      <div class="final-partner-groups">
        <div v-for="group in forum.sponsors.groups" :key="group.label" class="final-partner-group">
          <h3>{{ group.label }}</h3>
          <ul><li v-for="name in group.names" :key="name">{{ name }}</li></ul>
        </div>
      </div>
      <p class="final-partner-contact">{{ forum.sponsors.contact_label }} <a href="mailto:europe.forum@vcwi.nl">europe.forum@vcwi.nl</a></p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useLocaleStore } from '@/store/locale'
const { locale } = storeToRefs(useLocaleStore())
const { data: t } = await useAsyncData('lang', () => queryContent('/i18n/locales').findOne())
const forum = computed(() => t.value[locale.value].forum)
</script>
