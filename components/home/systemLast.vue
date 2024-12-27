<template>
  <div class="pageParent ">
    <v-row class="justify-center max-w-[1140px] mx-auto">
      <v-col cols="12" md="6">
        <div class="flex flex-col">
            <div class="text-start my-4">
            <h2 class="font-bold text-xl">
              سامانه پایانه بار مجازی بارگرام (برای رانندگان)
            </h2>
          </div>
          <div>
            <p>
              {{ aboutUsText }}
            </p>
          </div>
        </div>
        <div class="mt-5">
        <router-link to="/drivers-app">

          
          <v-btn variant="outlined"  color="#f97316">دانلود اپلیکیشن   رانندگان</v-btn>
        </router-link>
        </div>
        </v-col
      >
      <v-col cols="12" md="6">
        <img src="../../assets/images/svg/systrmLast.svg" />
      </v-col>
    </v-row>
  </div>
</template>
  <script setup>
import { ref } from "vue";
const aboutUsText = ref(
  "در عصر ارتباط نیاز به سیستم یکپارچه عادلانه برای سامانه دهی به بازار آشفته حمل و نقل مشهود بود. ما بر آن شدیم در این سیستم با جمع نمودن رانندگان بصورت یک سازمان بزرگ و بهره مندی از صف  و همچنین موقعیت یابی ناوگان به صاحبان کالا خدمات دهیم و دلاال بازی و رانت در صنعت حمل و نقل را صفر برسانیم. ما مدعی هستیم در این سامانه که هیچ کمیسیون اضافی و هیچ دلال بازی صورت نمی گیرد و رانندگان بطور مستقیم با صاحبان کالا ارتباط برقرار می کنند. پس از اینکه بارگیری صورت پذیرفت بارنامه بصورت کاملا الکترونیکی و بصورت کاملا بر خط بر روی نرم افزار نسخه رانندگان قرار خواهد گرفت و تردد های بی خود برای پیدا کردن بار و دریافت بارنامه به حداقل خواهد رسید"
);
</script>
  
  <style>
.pageParent {
  min-height: 250px;
  
}
</style>