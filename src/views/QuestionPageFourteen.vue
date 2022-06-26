<template>
<div class="main-layout container-fluid">
<the-navigation></the-navigation>
<keep-alive>
  <alopecia></alopecia>
</keep-alive>
</div>
</template>

<script>
import TheNavigation from '../components/nav/TheNavigation.vue'
import Alopecia from '../components/symptoms/Alopecia.vue'
export default{
components:{
  TheNavigation,
  Alopecia
}
}
</script>

<style scoped>

</style>