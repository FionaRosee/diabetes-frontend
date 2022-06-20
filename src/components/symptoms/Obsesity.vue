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
              v-model = "gender"
              placeholder=" "
            >
              <option value="m">Male</option>
              <option value="f">Female</option>
            </select>
            <label for="gender">Gender</label>
          </div>
        </div>

        <!-- age -->
       <form class="form-floating mt-2" v-on:submit.prevent>
          <input class="form-control" type="number" :class="{invalidInput : ageInputInvalid}" id="age" v-model="age"  placeholder=" " autocomplete="off" @blur="inputValidation(1,120,'age')"/>
          <label for="age">Age</label>
          <p v-if="ageInputInvalid" class="my-2 text-danger">Please enter a valid age between 1 and 120!</p>
        </form>

        <!-- height -->

        <form class="form-floating mt-2" v-on:submit.prevent>
          <input class="form-control" type="number" :class="{invalidInput: heightInputInvalid}" id="height" v-model="height" placeholder=" " autocomplete="off" @blur="inputValidation(0.55,250,'height')"/>
          <p v-if="heightInputInvalid" class="my-2 text-danger">Please enter a valid height between 0.55cm and 250cm!</p>
          <label for="height">Height (cm)</label>
        </form>

        <!-- weight -->

        <form class="form-floating mt-2" v-on:submit.prevent>
          <input class="form-control" type="number" :class="{invalidInput: weightInputInvalid}" id="weight" v-model="weight" placeholder=" " autocomplete="off" @blur="inputValidation(10,250,'weight')"/>
          <p v-if="weightInputInvalid" class="my-2 text-danger">Please enter a valid weight between 10kg and 250kg!</p>
          <label for="weight">Weight (kg)</label>
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

<script>
export default {
  data(){
    return {
      ageInputInvalid: false,
      heightInputInvalid: false,
      weightInputInvalid: false,
      gender: '',
      age: '',
      height: '',
      weight: ''
    }
  },
  methods:{
    inputValidation(min, max, id) {

    if(id == 'age'){
      if(this.age >= min && this.age <= max){
        this.ageInputInvalid = false
        console.log('ageInputInvalid :', this.ageInputInvalid)
      } else{
        this.ageInputInvalid = true
        console.log('ageInputInvalid :', this.ageInputInvalid)
      }
    }

    if(id == 'height'){
      if(this.height >= min && this.height <= max){
        this.heightInputInvalid = false
        console.log('heightInputInvalid :', this.heightInputInvalid)
      } else{
        this.heightInputInvalid = true
        console.log('heightInputInvalid :', this.heightInputInvalid)
      }
    }

    if(id == 'weight'){
      if(this.weight >= min && this.weight <= max){
      this.weightInputInvalid = false
      console.log('weightInputInvalid :', this.weightInputInvalid)
    } else{
      this.weightInputInvalid = true
      console.log('weightInputInvalid :', this.weightInputInvalid)
    }
  }    

    }
  }
}
</script>

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

.invalidInput{
border-color: #dc3545;
}

/* hide arrow in input field for numbers */
/* https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

</style>>

