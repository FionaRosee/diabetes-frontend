<template>
  <div
    v-if="readyToLaunch"
    class="form container-fluid d-flex justify-content-center mb-5"
  >
    <div class="row my-4">
      <!-- image -->
      <div class="image col-4">
        <img
          src="../../assets/polyphagia.png"
          class="img-fluid"
          alt="polyphagia image"
        />
      </div>

      <!-- form -->
      <div class="col-2 ms-5 me-5 d-block">
        <!-- polyphagia -->
        <div class="col">
          <div class="form-floating">
            <select
              class="form-select"
              id="polyphagia"
              aria-label="Floating label select example"
              v-model="polyphagia"
              placeholder=" "
            >
              <option value="1">yes</option>
              <option value="0">no</option>
            </select>
            <label for="polyphagia">Polyphagia</label>
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
            <b>Polyphagia</b>
          </p>
          <p>
            Polyphagia describes excessive hunger. Although we may all feel an
            increase in appetite in certain situations, such as after exercise
            or if we haven’t eaten in awhile, sometimes it can be a sign of an
            underlying condition. In people with diabetes, glucose can’t enter
            cells to be used for energy. This can be due to either low insulin
            levels or insulin resistance. Because your body can’t convert this
            glucose to energy, you’ll begin to feel very hungry. The hunger
            associated with polyphagia doesn’t go away after consuming food. In
            fact, in people with unmanaged diabetes, eating more will just
            contribute to already high blood glucose levels.
          </p>
          <p>
            Other things can cause polyphagia as well. Some examples
            include: 
          </p>
          <ul>
            <li>an overactive thyroid, or hyperthyroidism</li>
            <li>premenstrual syndrome (PMS)</li>
            <li>stress</li>
            <li>taking certain medications, such as corticosteroids</li>
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
            @click="this.$router.push('/question_page_seven')"
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
      polyphagia: "",
    };
  },
  methods: {
    saveEntries() {
      if (this.alopecia != "") {
        this.userEntiresDB.polyphagia = parseInt(this.polyphagia);
        this.dataBackendRequestDB.Polyphagia = parseInt(this.polyphagia);
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
            this.polyphagia = data.polyphagia;
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

