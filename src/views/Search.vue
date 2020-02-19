<template>
  <div>
    <EpisodeSearch
      v-if="$route.params.filter==='episode'"
      @get-characters='loadCharacters'
      title='Episodes'
      msg='Select episode'
    />
    <LocationSearch
      v-if="$route.params.filter==='location'"
      @get-characters='loadCharacters'
      title='Locations'
      msg='Select location'
    />
    <CharacterInfo></CharacterInfo>
  </div>
</template>
<script>
import EpisodeSearch from '@/components/EpisodeSearch.vue'
import LocationSearch from '@/components/LocationSearch.vue'
import CharacterInfo from '@/components/CharacterInfo.vue'
export default {
  created () {
    console.log(this.$route.params)
  },
  methods: {
    loadCharacters (choice) {
      this.$store.commit('setCharacters', [])
      fetch(
        `https://rickandmortyapi.com/api/${this.$route.params.filter}/${choice}`
      )
        .then(response => response.json())
        .then(result => {
          if (this.$route.params.filter === 'episode') {
            result.characters.forEach(character => {
              fetch(`${character}`)
                .then(response => response.json())
                .then(result => {
                  this.$store.state.myCharacters.push(result)
                })
            })
          } else {
            result.residents.forEach(resident => {
              fetch(`${resident}`)
                .then(response => response.json())
                .then(result => {
                  this.$store.state.myCharacters.push(result)
                })
            })
          }
        })
    }
  },
  name: 'search',
  components: {
    EpisodeSearch,
    LocationSearch,
    CharacterInfo
  }
}
</script>
