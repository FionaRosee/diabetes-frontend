<template>
  <div
    v-if="readyToLaunch"
    class="form container-fluid d-flex justify-content-center mb-5"
  >
    <div class="row my-4">
      <!-- image -->
      <div class="image col-4">
        <img
          src="../../assets/weakness.png"
          class="img-fluid"
          alt="alopecia image"
        />
      </div>
      <div
        class="col-2 ms-5 me-5 d-flex position-relative"
        id="battery-container"
      >
        <!-- fat to thin-->
        <img src="../../assets/battery.svg" alt="empty battery" />
        <div class="buttons">
          <button class="green" @click="select(3)" ref="button3">
            &le; 100%
          </button>
          <button class="green" @click="select(2)" ref="button2">
            &le; 75%
          </button>
          <button class="green" @click="select(1)" ref="button1">
            &le; 50%
          </button>
          <button class="green" @click="select(0)" ref="button0">
            &le; 25%
          </button>
        </div>
        <!-- fat to thin end -->
      </div>
      <!-- description -->
      <div
        class="description-box col bg-white d-flex align-items-start border border-light border border-3 rounded"
      >
        <div class="description-text p-2 d-block text-secondary">
          <p>
            <b>Weakness</b>
          </p>
          <p>
            Two common reasons for tiredness or lethargy are having too high or
            too low blood sugar levels. In both cases, the tiredness is the
            result of having an imbalance between one’s level of blood glucose
            and the amount or effectiveness of circulating insulin. If you feel
            tired during the day, despite having slept well, it could be a
            result of either high or low sugar levels. It is best to test your
            blood glucose levels to see whether the tiredness is indeed a result
            of having high or low sugar levels. This is particularly important
            for people on insulin.
            Source:https://www.diabetes.co.uk/tiredness-and-diabetes.html
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
      weakness: 3,
    };
  },
  methods: {
    select(buttonId) {
      switch (buttonId) {
        case 3:
          this.$refs.button3.classList.add("green");
          this.$refs.button2.classList.add("green");
          this.$refs.button1.classList.add("green");
          this.$refs.button0.classList.add("green");
          this.$refs.button1.classList.remove("red");
          this.$refs.button0.classList.remove("red");
          break;
        case 2:
          this.$refs.button3.classList.remove("green");
          this.$refs.button2.classList.add("green");
          this.$refs.button1.classList.add("green");
          this.$refs.button0.classList.add("green");
          this.$refs.button1.classList.remove("red");
          this.$refs.button0.classList.remove("red");
          break;
        case 1:
          this.$refs.button3.classList.remove("green");
          this.$refs.button2.classList.remove("green");
          this.$refs.button1.classList.remove("green");
          this.$refs.button0.classList.remove("green");
          this.$refs.button1.classList.add("red");
          this.$refs.button0.classList.add("red");
          break;
        case 0:
          this.$refs.button3.classList.remove("green");
          this.$refs.button2.classList.remove("green");
          this.$refs.button1.classList.remove("green");
          this.$refs.button0.classList.remove("green");
          this.$refs.button1.classList.remove("red");
          this.$refs.button0.classList.add("red");
          break;
      }
      this.weakness = buttonId;
    },
    saveEntries() {
      const weakness = parseInt(this.weakness) > 1 ? 0 : 1;
      this.userEntiresDB.weakness = weakness;
      this.dataBackendRequestDB.polydipsia = weakness;

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
            this.weakness = data.weakness ?? 3;
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

#battery-container > img {
  transform: rotate(-90deg);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.buttons {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 34.5%;
  bottom: 28%;
  left: 32%;
  right: 32%;
}

.buttons > button {
  height: 25%;
  background: none;
  border: none;
  border-left: 1px solid #4fb0e0;
  border-right: 1px solid #4fb0e0;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
}

.buttons > button:first-of-type {
  border-top: 1px solid #4fb0e0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

.buttons > button:last-of-type {
  border-bottom: 1px solid #4fb0e0;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}

.buttons > button.red {
  background: #ec3636;
}

.buttons > button.green {
  background: #42d542;
}
</style>
