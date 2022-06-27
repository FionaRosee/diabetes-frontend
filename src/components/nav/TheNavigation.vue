<template>
  <div class="nav container-fluid my-3 d-flex justify-content-center">
    <div class="row">
      <div class="col">
        <p class="active" :class="{ inactive: linkTitle == 'empty' }">
          {{ linkTitle }}
        </p>
      </div>
    </div>
  </div>
  <div class="nav container-fluid my-3 d-flex justify-content-center">
    <div class="row">
      <div class="col justify-content-end">
        <router-link
          class="button-filled m-2 rounded-pill"
          role="button"
          to="/general_information"
        ></router-link>
        <a class="button-filled m-2 rounded-pill" href="#" role="button"></a>
        <a class="button-filled m-2 rounded-pill" href="#" role="button"></a>
        <a class="button-filled m-2 rounded-pill" href="#" role="button"></a>
        <a class="button-unfilled m-2 rounded-pill" href="#" role="button"></a>
        <a class="button-unfilled m-2 rounded-pill" href="#" role="button"></a>
        <router-link
          class="button-unfilled m-2 rounded-pill"
          role="button"
          to="/question_page_seven"
          @mouseover="setLinkTitle('Genital thrush')"
          @mouseleave="clearLinkTitle"
        ></router-link>
        <router-link
          class="button-unfilled m-2 rounded-pill"
          role="button"
          to="/question_page_eight"
          @mouseover="setLinkTitle('Visual blurring')"
          @mouseleave="clearLinkTitle"
        ></router-link>
        <router-link
          class="button-unfilled m-2 rounded-pill"
          role="button"
          to="/question_page_nine"
          @mouseover="setLinkTitle('Itching')"
          @mouseleave="clearLinkTitle"
        ></router-link>
        <router-link
          class="button-unfilled m-2 rounded-pill"
          role="button"
          to="/question_page_ten"
          @mouseover="setLinkTitle('Irritability')"
          @mouseleave="clearLinkTitle"
        ></router-link>
        <router-link
          class="button-unfilled m-2 rounded-pill"
          role="button"
          to="/question_page_eleven"
          @mouseover="setLinkTitle('Delayed healing')"
          @mouseleave="clearLinkTitle"
        ></router-link>
        <router-link
          class="button-unfilled m-2 rounded-pill"
          role="button"
          to="/question_page_twelve"
          @mouseover="setLinkTitle('Partial paresis')"
          @mouseleave="clearLinkTitle"
        ></router-link>
        <router-link
          class="button-unfilled m-2 rounded-pill"
          role="button"
          to="/question_page_thirteen"
          @mouseover="setLinkTitle('Muscle stiffness')"
          @mouseleave="clearLinkTitle"
        ></router-link>
        <router-link
          :class="{activePage: activePage == 'Circular hair loss'}"
          class="button-unfilled m-2 rounded-pill"
          role="button"
          to="/question_page_fourteen"
          @mouseover="setLinkTitle('Circular hair loss')"
          @mouseleave="clearLinkTitle"
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkTitle: "empty",
      activePage: "",
    };
  },
  methods: {
    setLinkTitle(title) {
      this.linkTitle = title;
    },
    clearLinkTitle() {
      this.linkTitle = "empty";
    }
  },
};
</script>
<style scoped>
.button-filled {
  background-color: #4fb0e0ad;
  padding: 0.05rem 2rem;
}
.button-filled:hover {
  background-color: #4fb0e0;
    border: 1.5px solid #c0c0c06d;
}

.button-unfilled {
  background-color: #c0c0c06d;
  padding: 0.05rem 2rem;
}

.button-unfilled:hover {
  background-color: #c0c0c0;
}

.active {
  color: #c0c0c0;
}
.inactive {
  color: white;
}

</style>