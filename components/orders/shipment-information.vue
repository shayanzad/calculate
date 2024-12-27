<!-- @format -->

<template>
  <div>
    <div class="text-center p-5">
      <p
        class="pt-2 pb-3"
        style="font-size: 20px; font-weight: 500; line-height: 31px"
      >
        اطلاعات محموله
      </p>
      <p class="text-[#9F9F9F]">اطلاعات محموله باری خود را وارد کنید.</p>
    </div>
    <div class="px-20">
      <v-form @submit.prevent>
        <v-row class="mt-auto">
          <v-col cols="12" md="6">
            <div class="mb-2">نوع کالا</div>

            <v-autocomplete
              :items="productsList"
              item-text="title"
              item-value="id"
              no-data-text="موردی برای نمایش وجود ندارد"
              variant="outlined"
              v-model="FormModel.product_id"
              clearable
              required
              :rules="[(v) => !!v || 'نوع کالا را مشخص کنید']"
              placeholder="نوع کالا را وارد کنید"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="6" class="relative">
            <div class="mb-2">نوع خودرو</div>

            <v-autocomplete
              :items="carTypeList"
              item-text="title"
              item-value="id"
              no-data-text="موردی برای نمایش وجود ندارد"
              variant="outlined"
              v-model="FormModel.carType_id"
              clearable
              multiple
              placeholder="نوع خودرو را وارد کنید"
              required
              :rules="[(v) => !!v || '  نوع خودرو را مشخص کنید']"
            >
            </v-autocomplete>
            <div
              class="absolute bottom-[40px] flex justify-center items-center bg-[#F3F3F3] p-2 rounded-md left-[20px]"
            >
              <v-icon>mdi-magnify</v-icon>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="relative">
            <div class="mb-2">نوع بسته بندی</div>

            <v-autocomplete
              :items="packageTypeList"
              item-text="title"
              item-value="id"
              placeholder="نوع بسته بندی را مشخص کنید"
              no-data-text="موردی برای نمایش وجود ندارد"
              variant="outlined"
              v-model="FormModel.packageType_id"
              clearable
              required
              :rules="[(v) => !!v || '    نوع بسته بندی را مشخص کنید']"
            ></v-autocomplete>
            <div
              class="absolute bottom-[42px] flex justify-center items-center bg-[#F3F3F3] p-2 rounded-md left-[20px]"
            >
              <v-icon>mdi-magnify</v-icon>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="relative">
            <div class="mb-2">نحوه اعلام بار</div>

            <div class="border border-gray-800 flex p-2 h-[58px] rounded-md">
              <div
                :class="activeType == 1 ? 'bg-[#FEAA73] text-white' : ''"
                @click="setActiveType(1)"
                class="rounded-lg w-full flex cursor-pointer justify-center items-center"
              >
                ناوگانی
              </div>
              <div
                :class="activeType == 2 ? 'bg-[#FEAA73] text-white' : ''"
                @click="setActiveType(2)"
                class="rounded-lg w-full flex cursor-pointer justify-center items-center"
              >
                حجمی
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="relative">
            <div class="mb-2">وزن محموله</div>

            <v-text-field
              variant="outlined"
              v-model="FormModel.product_volume"
              clearable
              required
              placeholder=" وزن محموله را وارد کنید"
              :rules="[(v) => !!v || ' وزن محموله را مشخص کنید']"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6" class="relative">
            <div class="mb-2">تعداد ماشین</div>

            <v-text-field
              variant="outlined"
              v-model="FormModel.countCar"
              clearable
              required
              placeholder="  تعداد ماشین را وارد کنید"
              :rules="[(v) => !!v || 'تعداد ماشین را مشخص کنید']"
            ></v-text-field>
            <div
              class="absolute bottom-[42px] flex justify-center items-center bg-[#F3F3F3] p-2 rounded-md left-[20px]"
            >
              <v-icon>mdi-truck</v-icon>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="relative">
            <div class="mb-2">مشخص کردن زمان صدور و پایان اعلام بار</div>

            <div class="border border-gray-800 flex p-2 h-[58px] rounded-md">
              <div
                :class="
                  activeTabHourStatus == 1 ? 'bg-[#FEAA73] text-white' : ''
                "
                @click="setHourStatus(1)"
                class="rounded-lg w-full flex cursor-pointer justify-center items-center"
              >
                بله
              </div>
              <div
                :class="
                  activeTabHourStatus == 2 ? 'bg-[#FEAA73] text-white' : ''
                "
                @click="setHourStatus(2)"
                class="rounded-lg w-full flex cursor-pointer justify-center items-center"
              >
                خیر
              </div>
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="relative flex"
            v-if="activeTabHourStatus == true"
          >
            <div class="w-full ml-3">
              <div class="mb-2">زمان صدور</div>

              <persianDatePiker
                id="start_datef"
                @selectedDate="(date) => (FormModel.startDate = date)"
                v-model="FormModel.startDate"
              />
            </div>
            <div class="w-full">
              <div class="mb-2">زمان پایان</div>
              <persianDatePiker
                id="start_date"
                @selectedDate="(date) => (FormModel.endDate = date)"
                v-model="FormModel.description"
              />
            </div>
          </v-col>
          <v-col cols="12" class="relative">
            <div class="mb-2">توضیحات تکمیلی</div>

            <v-textarea
              :items="productsList"
              item-text="title"
              item-value="id"
              no-data-text="موردی برای نمایش وجود ندارد"
              variant="outlined"
              v-model="FormModel.description"
              clearable
              placeholder="توضیحات تکمیلی را وارد کنید."
              required
            ></v-textarea>
          </v-col>
          <v-col cols="12" class="relative">
            <div class="mb-2">توضیحات پیامکی</div>

            <v-textarea
              :items="productsList"
              item-text="title"
              item-value="id"
              no-data-text="موردی برای نمایش وجود ندارد"
              variant="outlined"
              v-model="FormModel.textSms"
              clearable
              required
              placeholder="توضیحات پیامکی را وارد کنید."
            ></v-textarea>
          </v-col>
        </v-row>
      </v-form>
      <div class="flex justify-end items-center pb-24">
        <v-btn @click="saveAndBack()" class="ml-2">بازگشت</v-btn>
        <v-btn @click="saveAndNext()">مرحله بعد</v-btn>
      </div>
    </div>
  </div>
