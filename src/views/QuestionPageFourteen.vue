<template>
  <div class="main-layout container-fluid">
    <result
      v-if="readyForBackendRequest"
      :dataBackendRequest="dataBackendRequest"
    ></result>
    <div v-else>
      <the-navigation></the-navigation>
      <keep-alive>
        <alopecia @trigger-backend-request="sendBackendRequest"></alopecia>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import TheNavigation from "../components/nav/TheNavigation.vue";
import Alopecia from "../components/symptoms/Alopecia.vue";
import Result from "../components/symptoms/Result.vue";
export default {
  components: {
    TheNavigation,
    Alopecia,
    Result,
  },
  data() {
    return {
      readyForBackendRequest: false,
      dataBackendRequest: null,
    };
  },
  methods: {
    sendBackendRequest(data) {
      this.readyForBackendRequest = true;
      console.log("data backend request");
      console.dir(data);
      this.dataBackendRequest = data;
    },
  },
};
</script>

<style scoped>
</style>