<template>
  <div class="profile-bg">
    <Navbar />

    <div>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            lg="8"
            md="8"
            xl="8"
            sm="10"
            xs="10"
            class="mx-auto up-pro"
          >
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              class="fm update-profile"
            >
              <v-card ref="form" class="update-profile">
                <v-card-text>
                  <h1 class="text-center black--text">Update profile</h1>
                  <v-row>
                    <v-col cols="6" lg="6" md="6" xl="6" sm="6" xs="6">
                      <!-- <v-img src="../assets/pf.png" width="200" height="200">
                      
                      </v-img> -->
                       <v-avatar size="150" class="mb-10">
                        <img :src="currentUser.user_profile_image_path+'/'+currentUser.profile_image" alt="upload"  />
                      </v-avatar>
                      <v-file-input
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder="Pick an picture"
                        prepend-icon="mdi-camera"
                        label="upload a picture"
                        color="blue accent-3"
                        v-on:change="storeImg"
                        :rules="imageRules"
                        required
                      ></v-file-input>
                    </v-col>

                    <v-col cols="6" lg="6" md="6" xl="6" sm="6" xs="6">
                      <v-container class="field-pro">
                        <v-text-field
                          ref="userName"
                          v-model="userData.name"
                          :rules="UsernameRule"
                          :error-messages="errorMessages"
                          label="Name"
                          prepend-icon="mdi-account"
                          placeholder="UserName"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="age"
                          ref="age"
                          prepend-icon="mdi-pencil"
                          type="numeric"
                          color="blue accent-3"
                          v-model="userData.age"
                          :rules="ageRules"
                          required
                        />
                      </v-container>
                      
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-container>
                  <v-btn color="black" block dark @click="submit">
                    Update
                  </v-btn>
                </v-container>

                <v-card-actions>
                  <v-slide-x-reverse-transition>
                    <v-tooltip v-if="formHasErrors" left>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          icon
                          class="my-0"
                          v-bind="attrs"
                          @click="resetForm"
                          v-on="on"
                        >
                          <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                      </template>
                      <span>Refresh form</span>
                    </v-tooltip>
                  </v-slide-x-reverse-transition>
                </v-card-actions>
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
} from "../views/validation";
import Navbar from "../components/Navbar";
export default {
  components: {
    Navbar,
  },
  data: () => ({
    valid: true,
    currentUser: "",
      userData:{ 
      name:"",
      age:"",
      profile_image:"",
      },
    errorMessages: "",
    formHasErrors: false,
    emailRule: emailRule,
    UsernameRule: UsernameRule,
    ageRules: ageRules,
    imageRules: imageRules,

    passwordRule: passwordRule,
  }),

  
 

  watch: {
    name() {
      this.errorMessages = "";
    },
  },
    mounted(){
 
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.currentUser)
    this.userData.name=this.currentUser.name;
    this.userData.age=this.currentUser.age;
    this.userData.profile_image=this.currentUser.profile_image;
    console.log(this.userData)
    
    
  },

  methods: {
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },

    //convert img to base64
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
  },
};
</script>
<style>
.profile-bg {
  background-image: url(../assets/com.jpg);
  background-size: cover;
  background-position: center;
  height: 100%;
}
.field-pro {
  margin-top: 60px;
}
.update-profile {
  background-color: green;
}
.up-pro {
  margin-top: 4.5rem;
}
</style>