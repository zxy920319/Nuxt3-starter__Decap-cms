<template>
  <section id="visit" class="section visit-section">
    <div class="container">
      <div class="sec-hd">
        <span class="sec-label">{{ forum.visit.label }}</span>
        <h2 class="sec-title">{{ forum.visit.title }}</h2>
        <p class="sec-desc">{{ forum.visit.desc }}</p>
      </div>
      <div class="final-speaker-grid">
        <ForumSpeakerCard v-for="id in forum.visit.items" :key="id" :speaker="forum.guests[id]" />
      </div>
      <p class="visit-note">{{ forum.visit.note }} <a href="mailto:europe.forum@vcwi.nl">europe.forum@vcwi.nl</a></p>
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
