<template>
  <div
    v-if="readyToLaunch"
    class="form container-fluid d-flex justify-content-center mb-5"
  >
    <div class="row my-4">
      <!-- image -->
      <div class="image col-4">
        <img
          src="../../assets/general_information.png"
          class="img-fluid"
          alt="personal data image"
        />
      </div>

      <!-- form -->
      <div class="col-2 ms-5 me-5 d-block">
        <!-- gender -->
        <div class="col">
          <div class="form-floating">
            <select
              class="form-select"
              id="gender"
              aria-label="Floating label select example"
              v-model="gender"
              placeholder=" "
            >
              <option value="0">Male</option>
              <option value="1">Female</option>
            </select>
            <label for="gender">Gender</label>
          </div>
        </div>

        <!-- age -->
        <form class="form-floating mt-2" v-on:submit.prevent>
          <input
            class="form-control"
            type="number"
            :class="{ invalidInput: ageInputInvalid }"
            id="age"
            v-model="age"
            placeholder=" "
            autocomplete="off"
            @blur="inputValidation(1, 120, 'age')"
          />
          <label for="age">Age</label>
          <p v-if="ageInputInvalid" class="my-2 text-danger">
            Please enter a valid age between 1 and 120!
          </p>
        </form>

        <!-- height -->

        <form class="form-floating mt-2" v-on:submit.prevent>
          <input
            class="form-control"
            type="number"
            :class="{ invalidInput: heightInputInvalid }"
            id="height"
            v-model="height"
            placeholder=" "
            autocomplete="off"
            @blur="inputValidation(55, 250, 'height')"
          />
          <p v-if="heightInputInvalid" class="my-2 text-danger">
            Please enter a valid height between 55cm and 250cm!
          </p>
          <label for="height">Height (cm)</label>
        </form>

        <!-- weight -->

        <form class="form-floating mt-2" v-on:submit.prevent>
          <input
            class="form-control"
            type="number"
            :class="{ invalidInput: weightInputInvalid }"
            id="weight"
            v-model="weight"
            placeholder=" "
            autocomplete="off"
            @blur="inputValidation(10, 250, 'weight')"
          />
          <p v-if="weightInputInvalid" class="my-2 text-danger">
            Please enter a valid weight between 10kg and 250kg!
          </p>
          <label for="weight">Weight (kg)</label>
        </form>

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
            <b>Thank you for using our app.</b>
          </p>
          <p>
            First of all, we need general information from you. Then we ask you
            questions about symptoms to evaluate a possible diabetes disease.
            The next button will take you to the next question. Optionally you
            can also use the navigation above to switch between questions. The
            order does not matter. This makes it possible to answer questions at
            a later point in time. If the bar is colored blue, all data is
            complete for this question. The data is automatically saved in the
            browser when you leave the page and is loaded when you reopen the
            app.
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
      ageInputInvalid: false,
      heightInputInvalid: false,
      weightInputInvalid: false,
      gender: "",
      age: "",
      height: "",
      weight: "",
    };
  },
  methods: {
    inputValidation(min, max, id) {
      if (id == "age") {
        if (this.age >= min && this.age <= max) {
          this.ageInputInvalid = false;
          console.log("ageInputInvalid :", this.ageInputInvalid);
        } else {
          this.ageInputInvalid = true;
          console.log("ageInputInvalid :", this.ageInputInvalid);
        }
      }

      if (id == "height") {
        if (this.height >= min && this.height <= max) {
          this.heightInputInvalid = false;
          console.log("heightInputInvalid :", this.heightInputInvalid);
        } else {
          this.heightInputInvalid = true;
          console.log("heightInputInvalid :", this.heightInputInvalid);
        }
      }

      if (id == "weight") {
        if (this.weight >= min && this.weight <= max) {
          this.weightInputInvalid = false;
          console.log("weightInputInvalid :", this.weightInputInvalid);
        } else {
          this.weightInputInvalid = true;
          console.log("weightInputInvalid :", this.weightInputInvalid);
        }
      }
    },
    saveEntries() {
      let countValidInputBMIcalc = 0;

      //gender
      if (this.gender != "") {
        this.userEntiresDB.gender = parseInt(this.gender);
        this.dataBackendRequestDB.Gender = parseInt(this.gender);
      }

      //age
      if (this.age != "" && !this.ageInputInvalid) {
        this.userEntiresDB.age = this.age;
        // convert to age group for backend-request
        // 1-39 -> 0
        // 40-59 -> 1
        // > 60 -> 2

        if (this.age < 40) {
          this.dataBackendRequestDB.age_group = 0;
        } else if (this.age < 60) {
          this.dataBackendRequestDB.age_group = 1;
        }
        else{
          this.dataBackendRequestDB.age_group = 2;
        }
      }

      //height
      if (this.height != "" && !this.heightInputInvalid) {
        this.userEntiresDB.height = this.height;
        countValidInputBMIcalc++;
      }

      //weight
      if (this.weight != "" && !this.weightInputInvalid) {
        this.userEntiresDB.weight = this.weight;
        countValidInputBMIcalc++;
      }

      //save userEntries
      set("userEntries", JSON.parse(JSON.stringify(this.userEntiresDB)))
        .then(() => {
          console.log("User Daten gespeichert:");
          console.dir(this.userEntiresDB);
        })
        .catch(console.warn);

      if (countValidInputBMIcalc == 2) {
        // relevant data for calculation available
        this.calculateBMI();
      }

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
            this.gender = data.gender;
            this.age = data.age;
            this.height = data.height;
            this.weight = data.weight;
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
    calculateBMI() {
      let bmi = this.weight / (this.height / 100) ** 2;
      if (bmi >= 30) {
        this.dataBackendRequestDB.Obesity = 1;
      } else {
        this.dataBackendRequestDB.Obesity = 0;
      }
      console.log("BMIcalc -> Obsesity: ", this.dataBackendRequestDB.Obesity);
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

.invalidInput {
  border-color: #dc3545;
}

/* hide arrow in input field for numbers */
/* https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>>

