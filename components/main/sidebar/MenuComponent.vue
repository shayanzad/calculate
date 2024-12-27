<template>
  
  <v-card
    class="border w-[70px] md:w-[15.5rem] min-w-[70px] h-fit min-h-[500px] mb-5 sideBarstyle"
    style="border-radius: 20px"
  >
     <div class="py-1"></div>
    <ul class="px-3">
      <MenuItemComponent
        v-for="item in menuItem"
        :key="item.title"
        :item="item"
      />
    </ul>
    <div class="h-[150px]"></div>
    <div class="p-2 relative">
      <div
        class="bg-indigo-400 w-full h-[130px] hidden lg:flex rounded-lg items-end justify-center"
      >
        <img
          src="../../../assets/images/side-panel-vector.png"
          class="absolute top-[-80px] left-[30px]"
          alt=""
        />
        <v-btn class="mb-3">پشتیبانی</v-btn>
      </div>
    </div>

    <!-- <slot /> -->
  </v-card>
</template>

<script setup lang="ts">
import type { MenuItemInterface } from "../../../interfaces/Sidebar.Interface";
import MenuItemComponent from "./MenuItemComponent.vue";
defineProps<{
  menuItem: MenuItemInterface[];
}>();
</script>

<style scoped>
.sideBarstyle {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>../../models