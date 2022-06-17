<template>
  <div class="form container-fluid d-flex justify-content-center">
    <div class="row my-4">
      <!-- image -->
      <div class="image col me-5">
        <img
          src="../../assets/personal_data.png"
          class="img-fluid"
          alt="personal data image"
        />
      </div>

      <!-- form -->
      <div class="col-2 me-5 d-block">
        <!-- gender -->
        <div class="col">
          <div class="form-floating">
            <select
              class="form-select"
              id="gender"
              aria-label="Floating label select example"
            >
              <option selected></option>
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
            <label for="gender">Gender</label>
          </div>
        </div>

        <!-- age-group -->
        <div class="col mt-2">
          <div class="form-floating">
            <select
              class="form-select"
              id="age-group"
              aria-label="Floating label select example"
            >
              <option selected></option>
              <option value="1">0 - 39</option>
              <option value="2">40 - 59</option>
              <option value="3">60 - 100</option>
            </select>
            <label for="age-group">Age</label>
          </div>
        </div>

        <!-- height -->

        <form class="form-floating mt-2">
          <input class="form-control" id="height" />
          <label for="height">Height (cm)</label>
        </form>

        <!-- weight -->

        <form class="form-floating mt-2">
          <input class="form-control" id="weight" />
          <label for="weight">Wheigt (kg)</label>
        </form>

        <!-- end of form -->
      </div>

      <!-- description -->
      <div
        class="
          col
          bg-white
          d-flex
          align-items-start
          border border-light border border-3
          rounded
          me-5
        "
      >
        <p class="text-secondary p-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel in
          dignissimos nulla necessitatibus magni atque explicabo! Reprehenderit
          perspiciatis odit, ratione voluptatibus hic excepturi a voluptatum
          eligendi distinctio aut id suscipit!
        </p>
      </div>
      <!-- next button -->

      <div class="row mt-5">
        <div class="col d-flex justify-content-center mt-5">
          <button
            type="button"
            class="btn btn-outline-primary rounded-pill me-5 px-5"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.btn-outline-primary{
    border-color: #4fb0e0ad;
    color: #4fb0e0ad;
    font-weight: bold;
}

.btn-outline-primary:hover{
    border-color: #4fb0e0;
    background-color: #4fb0e0;
}

</style>>

