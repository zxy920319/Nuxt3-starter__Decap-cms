<template>
  <section id="keynotes" class="section">
    <div class="container">
      <div class="sec-hd">
        <span class="sec-label">{{ forum.keynotes.label }}</span>
        <h2 class="sec-title">{{ forum.keynotes.title }}</h2>
        <p class="sec-desc">{{ forum.keynotes.desc }}</p>
      </div>
      <div class="final-speaker-grid">
        <ForumSpeakerCard v-for="id in forum.keynotes.items" :key="id" :speaker="forum.guests[id]" :topic="forum.guests[id].topics.main" />
      </div>
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
