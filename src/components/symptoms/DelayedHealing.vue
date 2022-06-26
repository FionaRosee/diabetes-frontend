<template>
  <div
    v-if="readyToLaunch"
    class="form container-fluid d-flex justify-content-center mb-5"
  >
    <div class="row my-4">
      <!-- image -->
      <div class="image col-4">
        <img
          src="../../assets/delayed_healing.png"
          class="img-fluid"
          alt="partial paresis image"
        />
      </div>

      <!-- form -->
      <div class="col-2 ms-5 me-5 d-block">
        <!-- delayed healing -->
        <div class="col">
          <div class="form-floating">
            <select
              class="form-select"
              id="delayedHealing"
              aria-label="Floating label select example"
              v-model="delayedHealing"
              placeholder=" "
            >
              <option value="1">yes</option>
              <option value="0">no</option>
            </select>
            <label for="delayedHealing">Delayed healing</label>
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
            <b>Delayed healing</b>
          </p>
          <p>
            The healing of a wound is a complex process and goes through several
            phases, some of which occur simultaneously. In normal wound healing,
            these phases last as follows:
          </p>
          <p>
            <b>1st phase (~ 3 days): </b> Immediately after an injury,
            hemostasis begins. The blood vessels in the wound constrict to
            reduce blood loss. During the process of hemostasis, the protein
            fibrin is produced. It glues the wound surface together and protects
            the wound from infections. Moist fibrin is a yellow, transparent
            coating. Dried fibrin forms a hard, yellowish plate (for normal
            healing acute wounds about 3 days).
          </p>
          <p>
            <b>2st phase (~ 2 weeks):</b>
            At the earliest from the second day, new tissue begins to form in
            the wound. In this phase, the wound is well supplied with blood,
            dark red in color and shiny moist. It can begin from the second day
            and lasts about two weeks with normal wound healing.
          </p>

          <p>
            <b>3st pahse (~ 3 weeks):</b>
            In the final phase of wound healing, the granulation tissue
            transforms into scar tissue. New epithelial cells migrate into the
            wound from the edge. The wound shrinks by about one to two
            millimeters per day until it is completely closed. This phase
            (regeneration) can begin on the fourth day and lasts about three
            weeks until wound closure if wound healing is normal.
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
      delayedHealing: "",
    };
  },
  methods: {
    saveEntries() {
      if (this.alopecia != "") {
        this.userEntiresDB.delayedHealing = parseInt(this.delayedHealing);
        this.dataBackendRequestDB.delayed_healing = parseInt(
          this.delayedHealing
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

