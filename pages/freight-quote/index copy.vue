<template>
  <div dir="rtl">
    <!-- <v-btn @click="gggg = true">لغو</v-btn> -->

    <div class="bg-slate-500">
      <div
        class="max-w-[1140px] m-auto p-3 h-[200px] flex justify-center flex-col"
      >
        <h1
          class="text-[35px] text-white border-r-8 pr-5 border-orange-500 font-bold"
        >
          استعلام کرایه حمل بار
        </h1>
        <h3 class="text-white text-[20px] mt-2">
          تجارت سودمند با محاسبه هوشمند کرایه حمل بار
        </h3>
      </div>
    </div>
    <div
      class="max-w-[1280px] m-auto mt-[50px] py-4 shadow-2xl px-5 md:px-1 pb-4"
    >
      <div>
        <div>
          <p class="py-2 pb-5">
            برای استعلام کرایه حمل بار، اطلاعات خواسته شده را وارد کرده، سپس روی
            دکمه
            <span class="text-orange-500"> محاسبه کرایه </span>

            حمل بار کلیک کنید تا کرایه پیشنهادی ترابرنت برای شما نمایش داده شود.
          </p>
        </div>
        <v-sheet class="mx-auto">
          <v-form
            fast-fail
            validate-on="submit lazy"
            ref="formValidation"
            @submit.prevent
          >
            <v-row>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  no-data-text="موردی برای نمایش وجود ندارد"
                  variant="outlined"
                  v-model="FormModel.originCode"
                  item-title="title"
                  item-value="code"
                  clearable
                  required
                  :items="citiesList"
                  :rules="[(v) => !!v || 'مبداء را مشخص کنید']"
                  label="مبداء"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  no-data-text="موردی برای نمایش وجود ندارد"
                  variant="outlined"
                  v-model="FormModel.DestinationCode"
                  item-title="title"
                  item-value="code"
                  required
                  clearable
                  :items="citiesList"
                  :rules="[(v) => !!v || 'مقصد را مشخص کنید']"
                  label="مقصد"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  variant="outlined"
                  v-model="FormModel.CarCode"
                  no-data-text="موردی برای نمایش وجود ندارد"
                  item-title="title"
                  item-value="code"
                  required
                  clearable
                  :items="carTypeList"
                  :rules="[(v) => !!v || 'نوع خودرو را مشخص کنید']"
                  label="نوع خودرو"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  variant="outlined"
                  no-data-text="موردی برای نمایش وجود ندارد"
                  v-model="FormModel.productCode"
                  item-title="title"
                  item-value="xId"
                  clearable
                  :items="productsList"
                  label="نوع محصول"
                ></v-autocomplete>
              </v-col>
            </v-row>

            <div class="flex justify-end w-[100%]">
              <v-btn
                class="mt-5 !bg-orange-500 p-4 !text-white"
                type="submit"
                color="secondry"
                @click="submit"
                :loading="loading"
              >
                محاسبه کرایه
              </v-btn>
            </div>
          </v-form>
        </v-sheet>
      </div>
      <div v-if="rentMap" class="mt-4">
        <div class="mb-2">محاسبه شده بر اساس فرمول اداره راه</div>
        <div class="border-2 !border-orange-500 p-4 rounded-md">
          <div class="mb-3">
            <span>مبدا : </span>
            <span>{{ calculateModel.origin }}</span>
          </div>
          <div class="mb-3">
            <span>مقصد : </span>
            <span>{{ calculateModel?.destination }}</span>
          </div>
          <div class="mb-3">
            <span>نوع خودرو : </span>
            <span>{{ calculateModel?.carname }}</span>
          </div>
          <div class="mb-3">
            <span> حدود کرایه : </span>
            <span class="text-lg"
              >{{ calculateModel?.rent.toLocaleString("en-US") }}
              <span class="mx-2 text-zinc-500">ریال</span></span
            >
          </div>
        </div>

        <div class="flex justify-end w-[100%]">
          <v-btn
            @click="reStore()"
            class="mt-5 !bg-orange-500 p-4 !text-white"
            color="secondry"
          >
            بستن
          </v-btn>
        </div>
      </div>
      <div v-if="!showForm" class="mt-4">
        <div class="border-2 !border-orange-500 p-4 rounded-md">
          <div class="mb-3">
            <span>مبدا : </span>
            <span>{{ rentImported.origin }}</span>
          </div>
          <div class="mb-3">
            <span>مقصد : </span>
            <span>{{ rentImported.destination }}</span>
          </div>
          <div class="mb-3">
            <span>نوع خودرو : </span>
            <span>{{ rentImported.carname }}</span>
          </div>
          <div class="mb-3">
            <span> حدود کرایه : </span>
            <span class="text-lg"
              >{{ rentImported.price.toLocaleString("en-US") }}
              <span class="mx-2 text-zinc-500">ریال</span></span
            >
          </div>
        </div>

        <div class="flex justify-end w-[100%]">
          <v-btn
            @click="reStore()"
            class="mt-5 !bg-orange-500 p-4 !text-white"
            color="secondry"
          >
            بستن
          </v-btn>
        </div>
      </div>
    </div>
  </div>
  <v-dialog v-model="gggg" persistent class="h-full p-5" width="800">
    <v-card class="m-5 h-[800px] relative">
      <div
        v-if="!isEndSet"
        class="absolute top-2 right-2 z-10 bg-slate-500 m-5 p-3 rounded-md text-white"
      >
        {{ isStartSet ? "انتخاب مقصد" : "انتخاب مبداء" }}
      </div>

      <mapffff
        class="m-5"
        @customEvent="getAddressOnMap"
        :endSelected="isEndSet"
        :startSelected="isStartSet"
      />
      <div class="px-5">
        <div class=" ">
          <v-text-field
            variant="outlined"
            v-model="start_text"
            append-inner-icon="mdi-map-marker"
            label="مبدا"
            readonly
          ></v-text-field>
        </div>
        <div class=" ">
          <v-text-field
            variant="outlined"
            append-inner-icon="mdi-map-marker"
            label="مقصد"
            v-model="end_text"
            readonly
          ></v-text-field>
        </div>
      </div>
      <div class="p-5 flex justify-end">
        <v-btn @click="closeMap">لغو</v-btn>
        <v-btn
          @click="calculate"
          :loading="calculateLoading"
          variant="outlined"
          class="mr-2 text-orange-500"
          >محاسبه</v-btn
        >
      </div>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import apiServices from "~/server/apiServices.js";
