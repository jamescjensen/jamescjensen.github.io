<template>
  <expandable-area icon-size="20px">
    <template #title>
      <span class="text-title"> Education </span>
    </template>

    <div class="content-stack">
      <div>
        <span class="text-title-subsection">
          <span class="text-title-subsection inline-spacing">
            University of St. Thomas
          </span>

          <span class="text-subtitle-subsection inline-spacing">
            3.6 / 4.0 (major)
          </span>

          <span class="text-subtitle-subsection">
            B.A. in Computer and Information Sciences, minor in Statistics.
          </span>
        </span>

        <div :style="{ fontStyle: 'italic' }">
          St. Paul, MN, USA. Sep 2012 - Jun 2016.
        </div>
      </div>

      <div>
        <span class="text-title-subsection">
          <span class="text-title-subsection inline-spacing"> Yonsei University </span>

          <span class="text-subtitle-subsection"> Study Abroad. </span>
        </span>

        <div :style="{ fontStyle: 'italic' }">
          Seoul, South Korea. Summer 2015.
        </div>
      </div>
    </div>
  </expandable-area>
</template>

<script setup lang="ts">
  import ExpandableArea from '@/components/ExpandableArea.vue'
</script>
