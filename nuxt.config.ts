// https://nuxt.com/docs/api/configuration/nuxt-config
import eslint from 'vite-plugin-eslint2';

export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    plugins: [eslint()],
  },

  compatibilityDate: '2024-08-17',
})