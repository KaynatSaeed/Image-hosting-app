<template>
<div>

      <Header/>
    <div container>
        <v-container class="me">
            <v-row justify="center" no-gutters>
              
                <v-col cols="12" lg="4" md="4" xl="4" sm="4" xs="12">
                  <v-card class="pa-4 log">
          <div class="text-center">
          
            <h2 class="black--text">Enter your email to reset your password</h2>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="user.email"
                :rules="emailRule"
                type="email"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="mdi-account"
                required
              />
             
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="black darken-1">
                <span class="white--text px-8">Send</span>
              </v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-card-text>Already have an account</v-card-text>
              <v-btn>
               <v-btn router to="Login">SignIn</v-btn>
              </v-btn>

            </v-card-actions>
          </v-form>
        </v-card>
                </v-col>
                <v-col class="hidden-xs-only" cols="12" lg="4" md="4" xl="4" sm="4" xs="12">
                            
                            <div class="center">
                            <h4>Welcome</h4>
                            <h1>Fill the form <br> to become <br> part of our <br> team.</h1>
                            <v-spacer></v-spacer>
                             <v-btn router to="Register">SignUp</v-btn>
                            </div>  
                                                              
                </v-col>
                <v-col cols="12" lg="4" md="4" xl="4" sm="4" xs="12" class="sign">
        
                 </v-col>
            </v-row>
        </v-container>

    </div>
     </div>
</template>
      

<script>
import {
        emailRule,
        passwordRule, } from '../views/validation';
import Header from '../components/Header.vue'

export default {
    components:{
    Header

  },

  data: () => ({
    emailRule: emailRule,
   
   user:
   {
             email: "",

   },
    
    
   
  }),
  methods:{
    submitHandler() {

      if (this.$refs.form.validate()) {

        if(this.getTesting!=""){

        }

        this.$store.dispatch("forgetData",this.user);

        this.loading = true;

        setTimeout(() => {

          this.loading = false;

          this.snackbar = true;

        }, 3000);

      }

     

    },
  

  }
};
</script>
<style scoped>
  .sign{
  background-image: url("../assets/mobile.jpeg");
    background-size: cover;
    border-radius: 20px;

}
.log{
  
  height: 500px;
  margin: 0 auto;
}
.me{
    background-color: black;
    color: white;
    border-radius: 20px;
    margin-top: 1rem;

    /* margin: 0 auto; */


}
.center {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>