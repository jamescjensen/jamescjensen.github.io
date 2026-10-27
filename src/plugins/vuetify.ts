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
          'background': '#F8F9FA',
          'surface': '#FCFCFC',
          'on-background': '#5C6166',
          'on-surface': '#5C6166',
          'primary': '#F29718',
          'on-primary': '#0D1017',
          // Darken Ayu's blue so links meet 4.5:1 on both light backgrounds.
          'secondary': '#1479AD',
          'on-secondary': '#FCFCFC',
        },
      },
      dark: {
        colors: {
          'background': '#0D1017',
          'surface': '#10141C',
          'primary': '#E6B450',
          'on-primary': '#0D1017',
          'secondary': '#59C2FF',
          'on-secondary': '#0D1017',
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
