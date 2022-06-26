<template>
  <div
    v-if="readyToLaunch"
    class="form container-fluid d-flex justify-content-center mb-5"
  >
    <div class="row my-4">
      <!-- image -->
      <div class="image col-4">
        <img
          src="../../assets/partial_paresis.png"
          class="img-fluid"
          alt="partial paresis image"
        />
      </div>

      <!-- form -->
      <div class="col-2 ms-5 me-5 d-block">
        <!-- partial paresis -->
        <div class="col">
          <div class="form-floating">
            <select
              class="form-select"
              id="partialParesis"
              aria-label="Floating label select example"
              v-model="partialParesis"
              placeholder=" "
            >
              <option value="1">yes</option>
              <option value="0">no</option>
            </select>
            <label for="partialParesis">Partial paresis</label>
          </div>
        </div>
        <!-- end of form -->
      </div>

      <!-- description -->
      <div
        class="
          description-box
          col
          bg-white
          d-flex
          align-items-start
          border border-light border border-3
          rounded
        "
      >
        <div class="description-text p-2 d-block text-secondary">
          <p>
            <b>Partial paresis</b>
          </p>
          <p>
            A paresis is a partial failure of motor functions of a single
            muscle, a muscle group or an extremity. This partial failure can be
            more or less noticeable. When nerves are damaged, for example by
            certain diseases or injuries, the communication between muscles,
            brain and nerves can no longer function properly. The result is
            disturbances with regard to sensation and movement in the respective
            body part. Depending on the causes as well as the course of the
            disease, various symptoms can be observed in those affected. In
            general, patients suffering from paresis are no longer able to fully
            use their physical strength in the areas affected by the paresis.
            The result is a lack of sensitivity or sensory disturbances. Legs,
            feet, arms or hands may be affected by burning, numbness or
            tingling. In some cases, people suffering from paresis are unable to
            feel touch, cold or heat in the affected areas. In addition, the
            sensation of pain may also be perceived as significantly reduced or
            completely eliminated.
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
      partialParesis: "",
    };
  },
  methods: {
    saveEntries() {
      if (this.alopecia != "") {
        this.userEntiresDB.partialParesis = parseInt(this.partialParesis);
        this.dataBackendRequestDB.partial_paresis = parseInt(
          this.partialParesis
        );
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
            this.partialParesis = data.partialParesis;
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
</style>>

