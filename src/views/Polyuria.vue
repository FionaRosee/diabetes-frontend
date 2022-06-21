<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue";
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";

const router = useRouter();

function nextpolyuria() {
  router.push({ name: "Polydipsia" });
}

const sliderValue = ref("0");
const sliderObject = ref();

function changeSlider(newValue) {
  if (newValue > 3) {
    sliderObject.value.$el.classList.add("red");
  } else {
    sliderObject.value.$el.classList.remove("red");
  }
}
</script>

<template>
  <section>
  <img src="glee-naya-rivera.gif" alt="peegif" />
  </section>
  <section class="middle">
    <Slider
      class="slider"
      v-model="sliderValue"
      :min="0"
      :max="15"
      ref="sliderObject"
      orientation="vertical"
      direction="rtl"
      @update="changeSlider"
      :lazy="false"
    />
    <button @click="nextpolyuria" type="button" class="btn">
      Next
    </button>
  </section>
  <section><p>
    "Do you always have to go? If you have a condition called polyuria, it’s
    because your body makes more pee than normal. Adults usually make about 3
    liters of urine per day. But with polyuria, you could make up to 15 liters
    per day. Polyuria is often one of the first signs of diabetes. The
    condition makes sugar build up in your bloodstream. If your kidneys aren’t
    able to filter it out, it exits your body in your urine. As the extra
    sugar and fluids travel through your kidneys, you have to pee more. Plus,
    the more you go, the thirstier you feel, and the more you’ll drink."
    Source: https://www.webmd.com/diabetes/polyuria-too-much-urine
  </p></section>
</template>

<style scoped lang="scss">

img {
  flex: 1;
  margin-left: 5em;

}

section {
  flex: 1;
  margin: 2em;


  button {
    font-size: 2.15em;
    background-color: deepskyblue;
    color: white;
    margin-top: 3em;
    border-radius: 50px;
    padding: 0.3em 1.5em;

    &:hover {
      background: hotpink;
      color: white;
    }
  }
}

.middle {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.slider {
  height: 20em;

}

p {
  flex: 1;

}

.red {
  --slider-connect-bg: red;
  --slider-tooltip-bg: red;
  --slider-handle-shadow-active: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.42);
}
</style>
