<template>
  <v-app>
    <v-app-bar style="background: radial-gradient(circle, rgba(160,245,36,1) 0%, rgba(0,205,3,1) 100%);" app fixed>
      <v-toolbar-title style="font-weight: 700; color: white">AgroAssist</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn style="color: white" text to="/">Home</v-btn>
        <v-btn style="color: white" text to="/plans/comparasion">Plans</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <br>  
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  data(){
    return {
      id: 1,
    }
  },

  components: {

  },
  mounted() {
    this.$route.params.id = 0
  }
};
</script>
