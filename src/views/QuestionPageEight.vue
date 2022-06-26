<template>
  <div class="main-layout container-fluid">
    <the-navigation></the-navigation>
    <keep-alive>
      <visual-blurring></visual-blurring>
    </keep-alive>
  </div>
</template>

<script>
import TheNavigation from "../components/nav/TheNavigation.vue";
import VisualBlurring from "../components/symptoms/VisualBlurring.vue"

export default {
  components: {
    TheNavigation,
    VisualBlurring
  },
};
</script>

<style scoped>
</style>