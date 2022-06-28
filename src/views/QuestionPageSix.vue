<template>
  <div class="main-layout container-fluid">
    <the-navigation></the-navigation>
    <keep-alive> 
<polyphagia></polyphagia>
    </keep-alive>
  </div>
</template>

<script>
import TheNavigation from "../components/nav/TheNavigation.vue";
import Polyphagia from "../components/symptoms/Polyphagia.vue";

export default {
  components: {
    TheNavigation,
    Polyphagia
  },
};
</script>

<style scoped>
</style>