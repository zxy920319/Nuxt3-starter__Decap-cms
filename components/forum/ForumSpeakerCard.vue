<template>
  <article class="final-speaker">
    <img class="final-speaker-photo" :src="speaker.image" :alt="speaker.name" width="120" height="120" loading="lazy" decoding="async">
    <div>
      <h4>{{ speaker.name }}</h4>
      <p class="final-speaker-role">{{ speaker.role }}</p>
    </div>
    <p v-if="topic" class="final-speaker-topic">{{ topic }}</p>
    <p class="final-speaker-bio">{{ speaker.biography }}</p>
  </article>
</template>

<script setup>
defineProps({
  speaker: { type: Object, required: true },
  topic: { type: String, default: '' },
})
</script>
