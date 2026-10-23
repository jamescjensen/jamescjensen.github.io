<template>
  <expandable-area icon-size="20px">
    <template #title>
      <span class="text-title"> Introduction </span>
    </template>

    <div class="introduction-grid">
      <div>
        <p>
          I'm a backend software engineer with 10 years of experience designing, building, and scaling distributed systems and cloud-native applications across industrial SaaS, healthcare, and e-commerce.
        </p>

        <p>
          My experience includes system architecture, performance optimization, production infrastructure, and modernizing complex services. I've built systems handling millions of requests per day, improved database performance while reducing infrastructure costs, and developed integrations with external platforms and industry standards.
        </p>

        <p>
          I primarily work with Go, TypeScript/Node.js, PostgreSQL, Kubernetes, and AWS/GCP. I've also led engineering teams, most recently managing an 11-person engineering organization. While I enjoy technical leadership and mentoring, my primary interests are hands-on development, system architecture, and solving complex backend problems.
        </p>

        <p>I'm a US citizen based in Seoul, South Korea (UTC+9), with an F-2 visa, so no employer visa sponsorship is required for work in Korea. I'm interested in Senior/Staff Backend Engineer and hands-on Technical Lead opportunities with English-speaking teams in Korea, as well as international remote roles across Asia and Europe that support working from South Korea.</p>

        <skill-sub-section />
      </div>

      <div class="portrait-container">
        <v-img
          alt="James (Jack) Jensen"
          :aspect-ratio="1"
          class="image"
          cover
          :src="portrait"
        />
      </div>
    </div>
  </expandable-area>
</template>

<script setup lang="ts">
  import portrait from '@/assets/me.jpeg'
  import ExpandableArea from '@/components/ExpandableArea.vue'
  import SkillSubSection from './SkillSubSection.vue'
</script>

<style scoped lang="scss">
.image {
  border-radius: 100px;
  flex-shrink: 0;
  max-height: 300px;
  max-width: 300px;
  width: 100%;
}
</style>
