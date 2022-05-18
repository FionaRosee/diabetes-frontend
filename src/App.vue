<script setup></script>

<template>
  <ul class="navigation">
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
  </ul>
  <header></header>
  <main>
    <nav>
      <input
        type="image"
        src="pngfind.com-home-icon-png-transparent-6800118.png"
        name="saveForm"
        class="btTxt submit"
        id="saveForm"
      />
    </nav>
    <section>main</section>
  </main>
  <!--  <form>
    <div class="form-group">
      <label for="age">Age</label>
      <input type="email" class="form-control" placeholder="Enter e" />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>-->
  <router-view />
</template>

<style>
@import "@/assets/base.css";

#app {
  height: 100vh;
}

.navigation {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;

  list-style: none;
  margin: 0;
  background: deepskyblue;
}

.navigation a {
  text-decoration: none;
  display: block;
  padding: 1em;
  color: white;
}

.navigation a:hover {
  background: #1565c0;
}

@media all and (max-width: 800px) {
  .navigation {
    justify-content: space-around;
  }
}

@media all and (max-width: 600px) {
  .navigation {
    flex-flow: column wrap;
    padding: 0;
  }
  .navigation a {
    text-align: center;
    padding: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .navigation li:last-of-type a {
    border-bottom: none;
  }
}

main {
  display: flex;
  height: 100%;
}

nav {
  background: deepskyblue;
}

section {
  background: white;
  width: 100%;
}

/*section {
  float: left;
  width: 10%;
  height: 100%;
  margin: 10 10% 6px 0%;
  background: deepskyblue;
  border-radius: 6px;
  color: #fff;
  font: 14px/24px "Source Code Pro", Inconsolata, "Lucida Console", Terminal,
    "Courier New", Courier;
  padding: 0px 0px;
  text-align: center;
}*/
</style>
