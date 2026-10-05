<template>
  <section id="sessions" class="section bg-alt">
    <div class="container">
      <div class="sec-hd">
        <span class="sec-label">{{ forum.sessions.label }}</span>
        <h2 class="sec-title">{{ forum.sessions.title }}</h2>
        <p class="sec-desc">{{ forum.sessions.desc }}</p>
      </div>
      <div class="final-tracks">
        <article v-for="session in forum.sessions.items" :id="'track-' + session.code.toLowerCase()" :key="session.code" class="final-track">
          <div class="track-label">TRACK {{ session.code }}</div>
          <h3>{{ session.title }}</h3>
          <p class="final-track-time">{{ session.time }}</p>
          <p>{{ session.description }}</p>
          <p class="final-track-names">{{ session.speakers.map(id => forum.guests[id].name).join(' · ') }}</p>
          <details class="final-track-details">
            <summary>{{ forum.sessions.view_speakers }}</summary>
            <div class="final-speaker-grid">
              <ForumSpeakerCard v-for="id in session.speakers" :key="id" :speaker="forum.guests[id]" :topic="forum.guests[id].topics[session.code]" />
            </div>
          </details>
          <a v-if="session.code === 'D'" class="final-source-link" href="#projects">{{ forum.sessions.projects_link }}</a>
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
