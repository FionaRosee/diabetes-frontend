<template>
  <div
    v-if="readyToLaunch"
    class="form container-fluid d-flex justify-content-center mb-5"
  >
    <div class="row my-4">
      <!-- image -->
      <div class="image col-4">
        <img
          src="../../assets/genital_thrush.png"
          class="img-fluid"
          alt="genital thrush image"
        />
      </div>

      <!-- form -->
      <div class="col-2 ms-5 me-5 d-block">
        <!-- genital thrush  -->
        <div class="col">
          <div class="form-floating">
            <select
              class="form-select"
              id="genitalThrush "
              aria-label="Floating label select example"
              v-model="genitalThrush"
              placeholder=" "
            >
              <option value="1">yes</option>
              <option value="0">no</option>
            </select>
            <label for="genitalThrush">Genital thrush</label>
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
            <b>Genital thrush</b>
          </p>
          <p>
            Thrush is a yeast infection (candida albicans) which tends to affect
            warm, moist areas of the body such as the vagina, penis, mouth and
            certain areas of skin. Thrush is more common in people with diabetes
            as high sugar levels lead to better conditions for the yeast to
            grow. A dry mouth coupled with a higher amount of glucose in the
            saliva can also make for favourable conditions for thrush.
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
      genitalThrush: "",
    };
  },
  methods: {
    saveEntries() {
      if (this.alopecia != "") {
        this.userEntiresDB.genitalThrush = parseInt(this.genitalThrush);
        this.dataBackendRequestDB.Genital_thrush = parseInt(this.genitalThrush);
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
            this.genitalThrush = data.genitalThrush;
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

