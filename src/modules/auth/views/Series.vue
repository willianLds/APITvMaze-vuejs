<template>
  <v-row>
    <v-card
      class="mx-auto"
      max-width="60%"
    >
      <v-list
        :dense="true"
        :three-line="true"
        :flat="true"
        :inactive="true"
        :nav="true"
        :avatar="true"
        :rounded="true"
      >
        <v-subheader>Series</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(serie, i) in series"
            :key="i"
            :href="'/epsodios/' + serie.id"
          >
            <v-list-item-avatar class="v-list-item-avatar">
              <v-img :src="serie.image.medium"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="serie.name"></v-list-item-title>
              <v-list-item-subtitle v-html="serie.summary"></v-list-item-subtitle>
              <v-divider inset></v-divider>
            </v-list-item-content>

          </v-list-item>

        </v-list-item-group>

      </v-list>
    </v-card>
  </v-row>
</template>

<script>
import API from '@/api/rotasApi.js'
import axios from 'axios'

export default {
  data () {
    return {
      series: null,
      loader: true
    }
  },
  created () {
    this.buscaSeries()
  },
  methods: {
    buscaSeries () {
      axios.get(API.series).then((response) => {
        this.series = response.data
        this.loader = false
      })
    }
  }
}
</script>

<style scoped>
.v-list-item-avatar {
  width: 250px !important;
  height: 250px !important;
}
</style>
