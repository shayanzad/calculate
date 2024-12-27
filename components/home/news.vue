 
<template>
  <div class="w-full mb-[100px] px-4">
   
    <div class="max-w-[1140px] mx-auto mt-[100px] p-3 lg:p-0">
      <div class="flex w-full justify-center">
        <h2>آخرین اخبار</h2>
      </div>
      <v-row>
        <v-col cols="12" md="6">
          <div>
            <img
              class="w-full max-h-[250px] cursor-pointer"
              @click="showNew(newsList[0]?.url)"
              :src="newsList[0]?.image"
            />
            <div class="flex flex-col">
              <h4 @click="showNew(newsList[0]?.url)" class="cursor-pointer">
                {{ newsList[0]?.title }}
              </h4>
              <div class="text-gray-400 my-3">
                <span>
                  {{ newsList[0]?.date }}
                </span>
                <v-icon class="text-gray-500"
                  >mdi-star-four-points-small</v-icon
                >
                <span
                  v-for="(tag, indexTag) in newsList[0]?.categories"
                  :key="indexTag"
                >
                  {{ tag }}
                </span>
              </div>
              <span
                class="text-gray-500 cursor-pointer"
                @click="showNew(newsList[0]?.url)"
              >
                {{ newsList[0]?.excerpt }}
              </span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div
            v-for="(item, index) in newsList"
            :key="index"
            class="mb-5 cursor-pointer hover:shadow-sm"
          >
            <div v-if="index > 0" class="flex" @click="showNew(item.url)">
              <img class="w-[120px] h-[120px]" :src="item.image" />
              <div class="flex flex-col px-2">
                <h4>
                  {{ item.title }}
                </h4>
                <div class="text-gray-400">
                  <span>
                    {{ item.date }}
                  </span>
                  <v-icon class="text-gray-500"
                    >mdi-star-four-points-small</v-icon
                  >
                  <span
                    v-for="(tag, indexTag) in item.categories"
                    :key="indexTag"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const getNews = async () => {
  const { data: responseData } = await useFetch(
    "https://bargram.ir/wp-json/v1/news",
    {
      method: "get",
    }
  );
  console.log(responseData._rawValue);
  newsList.value = responseData._rawValue;
};
const showNew = (url) => {
  window.open(url, "_blank");
};
const mainNew = ref({
  id: 1,
  title:
    "در نشست تخصصی رؤسای پلیس راه و مدیران‌کل راهداری و حمل و نقل جاده‌ای کشور، همدلی و تعامل دو دستگاه مورد تاکید قرار گرفت",
  date: "09 شهریور 1402 ",
  url: "www",
  tags: ["اخبار"],
  btnText: "ورود به پنل",
  shortText:
    " در دومین نشست تخصصی رؤسای پلیس راه و مدیران‌ کل راهداری و حمل و نقل .",
});
const newsList = ref([
  {
    id: 1,
    image:
      "https://bargram.ir/wp-content/uploads/2024/03/1709817126461p6dj056dqma9uofj88bse7456q.jpeg",
    title: "نسخه صاحب کالا",
    date: "140305-06",
    url: "www",
    categories: ["اخبار"],

    excerpt: " ابی ناوگان در لحظه از امکانات دیگر این سامانه  .",
  },
]);
onMounted(() => {
  getNews();
});
</script>

<style>
</style>