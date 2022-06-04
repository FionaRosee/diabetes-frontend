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
