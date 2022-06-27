<template>
  <div class="nav container-fluid my-3 d-flex justify-content-center"></div>
  <div class="nav container-fluid my-4 d-flex justify-content-center">
    <div class="row">
      <div class="col justify-content-end">
        <router-link
          :class="mode('General information')"
          class="m-2 rounded-pill"
          role="button"
          to="/general_information"
        ></router-link>
        <a class="buttonFilled m-2 rounded-pill" href="#" role="button"></a>
        <a class="buttonFilled m-2 rounded-pill" href="#" role="button"></a>
        <a class="buttonFilled m-2 rounded-pill" href="#" role="button"></a>
        <a class="buttonUnfilled m-2 rounded-pill" href="#" role="button"></a>
        <a class="buttonnfilled m-2 rounded-pill" href="#" role="button"></a>
        <router-link
          :class="mode('Genital thrush')"
          class="m-2 rounded-pill"
          role="button"
          to="/question_page_seven"
        ></router-link>
        <router-link
          :class="mode('Visual blurring')"
          class="m-2 rounded-pill"
          role="button"
          to="/question_page_eight"
        ></router-link>
        <router-link
          :class="mode('Itching')"
          class="m-2 rounded-pill"
          role="button"
          to="/question_page_nine"
        ></router-link>
        <router-link
          :class="mode('Irritability')"
          class="m-2 rounded-pill"
          role="button"
          to="/question_page_ten"
        ></router-link>
        <router-link
          :class="mode('Delayed healing')"
          class="m-2 rounded-pill"
          role="button"
          to="/question_page_eleven"
        ></router-link>
        <router-link
          :class="mode('Partial paresis')"
          class="m-2 rounded-pill"
          role="button"
          to="/question_page_twelve"
        ></router-link>
        <router-link
          :class="mode('Muscle stiffness')"
          class="m-2 rounded-pill"
          role="button"
          to="/question_page_thirteen"
        ></router-link>
        <router-link
          :class="mode('Circular hair loss')"
          class="m-2 rounded-pill"
          role="button"
          to="/question_page_fourteen"
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from "idb-keyval";
export default {
  data() {
    return {
      dataBackendRequestDB: "",
    };
  },
  methods: {
    //dynamic button style
    mode(linkId) {
      //General informaiton
      if (linkId == "General information") {
        if (linkId == this.$route.name) {
          return { activePage: true };
        } else if (this.dataBackendRequestDB.Age == null  && this.dataBackendRequestDB.Gender == null && this.dataBackendRequestDB.Obesity == null) {
          return { buttonUnfilled: true };
        } else {
          return { buttonFilled: true };
        }
      }

      //Genital thrush
      if (linkId == "Genital thrush") {
        if (linkId == this.$route.name) {
          return { activePage: true };
        } else if (this.dataBackendRequestDB.Genital_thrush == null) {
          return { buttonUnfilled: true };
        } else {
          return { buttonFilled: true };
        }
      }

      //visual blurring
      if (linkId == "Visual blurring") {
        if (linkId == this.$route.name) {
          return { activePage: true };
        } else if (this.dataBackendRequestDB.visual_blurring == null) {
          return { buttonUnfilled: true };
        } else {
          return { buttonFilled: true };
        }
      }

      //Itching
      if (linkId == "Itching") {
        if (linkId == this.$route.name) {
          return { activePage: true };
        } else if (this.dataBackendRequestDB.Itching == null) {
          return { buttonUnfilled: true };
        } else {
          return { buttonFilled: true };
        }
      }

      //Irritability
      if (linkId == "Irritability") {
        if (linkId == this.$route.name) {
          return { activePage: true };
        } else if (this.dataBackendRequestDB.Irritability == null) {
          return { buttonUnfilled: true };
        } else {
          return { buttonFilled: true };
        }
      }

      //Delayed healing
      if (linkId == "Delayed healing") {
        if (linkId == this.$route.name) {
          return { activePage: true };
        } else if (this.dataBackendRequestDB.delayed_healing == null) {
          return { buttonUnfilled: true };
        } else {
          return { buttonFilled: true };
        }
      }

      //Partial paresis
      if (linkId == "Partial paresis") {
        if (linkId == this.$route.name) {
          return { activePage: true };
        } else if (this.dataBackendRequestDB.partial_paresis == null) {
          return { buttonUnfilled: true };
        } else {
          return { buttonFilled: true };
        }
      }

      //Muscle stiffness
      if (linkId == "Muscle stiffness") {
        if (linkId == this.$route.name) {
          return { activePage: true };
        } else if (this.dataBackendRequestDB.muscle_stiffness == null) {
          return { buttonUnfilled: true };
        } else {
          return { buttonFilled: true };
        }
      }

      //Circular hair loss
      if (linkId == "Circular hair loss") {
        if (linkId == this.$route.name) {
          return { activePage: true };
        } else if (this.dataBackendRequestDB.Alopecia == null) {
          return { buttonUnfilled: true };
        } else {
          return { buttonFilled: true };
        }
      }
    },
    loadDataDB() {
      get("dataBackendRequest").then((data) => {
        if (data != null) {
          this.dataBackendRequestDB = data;
          console.dir(data);
        }
      });
    },
  },
  created() {
    this.loadDataDB();
  },
};
</script>
<style scoped>
.buttonFilled {
  background-color: #4fb0e0ad;
  padding: 0.05rem 2rem;
}
.buttonFilled:hover {
  background-color: #4fb0e0;
}

.buttonUnfilled {
  background-color: #c0c0c06d;
  padding: 0.05rem 2rem;
}

.buttonUnfilled:hover {
  background-color: #c0c0c0;
}

.activeLinkTitle {
  color: #c0c0c0;
}
.inactiveLinkTitle {
  color: white;
}

.activePage {
  padding: 0.05rem 2rem;
  background-color: #377d9dc6;
}
</style>