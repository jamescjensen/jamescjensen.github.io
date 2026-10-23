<template>
  <v-app>
    <v-app-bar
      color="primary"
      :elevation="2"
      :extension-height="smAndUp ? 48 : 88"
      :height="50"
    >
      <v-app-bar-title class="text-center">James (Jack) Jensen</v-app-bar-title>

      <template #extension>
        <nav aria-label="Contact and resources" class="header-links">
          <a
            href="https://www.linkedin.com/in/james-c-jensen"
            rel="noopener noreferrer"
            target="_blank"
          >LinkedIn</a>

          <a
            href="https://github.com/jamescjensen"
            rel="noopener noreferrer"
            target="_blank"
          >GitHub</a>

          <a href="mailto:jcjens94@gmail.com">jcjens94@gmail.com</a>

          <a
            :href="resumeUrl"
            rel="noopener noreferrer"
            target="_blank"
          >Resume</a>

          <a
            href="https://github.com/jamescjensen/jamescjensen.github.io"
            rel="noopener noreferrer"
            target="_blank"
          >Source</a>
        </nav>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { useDisplay } from 'vuetify'

  const { smAndUp } = useDisplay()
  const resumeUrl = `${import.meta.env.BASE_URL}James%20Jensen%20Resume.pdf`
</script>

<style scoped>
.header-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px 24px;
    width: 100%;
    padding: 8px 16px;
}

.header-links a {
    color: inherit;
    white-space: nowrap;
}
</style>
