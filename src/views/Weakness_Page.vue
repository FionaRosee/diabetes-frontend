<template>
  <div class="main-layout container-fluid">
    <the-navigation></the-navigation>
    <keep-alive>
      <Weakness></Weakness>
    </keep-alive>
  </div>
</template>

<script>
import TheNavigation from "../components/nav/TheNavigation.vue";
import Weakness from "../components/symptoms/Weakness.vue";


export default {
  components: {
    Weakness,
    TheNavigation,
  },
};

</script>
