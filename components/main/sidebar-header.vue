<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="menuStatus.status"
          :location="$vuetify.display.mobile ? 'right' : undefined"
          temporary
        >
          <div
            @click="toggleMenu"
            class="w-[30px] cursor-pointer absolute left-2 top-2"
          >
            <v-icon class="mx-2" title="">mdi-close</v-icon>
          </div>
          <div class="py-5"></div>
          <ul>
            <li
              class="rounded-sm m-1"
              v-for="(item, index) in items"
              :key="index"
              :class="showActiveItem(item.path) ? 'border bg-slate-300' : null"
            >
              <nuxt-link
                :to="item.path"
                class="cursor-pointer hover:bg-slate-300 h-[45px] flex justify-start items-center px-2"
              >
                {{ item.title }}</nuxt-link
              >
            </li>
          </ul>
        </v-navigation-drawer>
  
        <v-main>
          <slot />
        </v-main>
      </v-layout>
    </v-card>
  </template>
  <script setup lang="ts">
  import { useCounterStore } from "../../stores";
  import { ref, useRoute } from "#imports";
  import { sideBarItems } from "../../enums/sidebar";
  const items = ref(sideBarItems);
  const route = useRoute();
  const menuStatus = useCounterStore();
  const toggleMenu = () => {
    menuStatus.showMenuToggle();
  };
  const showActiveItem = (path: string) => {
    if (route.path == path) {
      return true;
    } else {
      return false;
    }
  };
  </script>
   
  
  
  <style >
  .menuSideBar {
    transition: all 0.4s;
  }
  </style>