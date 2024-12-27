<template>
  <div class="shadow rounded-sm p-4 hover:bg-slate-50 h-[100%]">
     <!-- <div class="flex flex-col justify-between min-h-[300px] h-[100%]">
      <div>
        <div class="flex justify-center">
          <span v-if="details.rent">
            {{ Math.round(details.rent).toLocaleString() }} ریال</span
          >
          <span v-else>توافقی</span>
        </div>

        <div class="flex justify-between items-center">
          <span class="flex flex-col items-center">
            <v-icon size="20">mdi-crosshairs-gps</v-icon>
            <span class="w-full" style="width: max-content">{{
              details.origin_city?.name
            }}</span>
          </span>
          <div class="dvider mx-4"></div>
          <span class="flex flex-col items-center">
            <v-icon size="20">mdi-map-marker-radius-outline</v-icon>
            <span style="width: max-content">
              {{ details.destination_city?.name }}
            </span>
          </span>
        </div>
      </div>
      <div class="mt-4">
        <span class="text-slate-500"> وزن: </span>
        <span>
          {{ details.volume }} <span class="text-gray-500">تن</span>
        </span>
      </div>
      <div class="mt-4">
        <span class="text-slate-500"> نوع محصول: </span>
        <span>
          {{ details.product?.title }}
        </span>
      </div>
      <div class="mt-2">
        <span class="text-slate-500"> نوع بار: </span>
        <span>
          {{ details.type == 0 ? "ناوگانی" : "حجمی" }}
        </span>
      </div>
      <div class="mt-2">
        <span class="text-slate-500"> تعداد بازدید: </span>
        <span>
          {{ details.visit }}
        </span>
      </div>
      
      
      <div class="mt-2 w-full" v-if="details.des">
        <span class="text-slate-500">توضیحات: </span>
        <span class=" ">
          {{ description(details.des).res }}
          {{ description(details.des).isMore ? "..." : "" }}
        </span>
      </div>
      <div class="mt-2" v-if="details.factory && details.factory.factoryName">
        <span class="text-slate-500">نام کاربر: </span>
        <span>
          {{ details.factory.factoryName }}
        </span>
      </div>
      <div class="mt-2" v-if="details.company && details.company.company_name">
        <span class="text-slate-500">نام شرکت: </span>
        <span>
          {{ details.company.company_name }}
        </span>
      </div>
       

      <div class="flex justify-between text-white items-end">
        <div class="mt-2" v-if="details.status">
          <v-chip :color="showStatus(details.status)?.color" outlined>
            {{ showStatus(details.status)?.text }}
          </v-chip>
        </div>
        <div v-else></div>
        <div class="flex justify-end">
          <changeStatus
            class="mx-2"
            v-if="noChange != true"
            :details="details"
            @refreshList="listRefresh"
          />
          <timeExtension
            v-if="noChangeTime != true"
            class="ml-2"
            :details="details"
            @refreshList="listRefresh"
          />
          <showFastOrderDetail :details="details" />

          <v-icon
            @click="showDialog = true"
            v-if="noEnd != true && details.status != 'END'"
            color="info"
            class="p-1 mr-2 rounded-md bg-slate-200 border-slate-500 cursor-pointer hover:bg-slate-300"
            size="20"
            title="پایان اعلام بار"
            >mdi-close</v-icon
          >

          <v-icon
            @click="again(details.id)"
            v-if="noAgain != true"
            color="info"
            class="p-1 mr-2 rounded-md bg-slate-200 border-slate-500 cursor-pointer hover:bg-slate-300"
            size="20"
            title="اعلام بار مجدد"
            >mdi-refresh</v-icon
          >
          <v-icon
            @click="editItem(details.id)"
            v-if="noEdit != true"
            color="info"
            class="p-1 mr-2 rounded-md bg-slate-200 border-slate-500 cursor-pointer hover:bg-slate-300"
            size="20"
            title="ویرایش"
            >mdi-border-color</v-icon
          >
        </div>
      </div>
    </div> -->
  
  </div>
