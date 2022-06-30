<template>
  <div class="main-layout container-fluid">
    <the-navigation></the-navigation>
    <keep-alive>
      <Polydipsia></Polydipsia>
    </keep-alive>
  </div>
</template>

<script>
import TheNavigation from "../components/nav/TheNavigation.vue";
import Polydipsia from "../components/symptoms/Polydipsia.vue";


export default {
  components: {
    TheNavigation,
    Polydipsia,
  },
};

</script>

<style scoped>
</style>
