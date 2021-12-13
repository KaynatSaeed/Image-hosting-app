<template>
  <div id="app">
  <!-- <v-app id="inspire"> -->
    <div>
      <v-app-bar
        color="black accent-4"
        dense
        dark
        flat
        app
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
  
        <v-toolbar-title>K-Snap</v-toolbar-title>
        
  
        <v-spacer></v-spacer>
  
        <v-btn icon router to="/upload">
          <v-icon>mdi-upload</v-icon>
        </v-btn>
        <v-btn icon router to="/gallery">
          <v-icon>mdi-widgets</v-icon>
        </v-btn>
  
        <v-btn icon router to="/login">
          <v-icon>mdi-export</v-icon>
        </v-btn>
  
        <v-menu
          left
          bottom
        >
 
        </v-menu>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >

		
          <v-list-item-group
            v-model="group"
            active-class="rgb(55, 145, 55)--text text--accent-4"
          >
		  <v-list-item>

		  </v-list-item>
		  
			
			
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item router to="/upload">
              <v-list-item-icon>
                <v-icon>mdi-upload</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Upload img</v-list-item-title>
            </v-list-item>  
            <v-list-item router to="/profile">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
            <v-list-item router to="/gallery">
              <v-list-item-icon>
          <v-icon>mdi-widgets</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Gallery</v-list-item-title>
            </v-list-item>
          </v-list-item-group> 
        </v-list>
      </v-navigation-drawer>
    </div>
  <!-- </v-app> -->
</div>
</template>

<script>
export default {
   data: () => ({
    drawer: false,
    group: null,
  }),

}
</script>

<style>

</style>