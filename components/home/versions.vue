<script setup >
const goto = (url) => {
  window.open(url, "_blank");
};
const versions = ref([
  {
    id: 1,
    title: "نسخه صاحب کالا",
    url: "https://panel.bargram.ir/auth/login",
    btnText: "ورود به پنل",
    description:
      "این سامانه داراری محیط اختصاصی برای صاحبان کالا می باشد که می توانند بطور اختصاصی در آن ثبت نام و بارهای خود را با خیال راحت حمل نمایند.ردیابی ناوگان در لحظه از امکانات دیگر این سامانه است.",
  },
  {
    id: 1,
    title: "نسخه شرکت حمل و نقل",
    url: "https://panel.bargram.ir/auth/login",
    btnText: "ورود به پنل",
    description:
      "چنانچه شرکتها حمل و نقل برای جذب ناوگان دچار چالش هستند می توانند در این سامانه بعنوان شرکت حمل و نقل ثبت نام و ضمن جذب ناوگان در زمینه صدور بارنامه نیز همکار بارگرام شوند.",
  },
  {
    id: 1,
    title: "نسخه رانندگان",
    url: "https://driver.bargram.ir",
    btnText: "ورود به پنل",
    description:
      "بارگرام عادلانه ترین سامانه آنلاین حمل و نقل است که بر پایه ثبت نوبت کار می کند. رانندگان گرامی برای پیوستن به این سیستم می توانند در آن ثبت نام و از مزایای آن بهره مند گردند.",
  },
]);
</script>

 
<template>
  <div class="ppppp relative">
    <v-row class="max-w-[1140px] mx-auto py-[100px] px-4 ffff">
      <v-col cols="12" md="6" class="border  rounded-md my-2 p-[30px]">
        
        <div>
          <h4 class="flex">
            <div
              class="w-[20px] h-[20px] bg-[#f97316] border rounded-full mb-[20px] ml-2"
            ></div>
            {{ versions[0].title }}
          </h4>
          <p class="my-[20px]">
            {{ versions[0].description }}
          </p>

          <v-btn
            variant="outlined"
            class="text-orange-600"
            color="#f97316"
            @click="goto(versions[0].url)"
          >
            {{ versions[0].btnText }}
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" lg="6" class=" hidden md:flex"></v-col>
      <v-col cols="12" md="6" class=" hidden md:flex"></v-col>

      <v-col cols="12" md="6" class="border rounded-md my-2 p-[30px]">
        <div>
          <h4 class="flex">
            <div
              class="w-[20px] h-[20px] bg-[#f97316] border rounded-full mb-[20px] ml-2"
            ></div>
            {{ versions[1].title }}
          </h4>
          <p class="my-[20px]">
            {{ versions[1].description }}
          </p>

          <v-btn
            variant="outlined"
            class="text-orange-600"
            color="#f97316"
            @click="goto(versions[1].url)"
          >
            {{ versions[1].btnText }}
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="border rounded-md my-2 p-[30px]">
        <div>
          <h4 class="flex">
            <div
              class="w-[20px] h-[20px] bg-[#f97316] border rounded-full mb-[20px] ml-2"
            ></div>
            {{ versions[2].title }}
          </h4>
          <p class="my-[20px]">
            {{ versions[2].description }}
          </p>

          <v-btn
            variant="outlined"
            color="#f97316"
            class="text-orange-600"
            @click="goto(versions[2].url)"
          >
            {{ versions[2].btnText }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <div class="background-image"></div>
  </div>
</template>
 

<style>
.ppppp {
  /* backdrop-filter: opacity:(5px); */
  /* background-color: #d5d8dc; */
  /* opacity: 0.1 !important; */
}
.ffff {
  z-index: 100;
  position: inherit;
}
.background-image {
  position: absolute;
  top: 10px;
  background: url("../../assets/images/version_bg.jpg");
  width: 100%;
  height: 100%;
  opacity: 0.08;
}
</style>