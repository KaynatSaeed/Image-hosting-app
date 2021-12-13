<template>
  <div>
    <Header />

    <div container>
      <v-container class="me">
        <v-row justify="center" no-gutters>
          <v-col cols="12" lg="4" md="4" xl="4" sm="4" class="sign"></v-col>
          <v-col class="hidden-xs-only" cols="12" lg="4" md="4" xl="4" sm="4">
            <div class="center">
              <h4>Welcome</h4>
              <h1>
                Fill the form <br />
                to become <br />
                part of our <br />
                team.
              </h1>
              <v-spacer></v-spacer>
              <v-btn router to="Login">Login</v-btn>
            </div>
          </v-col>
          <v-col cols="12" lg="4" md="4" xl="4" sm="4">
            <v-form
              ref="form"
              v-model="valid"
              v-on:submit.prevent="loadUsers"
              lazy-validation
              class="fm"
            >
              <v-card ref="form">
                <v-card-text>
                  <h1 class="text-center black--text">Signup</h1>

                  <v-text-field
                    ref="userName"
                    v-model="userData.name"
                    :rules="UsernameRule"
                    :error-messages="errorMessages"
                    label="Name"
                    prepend-icon="mdi-account"
                    placeholder="John Doe"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="age"
                    prepend-icon="mdi-pencil"
                    type="numeric"
                    color="blue accent-3"
                    v-model="userData.age"
                    :rules="ageRules"
                    required
                  />

                  <v-text-field
                    ref="email"
                    v-model="userData.email"
                    :rules="emailRule"
                    prepend-icon="mdi-email"
                    :error-messages="errorMessages"
                    label="Email"
                    placeholder="xyz@gmail.com"
                    required
                  ></v-text-field>

                  <v-text-field
                    ref="password"
                    v-model="userData.password"
                    :type="'Password'"
                    :rules="passwordRule"
                    prepend-icon="mdi-lock"
                    :error-messages="errorMessages"
                    label="Password"
                    placeholder="***"
                    required
                  ></v-text-field>
                  <v-text-field
                    ref="password_confirmation"
                    v-model="userData.password_confirmation"
                    :type="'Password'"
                    prepend-icon="mdi-lock"
                    :error-messages="errorMessages"
                    label="Confirm Password"
                    placeholder="***"
                    required
                  ></v-text-field>

                  <v-file-input
                    ref="picture"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an picture"
                    prepend-icon="mdi-camera"
                    label="upload a picture"
                    color="blue accent-3"
                    v-on:change="storeImg"
                    :rules="imageRules"
                    required
                  ></v-file-input>
                </v-card-text>
                <!-- <v-btn color="black" block dark text @click="submit">
                Submit
              </v-btn> -->
                <v-container>
                  <v-btn block type="submit" color="black darken-1">
                    <span class="white--text px-8">Submit</span>
                  </v-btn>
                </v-container>
              </v-card>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import {
  UsernameRule,
  ageRules,
  emailRule,
  passwordRule,
  imageRules,
  password_confirmation,
} from "../views/validation";
import Vue from "vue"; // in Vue 2
// import * as Vue from 'vue' // in Vue 3
import { mapGetters } from "vuex";

import axios from "axios";
import VueAxios from "vue-axios";
import Header from "../components/Header.vue";

Vue.use(VueAxios, axios);

export default {
  components: {
    Header,
  },
  data: () => ({
    valid: true,

    userData: {
     
      email: "",
      name: "",
      age: "",

      password: "",
      password_confirmation: "",
      picture: "",
      profile_image: "",
      snackbar: false,
    },

    errorMessages: "",
    formHasErrors: false,
    emailRule: emailRule,
    UsernameRule: UsernameRule,
    ageRules: ageRules,
    imageRules: imageRules,

    passwordRule: passwordRule,
    // password_confirmation:password_confirmation,
  }),



  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
    storeImg(event) {
      let vm = this;

      const reader = new FileReader();

      reader.addEventListener(
        "load",

        function () {
          //creq===========
          vm.userData.profile_image = reader.result;
        },

        false
      );

      reader.readAsDataURL(event);
    },

    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },

    loadUsers() {
      console.log(this.userData);
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updateSnackBarStatus");
        this.$store.dispatch("loadUser", this.userData);
      }
    },
    

  },

  computed: {
    ...mapGetters(["getSnackbarStutes"]),
    ...mapGetters(["getSnackbarErrorMsg"]),
  },
};
</script>

<style>
.sign {
  background-image: url("../assets/mobile.jpeg");
  background-size: cover;
  border-radius: 20px;
}
.me {
  background-color: black;
  color: white;
  border-radius: 20px;
  max-height: 600px;
  margin-top: 0.5rem;
  /* margin: 0 auto; */
}
.center {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>