</template>
<script setup>
import { ref } from "#imports";
import { defineProps } from "vue";
const props = defineProps({
  
  pppppp: {
    type: String,
    required: false,
  },
});
//   import apiServices from "~/server/apiServices";
// import Vue from "vue";
// import showFastOrderDetail from "./showFastOrderDetail.vue";
// import changeStatus from "./changeStatus.vue";
// const itemDatad = ref(props.value.details)
console.log(props.value.pppppp)
// import timeExtension from "./timeExtension.vue";

// export default {
//   props: ["details", "noEdit", "noChange", "noAgain","noChangeTime","noEnd"],
//   components: { showFastOrderDetail, changeStatus, timeExtension },
//   data() {
//     return {
//       showDialog: false,
//       loadingSave: false,
//       showDialog_again: false,
//     };
//   },
//   computed: {},
//   methods: {
//     listRefresh() {
//       this.$emit("listRefresh");
//     },
//     send_again() {
//       var role = localStorage.getItem("role");

//       var method = null;
//       switch (role) {
//         case "COMPANY" || "COMPANY_MEMBER":
//           method = "v1/company/fastOrders/end";
//           break;

//         case "FACTORY" || "FACTORY_MEMBER":
//           method = "v1/factory/fastOrders/end";
//           break;

//         default:
//           break;
//       }
//       this.loadingSave = true;
//       apiServices()
//         .post(method, {
//           fastOrder_id: this.details.id,
//         })
//         .then(() => {
//           Vue.$toast.open({
//             message: "اعلام بار مجدد با موفقیت انجام شد .",
//             type: "success",
//           });
//           this.showDialog_again = false;
//           this.loadingSave = false;
//           this.$emit("listRefresh");
//         });
//     },
//     endOrder() {
//       var role = localStorage.getItem("role");

//       var method = null;
//       switch (role) {
//         case "COMPANY" || "COMPANY_MEMBER":
//           method = "v1/company/fastOrders/end";
//           break;

//         case "FACTORY" || "FACTORY_MEMBER":
//           method = "v1/factory/fastOrders/end";
//           break;

//         default:
//           break;
//       }
//       this.loadingSave = true;
//       apiServices()
//         .post(method, {
//           fastOrder_id: this.details.id,
//         })
//         .then(() => {
//           Vue.$toast.open({
//             message: "اعلام بار با موفقیت پایان یافت.",
//             type: "success",
//           });
//           this.showDialog = false;
//           this.loadingSave = false;
//           this.$emit("listRefresh");
//         });
//     },
//     showStatus(status) {
//       switch (status) {
//         case "EXPIRED":
//           return {
//             text: "منقضی شده",
//             color: "red",
//           };
//         case "PUBLISHED":
//           return {
//             text: "انتشار یافته",
//             color: "green",
//           };
//         case "END":
//           return {
//             text: "پایان یافته",
//             color: "defoutl",
//           };

//         case "REJECTED":
//           return {
//             text: "رد شده",
//             color: "red",
//           };

//         case "PENDING":
//           return {
//             text: "درصف انتشار",
//             color: "info",
//           };

//         default:
//           "- - - - - -";
//           break;
//       }
//     },
//     description(text) {
//       var str = text;
//       var res = str.substring(0, 80);

//       return {
//         res: res,
//         isMore: text.length > 80 ? true : false,
//       };
//     },
//     editItem(id) {
//       this.$emit("open-edit-form", id);
//     },
//     again(id) {
//       this.$emit("open-edit-form-again", id);
//     },
//     showDoing() {
//       this.$toast.open({
//         message: "این قابلیت درحال توسعه میباشد",
//         type: "info",
//       });
//     },
//   },
// };
</script>
<style scoped>
.dvider {
  width: 100%;
  border-bottom: 1px dashed;
  height: 2px;
  margin: 0px 5px;
}
.showLimitedText {
  display: flex;
  width: 400px !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>