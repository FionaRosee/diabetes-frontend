<template>
<div class="main-layout container-fluid">
<the-navigation></the-navigation>
<keep-alive>
<irritability></irritability>
</keep-alive>
</div>
</template>

<script>
import TheNavigation from '../components/nav/TheNavigation.vue'
import Irritability from '../components/symptoms/Irritability.vue'

export default{
components:{
  TheNavigation,
  Irritability
}
}
</script>

<style scoped>

</style>