import { onMounted, useToast } from "#imports";
import mapffff from "@/components/map/index.vue";
const rentMap = ref(false);
const calculateModel = ref({
  origin: null,
  destination: null,
  carname: null,
  rent: null,
});
const { showToast } = useToast();
const getAddressOnMap = (val) => {
  if (!isStartSet.value) {
    start.value = val.latlng;
    isStartSet.value = true;
    start_text.value = val.addressText;
  } else {
    end.value = val.latlng;
    isEndSet.value = true;
    end_text.value = val.addressText;
  }
};
const calculate = async () => {
  apiServices.apiPost("v1/calculate", {
    origin_lng: start.value.lng,
    origin_lat: start.value.lat,
    car_id: carTypeList.value.find((e) => e.code == FormModel.value.CarCode)
      ?.id,
    destination_lat: end.value.lat,
    destination_lng: end.value.lng,
  });
  if (end.value && start.value) {
    calculateLoading.value = true;

    const { data: calculate } = await useFetch(
      "https://api.bargram.ir/api/v1/calculate",
      {
        method: "post",
        body: {
          origin_lng: start.value.lng,
          origin_lat: start.value.lat,
          car_id: carTypeList.value.find(
            (e) => e.code == FormModel.value.CarCode
          )?.id,
          destination_lat: end.value.lat,
          destination_lng: end.value.lng,
        },
      }
    );
    calculateLoading.value = false;
    calculateModel.value = {
      origin: start_text.value,
      destination: end_text.value,
      carname: calculate._rawValue.data.car_title,
      rent: calculate._rawValue.data.total_rent,
    };
    rentMap.value = true;
    closeMap();
  }
};
const end = ref(null);
const calculateLoading = ref(false);
const start_text = ref(null);
const end_text = ref(null);
const start = ref(null);
const isStartSet = ref(false);
const isEndSet = ref(false);
const FormModel = ref({
  originCode: null,
  DestinationCode: null,
  CarCode: null,
  productCode: null,
});
definePageMeta({
  title: "استعلام کرایه شایان ترابر",
});
const closeMap = () => {
  end.value = null;
  end_text.value = null;
  start_text.value = null;
  isEndSet.value = false;
  isStartSet.value = false;
  gggg.value = false;
  start.value = null;
};

const gggg = ref(false);
const formValidation = ref(null);
const rentImported = ref({});
const loading = ref(false);
const citiesList = ref([]);
const carTypeList = ref([]);
const productsList = ref([]);
const showForm = ref(true);

const reStore = () => {
  showForm.value = true;
  rentMap.value = false;
  FormModel.value = {
    originCode: null,
    DestinationCode: null,
    CarCode: null,
    productCode: null,
  };
  calculateModel.value = {
    origin: null,
    destination: null,
    carname: null,
    rent: null,
  };
};

const getCities = () => {
  apiServices.apiGet("v1/cities", {}).then((res) => {
    citiesList.value = res.data.cities;
  });
};
const getCarTypes = () => {
  apiServices.apiGet("v1/carTypes", {}).then((res) => {
    carTypeList.value = res.data.carTypes;
  });
};
const getProducts = () => {
  apiServices.apiGet("v1/products", {}).then((res) => {
    productsList.value = res.data.products;
  });
};

const submit = async () => {
  const { valid } = await formValidation.value.validate();
  if (valid) {
    if (
      FormModel.value.originCode == null &&
      FormModel.value.DestinationCode == null &&
      FormModel.value.CarCode == null
    ) {
      return;
    }
    loading.value = true;
    var iii = FormModel.value;
    apiServices
      .apiPost("v1/rent", iii)
      .then((res) => {
        if (res.data.rent) {
          rentImported.value = res.data.rent;
          loading.value = false;
          showForm.value = false;
        } else {
          showToast("موردی برای نمایش وجود ندارد", "info");
          loading.value = false;
          showForm.value = true;
          end.value = null;
          start.value = null;
          gggg.value = true;
        }
      })
      .catch((error) => {
        showToast("عملیات با خطا مواجه شد", "error");

        loading.value = false;
        showForm.value = true;
      });
  }
};

onMounted(() => {
  getCities();
  getCarTypes();
  getProducts();
});
</script>