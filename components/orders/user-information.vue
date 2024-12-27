<!-- @format -->

<template>
  <div>
    <div class="text-center p-5">
      <p
        class="pt-2 pb-3"
        style="font-size: 20px; font-weight: 500; line-height: 31px"
      >
        اطلاعات گیرنده و فرستنده
      </p>
      <p>اطلاعات گیرنده و فرستنده خود را وارد کنید.</p>
    </div>
    <div class="border m-5 relative p-4 px-20">
      <p class="absolute top-[-10px] right-[20px] bg-white px-3 rounded-lg">
        اطلاعات فرستنده
      </p>
      <div>
        <v-form @submit.prevent>
          <v-row class="mt-auto px-10">
            <v-col cols="12" md="6" class="relative">
              <div class="mb-2">نام و نام خانوادگی</div>

              <v-text-field
                variant="outlined"
                v-model="FormModel.senderDetailNameFamily"
                clearable
                required
                placeholder="نام و نام خانوادگی را وارد کنید"
                :rules="[(v) => !!v || 'این مقدار اجباریست']"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="relative">
              <div class="mb-2">کد ملی</div>

              <v-text-field
                variant="outlined"
                v-model="FormModel.senderDetailNationalId"
                clearable
                required
                placeholder="    کد ملی را وارد کنید"
                :rules="[(v) => !!v || 'این مقدار اجباریست']"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="relative">
              <div class="mb-2">استان مبداء</div>
              <v-autocomplete
                :items="provinceList"
                item-text="title"
                item-value="id"
                placeholder="    استان مبداء را مشخص کنید"
                no-data-text="موردی برای نمایش وجود ندارد"
                variant="outlined"
                v-model="FormModel.source_province_id"
                clearable
                @update:modelValue="getOriginCity"
                :rules="[(v) => !!v || ' استان مبداء را مشخص کنید']"
              ></v-autocomplete>
              <div
                class="absolute bottom-[42px] flex justify-center items-center bg-[#F3F3F3] p-2 rounded-md left-[20px]"
              >
                <v-icon>mdi-magnify</v-icon>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="relative">
              <div class="mb-2">شهر مبداء</div>

              <v-autocomplete
                :items="source_city_List"
                item-text="title"
                item-value="id"
                placeholder="    شهر مبداء را مشخص کنید"
                no-data-text="موردی برای نمایش وجود ندارد"
                variant="outlined"
                v-model="FormModel.source_city_code"
                clearable
                required
                :rules="[(v) => !!v || 'این مقدار اجباریست']"
              ></v-autocomplete>
              <div
                class="absolute bottom-[42px] flex justify-center items-center bg-[#F3F3F3] p-2 rounded-md left-[20px]"
              >
                <v-icon>mdi-magnify</v-icon>
              </div>
            </v-col>
            <v-col cols="12" md="12" class="relative">
              <div class="mb-2">آدرس بارگیری</div>

              <v-text-field
                variant="outlined"
                v-model="FormModel.loadingAddress"
                clearable
                required
                placeholder=" آدرس را وارد کنید"
                :rules="[(v) => !!v || ' آدرس را مشخص کنید']"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="relative">
              <div class="mb-2">کد پستی</div>

              <v-text-field
                variant="outlined"
                v-model="FormModel.senderPostalCode"
                clearable
                required
                placeholder="کد پستی گیرنده را وارد کنید."
                :rules="[(v) => !!v || ' کد پستی گیرنده را وارد کنید.']"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </div>
    <div class="border m-5 relative p-4 px-20">
      <p class="absolute top-[-10px] right-[20px] bg-white px-3 rounded-lg">
        اطلاعات گیرنده
      </p>
      <div>
        <v-form @submit.prevent>
          <v-row class="mt-auto px-10">
            <v-col cols="12" md="6" class="relative">
              <div class="mb-2">نام و نام خانوادگی</div>

              <v-text-field
                variant="outlined"
                v-model="FormModel.receiverDetailNameFamily"
                clearable
                required
                placeholder="نام و نام خانوادگی را وارد کنید"
                :rules="[(v) => !!v || 'این مقدار اجباریست']"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="relative">
              <div class="mb-2">کد ملی</div>

              <v-text-field
                variant="outlined"
                v-model="FormModel.receiverDetailNationalId"
                clearable
                required
                placeholder=" وزن محموله را وارد کنید"
                :rules="[(v) => !!v || ' وزن محموله را مشخص کنید']"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6" class="relative">
              <div class="mb-2">استان مقصد</div>

              <v-autocomplete
                :items="provinceList"
                item-text="title"
                item-value="id"
                placeholder="استان مقصد را مشخص کنید"
                no-data-text="موردی برای نمایش وجود ندارد"
                variant="outlined"
                v-model="FormModel.destination_procince_id"
                clearable
                required
                @update:modelValue="getdestinationCity"
                :rules="[(v) => !!v || '    نوع بسته بندی را مشخص کنید']"
              ></v-autocomplete>
              <div
                class="absolute bottom-[42px] flex justify-center items-center bg-[#F3F3F3] p-2 rounded-md left-[20px]"
              >
                <v-icon>mdi-magnify</v-icon>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="relative">
              <div class="mb-2">شهر مقصد</div>

              <v-autocomplete
                :items="destination_city_List"
                item-text="title"
                item-value="id"
                placeholder="شهر مقصد را مشخص کنید"
                no-data-text="موردی برای نمایش وجود ندارد"
                variant="outlined"
                v-model="FormModel.destination_province_id"
                clearable
                required
                :rules="[(v) => !!v || '    شهر مقصد  را مشخص کنید']"
              ></v-autocomplete>
              <div
                class="absolute bottom-[42px] flex justify-center items-center bg-[#F3F3F3] p-2 rounded-md left-[20px]"
              >
                <v-icon>mdi-magnify</v-icon>
              </div>
            </v-col>
            <v-col cols="12" md="12" class="relative">
              <div class="mb-2">آدرس تخلیه</div>

              <v-text-field
                variant="outlined"
                v-model="FormModel.dischargeAddress"
                clearable
                required
                placeholder="   آدرس را وارد کنید"
                :rules="[(v) => !!v || '   آدرس را مشخص کنید']"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="relative">
              <div class="mb-2">کد پستی</div>

              <v-text-field
                variant="outlined"
                v-model="FormModel.receiverPostalCode"
                clearable
                required
                placeholder="کد پستی گیرنده را وارد کنید."
                :rules="[(v) => !!v || ' کد پستی گیرنده را وارد کنید.']"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <div class="flex justify-end items-center pb-24">
          <v-btn @click="saveAndBack()" class="ml-2">بازگشت</v-btn>
          <v-btn @click="saveAndNext()">مرحله بعد</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "#imports";
import { useFormStore } from "@/stores/orderForm";
import apiServices from "~/server/apiServices";

const formStore = useFormStore();
const FormModel = ref(formStore.getStepData(1));
const saveAndNext = () => {
  console.log(FormModel.value);

  formStore.updateStepData(1, FormModel.value);
  formStore.nextStep();
};
const saveAndBack = () => {
  formStore.updateStepData(1, FormModel.value);
  formStore.prevStep();
};
const provinceList = ref([]);
const source_city_List = ref([]);
const destination_city_List = ref([]);
const getProvince = () => {
  apiServices.apiGet("v1/factory/province/getProvince").then((res) => {
    console.log(res.data);
    provinceList.value = res.data.province;
  });
};
const getOriginCity = (id) => {
  apiServices
    .apiPost("v1/factory/province/getCity", { code: id })
    .then((res) => {
      console.log(res.data.city);
      source_city_List.value = res.data.city;
    });
};
const getdestinationCity = (id) => {
  apiServices
    .apiPost("v1/factory/province/getCity", { code: id })
    .then((res) => {
      console.log(res.data.city);
      destination_city_List.value = res.data.city;
    });
};
onMounted(() => {
  getProvince();
});
</script>
