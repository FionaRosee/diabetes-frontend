<template>
  <div
    v-if="readyToLaunch"
    class="form container-fluid d-flex justify-content-center mb-5"
  >
    <div class="row my-4">
      <!-- image -->
      <div class="image col-4">
        <img
          src="../../assets/itching.png"
          class="img-fluid"
          alt="itching image"
        />
      </div>

      <!-- form -->
      <div class="col-2 ms-5 me-5 d-block">
        <!-- itching -->
        <div class="col">
          <div class="form-floating">
            <select
              class="form-select"
              id="itching"
              aria-label="Floating label select example"
              v-model="itching"
              placeholder=" "
            >
              <option value="1">yes</option>
              <option value="0">no</option>
            </select>
            <label for="itching">Itching</label>
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
            <b>Itching</b>
          </p>
          <p>
            People with diabetes tend to experience itchy skin more often than
            those without the condition. Persistent itching can be uncomfortable
            and might lead to excessive scratching, which can cause infection,
            discomfort, and pain. 
            </p>
            <p>
            The symptoms of itching vary and depend on the
            cause. For example, if a person has peripheral neuropathy, they are
            more likely to experience itching on the lower parts of the legs.
            They may also experience a loss of sensation, usually in the feet or
            hands. A tingling sensation might accompany these symptoms. People
            with specific skin conditions or infections will itch at the site of
            the spot or lesion. Itching can make a person feel uncomfortable in
            their clothes, wake them up in the night, and make them feel as if
            they always need to scratch.
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
      itching: "",
    };
  },
  methods: {
    saveEntries() {
      if (this.alopecia != "") {
        this.userEntiresDB.itching = parseInt(this.itching);
        this.dataBackendRequestDB.Itching = parseInt(this.itching);
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
            this.itching = data.itching;
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

