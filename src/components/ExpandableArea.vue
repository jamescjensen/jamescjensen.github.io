<template>
  <section class="expandable-area">
    <button
      :aria-controls="contentId"
      :aria-expanded="expanded"
      class="expansion-trigger"
      type="button"
      @click="expanded = !expanded"
    >
      <span><slot name="title" /></span>
      <v-icon :icon="expanded ? 'mdi-chevron-down' : 'mdi-chevron-right'" :size="iconSize" />
    </button>

    <div v-if="expanded" :id="contentId" class="expansion-content">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, useId } from 'vue'

  const props = withDefaults(defineProps<{
    iconSize?: string
    initialExpanded?: boolean
  }>(), { iconSize: '14px', initialExpanded: true })

  const expanded = ref(props.initialExpanded)
  const contentId = useId()
</script>
