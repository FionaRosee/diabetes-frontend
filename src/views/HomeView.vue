<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

function startcheck() {
  router.push({ name: "Polyuria" });
}
</script>

<template>
  <section>
    <img src="pinguin.png" alt="pinguin" />
    <p>
      That is a diabetes check. More information incoming. Lorem ipsum dolor sit
      amet, consectetur adipisicing elit. Accusantium aperiam consectetur cum
      ducimus eius eligendi est, eveniet exercitationem itaque, magnam maiores
      minus necessitatibus nihil quo reiciendis tempora voluptate, voluptates?
      Quis?
    </p>
    <div class="same">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="text"
        />
        <label for="floatingInput">Name</label>
      </div>
      <button @click="startcheck" type="button" class="btn">
        Start the check
      </button>
    </div>
  </section>
</template>

<style scoped lang="scss">
img {
  clip-path: circle();
  height: 20em;
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

  button {
    font-size: 2.15em;
    background-color: deepskyblue;
    color: white;
    border-radius: 30px;

    &:hover {
      background: hotpink;
      color: white;
    }
  }

  .same {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
  }
}
</style>
