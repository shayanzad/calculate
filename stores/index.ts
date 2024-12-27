 

// Example using Composition API
import { defineStore } from "pinia";
import { ref } from "#imports";

export const useCounterStore = defineStore(
  "counter",
  () => {
    const status = ref(false);
    const showMenuToggle = () => {
      status.value=!status.value;
    };
    return { status, showMenuToggle };
  },
   
);