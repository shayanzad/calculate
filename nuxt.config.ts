/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
const routes = require("./routes/index.js");
export default defineNuxtConfig({
  ssr: false,
  target: "static",
  devtools: { enabled: true },
  imports: {
    autoImport: true,
  },
  plugins: [
    // ...others
    { src: "~/plugins/datePicker", mode: "client" },
    { src: "~/plugins/getPersianDate", mode: "client" },
    { src: "~/plugins/seprate.js", mode: "client" },
    { src: "~/plugins/Translate.js", mode: "client" },
    { src: "~/plugins/vue-sweetalert2.js", mode: "client" },
  ],
  toast: {
    position: "buttom-left",
    register: [
      // Register custom toasts
      // {
      //   name: 'my-error',
      //   message: 'Oops...Something went wrong',
      //   options: {
      //     type: 'error'
      //   }
      // }
    ],
  },
  router: {
     

    extendRoutes(nuxtRoutes, resolve) {
      routes.forEach((route) => {
        nuxtRoutes.push({
          name: route.name,
          path: route.path,
          component: resolve(__dirname, route.component),
        });
      });
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    // buildAssetsDir: '/something/',
    head: {
      // htmlAttrs: { dir: 'rtl', lang: 'fa' },
      link: [
        { rel: "icon", type: "image/png", href: "./assets/images/bargram.png" },
      ],
    },
  },
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "nuxt-swiper",

    //...
  ],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/dddddddddd",
  //       permanent: true,
  //     },
  //   ];
  // },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: [
    "~/assets/css/main.css",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/css/font.css",
    // "~leaflet/dist/leaflet.css"
  ],
  server: {
    hmr: {
      protocol: "ws",
      host: "0.0.0.0",
    },
  },
});
