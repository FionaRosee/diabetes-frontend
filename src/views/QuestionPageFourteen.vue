<template>
<div class="main-layout container-fluid">
<the-navigation></the-navigation>
<alopecia></alopecia>
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