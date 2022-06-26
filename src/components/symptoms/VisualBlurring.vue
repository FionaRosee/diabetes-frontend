<template>
  <div
    v-if="readyToLaunch"
    class="form container-fluid d-flex justify-content-center mb-5"
  >
    <div class="row my-4">
      <!-- image -->
      <div class="image col-4">
        <img
          src="../../assets/visual_blurring.png"
          class="img-fluid"
          alt="visual blurring image"
        />
      </div>

      <!-- form -->
      <div class="col-2 ms-5 me-5 d-block">
        <!-- visual blurring -->
        <div class="col">
          <div class="form-floating">
            <select
              class="form-select"
              id="visualBlurring"
              aria-label="Floating label select example"
              v-model="visualBlurring"
              placeholder=" "
            >
              <option value="1">yes</option>
              <option value="0">no</option>
            </select>
            <label for="visualBlurring">Visual blurring</label>
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
            <b>Visual blurring</b>
          </p>
          <p>
            Blurry vision means it’s harder to make out fine details in what
            you’re seeing. Several causes can stem from diabetes, as it may be a
            sign your glucose level is not in the right range — either too high
            or too low. The reason your sight blurs may be fluid leaking into
            the lens of your eye. This makes the lens swell and change shape.
            Those changes make it hard for your eyes to focus, so things start
            to look fuzzy.
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
      visualBlurring: "",
    };
  },
  methods: {
    saveEntries() {
      if (this.alopecia != "") {
        this.userEntiresDB.visualBlurring = parseInt(this.visualBlurring);
        this.dataBackendRequestDB.visual_blurring = parseInt(
          this.visualBlurring
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
            this.visualBlurring = data.visualBlurring;
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

