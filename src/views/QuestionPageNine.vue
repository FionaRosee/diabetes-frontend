<template>
  <div class="main-layout container-fluid">
    <the-navigation></the-navigation>
    <keep-alive>
      <itching></itching>
    </keep-alive>
  </div>
</template>

<script>
import TheNavigation from "../components/nav/TheNavigation.vue";
import Itching from "../components/symptoms/Itching.vue";
export default {
  components: {
    TheNavigation,
    Itching,
  },
};
</script>

<style scoped>
</style>