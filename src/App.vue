<template>
  <header>
    <router-link :to="{ name: 'home' }" class="icon">
      <b-icon-house-heart />
    </router-link>
    <router-link :to="{ name: 'home' }">Diabetes Check App</router-link>
    <span class="name" v-if="name">Welcome, {{ name }}</span>
  </header>
  <main>
    <router-view @setName="showName" />
  </main>
</template>

<script>
import { get, set } from "idb-keyval";
import { BIconHouseHeart } from "bootstrap-icons-vue";

export default {
  components: {
    BIconHouseHeart,
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    showName(name) {
      this.name = name;
    },
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
            delayedHealing: "",
            irritability: "",
            itching: "",
            visualBlurring: "",
            genitalThrush: "",
            polyphagia: "",
            weakness: 3,
            suddenWeightLoss: "",
            polydipsia: 0,
            polyuria: 0,
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
            age_group: null,
            Gender: null,
            polyuria: null,
            polydipsia: null,
            sudden_weight_loss: null,
            weakness: null,
            Polyphagia: null,
            Genital_thrush: null,
            visual_blurring: null,
            Itching: null,
            Irritability: null,
            delayed_healing: null,
            partial_paresis: null,
            muscle_stiffness: null,
            Alopecia: null,
            Obesity: null,
          };
          set(
            "dataBackendRequest",
            JSON.parse(JSON.stringify(dataBackendRequest))
          )
            .then(() => {
              console.log(
                "APP start - no data backend request- empty object created in indexedDB"
              );
            })
            .catch(console.warn);
        }
        console.log(
          "APP start - object data backend request existing in indexedDB"
        );
      });
    },
  },
  created() {
    this.prepareDB();
    const name = localStorage.getItem("name");
    if (name) this.name = name;
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
  padding: 0.5em;
  color: white;
  background: #4fb0e0ad;
  display: flex;
  justify-content: center;
  position: relative;

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    font-size: 1.5em;
    font-weight: bold;
  }
}

main {
  display: flex;
  height: 100%;
  position: relative;

  // nav {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
  //   background: deepskyblue;
  //   padding: 1em;
  //   z-index: 1;
  //   position: absolute;
  //   top: 0;
  //   bottom: 0;
  // }
}

section {
  background: white;
  width: 100%;
}

.icon {
  position: absolute;
  left: 0.3em;
  top: 0.3em;
  bottom: 0.3em;
  display: flex;
  align-items: center;
  width: 2em;
}

.icon > svg {
  width: 100%;
  height: 100%;
}

span.name {
  position: absolute;
  top: 0.3em;
  bottom: 0.3em;
  display: flex;
  right: 1em;
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: bold;
}
</style>
