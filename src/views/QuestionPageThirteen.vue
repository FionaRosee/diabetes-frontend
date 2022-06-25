<template>
<div class="main-layout container-fluid">
<the-navigation></the-navigation>
<muscle-stiffness></muscle-stiffness>
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