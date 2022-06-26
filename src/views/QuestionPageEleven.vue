<template>
<div class="main-layout container-fluid">
<the-navigation></the-navigation>
<keep-alive>
  <delayed-healing></delayed-healing>
</keep-alive>
</div>
</template>

<script>
import TheNavigation from '../components/nav/TheNavigation.vue'
import DelayedHealing from '../components/symptoms/DelayedHealing.vue'
export default{
components:{
  TheNavigation,
  DelayedHealing
}
}
</script>

<style scoped>

</style>