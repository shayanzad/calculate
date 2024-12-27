
<template>
  <div>
    <div id="map" :style="{ height: '500px' }"></div>
  </div>
</template>

<script setup>
import { onMounted } from "#imports";
const props = defineProps({
  endSelected: {
    type: Boolean,
    required: true,
  },
  startSelected: {
    type: Boolean,
    required: true,
  },
});

import { defineEmits, defineProps } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
const emit = defineEmits(["customEvent"]);

onMounted(() => {
  const map = L.map("map").setView([32.6892, 54.389], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  map.on("click", async (e) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${e.latlng.lat}&lon=${e.latlng.lng}&addressdetails=1&accept-language=fa`;
    try {
      const response = await axios.get(url);
       if (response.data && response.data.address) {
        const address = response.data.address;
        var text = null;
        if (props.startSelected == false && props.endSelected == false) {
          text = "مبدا انتخاب شده";
        } else if (props.startSelected == true && props.endSelected == false) {
          text = "مقصد انتخاب شده";
        }
        if (props.endSelected == false) {
          var greenIcon = new L.Icon({
            iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${
              props.startSelected == false ? "red" : "blue"
            }.png`,
            shadowUrl:
              "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          });

          L.marker(e.latlng, { icon: greenIcon })
            .addTo(map)

            .bindPopup(`${text}`)
            .openPopup();

          map.setView([32.6892, 54.389], 5);
          emit("customEvent", {
            addressText:
              address.county ?? "" + " " + "_" + " " + address.district ?? "",
            latlng: e.latlng,
          });
        } else {
        }
      } else {
        console.log("نامشخص");
      }
    } catch (error) {
      console.error("خطا در دریافت نام شهر:", error);
      // this.cityName = 'خطا در دریافت نام شهر';
    }
  });
});
</script>

<style scoped>
/* @import '~leaflet/dist/leaflet.css'; */
</style>