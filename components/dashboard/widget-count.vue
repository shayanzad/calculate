<template>
  <div>
    <div
      class="w-full h-[100px] border rounded-xl flex justify-center items-center relative"
    >
      <div
        :class=" `bg-gray-300`"
        class="flex items-center justify-center p-4 rounded-lg mx-5 w-[90%] absolute top-[-25px]"
      >
        <v-icon class="ml-3 text-white">{{ props.icon }}</v-icon>
        <span class="text-white">{{ props.title }}</span>
      </div>

      <div class="mt-3">
        <span style="font-size: 25px">{{ props.count }}</span>
      </div>
      <span class="absolute bottom-2 left-2 detail-widget">جزییات</span>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
<style>
.detail-widget {
   font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
}
</style>