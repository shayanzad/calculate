<!-- @format -->

<template>
  <div class="iii p-1 flex justify-content-center">
    <div class="flex max-w-[1280px] justify-start w-[100%] m-auto">
      <div class="flex">
        <div class="flex items-center lg:!hidden" @click="toggleMenu()">
          <v-icon class="mx-2 cursor-pointer" title="">mdi-menu</v-icon>
        </div>
        <a href="https://bargram.ir">
          <img class="w-[150px]" src="../../assets/images/bargram.png" />
        </a>
      </div>
      <div class="flex justify-between items-center w-full">
        <div class="mx-10">
          <a href="https://bargram.ir">
            <span class=" hover:bg-slate-50 p-2"> صفحه اصلی </span>
          </a>
          <span
            class="mx-3 rounded-md p-2  "
            style="border: 2px solid orange;color: orange;"
          >
              محاسبه کرایه
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCounterStore } from "~/stores";
const menuStatus = useCounterStore();
import { useUserStore } from "~/stores/userStore";
const userStore = useUserStore();
const userData = ref<any>("");
const logout = () => {
  userStore.logout();
};
const logOut = () => {
  userStore.logout();
};
const toggleMenu = () => {
  menuStatus.showMenuToggle();
};
onMounted(() => {
  userData.value = localStorage.getItem("userName");
});
</script>

<style>
.iii {
  border-bottom: 1px solid rgba(128, 128, 128, 0.377);
}
</style>
