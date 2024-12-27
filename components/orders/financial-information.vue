<!-- @format -->

<template>
  <div>
    <div class="text-center p-5">
      <p
        class="pt-2 pb-3"
        style="font-size: 20px; font-weight: 500; line-height: 31px"
      >
        اطلاعات مالی
      </p>
      <p>قیمت محموله و وزن محموله را وارد کنید.</p>
    </div>
    <div
      class="border py-5 rounded-lg bg-[#EFF6FF] border-[#93C5FD] mx-20 px-10"
    >
      <div class="flex items-center">
        <div class="w-[10px] bg-[#F3A50B] h-[10px] ml-2 rounded-full"></div>
        <div>
          مبالغ محاسباتی زیر
          <strong>(حق بیمه و عوارض جا به جایی و کمیسیون صدور بارنامه)</strong>
          پس از صدور تایید نهایی میشوند.
        </div>
      </div>
      <div class="flex items-center mt-5">
        <div class="w-[10px] bg-[#F3A50B] h-[10px] ml-2 rounded-full"></div>
        <div>
          مبلغ کرایه درج شده شامل کرایه راننده, عوارض پایانه, کمیسیون شرکت و حق
          بیمه میباشد.
        </div>
      </div>
    </div>
    <div class="m-5 relative px-20">
      <div>
        <v-form @submit.prevent>
          <v-row class="mt-auto">
            <v-col cols="12" md="6" class="relative p-1">
              <div class="mb-2">ارزش محموله</div>

              <v-text-field
                variant="outlined"
                v-model="FormModel.worth"
                persistent-hint
                :value="numberFormating(FormModel.worth)"
                :hint="`${persianNumber(Number(FormModel.worth))} (ریال)`"
                clearable
                required
                @input="setWorth(FormModel.worth)"
                placeholder="   ارزش محموله را وارد کنید"
                :rules="[(v) => !!v || ' ارزش محموله را مشخص کنید']"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="relative p-1">
              <div class="mb-2">کل کرایه (ریال)</div>

              <v-text-field
                :value="numberFormating(FormModel.rent)"
                variant="outlined"
                v-model="FormModel.rent"
                :hint="`${persianNumber(Number(FormModel.rent))} (ریال)`"
                persistent-hint
                clearable
                required
                @input="setRent(FormModel.rent)"
                placeholder="    کل کرایه را وارد کنید"
                :rules="[(v) => !!v || '   کل کرایه را مشخص کنید']"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </div>
    <div class="border rounded-lg m-5 relative p-5 mx-20 px-10">
      <p class="absolute top-[-10px] right-[20px] bg-white px-3 rounded-lg">
        جزییات کرایه
      </p>
      <div>
        <v-row>
          <v-col cols="4">حق بیمه:</v-col>
          <v-col cols="4" class="text-[#598AD8]">
            ( شامل ۵ هزارم ارزش بار )</v-col
          >
          <v-col cols="4" class="text-left">
            <span>۳۴۰.۰۰۰.۰۰۰</span>
            <span class="mr-2">میلیون ریال </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">عوارض جا به جایی:‍</v-col>
          <v-col cols="4" class="text-[#598AD8]"> ( شامل ۹٪ حق بیمه )</v-col>
          <v-col cols="4" class="text-left">
            <span>۳۴۰.۰۰۰.۰۰۰</span>
            <span class="mr-2">میلیون ریال </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4"> کمسیون صدور بار نامه: :‍</v-col>
          <v-col cols="4" class="text-[#598AD8]"> ( شامل ۹٪ حق بیمه )</v-col>
          <v-col cols="4" class="text-left">
            <span>۳۴۰.۰۰۰.۰۰۰</span>
            <span class="mr-2">میلیون ریال </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">سود مشارک:</v-col>
          <v-col cols="4" class="text-[#598AD8]">
            ( درآمد شما حاصل از اعلام بار )</v-col
          >
          <v-col cols="4" class="text-left">
            <span>۳۴۰.۰۰۰.۰۰۰</span>
            <span class="mr-2">میلیون ریال </span>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="flex justify-end items-center pb-24 mx-20 mt-10">
      <v-btn @click="saveAndBack()" class="ml-2">بازگشت</v-btn>
      <v-btn @click="saveAndNext()">تایید و ایجاد</v-btn>
    </div>
  </div>
</template>
<script setup>
import { ref } from "#imports";
import { useFormStore } from "@/stores/orderForm";
import apiServices from "~/server/apiServices";
import Num2persian from "num2persian";
const formStore = useFormStore();
const FormModel = ref(formStore.getStepData(1));
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
const setWorth = (val) => {
  if (val) FormModel.value.worth = val.replace(/\D/g, "");
};
const setRent = (val) => {
  if (val) FormModel.value.rent = val.replace(/\D/g, "");
};
const saveAndNext = () => {
  formStore.updateStepData(1, FormModel.value);

  apiServices
    .apiPost("v1/factory/orders/storeOrder", formStore.getStepData(1))
    .then(() => {
      // Vue.$toast.open({
      //   message: "اعلام بار با موفقیت پایان یافت.",
      //   type: "success",
      // });
      // this.showDialog = false;
      // this.loadingSave = false;
      // this.$emit("listRefresh");
    });
};
const saveAndBack = () => {
  formStore.updateStepData(1, FormModel.value);
  formStore.prevStep();
};
</script>
