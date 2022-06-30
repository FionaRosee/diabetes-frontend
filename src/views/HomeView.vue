<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function startcheck() {
  router.push({ name: "General information" });
}
</script>

<template>
  <section>
    <img src="../../src/assets/Doc.png" alt="pinguin" />
    <p class="text-secondary">
      <b>Welcome to our diabetes check app.</b>

      With the help of our machine learning algorithm, we calculate the
      probability of a diabetes disease. To do so, we need personal information
      from you and details on symptoms that typically occur with it.
      Our goal is to identify a potential diabetes disease at an early stage, in order to start a medication as soon as possible.
    </p>
    <div class="same">
      <!-- <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="text"
        />
        <label for="floatingInput">Name</label>
      </div> -->
      <button
        @click="startcheck"
        type="button"
        class="btn btn-outline-primary rounded-pill mt-5 px-5"
      >
        Start the check
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
img {
  clip-path: circle();
  height: 22em;
}

section {
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  p {
    position: absolute;
    top: 3em;
    right: 1em;
    width: 25%;
  }

  // button {
  //   font-size: 2.15em;
  //   background-color: deepskyblue;
  //   color: white;
  //   border-radius: 30px;

  //   &:hover {
  //     background: hotpink;
  //     color: white;
  //   }
  // }

  .btn-outline-primary {
    border-color: #4fb0e0ad;
    color: #4fb0e0ad;
    font-weight: bold;
  }

  .btn-outline-primary:hover {
    border-color: #4fb0e0;
    background-color: #4fb0e0;
    color: white;
  }

  .same {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
  }
}
</style>
