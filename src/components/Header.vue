<template>
  <div id="app">
    <div>
      <v-app-bar color="black accent-4" dense dark flat app>
      

        <v-toolbar-title router to="/">
        
        K-Snap
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn>
          <v-btn icon router to="/login"> LOGIN </v-btn>
        </v-btn>
      <v-btn>
          <v-btn icon router to="/register"> SIGNUP </v-btn>
        </v-btn>
       

        <v-menu left bottom> </v-menu>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style>
</style>