</template>
<script setup>
//imports
import { useFormStore } from "@/stores/orderForm";
import { ref, onMounted } from "#imports";
import { defineEmits, defineProps } from "vue";
import apiServices from "~/server/apiServices";
import persianDatePiker from "~/components/base/inputPDate.vue";
//
const productsList = ref([]);
const carTypeList = ref([]);
const packageTypeList = ref([]);
const formStore = useFormStore();
const emit = defineEmits(["updateData"]);
const role = localStorage.getItem("role");
const activeType = ref(1);
const activeTabHourStatus = ref(1);
const value = ref(1);
const FormModel = ref(formStore.getStepData(1));

// functions
const saveAndNext = () => {
  console.log(FormModel.value);
  
  formStore.updateStepData(1, FormModel.value);
  formStore.nextStep();
};
const saveAndBack = () => {
  formStore.updateStepData(1, FormModel.value);
  formStore.prevStep();
};
const roleCurrent = () => {
  if (role == "factory-member" || role == "FACTORY") {
    return "factory";
  } else if (role == "company-member" || role == "COMPANY") {
    return "company";
  }
};

const getProduct = () => {
  apiServices
    .apiGet(`v1/${roleCurrent()}/product/getProduct`, {})
    .then((res) => {
      productsList.value = res.data.product;
    });
};

const getCaType = () => {
  apiServices.apiGet(`v1/${roleCurrent()}/car/listCarType`, {}).then((res) => {
    carTypeList.value = res.data.carType;
  });
};

const getPackageType = () => {
  apiServices
    .apiGet(`v1/${roleCurrent()}/packageType/getPackageType`, {})
    .then((res) => {
      packageTypeList.value = res.data.packageType;
    });
};

const setActiveType = (type) => {
  activeType.value = type;
  FormModel.type.value = activeType.value;
};

const setHourStatus = (type) => {
  activeTabHourStatus.value = type;
  if (type == 1) {
    FormModel.hourStatus.value = true;
  } else {
    FormModel.hourStatus.value = false;
  }
};

onMounted(() => {
  getProduct();
  getCaType();
  getPackageType();
});
</script>

// const FormModel = ref({ // issuanceType: null, // issueTime: null, // expire:
null, // deficitAmount: null, // carType_id: null, // destination_province_id:
null, // product_id: null, // senderDetailNameFamily: null, //
senderDetailNationalId: null, // receiverDetailNameFamily: null, //
receiverDetailNationalId: null, // packageType_id: null, // countCar: null, //
terminal_id: null, // type: null, // rent: null, // receiverPostalCode: null, //
senderPostalCode: null, // worth: null, // textSms: null, // product_volume:
null, // description: null, // source_province_id: null, // loadingAddress:
null, // dischargeAddress: null, // lat_origin: null, // lng_origin: null, //
lat_destination: null, // lng_destination: null, // });
