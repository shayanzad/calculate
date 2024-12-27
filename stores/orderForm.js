/** @format */

// stores/formStore.js
import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    stepData: {
      step1: {
        product_id: "",
        carType_id: [],
        packageType_id: null,
        type: 0,
        endDate: null,
        startDate: null,
        textSms: null,
        product_volume: null,
        countCar: null,
        hourStatus: true,
        issuanceType: "AUTO",
        issueTime: null,
        expire: null,
        deficitAmount: null,
        destination_province_id: null,
        senderDetailNameFamily: "",
        senderDetailNationalId: "",
        receiverDetailNameFamily: "",
        receiverDetailNationalId: "",
        terminal_id: 3,
        rent: undefined,
        receiverPostalCode: null,
        senderPostalCode: null,
        worth: undefined,
        description: "",
        source_province_id: null,
        loadingAddress: "",
        dischargeAddress: "",
        lat_origin: "",
        lng_origin: "",
        lat_destination: "",
        lng_destination: "",
      },
      step2: {},
      step3: {},
      step4: {},
    },
    currentStep: 1,
  }),
  actions: {
    updateStepData(step, data) {
      this.stepData[`step${step}`] = data;
    },
    nextStep() {
      this.currentStep++;
    },
    prevStep() {
      this.currentStep--;
    },
    gotoStep(step) {
      this.currentStep=step;
    },
    resetForm() {
      this.stepData = {
        step1: {
          product_id: "",
          carType_id: [],
          packageType_id: null,
          type: null,
          endDate: null,
          startDate: null,
          textSms: null,
          product_volume: null,
          countCar: null,
          hourStatus: true,
          issuanceType: "AUTO",
          issueTime: null,
          expire: null,
          deficitAmount: null,
          destination_province_id: null,
          senderDetailNameFamily: "",
          senderDetailNationalId: "",
          receiverDetailNameFamily: "",
          receiverDetailNationalId: "",

          terminal_id: "",
          rent: 0,
          receiverPostalCode: null,
          senderPostalCode: null,
          worth: 0,
          description: "",
          source_province_id: null,
          loadingAddress: "",
          dischargeAddress: "",
          lat_origin: "",
          lng_origin: "",
          lat_destination: "",
          lng_destination: "",
        },
         
      };
      this.currentStep = 1;
    },
  },
  getters: {
    getStepData: (state) => (step) => state.stepData[`step${step}`],
  },
});
