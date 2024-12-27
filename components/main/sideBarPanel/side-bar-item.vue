<template>
  <li>
    <nuxt-link
      :to="props.itemMenue.path"
      v-if="!props.itemMenue.children.length"
      class="cursor-pointer h-[51px] flex justify-start items-center px-2 rounded-sm m-1 mb-3 py-2 ttttt"
    >
      <v-icon class="ml-5" color="blue-grey-darken-2">{{
        props.itemMenue.icon
      }}</v-icon>
      <p class="hidden lg:inline-block" style="font-size: 18px">
        {{ props.itemMenue.title }}
      </p>
    </nuxt-link>
    <div
      v-else
      @click="handelShowChild"
      class="cursor-pointer h-[51px] flex justify-start items-center px-2 rounded-sm m-1 mb-3 py-2 ttttt"
    >
      <div class="flex w-full !justify-between">
        <div>
          <v-icon class="ml-5" color="blue-grey-darken-2">{{
            props.itemMenue.icon
          }}</v-icon>
          <p class="hidden lg:inline-block" style="font-size: 18px">
            {{ props.itemMenue.title }}
          </p>
        </div>
        <v-icon>mdi-chevron-down</v-icon>
       </div>
    </div>
    <div
      v-if="props.itemMenue.children.length"
      class="border rounded-md hover:!border-gray-700 "
      :class="showChild ? 'show' : 'hide'"
      ref="childBox"
    >
      <nuxt-link
        :to="item.path"
        v-for="(item, index) in props.itemMenue.children"
        :key="index"
      >
        <div class="">
          <v-icon>mdi-chevron-down</v-icon>
          <span>{{ item.title }}</span>
        </div>
      </nuxt-link>
    </div>
  </li>
</template>
<script setup>
import { ref } from "#imports";
import { defineProps } from "vue";
const showChild = ref(false)
const childBox = ref()

const handelShowChild = () => {
    if (!props.itemMenue.children || props.itemMenue.children.length === 0) return
    showChild.value = !showChild.value
    const h = childBox.value?.scrollHeight;
    if (childBox.value) {
        childBox.value.style.height = h + 'px';
    }
}
const props = defineProps({
  itemMenue: {
    type: Object,
    required: true,
  },
  activeItem: {
    type: Boolean,
    required: false,
  },
});
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

.box-child {
  transition: all 0.2s ease-in-out;
  overflow: hidden;
}
.box-child .menu-item {
  @apply pr-7;
}
.hide {
  height: 0 !important;
}

.show {
  margin: 0px 0 !important;
  height: 100%;
}
</style>