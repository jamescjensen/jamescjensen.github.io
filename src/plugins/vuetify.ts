/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com
 */

import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default createVuetify({
  theme: {
    defaultTheme: 'system',
    utilities: true,
    themes: {
      light: {
        colors: {
          'primary': '#1d1d1d',
          'secondary': '#26a69a',
          'accent': '#9c27b0',
          'background': '#ffffff',
          'surface': '#ffffff',
          'on-primary': '#ffffff',
          'on-accent': '#ffffff',
        },
      },
      dark: {
        colors: {
          'primary': '#1d1d1d',
          'secondary': '#26a69a',
          'accent': '#9c27b0',
          'background': '#121212',
          'surface': '#1d1d1d',
          'on-primary': '#ffffff',
          'on-accent': '#ffffff',
        },
      },
    },
  },
  display: {
    mobileBreakpoint: 'md',
    thresholds: {
      xs: 0,
      sm: 600,
      md: 840,
      lg: 1145,
      xl: 1545,
      xxl: 2138,
    },
  },
})
