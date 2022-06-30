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

    <div v-if="!loading && responseData != null" class="col-4"></div>
    <div v-if="!loading && responseData != null" class="image col-4">
      <img
        src="../../assets/result.png"
        class="img-fluid"
        alt="evaluation image"
      />
    </div>
    <div
      v-if="!loading && responseData != null"
      class="result-text col-4 p-2 d-block text-secondary"
    >
      <p class="h4">
        <b>Result</b>
      </p>
      <p v-if="responseData.result == 1">
        According to our machine learning algorithm, you
        <i><b>have diabetes</b></i> with a probability of
        <i
          ><b>{{ (responseData.predictProba1 * 100).toFixed(2) }}%</b></i
        >. Please get checked by a doctor.
      </p>

      <p v-else-if="responseData.predictProba0 < 0.9">
        According to our machine learning algorithm, you
        <i><b>don't have</b></i> diabetes with a probability of
        <i
          ><b>{{ (responseData.predictProba0 * 100).toFixed(2) }}%</b></i
        >
        but still get checked by a doctor.
      </p>

      <p v-else>
        According to our machine learning algorithm, you
        <i><b>don't have</b></i> diabetes with a probability of
        <i
          ><b>{{ (responseData.predictProba0 * 100).toFixed(2) }}%</b></i
        >.
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
      showResult: false,
      responseData: null,
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
              //POST request payload
              Age: this.dataBackendRequest.age_group,
              Gender: this.dataBackendRequest.Gender,
              Polyuria: this.dataBackendRequest.Polyuria,
              Polydipsia: this.dataBackendRequest.Polydipsia,
              "sudden weight loss": this.dataBackendRequest.sudden_weight_loss,
              weakness: this.dataBackendRequest.weakness,
              Polyphagia: this.dataBackendRequest.Polyphagia,
              "Genital thrush": this.dataBackendRequest.Genital_thrush,
              "visual blurring": this.dataBackendRequest.visual_blurring,
              Itching: this.dataBackendRequest.Itching,
              Irritability: this.dataBackendRequest.Irritability,
              "delayed healing": this.dataBackendRequest.delayed_healing,
              "partial paresis": this.dataBackendRequest.partial_paresis,
              "muscle stiffness": this.dataBackendRequest.muscle_stiffness,
              Alopecia: this.dataBackendRequest.Alopecia,
              Obesity: this.dataBackendRequest.Obesity,
            }),
          }
        );
        const data = await response.json();
        this.responseData = data;
        setTimeout(() => {
          this.showSpinner = false;
          this.loading = false;
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.sendRequest();
  },
};
</script>