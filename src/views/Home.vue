<template>
  <div class="home-bg">
    <Header />

    <div>
      <v-container>
        <v-row>
          <v-col cols="4" class="text-center home">
                 <h1>
            WELCOME 
          </h1>
         
          <br>
          <h2>
            UPLOAD YOUR SNAPS
          </h2>
          <br>
          <a href ="/register">
            Join us
          </a>
                        
          </v-col>
        </v-row>
        
      </v-container>
     
    </div>
  </div>
</template>
<script>

import Header from "../components/Header";
export default {
  components: {
    Header,
  },

};
</script>
<style>
.home-bg {
  background-image: url(../assets/laptop.jpeg);
  background-size: cover;
  background-position: center;
  height: 100%;
}
.home{
  /* background-color: white;
  opacity: 0.6; */
  /* background-color: transparent; */
    background-color: rgba(255, 255, 255, 0.3);

  
  color:black;
  align-items: center;
  /* display: flex; */
  align-content: center;
  position: fixed;
  justify-content: center;
  justify-items: center;
 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
      font-family: 'Abril Fatface', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 

}

</style>