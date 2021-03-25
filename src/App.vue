<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full md:w-1/2">
      <div class="container">
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to VueCLI project" />
      </div>

      <div class="container">
        <div class="survey-container">
          <form @submit.prevent="submit">
            <div>
              <h2 class="heading">How was your Vue.js learning experience?</h2>
              <label class="label" for="name">Your Name</label>
              <input
                v-model="myName"
                class="input"
                :class="{ errorinput: isErr }"
                id="name"
                type="text"
              />
              <p class="error" v-if="nameError">{{ nameError }}</p>
            </div>

            <div>
              <h2 class="heading">My learning experience was ...</h2>

              <div>
                <input
                  type="radio"
                  name="rating"
                  id="rating-poor"
                  value="Poor"
                  v-model="exp"
                />
                <label class="label" for="rating-poor">Poor</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="rating"
                  id="rating-avg"
                  value="Average"
                  v-model="exp"
                />
                <label class="label" for="rating-avg">Average</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="rating"
                  id="rating-great"
                  value="Great"
                  v-model="exp"
                />
                <label class="label" for="rating-great">Great</label>
              </div>
            </div>
            <p class="error" v-if="inputError">{{ inputError }}</p>
            <p v-if="successMessage">{{ successMessage }}</p>
            <button class="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      myName: "",
      exp: "",
      success: null,
      successMessage: "",
      nameError: "",
      inputError: "",
      isErr: false,
    };
  },
  methods: {
    submit() {
      this.error = [];
      this.sucCessMessag = "";
      this.nameError = "";
      this.inputError = "";
      this.isErr = false;
      if (this.myName && this.exp) {
        this.success = true;
        this.successMessage = "Success!";
        console.log("Name: " + this.myName);
        console.log("Expereince: " + this.exp);
        return this.sucCess;
      }

      if (!this.myName) {
        this.isErr = !this.isErr;
        this.nameError = "Pleas input your name!";
      }
      if (!this.exp) {
        this.inputError = "Please input your experiences!";
      }
    },
  },
};
</script>
