<!-- @format -->

<template>
  <div>
    <div class="relative">
      <input
        type="text"
        class="border w-full h-[50px] p-2"
        :class="`custom-input` + props.id"
        :placeholder="props.placeholder ?? 'انتخاب تاریخ'"
      />
      <v-icon style="position: absolute; left: 10px; top: 10px"
        >mdi-calendar</v-icon
      >
      <v-icon
        v-if="selectedDate"
        @click="selectedDate = null"
        style="position: absolute; left: 35px; top: 10px"
        >mdi-close</v-icon
      >
      <span
        v-if="props.title"
        class="!absolute right-3 top-[-10px] px-2 bg-white"
        style="font-size: 14px"
        >{{ props.title }}</span
      >
    </div>

    <DatePicker
      v-model="selectedDate"
      format="YYYY-MM-DD"
      clearable
      display-format="jYYYY-jMM-jDD"
      :custom-input="`.custom-input` + props.id"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";
import DatePicker from "vue3-persian-datetime-picker";
const selectedDate = ref(null);
const emit = defineEmits(['selectedDate'])
watch(
  () => selectedDate.value,
  () => {
    if (selectedDate.value) {
      emit("selectedDate",selectedDate.value)
    }
  }
);
const props = defineProps({
  // headers: {
  //   type: Array,
  //   required: true,
  // },
  title: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: false,
  },
  // items: {
  //   type: Array,
  //   required: true,
  // },
  // loading: {
  //   type: Boolean,
  //   required: false,
  // },
  // showExpand: {
  //   type: Boolean,
  //   required: false,
  // },
  // pageinationData: {
  //   type: Object,
  //   required: false,
  // },
});
</script>

<style scoped>
/* استایل‌های مورد نیازتان را می‌توانید اینجا اضافه کنید */
</style>
