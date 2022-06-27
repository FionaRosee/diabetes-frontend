<template>
  <div
    v-if="readyToLaunch"
    class="form container-fluid d-flex justify-content-center mb-5"
  >
    <div class="row my-4">
      <!-- image -->
      <div class="image col-4">
        <img
          src="../../assets/irritability.png"
          class="img-fluid"
          alt="irritability image"
        />
      </div>

      <!-- form -->
      <div class="col-2 ms-5 me-5 d-block">
        <!-- irritability -->
        <div class="col">
          <div class="form-floating">
            <select
              class="form-select"
              id="irritability"
              aria-label="Floating label select example"
              v-model="irritability"
              placeholder=" "
            >
              <option value="1">yes</option>
              <option value="0">no</option>
            </select>
            <label for="irritability">Irritability</label>
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
            <b>Irritability</b>
          </p>
          <p>
            Irritability involves feelings of anger or frustration that often
            arise over even the smallest of things. While irritability can be
            normal and everyone experiences it on occasion, it may also be an
            indicator of an underlying condition. Irritability can lead to a
            number of different behaviors and feelings. Some of the common signs
            of irritability include:
          </p>
          <ul>
            <li>Agitation, frustration, and annoyance</li>
            <li>Confusion and difficulty concentrating</li>
            <li>Difficulty making accommodations or changing plans</li>
            <li>Excessive sweating</li>
            <li>Fatigue</li>
            <li>Increased breathing rate</li>
            <li>Rapid heartbeat</li>
            <li>Oversensitivity</li>
            <li>Short temper</li>
            <li>Tension</li>
          </ul>
        </div>
      </div>

      <!-- next button -->

      <div class="row mt-5">
        <div class="col-4"></div>
        <div class="col-2 ms-5 me-5 mt-2 d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-outline-primary rounded-pill ms-3 px-5"
            @click="this.$router.push('/question_page_eleven')"
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
      irritability: "",
    };
  },
  methods: {
    saveEntries() {
      if (this.alopecia != "") {
        this.userEntiresDB.irritability = parseInt(this.irritability);
        this.dataBackendRequestDB.Irritability = parseInt(
          this.irritability
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
            this.irritability = data.irritability;
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
    beforeUnmount(){
    this.saveEntries()
  }
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

