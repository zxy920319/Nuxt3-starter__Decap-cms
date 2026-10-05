<template>
  <section id="schedule" class="section bg-alt">
    <div class="container">
      <div class="sec-hd">
        <span class="sec-label">{{ forum.schedule.label }}</span>
        <h2 class="sec-title">{{ forum.schedule.title }}</h2>
        <p class="sec-desc">{{ forum.schedule.desc }}</p>
        <a class="final-source-link" :href="forum.schedule.source_href" target="_blank" rel="noopener noreferrer">{{ forum.schedule.source_label }}</a>
      </div>
      <div class="schedule-tabs">
        <button v-for="tab in forum.schedule.tabs" :key="tab.day" type="button" class="tab-btn" :class="{ active: activeDay === tab.day }" :aria-pressed="activeDay === tab.day" @click="activeDay = tab.day">{{ tab.label }}</button>
      </div>
      <div v-for="tab in forum.schedule.tabs" :id="'day' + tab.day" :key="tab.day" class="day-content" :class="{ active: activeDay === tab.day }">
        <h3 class="final-day-title">{{ tab.label }}</h3>
        <ol class="final-agenda">
          <li v-for="item in tab.items" :key="item.time + item.title">
            <span class="final-agenda-time">{{ item.time }}</span>
            <div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useLocaleStore } from '@/store/locale'
const { locale } = storeToRefs(useLocaleStore())
const { data: t } = await useAsyncData('lang', () => queryContent('/i18n/locales').findOne())
const forum = computed(() => t.value[locale.value].forum)
const activeDay = ref(1)
</script>
