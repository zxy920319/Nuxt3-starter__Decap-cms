<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="sec-hd">
        <span class="sec-label">{{ forum.projects.label }}</span>
        <h2 class="sec-title">{{ forum.projects.title }}</h2>
        <p class="sec-desc">{{ forum.projects.desc }}</p>
      </div>
      <div class="final-project-grid">
        <article v-for="project in forum.projects.items" :key="project.name" class="final-project">
          <img :src="project.image" :alt="project.name" loading="lazy" decoding="async">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <h4>{{ forum.projects.founders_title }}</h4>
          <p class="final-founder-bio">{{ project.founders }}</p>
        </article>
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
