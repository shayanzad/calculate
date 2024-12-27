<!-- @format -->

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
              <v-col cols="12" sm="6">
                <!-- <v-text-field
                  variant="outlined"
                  v-model="FormModel.productCode"
                  clearable
                  label="ارزش کالا"
                ></v-text-field> -->
                <v-text-field
                  variant="outlined"
                  v-model="FormModel.insurancePremium"
                  persistent-hint
                  :value="numberFormating(FormModel.insurancePremium)"
                  :hint="`${persianNumber(
                    Number(FormModel.insurancePremium)
                  )} (ریال)`"
                  clearable
                  required
                  @input="setWorth(FormModel.insurancePremium)"
                  label="   ارزش محموله را وارد کنید"
                  :rules="[(v) => !!v || ' ارزش محموله را مشخص کنید']"
                ></v-text-field>
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
      <v-row>
        <v-col>
          <div class="border-2 !border-orange-500 p-4 rounded-md">
          <div class="mb-3">
            <span>مبدا : <v-icon>mdi-map-marker-outline</v-icon></span>
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
            <span> حدود کرایه پایه: </span>
            <span class="text-lg"
              >{{
                calculateModel?.rent
                  ? Math.trunc(calculateModel?.rent).toLocaleString("en-US")
                  : null
              }}
              <span class="mx-2 text-zinc-500">ریال</span></span
            >
          </div>
        </div>
        </v-col>
        <v-col cols="4">
            <div class="border-2 border-[#64748b8a] rounded-md p-4">
              <div class="mb-4">
                <v-tooltip text="برابر است با ده درصد از کرایه پایه">
                  <template v-slot:activator="{ props }">
                    <v-icon class="ml-1" color="info" v-bind="props"
                      >mdi-alert-circle-outline</v-icon
                    >
                  </template>
                </v-tooltip>
                <span>کمیسیون : </span>
                <span>
                  {{ calculatedForm.comistion.toLocaleString("en-US") }}
                  <span class="text-gray-500">ریال</span>
                </span>
              </div>
              <div class="mb-4">
                <v-tooltip text="برابر است با نه درصد از کرایه پایه">
                  <template v-slot:activator="{ props }">
                    <v-icon color="info" class="ml-1" v-bind="props"
                      >mdi-alert-circle-outline</v-icon
                    >
                  </template>
                </v-tooltip>
                <span>عوارض : </span>
                <span>
                  {{ calculatedForm.complications.toLocaleString("en-US") }}
                  <!-- {{
                    Math.trunc(
                      Math.trunc(rentImported.price) * 0.09
                    ).toLocaleString("en-US")
                  }} -->
                  <span class="text-gray-500">ریال</span>
                </span>
              </div>
              <div class="mb-4">
                <v-tooltip text="برابر است با نیم درصد از کرایه ">
                  <template v-slot:activator="{ props }">
                    <v-icon color="info" class="ml-1" v-bind="props"
                      >mdi-alert-circle-outline</v-icon
                    >
                  </template>
                </v-tooltip>
                <span>حق بیمه : </span>
                <span>
                  {{ calculatedForm.insurancePremium.toLocaleString("en-US") }}
                  <span class="text-gray-500">ریال</span>
                </span>
              </div>
              <div class="mb-2">
                <v-tooltip text="برابر است با نیم درصد از کرایه ">
                  <template v-slot:activator="{ props }">
                    <v-icon color="info" class="ml-1" v-bind="props"
                      >mdi-alert-circle-outline</v-icon
                    >
                  </template>
                </v-tooltip>
                <span> بیمه تکمیلی : </span>
                <span>
                  {{ calculatedForm.additionalInsuranceOfTheDriver.toLocaleString("en-US") }}
                  <span class="text-gray-500">ریال</span>
                </span>
              </div>
              <v-divider
                class="my-3 border-b border-gray-400 text-gray-500"
              ></v-divider>
              <div class="mb-2">
                <v-tooltip text="برابر است با نیم درصد از کرایه ">
                  <template v-slot:activator="{ props }">
                    <v-icon color="info" class="ml-1" v-bind="props"
                      >mdi-alert-circle-outline</v-icon
                    >
                  </template>
                </v-tooltip>
                <span> حدود کرایه پایه: </span>
                <span>
                  {{
                    
                      calculatedForm.fareLimits.toLocaleString("en-US")
                       
                  }}
                  <span class="text-gray-500">ریال</span>
                </span>
              </div>
              <div class="mb-2">
                <v-tooltip text="برابر است با جمع تمام موارد بالا">
                  <template v-slot:activator="{ props }">
                    <v-icon color="info" class="ml-1" v-bind="props"
                      >mdi-alert-circle-outline</v-icon
                    >
                  </template>
                </v-tooltip>
                <span> کل کرایه : </span>
                <span>
                  {{
                     (calculatedForm.fareLimits + calculatedForm.additionalInsuranceOfTheDriver + calculatedForm.comistion + calculatedForm.complications + calculatedForm.insurancePremium).toLocaleString("en-US")
                  }}
                  <span class="text-gray-500">ریال</span>
                </span>
              </div>
            </div>
          </v-col>
      </v-row>


        

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
        <v-row>
          <v-col cols="8">
            <div class="border-2 !border-orange-500 p-4 rounded-md">
              <div class="mb-3">
                <span>
                  <v-icon class="text-gray-400">mdi-map-marker-outline</v-icon>
                  مبدا :
                </span>
                <span>{{ rentImported.origin }}</span>
              </div>
              <div class="mb-3">
                <span>
                  <v-icon class="text-gray-400"
                    >mdi-map-marker-radius-outline</v-icon
                  >
                  مقصد :
                </span>
                <span>{{ rentImported.destination }}</span>
              </div>
              <div class="mb-3">
                <span>
                  <v-icon class="text-gray-400">mdi-car-info</v-icon> نوع خودرو
                  :
                </span>
                <span>{{ rentImported.carname }}</span>
              </div>
              <div class="mb-3">
                <span>
                  <v-icon class="text-gray-400">mdi-cash</v-icon> حدود کرایه پایه:
                </span>
                <span class="text-lg">
                  <!-- {{
                    rentImported.price
                      ? Math.trunc(rentImported.price).toLocaleString("en-US")
                      : null
                  }} -->
                  {{ calculatedForm.fareLimits.toLocaleString("en-US") }}
                  <span class="mx-2 text-zinc-500">ریال</span></span
                >
              </div>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="border-2 border-[#64748b8a] rounded-md p-4">
              <div class="mb-4">
                <v-tooltip text="برابر است با ده درصد از کرایه پایه">
                  <template v-slot:activator="{ props }">
                    <v-icon class="ml-1" color="info" v-bind="props"
                      >mdi-alert-circle-outline</v-icon
                    >
                  </template>
                </v-tooltip>
                <span>کمیسیون : </span>
                <span>
                  {{ calculatedForm.comistion.toLocaleString("en-US") }}
                  <span class="text-gray-500">ریال</span>
                </span>
              </div>
              <div class="mb-4">
                <v-tooltip text="برابر است با نه درصد از کرایه پایه">
                  <template v-slot:activator="{ props }">
                    <v-icon color="info" class="ml-1" v-bind="props"
                      >mdi-alert-circle-outline</v-icon
                    >
                  </template>
                </v-tooltip>
                <span>عوارض : </span>
                <span>
                  {{ calculatedForm.complications.toLocaleString("en-US") }}
                  <!-- {{
                    Math.trunc(
                      Math.trunc(rentImported.price) * 0.09
                    ).toLocaleString("en-US")
                  }} -->
                  <span class="text-gray-500">ریال</span>
                </span>
              </div>
              <div class="mb-4">
                <v-tooltip text="برابر است با نیم درصد از کرایه ">
                  <template v-slot:activator="{ props }">
                    <v-icon color="info" class="ml-1" v-bind="props"
                      >mdi-alert-circle-outline</v-icon
                    >
                  </template>
                </v-tooltip>
                <span>حق بیمه : </span>
                <span>
                  {{ calculatedForm.insurancePremium.toLocaleString("en-US") }}
                  <span class="text-gray-500">ریال</span>
                </span>
              </div>
              <div class="mb-2">
                <v-tooltip text="برابر است با نیم درصد از کرایه ">
                  <template v-slot:activator="{ props }">
                    <v-icon color="info" class="ml-1" v-bind="props"
                      >mdi-alert-circle-outline</v-icon
                    >
                  </template>
                </v-tooltip>
                <span> بیمه تکمیلی : </span>
                <span>
                  {{ calculatedForm.additionalInsuranceOfTheDriver.toLocaleString("en-US") }}
                  <span class="text-gray-500">ریال</span>
                </span>
              </div>
              <v-divider
                class="my-3 border-b border-gray-400 text-gray-500"
              ></v-divider>
              <div class="mb-2">
                <v-tooltip text="برابر است با نیم درصد از کرایه ">
                  <template v-slot:activator="{ props }">
                    <v-icon color="info" class="ml-1" v-bind="props"
                      >mdi-alert-circle-outline</v-icon
                    >
                  </template>
                </v-tooltip>
                <span> حدود کرایه پایه: </span>
                <span>
                  {{
                    
                      calculatedForm.fareLimits.toLocaleString("en-US")
                       
                  }}
                  <span class="text-gray-500">ریال</span>
                </span>
              </div>
              <div class="mb-2">
                <v-tooltip text="برابر است با جمع تمام موارد بالا">
                  <template v-slot:activator="{ props }">
                    <v-icon color="info" class="ml-1" v-bind="props"
                      >mdi-alert-circle-outline</v-icon
                    >
                  </template>
                </v-tooltip>
                <span> کل کرایه : </span>
                <span>
                  {{
                     (calculatedForm.fareLimits + calculatedForm.additionalInsuranceOfTheDriver + calculatedForm.comistion + calculatedForm.complications + calculatedForm.insurancePremium).toLocaleString("en-US")
                  }}
                  <span class="text-gray-500">ریال</span>
                </span>
              </div>
            </div>
          </v-col>
        </v-row>

        <div class="flex justify-end w-[100%]">
          <v-btn
            variant="outlined"
            @click="reStore()"
            class="mt-5 p-4"
            color="secondry"
          >
            بستن
          </v-btn>
          <v-btn
            @click="reStore()"
            class="mt-5 mx-2 !bg-orange-500 p-4 !text-white"
            color="secondry"
          >
            سفارش
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
import Num2persian from "num2persian";
const rentMap = ref(false);
const calculateModel = ref({
  origin: null,
  destination: null,
  carname: null,
  rent: null,
});
const calculatedForm = ref({
  fareLimits: 0,
  complications: 0,
  insurancePremium: 0,
  comistion: 0,
  additionalInsuranceOfTheDriver: 0,
});
const calculatedFormFunction = (rent) => {
   calculatedForm.value = {
    fareLimits:  Math.trunc(rent),
    comistion: Math.trunc(Math.trunc(rent) * 0.1),
    complications: Math.trunc(Math.trunc(rent) * 0.09),
    insurancePremium: FormModel.value.insurancePremium
      ?  Math.trunc(FormModel.value.insurancePremium * 0.0005) 
      : 0,
    additionalInsuranceOfTheDriver:Math.trunc( Math.trunc(rent) * 0.005),
  
  };
};
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
    calculatedFormFunction(calculate._rawValue.data.total_rent);

    rentMap.value = true;
    closeMap();
  }
  
};
const setWorth = (val) => {
  if (val) FormModel.value.insurancePremium = val.replace(/\D/g, "");
};
const persianNumber = (num) => {
  return num >= 0 ? Num2persian(num) : Num2persian(0);
};
const numberFormating = (numberAsString) => {
  if (numberAsString && Number(numberAsString) > 0) {
    let ppp = numberAsString.toLocaleString("en-US");
    let number = ppp.replace(/\D/g, "");
    number = +number;
    return number.toLocaleString("en-US");
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
  insurancePremium: null,
});
definePageMeta({
  title: "استعلام کرایه بارگرام",
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

          calculatedFormFunction(rentImported.value.price);
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
