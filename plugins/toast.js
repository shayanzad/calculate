/** @format */

import Toast from "vue-toastification/dist/index.mjs";
import { defineNuxtPlugin } from "#imports";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, { rtl: true, position: "bottom-center" });
});
