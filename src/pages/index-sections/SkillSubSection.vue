<template>
  <expandable-area icon-size="18px">
    <template #title>
      <span class="text-title-subsection"> Skills </span>
    </template>

    <div class="content-stack">
      <div>
        <div class="text-title-subsubsection">
          {{ 'Recent' }}
        </div>

        <div class="skill-list">
          <template v-for="skill in recentSkills" :key="skill">
            <v-chip class="skill-chip" density="compact" size="small">{{ skill }}</v-chip>
          </template>
        </div>
      </div>

      <div>
        <div class="text-title-subsubsection">
          {{ 'Previously Used' }}
        </div>

        <div class="skill-list">
          <template v-for="skill in previouslyUsed" :key="skill">
            <v-chip class="skill-chip" density="compact" size="small">{{ skill }}</v-chip>
          </template>
        </div>
      </div>
    </div>
  </expandable-area>
</template>

<script setup lang="ts">
  import ExpandableArea from '@/components/ExpandableArea.vue'

  const recentSkills = [
    'Go',
    'AWS',
    'Kubernetes',
    'Protobuf',
    'Postgres',
    'TimescaleDB',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Grafana',
    'Prometheus',
    'LLM Integration',
  ]

  const previouslyUsed = [
    'HTML',
    'CSS',
    'Google Cloud',
    'Quasar',
    'Vue',
    'React',
    'Perl',
    'C',
    'C++',
    'C#',
    'Unity',
    'Flutter / Dart',
    'Capacitor',
    'PHP',
    'Laravel',
    'Qt',
  ]
</script>
