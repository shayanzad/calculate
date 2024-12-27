<!-- @format -->

<template>
  <div class="text-center my-3">
     <v-pagination
    dir="ltr"
    v-model="curentPage"
      :length="Number(ffff)"
      :total-visible="7"
      next-icon="mdi-menu-right"
      prev-icon="mdi-menu-left"
      
    ></v-pagination>
  </div>
</template>
<script setup>
import { ref,onMounted } from "#imports";
const emit = defineEmits(['curentPage'])

const props = defineProps({
  totalCount: 0,
  page: 1,
  pageinationData: {
    current_page: 1,
    total: 1,
    per_page: 20,
  },
});

const curentPage = ref(1)
const total = ref(1)
const per_page = ref(20)
const ffff = ref(1);
onMounted(()=>{
  setTimeout(() => {
     
    total.value=props.pageinationData.total;
    // curentPage.value=props.pageinationData.current_page;
    per_page.value=props.pageinationData.per_page;
    ffff.value=Math.round(total.value/per_page.value)
    
  }, 2000);
})
watch(
  () => curentPage.value,
  () => {
      emit("curentPage",curentPage.value)

  },
);
</script>
<style>
.v-pagination__list {
  direction: ltr !important;
}
</style>
