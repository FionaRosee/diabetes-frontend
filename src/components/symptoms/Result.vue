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
        // request successfull
        setTimeout(() => {
        this.showSpinner = false;
        this.loading = false;
        this.response = data;
        console.log(data);
        }, 3000);
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