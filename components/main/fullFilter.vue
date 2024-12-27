<!-- @format -->

<template>
  <div>
    <div class="flex justify-end">
      <v-btn v-if="filterSelected.length" color="primary" variant="outlined" @click="resetForm"  class="flex items-center justify-center ml-2">
        <v-icon>mdi-close </v-icon>
        <span>حذف {{ (filterSelected.length) }} فیلتر</span>
      </v-btn>
      <v-btn @click="openModal"  class="flex items-center justify-center">
        <v-icon>mdi-filter </v-icon>
        <span>فیلتر</span>
      </v-btn>
    </div>
    <div>
      <v-dialog v-model="showModal" width="600px">
        <v-card>
          <div class="p-5">
            <div
              class="border-b-2 mb-5 border-[rgba(239, 244, 255, 1)] pb-2 mb-2"
            >
              <v-icon>mdi-filter </v-icon>فیلتر ها
            </div>
            <div>
              <v-row>
                <v-col cols="6">
                  <persianDatePiker
                    id="start_date"
                    title="از تاریخ"
                    v-model="filterModel.from_date"
                  />
                </v-col>
                <v-col cols="6">
                  <persianDatePiker
                    id="end_date"
                    title="تا تاریخ"
                    v-model="filterModel.to_date"
                  />
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    item-value="id"
                    item-title="name"
                    :items="provinceList"
                    hide-details
                    label="استان مبدا"
                    clearable
                    density="compact"
                    class="w-full"
                    @input="ppppp"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    outlined
                    variant="outlined"
                    v-model="filterModel.originCity_id"
                    item-value="id"
                    item-title="name"
                    :items="originCitesList"
                    hide-details
                    label="شهر مبدا"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    outlined
                    variant="outlined"
                    v-model="filterModel.destination_province_id"
                    item-value="id"
                    item-title="name"
                    :items="provinceList"
                    hide-details
                    label="استان مقصد"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    outlined
                    variant="outlined"
                    v-model="filterModel.destination_city_id"
                    item-value="id"
                    item-title="name"
                    :items="provinceList"
                    hide-details
                    label="شهر مقصد"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    outlined
                    variant="outlined"
                    v-model="filterModel.statusId"
                    item-value="id"
                    item-title="title"
                    :items="statusList"
                    hide-details
                    label="وضعیت"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    outlined
                    variant="outlined"
                    v-model="filterModel.product"
                    item-value="id"
                    item-title="title"
                    :items="productList"
                    hide-details
                    label="  نوع کالا"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    outlined
                    variant="outlined"
                    v-model="filterModel.package_type"
                    item-value="id"
                    item-title="title"
                    :items="packageTypeList"
                    hide-details
                    label="  نوع بسته بندی"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12">
                  <v-autocomplete
                    outlined
                    variant="outlined"
                    v-model="filterModel.car_type"
                    item-value="id"
                    item-title="title"
                    :items="carTypeList"
                    hide-details
                    label="نوع ناوگان"
                    clearable
                    density="compact"
                    class="w-full"
                    multiple
                  ></v-autocomplete>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    outlined
                    variant="outlined"
                    v-model="filterModel.min_price"
                    hide-details
                    label=" حداقل مبلغ به ریال"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-text-field>
                </v-col>

                <v-col cols="6">
                  <v-text-field
                    outlined
                    variant="outlined"
                    v-model="filterModel.max_price"
                    hide-details
                    label=" حداکثر مبلغ به ریال"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    variant="outlined"
                    v-model="filterModel.id"
                    hide-details
                    label="شماره اعلام بار"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-text-field>
                </v-col>
                <!-- 
                <v-col cols="6">
                  <v-autocomplete
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    item-value="id"
                    item-title="name"
                    :items="provinceList"
                    hide-details
                    label="نوع خودرو"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-autocomplete>
                </v-col>
                
                <v-col cols="6">
                  <v-autocomplete
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    item-value="id"
                    item-title="name"
                    :items="provinceList"
                    hide-details
                    label="نوع تراکنش"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    item-value="id"
                    item-title="name"
                    :items="provinceList"
                    hide-details
                    label="  نوع بسته بندی"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    item-value="id"
                    item-title="name"
                    :items="provinceList"
                    hide-details
                    label="عکس بارنامه"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-autocomplete
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    item-value="id"
                    item-title="name"
                    :items="provinceList"
                    hide-details
                    label="وضعیت"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    :items="provinceList"
                    hide-details
                    label="شناسه حواله"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    hide-details
                    label="موبایل راننده"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    hide-details
                    label="کد پستی"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    hide-details
                    label="کد ملی"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    hide-details
                    label="عنوان"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    hide-details
                    label="شماره رهگیری"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    hide-details
                    label="شناسه اعلام بار"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    hide-details
                    label="شناسه حواله"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    variant="outlined"
                    v-model="filterModel.originProvince_id"
                    hide-details
                    label="مبلغ به ریال"
                    clearable
                    density="compact"
                    class="w-full"
                  ></v-text-field>
                </v-col> -->
                <v-col cols="12" class="text-left">
                  <v-btn class="mx-1" @click="closeFilter">بستن</v-btn>
                  <v-btn class="mx-1" @click="resetForm">بازگردانی</v-btn>
                  <v-btn class="mx-1" @click="addFilter">اعمال</v-btn>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script setup>
