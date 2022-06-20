<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";

const router = useRouter();

function startcheck() {
  router.push({ name: "Polyuria" });
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
    <p>
      "Do you always have to go? If you have a condition called polyuria, it’s
      because your body makes more pee than normal. Adults usually make about 3
      liters of urine per day. But with polyuria, you could make up to 15 liters
      per day. Polyuria is often one of the first signs of diabetes. The
      condition makes sugar build up in your bloodstream. If your kidneys aren’t
      able to filter it out, it exits your body in your urine. As the extra
      sugar and fluids travel through your kidneys, you have to pee more. Plus,
      the more you go, the thirstier you feel, and the more you’ll drink."
      Source: https://www.webmd.com/diabetes/polyuria-too-much-urine
    </p>
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
    <div class="form-floating mb-3">
      <button @click="startcheck" type="button" class="btn">
        Start the check
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -5em;
  position: relative;

  p {
    position: absolute;
    top: 3em;
    right: 1em;
    width: 25%;
  }

  button {
    font-size: 2.15em;
    background-color: deepskyblue;
    color: white;

    &:hover {
      background: hotpink;
      color: white;
    }
  }

  .same {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
  }
}

.slider {
  width: 10px;
}

.red {
  --slider-connect-bg: red;
  --slider-tooltip-bg: red;
  --slider-handle-shadow-active: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.42);
}
</style>
