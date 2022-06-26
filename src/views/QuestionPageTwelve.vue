<template>
<div class="main-layout container-fluid">
<the-navigation></the-navigation>
<keep-alive>
  <partial-paresis></partial-paresis>
</keep-alive>
</div>
</template>

<script>
import TheNavigation from '../components/nav/TheNavigation.vue'
import PartialParesis from '../components/symptoms/PartialParesis.vue'
export default{
components:{
  TheNavigation,
  PartialParesis
}
}
</script>

<style scoped>

</style>