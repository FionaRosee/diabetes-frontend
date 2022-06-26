<template>
<div class="main-layout container-fluid">
<the-navigation></the-navigation>
<keep-alive>
  <muscle-stiffness></muscle-stiffness>
</keep-alive>
</div>
</template>

<script>
import TheNavigation from '../components/nav/TheNavigation.vue'
import MuscleStiffness from '../components/symptoms/MuscleStiffness.vue'
export default{
components:{
  TheNavigation,
  MuscleStiffness
}
}
</script>

<style scoped>

</style>