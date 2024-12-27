<template>
  <div v-if="loading" class="flex flex-col justify-center items-center h-[100vh]">
    <img class="max-w-[200px]" src="./assets/gifs/preloader.gif" alt="" />
    <span>در حال دریافت اطلاعات</span>
  </div>
  <NuxtLayout v-else dir="rtl">
    <v-app dir="rtl" class="h-fit">
      <NuxtPage class="min-h-[60vh]" />
    </v-app>
  </NuxtLayout>
</template>
<script setup>
const route = useRoute();
const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
    
  }, 1000);
});

useHead({
  title: route.meta.title,
});
</script>
<style>
.v-application__wrap{
  height: unset !important;
}
</style>