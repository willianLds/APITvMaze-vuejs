
<template>

  <v-app>
    <v-app-bar
      app
      color="cinza"
      dark
    >
      <span class="mr-2">Pesquisa de séries usando Vuejs</span>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
