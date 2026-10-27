<template>
  <div class="portfolio-page">
    <div class="portfolio-content" :class="{ 'full-width': useFullWidth }">
      <introduction-section id="introduction-section" />
      <v-divider class="section-divider" color="primary" />
      <job-section id="job-section" />
      <v-divider class="section-divider" color="primary" />
      <education-section id="education-section" />
    </div>

    <v-btn
      v-if="width >= 1250"
      :aria-label="useFullWidth ? 'Use compact page width' : 'Use full page width'"
      :aria-pressed="useFullWidth"
      class="width-toggle"
      color="primary"
      :icon="useFullWidth ? 'mdi-arrow-collapse-horizontal' : 'mdi-arrow-expand-horizontal'"
      :title="useFullWidth ? 'Use compact page width' : 'Use full page width'"
      @click="useFullWidth = !useFullWidth"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useDisplay } from 'vuetify'
  import EducationSection from './index-sections/EducationSection.vue'
  import IntroductionSection from './index-sections/IntroductionSection.vue'
  import JobSection from './index-sections/JobSection.vue'

  const { width } = useDisplay()
  const useFullWidth = ref(false)
</script>
