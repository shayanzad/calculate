<template>
  <!-- {{  menuSelected}} -->
  <NuxtLink :to="props.item.to">
    <li class="menu-item  hover:text-indigo-500 flex justify-between cursor-pointer  items-center"  style="font-size: 0.9rem;" @click="handelShowChild">
    <div><v-icon class="ml-2">{{props.item.icon}}</v-icon>
    <span>{{ props.item.title }}</span></div>
     <span
      v-if="props.item.children && props.item.children.length > 0"
      class="iconAnimation"
      :class="{ rotate: showChild }"
    >
      <v-icon>mdi-chevron-down</v-icon>
    </span>
  </li>
  </NuxtLink>
  <ul v-if="showChild" ref="childBox" class="box-child bg-slate-100 border rounded-md p-5">
    <template v-for="(child, index) in props.item.children"
      :key="index">
      <NuxtLink   :to="child.to">
          
          <li
           style="font-size: 0.9rem;"
          
          class="menu-item cursor-pointer flex items-center hover:text-indigo-500"
          >
      <v-icon>mdi-circle-small</v-icon>
          <span>
            {{ child.title }}
          </span>

        </li>
    </NuxtLink>
    </template>
  </ul>
</template>
  
  <script setup lang="ts">
import type { MenuItemInterface } from "../../../interfaces/Sidebar.Interface";
import { ref,useRoute } from "#imports";
const route=useRoute()
const props = defineProps<{
  item: MenuItemInterface;
}>();
const menuSelected=localStorage.getItem("token")
const showChild = ref(false);
const childBox = ref<HTMLElement>();

const handelShowChild = () => {
  console.log(route.name);
  if (!props.item.children || props.item.children.length === 0) return;
  
  // localStorage.setItem("menuSelected",1)
  showChild.value = !showChild.value;
};
// watch(
//   () => route.path,
//   () => {
//      console.log(route);
     
//   },
// );

</script>
  
  <style scoped>
.menu-item {
  height: 48px;
  /* @apply tw-text-stone-500 tw-px-5 tw-flex tw-items-center tw-cursor-pointer tw-rounded-lg tw-mx-2 tw-select-none tw-duration-200; */
}

.rotate {
  transform: rotate(180deg);
  transition: transform 0.2s ease;
}

.box-child {
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  box-shadow: inset 0px 0px 10px 0px rgba(198, 198, 198, 0.2);
}

.box-child .menu-item {
  /* @apply tw-pr-7; */
}

/* انیمیشن نمایش و مخفی کردن زیرمنو */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
  