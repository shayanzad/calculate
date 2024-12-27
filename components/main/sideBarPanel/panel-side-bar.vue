<template>
  <v-card
    class="border w-[70px] md:w-[300px] min-w-[70px] h-fit min-h-[500px] mb-5"
    style="border-radius: 20px"
  >
    <div
      @click="toggleMenu"
      class="cursor-pointer flex justify-center items-center py-6"
    >
      <img
        src="../../../assets/images/bargram.png"
        class="w-[120px] h-[42px] hidden lg:inline-block"
      />
      <v-icon class="lg:!hidden"> mdi-menu </v-icon>
    </div>
    <v-divider class="w-[80%] mx-auto border-opacity-100"></v-divider>
    <div class="py-1"></div>
    <ul class="px-2 min-w-[300px]">
      <sideBarItem v-for="(item, index) in items" :key="index" :itemMenue="item" :activeItem="showActiveItem(item.path)" >
        <!-- <nuxt-link
          v-if="!item.children?.length"
          :to="item.path"
          :class="showActiveItem(item.path) ? ' active_side_bar_item' : null"
          class="cursor-pointer h-[45px] flex justify-start items-center px-2 rounded-sm m-1 mb-3 py-2 ttttt"
        >
          <v-icon class="ml-5" color="blue-grey-darken-2">{{
            item.icon
          }}</v-icon>
          <p class="hidden lg:inline-block" style="font-size: 18px">
            {{ item.title }}
            1
          </p>
        </nuxt-link>
        <div v-else>
          <div
            class="cursor-pointer h-[45px] flex justify-start items-center px-2 rounded-sm m-1 mb-3 py-2 ttttt"
            :class="showActiveItem(item.path) ? ' active_side_bar_item' : null"
          >
            <v-icon class="ml-5" color="blue-grey-darken-2">{{
              item.icon
            }}</v-icon>
            <p class="hidden lg:inline-block" style="font-size: 18px">
              {{ item.title }}
             </p>
          </div>
          <div class="border mx-auto">
            <div v-for="(itemChilde,indexChilde) in item.children" :key="indexChilde">
              {{itemChilde.title}}
            </div>
          </div>
        </div> -->
      </sideBarItem>
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
import { useCounterStore } from "~/stores";
import { ref, useRoute } from "#imports";
import { sideBarItems } from "../../../enums/panelSideBar";
import { FactoryItems } from "../../../enums/factorySideBar";
import { CompanyItems } from "../../../enums/companySideBar";
import sideBarItem from "./side-bar-item.vue";
const items = ref(FactoryItems);
const role = localStorage.getItem("role");
console.log(role);

if (role == "FACTORY") {
  items.value = FactoryItems;
} else if (role == "COMPANY") {
  items.value = CompanyItems;
}
const route = useRoute();
const menuStatus = useCounterStore();
const toggleMenu = () => {
  menuStatus.showMenuToggle();
};
const showActiveItem = (path: any) => {
  if (route.path == path) {
    return true;
  } else {
    return false;
  }
};
</script>
 


<style >
.ttttt {
  transition: all 0.1s;
}
.ttttt:hover {
  border-radius: 8px !important;
  border-right: 2px solid #fd7a37;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 232, 213, 1) 100%
  );
}
.active_side_bar_item {
  border-radius: 8px !important;
  border-right: 2px solid #fd7a37;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 232, 213, 1) 100%
  );
}
.menuSideBar {
  transition: all 0.4s;
}
</style>