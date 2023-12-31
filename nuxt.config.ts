// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // "@sidebase/nuxt-auth",
    "@bg-dev/nuxt-naiveui",
    "nuxt-icon",
    "nuxt-swiper",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/device",
  ],
  build: {
    transpile: ["trpc-nuxt"],
  },
  typescript: {
    shim: false,
  },
  imports: {
    // 只扫描带.config 后缀的文件,规范导入
    dirs: ["composables/config/*.{ts,js,mjs,mts}"],
  },
  css: ["./assets/base.css"],
});
