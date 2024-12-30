<template>
  <div class="iii px-4">
    <div class="max-w-[1480px] justify-between w-[100%] mx-auto my-4 z-50">
      <img class="w-[150px] mb-5" src="../../assets/images/bargram.png" />
      <p class="w-full max-w-[600px] lg:max-w-[800px] 2xl:max-w-[1000px]">
        شرکت باربری و حمل و نقل
        <span class="text-orange-500">شایان ترابر</span> همواره در تلاش بوده تا
        علاوه بر خدمت رسانی بر اساس جدیدترین متدهای حمل‌ و نقلی روز دنیا سبب
        صرفه جویی اقتصادی برای مشتریان خود شود.
      </p>
      <v-row class="flex z-50">
        <v-col cols="6" lg="3">
          <div class="z-50 mt-4">
            <h2 class="text-orange-500 font-bold">دسترسی سریع</h2>
            <ul class="px-3 md:px-0">
              <li
                v-for="(item, index) in footer_items_1"
                :key="index"
                class="my-4"
              >
                <router-link :to="item.url" class="ml-4 flex items-center">
                  <div
                    class="w-[10px] h-[10px] bg-orange-500 rounded-full ml-3"
                  ></div>

                  <span>{{ item.title }}</span>
                </router-link>
              </li>
              <li class="my-4">
                <a
                  target="_blank"
                  :href="blog.url"
                  class="ml-4 flex items-center"
                >
                  <div
                    class="w-[10px] h-[10px] bg-orange-500 rounded-full ml-3"
                  ></div>

                  <span>{{ blog.title }}</span>
                </a>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="6" lg="3">
          <div class="z-25 mt-4">
            <h2 class="text-orange-500 font-bold">ارتباط با ما</h2>

            <ul class="px-3 md:px-0">
              <li
                v-for="(item, index) in footer_items_2"
                :key="index"
                class="my-4"
              >
                <div :href="item.url" class="ml-4 flex items-center">
                  <div
                    class="w-[10px] h-[10px] bg-orange-500 rounded-full ml-3"
                  ></div>

                  <span>{{ item.title }}</span>
                </div>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col cols="6" lg="3">
          <div class="z-25 mt-4">
            <h2 class="text-orange-500 font-bold">مجوز ها</h2>
            <v-row class="mt-4">
              <!-- <img
                class="max-w-[70px] ml-2 cursor-pointer"
                @click="opentLink(1)"
                src="../../assets/images/EnamadBackground.png"
              /> -->
              <!-- <v-col cols="6" >

                <img class="max-w-[70px]" src="../../assets/images/EnamadBackground.png"/> 
              </v-col> -->
              <div style="display: flex">
                <!-- <div>
                  <img
                    referrerpolicy="origin"
                    id="rgvjwlaooeukesgtsizpjzpe"
                    style="cursor: pointer"
                    @click='opentLink(3)'
                    alt="logo-samandehi"
                    src="https://logo.samandehi.ir/logo.aspx?id=348097&p=qftishwlaqgwlymabsiyyndt"
                  />
                </div> -->
                <div>
                  <a
                    referrerpolicy="origin"
                    target="_blank"
                    href="https://trustseal.enamad.ir/?id=351728&amp;Code=qXQx0wv5KzZC2eN86kUJ"
                    ><img
                      referrerpolicy="origin"
                      src="../../assets/images/EnamadBackground.png"
                      alt=""
                      class="max-w-[70px]"
                      style="cursor: pointer"
                      id="qXQx0wv5KzZC2eN86kUJ"
                  /></a>
                </div>
              </div>
              <a href="https://bargram.ir/nezamSenfi.jpg" target="_blank"
                ><img
                  src="https://bargram.ir/Nezam-Senfi.png"
                  class="max-w-[100px]"
              /></a>
              <!-- <img class="max-w-[70px] cursor-pointer" @click="opentLink(2)" src="../../assets/images/Nezam-Senfi.png" /> -->
            </v-row>
          </div>
        </v-col>
        <v-col cols="12">
          <p class="text-gray-500 text-sm">
            تمام حقوق متعلق به سایت شایان ترابر می باشد. هرگونه کپی برداری ممنوع
            است. طراحی سایت و سئو سایت توسط شرکت شایان ترابر
          </p>
        </v-col>
      </v-row>
    </div>

    <!-- <img
      src="../../assets/images/footer-way.webp"
      class="absolute left-0 bottom-0 w-full opacity-15 xl:opacity-100"
    /> -->
    <img
      src="../../assets/images/footer-truck.png"
      class="z-10 absolute left-0 bottom-[5%] w-[600px] opacity-15 xl:opacity-100"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const footer_items_1 = ref([
  { title: "درباره ما", url: "/about-us" },
  { title: "تماس با ما", url: "/contact-us" },
  {
    title: "قوانین و مقررات",
    url: "/terms-and-conditions",
  },
  {
    title: "ثبت شکایات",
    url: "/register-complaints",
  },
]);
const blog = ref({ title: "وبلاگ", url: "https://bargram.ir/blog/" });
const footer_items_2 = ref([
  {
    title: "مشهد _ بلوار وکیل آباد _ بلوار اقبال لاهوری _ اقبال لاهوری 15 ",
    url: "https://bargram.ir/aboutus",
  },
  { title: "info@bargram.ir", url: "https://bargram.ir/contactus" },

  { title: "0910-985-5700", url: "oooooooo" },
  { title: "۰۵۱-۳۵۰۱۹۳۷۰", url: "oooooooo" },
  { title: "۰۵۱-۳۵۲۵۷۰۵۹", url: "oooooooo" },
]);
const opentLink = (index) => {
  if (index == 1) {
    window.open(
      "https://trustseal.enamad.ir/?id=351728&amp;Code=qXQx0wv5KzZC2eN86kUJ",
      "_blank"
    );
  }
   else if (index == 2) {
    window.open("https://bargram.ir/nezamSenfi.jpg", "_blank");
  }
   else if (index == 3) {
    // window.open("https://bargram.ir/nezamSenfi.jpg", "_blank");
    window.open("https://logo.samandehi.ir/Verify.aspx?id=348097&p=xlaoaodsmcsiobpdpfvljyoe", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")
  }
};
</script>
<style scoped>
.iii {
  background-image: url("../../assets/images/footer-way.webp");
  display: flex;
  background-size: 100% 100%;
  justify-content: space-between;
  flex-direction: column;
  position: relative;

  min-height: 700px;
}
</style>