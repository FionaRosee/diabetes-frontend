<script setup>
import { BIconArrowRightCircleFill, BIconHouse } from "bootstrap-icons-vue";
</script>

<template>
  <header>
    <a href="#">Diabetes Check with Doctor Penguin</a>
  </header>
  <main>
    <nav>
      <router-link :to="{ name: 'home' }">
        <b-icon-house class="icon" />
      </router-link>
      <b-icon-arrow-right-circle-fill class="icon" />
    </nav>
    <router-view />
  </main>
</template>

<script>
import { get, set } from "idb-keyval";
export default {
  methods: {
    prepareDB() {
      //userEntries
      get("userEntries").then((data) => {
        if (data == null) {
          let userEntries = {
            gender: "",
            age: "",
            height: "",
            weight: "",
            alopecia: "",
            muscleStiffness: "",
            partialParesis: "",
            delayedHealing: ""
          };
          set("userEntries", JSON.parse(JSON.stringify(userEntries)))
            .then(() => {
              console.log(
                "APP start - no user entires - empty object created in indexedDB"
              );
            })
            .catch(console.warn);
        }
        console.log("APP start - user entires existing in indexedDB");
      });
      //data backend request
      get("dataBackendRequest").then((data) => {
        if (data == null) {
          let dataBackendRequest = {
            "Age": null,
            "Gender": null,
            "Polyuria": null,
            "Polydipsia": null,
            "sudden_weight_loss": null,
            "weakness": null,
            "Polyphagia": null,
            "Genital_thrush": null,
            "visual blurring": null,
            "Itching": null,
            "Irritability": null,
            "delayed_healing": null,
            "partial_paresis": null,
            "muscle_stiffness": null,
            "Alopecia": null,
            "Obesity": null,
          };
          set("dataBackendRequest", JSON.parse(JSON.stringify(dataBackendRequest)))
            .then(() => {
              console.log(
                "APP start - no data backend request- empty object created in indexedDB"
              );
            })
            .catch(console.warn);
        }
        console.log("APP start - object data backend request existing in indexedDB");
      });
    },
  },
  created() {
    this.prepareDB();
  },
};
</script>



<style lang="scss">
@import "@/assets/base.css";

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  padding: 1em;
  color: white;
  background: deepskyblue;
  display: flex;
  justify-content: center;

  a {
    color: inherit;
    text-decoration: none;
    font-size: 1.5em;
    font-weight: bold;
  }
}

main {
  display: flex;
  height: 100%;

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: deepskyblue;
    padding: 1em;
    z-index: 1;
  }
}

section {
  background: white;
  width: 100%;
}

.icon {
  width: 3em;
  height: auto;
  color: white;
}
</style>
