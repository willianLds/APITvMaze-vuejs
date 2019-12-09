<template>

  <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="(temp,i) in temporada"
      :key="i"
    >
      <v-expansion-panel-header>Temporada {{i + 1}}</v-expansion-panel-header>
      <v-row>
        <v-card
          class="mx-auto"
          max-width="80%"
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
            <v-subheader>Episódios</v-subheader>
            <div
              v-for="(ep, x) in episodios"
              :key="x"
              @click="abrirDialog(ep.number, ep.summary, ep.name,ep.image.medium)"
            >
              <v-list-item-group
                color="primary"
                style="width:1800px"
              >
                <v-list-item v-if="ep.season == i+1">
                  <v-list-item-avatar>
                    <v-img :src="ep.image.medium"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="ep.name"></v-list-item-title>
                    <v-list-item-subtitle>S{{adicionaZero(ep.season)}}E{{adicionaZero(ep.number)}}</v-list-item-subtitle>
                    <v-divider inset></v-divider>
                  </v-list-item-content>
                </v-list-item>

              </v-list-item-group>
            </div>
          </v-list>
        </v-card>
      </v-row>
    </v-expansion-panel>

    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        width="600px"
      >
        <v-card>
          <v-list-item-group
            color="Dark"
            style="width:1800px"
          >
            <v-img :src="imagemSalvo"></v-img>
            <v-card-title>
              <span v-html="tituloSalvo"></span>
            </v-card-title>
            <v-card-text v-html="descSalvo">
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
              >Voltar</v-btn>
            </v-card-actions>
          </v-list-item-group>
        </v-card>
      </v-dialog>
    </v-row>
  </v-expansion-panels>

</template>

<script>
import API from '@/api/rotasApi.js'
import axios from 'axios'

export default {
  data () {
    return {
      id: this.$route.params.id, /* id da série recuperada pelo router */
      temporada: null,
      episodios: null,
      dialog: false,
      epSalvo: 0,
      descSalvo: '',
      tituloSalvo: '',
      imagemSalvo: ''
    }
  },
  created () {
    this.buscaEps()
    this.buscaTemporada()
  },
  methods: {
    abrirDialog (epsodio, sumario, titulo, imagem) {
      this.dialog = true
      this.epSalvo = epsodio
      this.descSalvo = sumario
      this.tituloSalvo = titulo
      this.imagemSalvo = imagem
    },
    /* Responsável por trazer os epsódios da série selecionada */
    buscaEps () {
      axios.get(API.seriesEp + this.id + '/episodes').then((response) => {
        this.episodios = response.data
      })
    },
    /* Responsável por trazer as temporadas da série selecionada */
    buscaTemporada () {
      axios.get(API.seriesEp + this.id + '/seasons').then((response) => {
        this.temporada = response.data
      })
    },
    /* Numeros de 0 a 9, será adiciona 0 no começo para ficar com 2 cadas decimais ex: 0 => 01 */
    adicionaZero (val, size, char) {
      size = size || 2
      char = char || '0'
      return String(val).padStart(size, char)
    }
  }
}

</script>

<style scoped>
.v-list-item-avatar {
  margin-right: 20px;
  width: 300px !important;
  height: 300px !important;
}
</style>
