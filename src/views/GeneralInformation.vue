<template>
<div class="main-layout container-fluid">
<the-navigation></the-navigation>
<obsesity></obsesity>
</div>
</template>

<script>
import TheNavigation from '../components/nav/TheNavigation.vue'
import Obsesity from '../components/symptoms/Obsesity.vue'
export default{
components:{
  TheNavigation,
  Obsesity
}
}
</script>

<style scoped>

</style>