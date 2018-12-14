<template>
  

<div id="app">
  <v-app id="inspire">
    <!-- <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
    
    </v-navigation-drawer> -->
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon ><img style="width:100%" :src="require('@/static/icon.png')"></v-toolbar-side-icon>
      <v-toolbar-title>Smart Bassinet</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
            <nuxt/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app inset>
      <span class="white--text">information technology. CTC </span>
    </v-footer>
  </v-app>
</div>


</template>
<script>
  export default {
    data: () => ({
      drawer: null,
    }),
    props: {
      source: String
    }
  }
</script>