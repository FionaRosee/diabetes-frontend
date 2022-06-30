<template>
  <div
    v-if="readyToLaunch"
    class="form container-fluid d-flex justify-content-center mb-5"
  >
    <div class="row my-4">
      <!-- image -->
      <div class="image col-4">
        <img
          src="../../assets/suddenly_weightloss.png"
          class="img-fluid"
          alt="alopecia image"
        />
      </div>
      <div class="col-2 ms-5 me-5 d-block">
        <!-- fat to thin-->
        <label for="weightloss">Weightloss:</label>
        <select name="weightloss" id="weightloss" v-model="suddenly">
          <option value="yes">more than 10 pounds</option>
          <option value="no">less than 10 pounds</option>
        </select>
        <!-- fat to thin end -->
      </div>
      <!-- description -->
      <div
        class="description-box col bg-white d-flex align-items-start border border-light border border-3 rounded"
      >
        <div class="description-text p-2 d-block text-secondary">
          <p>
            <b>Suddenly Weightloss</b>
          </p>
          <p>
            In many cases, we can afford to gain or lose a pound or two. It’s
            normal to indulge a little too much (especially around the holidays)
            and then work to get in some extra exercise time in our schedules.
            It’s also normal to lose a couple of pounds when battling an
            illness; once we feel better, we can start eating normally again and
            regain the weight. One aspect of weight that’s not normal, however,
            is if you’re experiencing a major drop in pounds without any major
            diet or exercise changes. If this severe and unexpected weight loss
            is taking place, talk to your healthcare provider immediately. While
            weight loss of just a pound or two isn’t a reason for concern,
            unexplained weight loss of 10 pounds or more may mean something is
            wrong and that your body is trying to tell you something.
            Ultimately, this dramatic weight loss could be an early sign of
            diabetes.
            Source:https://health.clevelandclinic.org/what-you-should-know-about-unexplained-weight-loss-and-diabetes/
          </p>
        </div>
      </div>

      <!-- next button -->

      <div class="row mt-5">
        <div class="col-4"></div>
        <div class="col-2 ms-5 me-5 mt-2 d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-outline-primary rounded-pill ms-3 px-5"
            @click="saveEntries"
          >
            Next
          </button>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { get, set } from "idb-keyval";

export default {
  data() {
    return {
      readyToLaunch: false,
      userEntiresDB: null,
      dataBackendRequestDB: null,
      suddenly: "",
    };
  },
  methods: {
    saveEntries() {
      if (this.suddenly !== "") {
        const weightloss = this.suddenly === "yes" ? 1 : 0;
        this.userEntiresDB.suddenly = weightloss;
        this.dataBackendRequestDB.polydipsia = weightloss;
      }

      //save userEntries
      set("userEntries", JSON.parse(JSON.stringify(this.userEntiresDB)))
        .then(() => {
          console.log("User Daten gespeichert:");
          console.dir(this.userEntiresDB);
        })
        .catch(console.warn);

      //save data for backend request
      set(
        "dataBackendRequest",
        JSON.parse(JSON.stringify(this.dataBackendRequestDB))
      )
        .then(() => {
          console.log("Daten Backend Anfrage gespeichert:");
          console.dir(this.dataBackendRequestDB);
        })
        .catch(console.warn);
    },
    loadDataDB() {
      get("userEntries")
        .then((data) => {
          if (data != null) {
            this.suddenly = data.suddenly ?? "";
          }
          this.userEntiresDB = data;
        })
        .then(() => {
          get("dataBackendRequest").then((data) => {
            if (data != null) {
              this.dataBackendRequestDB = data;
              this.readyToLaunch = true;
            }
          });
        });
    },
  },
  created() {
    this.loadDataDB();
  },
};
</script>

<style scoped>
.btn-outline-primary {
  border-color: #4fb0e0ad;
  color: #4fb0e0ad;
  font-weight: bold;
}

.btn-outline-primary:hover {
  border-color: #4fb0e0;
  background-color: #4fb0e0;
}
</style>
>
