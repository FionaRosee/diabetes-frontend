<template>
  <BaseSpinnerDialog v-if="showSpinner" :open="showSpinner">
    <base-spinner></base-spinner>
  </BaseSpinnerDialog>
  <div class="container-fluid d-flex justify-content-center mt-5">
    <div v-if="loading" class="image col-4">
      <img
        src="../../assets/evaluation.png"
        class="img-fluid"
        alt="evaluation image"
      />
    </div>
    <div v-if="!loading" class="col-4"></div>
    <div v-if="!loading" class="image col-4">
      <img
        src="../../assets/result.png"
        class="img-fluid"
        alt="evaluation image"
      />
    </div>
    <div v-if="!loading" class="result-text col-4 p-2 d-block text-secondary">
      <p>
        <b>Result</b>
      </p>
      <p>
        According to our calculation ...
        {{ response }}
      </p>
    </div>
  </div>
</template>

<script>
import BaseSpinnerDialog from "../ui/BaseSpinnerDialog.vue";
import BaseSpinner from "../ui/BaseSpinner.vue";
export default {
  props: ["dataBackendRequest"],
  components: {
    BaseSpinnerDialog,
    BaseSpinner,
  },
  data() {
    return {
      showSpinner: true,
      loading: true,
      response: "",
    };
  },
  methods: {
    async sendRequest() {
      try {
        const response = await fetch(
          "https://diabetes-app-flask-backend.herokuapp.com/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // your expected POST request payload goes here
              'Age': 45,
              'Gender': 1,
              'Polyuria': 0,
              'Polydipsia': 0,
              'sudden weight loss': 0,
              'weakness': 1,
              'Polyphagia': 0,
              'Genital thrush': 0,
              'visual blurring': 0,
              'Itching': 0,
              'Irritability': 0,
              'delayed healing': 0,
              'partial paresis': 0,
              'muscle stiffness': 0,
              'Alopecia': 0,
              'Obesity': 0,
            }),
          }
        );
        const data = await response.json();
        // enter you logic when the fetch is successful
        this.showSpinner = false;
        this.loading = false;
        this.response = data;
        console.log(data);
      } catch (error) {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error);
      }
    },
  },
  created() {
    this.sendRequest();
  },
};
</script>