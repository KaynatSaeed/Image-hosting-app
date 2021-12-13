<template>
  <div class="cam">
    <Navbar/>
    <v-container>
        <div>
           

    <vue-dropzone :options="dropzoneOptions" id="dropzone" :useCustomSlot=true class="upload-box"> 
      <v-btn color="success">
        <v-icon>
          mdi-upload
        </v-icon>
        Upload
      </v-btn>
     
    </vue-dropzone>
       </div>
    </v-container>


  </div>
</template>


<script>

import Navbar from '../components/Navbar.vue'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
  name: 'app',
  components: {
      Navbar,
          vueDropzone: vue2Dropzone

  },
   data(){
       return{
          dropzoneOptions: {
          url: 'https://httpbin.org/post',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          addRemoveLinks: true,

          headers: { "My-Awesome-Header": "header value" }
      }
       }
   }
  

}
</script>

<style>

#dropzone{
    width: 100%;
    height: 50%;
    background-color: rgb(255, 255, 255,0.1);
}

.dropzone-custom-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.dropzone-custom-title {
  margin-top: 0;
  color: #00b782;
}

.subtitle {
  color: #314b5f;
}
.upload-box{
  margin-top: 10rem;
}
.cam{
  background-image: url(../assets/cam.jpeg);
  background-size: cover;
  background-position: center;
  height: 100%;
}
</style>