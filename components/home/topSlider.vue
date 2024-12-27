<template>
  <div ref="container" class="keen-slider">
    <div class="keen-slider__slide number-slide1">
      <img src="../../assets/images/bargaram-1-banner.jpg" />
      <div
        class="absolute top-10 left-10 p-5 text-small text-center flex flex-col"
        style="font-size: 18px"
      >
        <h2 class="bg-[#272424a1] rounded-md p-3">
          بارگرام مدعی ارائه خدمات عادلانه به رانندگان
        </h2>
        <span class="bg-[#272424a1] rounded-md mt-4 p-3">
          اعلام بار _ مشاهده حواله های صادر شده _ تایید بارگیری _رصد
          ناوگان</span
        >
      </div>
    </div>
    <div class="keen-slider__slide number-slide2 ooo">
      <img src="../../assets/images/bargaram-2-banner.jpg" />
      <div
        class="absolute top-10 left-10 flex flex-col rounded-md p-5 text-small text-center"
        style="font-size: 18px"
      >
        <h2 class="bg-[#272424a1] rounded-md p-3">
          ما مدعی هستیم در هر ساعت از شبانه روز برای شما ناوگان پیدا میکنیم و
          بارنامه صادرکنیم
        </h2>
        <span class="bg-[#27242471] rounded-md mt-4 p-3">
          اعلام بار _ مشاهده حواله های صادر شده _ تایید بارگیری _رصد
          ناوگان</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useKeenSlider } from "keen-slider/vue.es";
import "keen-slider/keen-slider.min.css";

export default {
  setup() {
    const [container] = useKeenSlider(
      {
        loop: true,
      },
      [
        (slider) => {
          let timeout;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 6000);
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on("dragStarted", clearNextTimeout);
          slider.on("animationEnded", nextTimeout);
          slider.on("updated", nextTimeout);
        },
      ]
    );
    return { container };
  },
};
</script>

<style scoped>
body {
  margin: 0;
}
[class^="number-slide"],
[class*=" number-slide"] {
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  max-height: 600px;
  /* max-height: 100vh; */
}
img {
  filter: blur(1px);
}

.number-slide1 {
  background: rgb(64, 175, 255);
  background: linear-gradient(
    128deg,
    rgba(64, 175, 255, 1) 0%,
    rgba(63, 97, 255, 1) 100%
  );
}

.number-slide2 {
  background: rgb(255, 75, 64);
  background: linear-gradient(
    128deg,
    rgba(255, 154, 63, 1) 0%,
    rgba(255, 75, 64, 1) 100%
  );
}
</style>
