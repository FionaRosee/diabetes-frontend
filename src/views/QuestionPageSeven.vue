<template>
  <div class="main-layout container-fluid">
    <the-navigation></the-navigation>
    <keep-alive> 
      <genital-thrush></genital-thrush>
    </keep-alive>
  </div>
</template>

<script>
import TheNavigation from "../components/nav/TheNavigation.vue";
import GenitalThrush from "../components/symptoms/GenitalThrush.vue";

export default {
  components: {
    TheNavigation,
    GenitalThrush,
  },
};
</script>

<style scoped>
</style>