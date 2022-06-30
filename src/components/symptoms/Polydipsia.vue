<template>
  <div
    v-if="readyToLaunch"
    class="form container-fluid d-flex justify-content-center mb-5"
  >
    <div class="row my-4">
      <!-- image -->
      <div class="image col-4">
        <img
          src="../../assets/polyuria_polydipsia.png"
          class="img-fluid"
          alt="alopecia image"
        />
      </div>
      <div
        class="col-2 ms-5 me-5 mt-5 d-flex flex-column justify-content-center"
      >
        <!-- water bottle beginning-->
        <input
          type="radio"
          name="water"
          id="water-yes"
          value="1"
          v-model="polydipsia"
        />
        <label for="water-yes">
          <img src="../../assets/waterbottle_yes.png" alt="water bottle" />
          <span>You feel thirsty all the time</span>
        </label>
        <input
          type="radio"
          name="water"
          id="water-no"
          value="0"
          v-model="polydipsia"
          checked
        />
        <label for="water-no">
          <img src="../../assets/waterbottle_no.png" alt="water bottle" />
          <span>You feel well-hydrated</span>
        </label>
      </div>
      <!-- description -->
      <div
        class="description-box col bg-white d-flex align-items-start border border-light border border-3 rounded"
      >
        <div class="description-text p-2 d-block text-secondary">
          <p>
            <b>Polydipsia</b>
          </p>
          <p>
            Polydipsia is the word used to describe excessive thirst. If you’re
            experiencing polydipsia, you may feel thirsty all of the time or
            have persistent dry mouth. In people with diabetes, polydipsia is
            caused by increased blood glucose levels. When blood glucose levels
            get high, your kidneys produce more urine in an effort to remove the
            extra glucose from your body. Meanwhile, because your body is losing
            fluids, your brain tells you to drink more in order to replace them.
            This leads to the feeling of intense thirst associated with
            diabetes. Persistent feelings of thirst can also be caused by:
            dehydration osmotic diuresis, an increase in urination due to excess
            glucose entering the kidney tubules which can’t be reabsorbed,
            leading to increased water in the tubules and mental health issues,
            such as psychogenic polydipsia. Source:
            https://www.healthline.com/health/diabetes/3-ps-of-diabetes#polydipsia
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
      polydipsia: false,
    };
  },
  methods: {
    saveEntries() {
      const polydipsia = parseInt(this.polydipsia);
      this.userEntiresDB.polydipsia = polydipsia;
      this.dataBackendRequestDB.polydipsia = polydipsia;

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
            this.polydipsia = data.polydipsia ?? 0;
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

img {
  max-width: 100%;
}

input[type="radio"] {
  opacity: 0;
}

label {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
}

input[type="radio"]:checked + label {
  border: 2px solid #4fb0e0ad;
  border-radius: 10px;
  padding: 0;
}

label > img {
  border-radius: 10px;
}
</style>
