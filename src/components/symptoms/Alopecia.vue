<template>
  <base-dialog
    v-if="dialogIsVisible"
    @close="dialogIsVisible = false"
    :open="dialogIsVisible"
  >
    <p class="text-secondary">
      The result cannot be evaluated because of unanswered questions. Please
      check the navigation bar (gray fields).
    </p>
    <div class="d-flex justify-content-center">
      <button
        type="button"
        class="btn btn-outline-danger rounded-pill px-4"
        @click="dialogIsVisible = false"
      >
        ok
      </button>
    </div>
  </base-dialog>
  <div
    v-if="readyToLaunch"
    class="form container-fluid d-flex justify-content-center mb-5"
  >
    <div class="row my-4">
      <!-- image -->
      <div class="image col-4">
        <img
          src="../../assets/alopecia.png"
          class="img-fluid"
          alt="alopecia image"
        />
      </div>

      <!-- form -->
      <div class="col-2 ms-5 me-5 d-block">
        <!-- alopecia -->
        <div class="col">
          <div class="form-floating">
            <select
              class="form-select"
              id="alopecia"
              aria-label="Floating label select example"
              v-model="alopecia"
              placeholder=" "
            >
              <option value="1">yes</option>
              <option value="0">no</option>
            </select>
            <label for="alopecia">Circular hair loss</label>
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
            <b>Circular hair loss</b>
          </p>
          <p>
            Symptoms of alopecia areata: Mostly round bald spots. In the case of
            circular hair loss, individual round bald spots usually form
            relatively quickly or also in phases: in the hair of the head, less
            frequently in the beard, in the face or in the body hair. At the
            edge of the hairless areas there are usually short, broken hairs,
            so-called "comma" hairs. Towards the skin pores they are thinner.
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
            @click="validation"
          >
            result
          </button>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { get, set } from "idb-keyval";
import BaseDialog from "../ui/BaseDialog.vue";
export default {
  components: {
    BaseDialog,
  },
  data() {
    return {
      readyToLaunch: false,
      dialogIsVisible: false,
      userEntiresDB: null,
      dataBackendRequestDB: null,
      alopecia: "",
    };
  },
  methods: {
    saveEntries() {
      if (this.alopecia != "") {
        this.userEntiresDB.alopecia = parseInt(this.alopecia);
        this.dataBackendRequestDB.Alopecia = parseInt(this.alopecia);
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
            this.alopecia = data.alopecia;
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
    validation() {
      this.saveEntries();

      let dataBackendRequest = {
        Age: 35,
        Gender: 1,
        Polyuria: 0,
        Polydipsia: 0,
        sudden_weight_loss: 1,
        weakness: 0,
        Polyphagia: 0,
        Genital_thrush: 0,
        visual_blurring: 0,
        Itching: 0,
        Irritability: 1,
        delayed_healing: null,
        partial_paresis: 0,
        muscle_stiffness: 0,
        Alopecia: 0,
        Obesity: 0,
      };
      
      //nur zum Testen -> dataBackendRequest SONST this.dataBackendRequestDB
      for (let attr in dataBackendRequest) {
        if (dataBackendRequest[attr] == null) {
          this.dialogIsVisible = true;
          break;
        }
      }

      console.log("valid: ", valid);
    },
  },
  created() {
    this.loadDataDB();
  },
  beforeUnmount() {
    this.saveEntries();
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