import persianDatePiker from "../../components/base/inputPDate.vue";
import { ref, onMounted, watch } from "#imports";
const showModal = ref(false);
const provinceList = ref([]);
const productList = ref([]);
const packageTypeList = ref([]);
const carTypeList = ref([]);
const filterSelected = ref([]);
const statusList = ref([
  { id: "CANCEL_ADMIN", title: "کنسل شده ادمین" },
  { id: "CANCEL_COMPANY", title: "کنسل شده شرکت" },
  { id: "END", title: "پایان اعلام بار توسط شرکت" },
  { id: "END_ADMIN", title: "پایان اعلام بار توسط ادمین" },
  { id: "ISSUANCE_REMITTANCE", title: "حواله شده" },
]);

const filterModel = ref({
  originProvince_id: null,
  destination_province_id: null,
  destination_city_id: null,
  id: null,
  originCity_id: null,
  package_type: null,
  car_type: null,
  min_price: null,
  max_price: null,
  from_date: null,
  to_date: null,
  statusId: [],
  endDate: null,
  product: null,
});
const emit = defineEmits(["click", "classBtn"]);

import apiServices from "~/server/apiServices";
const query = ref("");
const role = localStorage.getItem("role");
const closeFilter = () => {
  showModal.value = false;
};
const setQuery = () => {
  query.value = "";
  filterSelected.value=[]
  if (filterModel.value.originProvince_id) {
    query.value += "&originProvince_id=" + filterModel.value.originProvince_id;
    filterSelected.value.push("originProvince_id")
  }
  if (filterModel.value.destination_province_id) {
    query.value +=
      "&destination_province_id=" + filterModel.value.destination_province_id;
    filterSelected.value.push("destination_province_id")

  }
  if (filterModel.value.destination_city_id) {
    query.value +=
      "&destination_city_id=" + filterModel.value.destination_city_id;
      filterSelected.value.push("destination_city_id")

  }
  if (filterModel.value.originCity_id) {
    query.value += "&originCity_id=" + filterModel.value.originCity_id;
    filterSelected.value.push("originCity_id")

  }
  if (filterModel.value.statusId && filterModel.value.statusId.length > 0) {
    query.value += "&status=" + filterModel.value.statusId;
    filterSelected.value.push("status")

  }
  if (filterModel.value.product) {
    query.value += "&product=" + filterModel.value.product;
    filterSelected.value.push("product")

  }
  if (filterModel.value.package_type) {
    query.value += "&package_type=" + filterModel.value.package_type;
    filterSelected.value.push("package_type")

  }
  if (filterModel.value.car_type) {
    query.value += "&car_type=" + filterModel.value.car_type;
    filterSelected.value.push("car_type")

  }
  if (filterModel.value.id) {
    query.value += "&id=" + filterModel.value.id;
    filterSelected.value.push("id")

  }
  if (filterModel.value.min_price) {
    query.value += "&min_price=" + filterModel.value.min_price;
    filterSelected.value.push("min_price")

  }
  if (filterModel.value.max_price) {
    query.value += "&max_price=" + filterModel.value.max_price;
    filterSelected.value.push("max_price")

  }
  if (filterModel.value.to_date) {
    query.value += "&to_date=" + filterModel.value.to_date;
    filterSelected.value.push("to_date")

  }
  if (filterModel.value.from_date) {
    query.value += "&from_date=" + filterModel.value.from_date;
    filterSelected.value.push("from_date")

  }
};
const resetObj = (obj) => {
  for (var key in obj) {
    obj[key] = null;
  }
};
const ppppp = () => {
  console.log("red");
};
const addFilter = () => {
  setQuery();

  emit("setFilter", query.value);
  showModal.value = false;
};
const resetForm = () => {
  resetObj(filterModel.value);
  setQuery();

  emit("setFilter", query.value);
  filterSelected.value=[]
};
 
const originCitesList = ref([]);
const roleCurrent = () => {
  if (role == "factory-member" || role == "FACTORY") {
    return "factory";
  } else if (role == "company-member" || role == "COMPANY") {
    return "company";
  }
};
watch(
  () => showModal.value,
  () => {
    //   emit("curentPage",curentPage.value)
    console.log(showModal.value);
  }
);

watch(
  () => filterModel.value.originProvince_id,
  () => {
    if (filterModel.value.originProvince_id) {
    }
    getOriginCites(filterModel.value.originProvince_id);
  }
);
const getOriginCites = (provinceId) => {
  apiServices
    .apiGet(
      `v1/${roleCurrent()}/fastOrders/cities?province_id=${provinceId}`,
      {}
    )
    .then((res) => {
      originCitesList.value = res.data.cities;
    });
};
const getProvince = () => {
  apiServices
    .apiGet(`v1/${roleCurrent()}/fastOrders/provinces`, {})
    .then((res) => {
      provinceList.value = res.data.provinces;
    });
};
const getProduct = () => {
  apiServices
    .apiGet(`v1/${roleCurrent()}/product/getProduct`, {})
    .then((res) => {
      productList.value = res.data.product;
    });
};
const getPackageType = () => {
  apiServices
    .apiGet(`v1/${roleCurrent()}/packageType/getPackageType`, {})
    .then((res) => {
      packageTypeList.value = res.data.packageType;
    });
};
const getCaType = () => {
  apiServices.apiGet(`v1/${roleCurrent()}/car/listCarType`, {}).then((res) => {
    carTypeList.value = res.data.carType;
  });
};

const openModal = () => {
  showModal.value = true;
};

onMounted(() => {
  getProvince();
  getProduct();
  getPackageType();
  getCaType();
});
</script>
