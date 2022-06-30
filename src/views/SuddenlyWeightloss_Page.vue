<template>
  <div class="main-layout container-fluid">
    <the-navigation></the-navigation>
    <keep-alive>
      <SuddenlyWeightloss></SuddenlyWeightloss>
    </keep-alive>
  </div>
</template>

<script>
import TheNavigation from "../components/nav/TheNavigation.vue";
import SuddenlyWeightloss from "../components/symptoms/SuddenlyWeightloss.vue";


export default {
  components: {
    TheNavigation,
    SuddenlyWeightloss,
  },
};

</script>

<style scoped>
</style>

