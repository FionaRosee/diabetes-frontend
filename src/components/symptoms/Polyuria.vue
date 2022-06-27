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
      <div class="col-2 ms-5 me-5 d-block">
      <!-- slider -->
          <Slider
              class="slider"
              v-model="sliderValue"
              :min="0"
              :max="15"
              ref="sliderObject"
              orientation="vertical"
              direction="rtl"
              @update="changeSlider"
              :lazy="false"
          />
        <!-- end of slider -->
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
            <b>Polyuria</b>
          </p>
          <p>
            Do you always have to go? If you have a condition called polyuria, it’s
            because your body makes more pee than normal. Adults usually make about 3
            liters of urine per day. But with polyuria, you could make up to 15 liters
            per day. Polyuria is often one of the first signs of diabetes. The
            condition makes sugar build up in your bloodstream. If your kidneys aren’t
            able to filter it out, it exits your body in your urine. As the extra
            sugar and fluids travel through your kidneys, you have to pee more. Plus,
            the more you go, the thirstier you feel, and the more you’ll drink.
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
import {get, set} from "idb-keyval";
import {ref} from "vue";
import "@vueform/slider/themes/default.css";

const sliderValue = ref("0");
const sliderObject = ref();

function changeSlider(newValue) {
  if (newValue > 3) {
    sliderObject.value.$el.classList.add("red");
  } else {
    sliderObject.value.$el.classList.remove("red");
  }
}

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
        this.userEntiresDB.polyuria = parseInt(this.polyuria);
        this.dataBackendRequestDB.polyuria = parseInt(
            this.polyuria
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
              this.polyuria = data.polyuria;
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

.slider {
  height: 20em;
}
</style>>
