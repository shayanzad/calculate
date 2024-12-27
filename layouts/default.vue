<template>
  <div class="dark:bg-sky-900">
    <Header_user />
 
      <div class="justify-start w-[100%] m-auto mb-[100px]">
        <slot />
      </div>
     <!-- <Footer_user /> -->
  </div>
</template>
<script setup lang="ts">

import Header_user from "../components/main/header_user.vue";
 </script>
<style></style>