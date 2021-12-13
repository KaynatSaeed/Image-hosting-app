<template>
<div>

      <Header/>
    <div container>
        <v-container class="me">
            <v-row justify="center" no-gutters>
              
                <v-col cols="12" lg="4" md="4" xl="4" sm="4" xs="12">
                  <v-card class="pa-4 log">
          <div class="text-center">
          
            <h2 class="black--text">Login</h2>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="userData.email"
                :rules="emailRule"
                type="email"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
                      v-model="userData.password"
                      :rules="passwordRule"
                      :type="passwordShow?'text':'password'"
                      label="Password"
                      placeholder="Password"
                      prepend-inner-icon="mdi-key"
                      :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      required
              />
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" block type="submit" color="black darken-1">
                <span class="white--text px-8">Login</span>
              </v-btn>
               
            </v-card-actions>
            <v-card-actions>
                   <a href="/forget" router to="forget">Forgotten password</a>
            </v-card-actions>

            <v-card-actions>
              <v-card-text>Don't have an account</v-card-text>
              <v-btn color="dark">
               <v-btn router to="Register">SignUp</v-btn>
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
        <v-snackbar top color="red" :value="getSnackbarStutes" timeout="5000">
       {{getSnackbarErrorMsg}}
    </v-snackbar>

    </div>
    </div>
</template>
      

<script>
import {
        emailRule,
        passwordRule, } from '../views/validation';
import {mapGetters} from 'vuex'
import Header from '../components/Header.vue'


export default {
  components:{
    Header

  },

  data: () => ({
    emailRule: emailRule,
    passwordRule:passwordRule,
    loading:false,
    snackbar:false,
    passwordShow:false,
    userData :{
       email: "",
    password: "",

    }
    
   
  }),
  methods:{
    submitHandler(){
      if (this.$refs.form.validate()){
          this.$store.dispatch("updateSnackBarStatus");
          this.$store.dispatch("loginUser", this.userData);
       
      }
    }
  },


   computed:{
        ...mapGetters(['getSnackbarStutes']),
        ...mapGetters(['getSnackbarErrorMsg'])
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



}
.center {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

