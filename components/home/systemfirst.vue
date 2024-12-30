<template>
  <div class="pageParent mb-10 md:mb-1">
    <v-row class="justify-center max-w-[1140px] mx-auto">
      <v-col cols="12" md="6">
        <img src="../../assets/images/svg/systrmLast.svg" />
      </v-col>
      <v-col cols="12" md="6">
        <div class="flex flex-col">
          <div class="text-start my-4">
            <h2 class="font-bold text-xl">
              سامانه پایانه بار مجازی شایان ترابر(برای صاحبان کالا)
            </h2>
          </div>
          <div>
            <p>
              {{ aboutUsText }}
            </p>
          </div>
        </div>
        <div class="mt-5">
        <router-link to="/owners-app">

          <v-btn variant="outlined"  color="#f97316">دانلود اپلیکیشن صاحبان کالا</v-btn>
        </router-link>
        </div>
        </v-col
      >
    </v-row>
  </div>
</template>
  <script setup>
import { ref } from "vue";
const aboutUsText = ref(
  "چنانچه بدنبال یک باربری مطمئن برای حمل بار می گردید بی شک شایان ترابر می تواند برای شما بسیار مناسب باشد. شایان ترابر با دارار بودن امکانات پیشرفته ای همچون اعلام بار- نوبت دهی بارگیری و تخلیه – رصد ناوگان و چندین امکانات مفید دیگر، طعم جدیدی از باربری و حمل بار را برای شما به ارمغان می آورد. ما اولین سامانه هوشمند هستیم که دارای صدور بانامه آنلان و برخط هستیم و به محض صدور شما می توانید آن را در پنل خود مشاهده نمائید. با شایان ترابر شما می توانید ضمن حمل بار در منافع درآمد شایان ترابر نیز شریک باشید."
);
</script>
  
  <style>
.pageParent {
  min-height: 250px;
}
</style>