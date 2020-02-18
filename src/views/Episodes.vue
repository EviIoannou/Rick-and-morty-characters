<template>
  <div>
    <EpisodeSearch @get-characters='loadCharacters'></EpisodeSearch>
    <CharacterInfo></CharacterInfo>
  </div>
</template>
<script>
// // @ is an alias to /src
import EpisodeSearch from '@/components/EpisodeSearch.vue'
import CharacterInfo from '@/components/CharacterInfo.vue'

export default {
  methods: {
    loadCharacters (choice) {
      this.$store.commit('setCharacters', [])
      fetch(`https://rickandmortyapi.com/api/episode/${choice}`)
        .then(response => response.json())
        .then(result => {
          result.characters.forEach(character => {
            fetch(`${character}`)
              .then(response => response.json())
              .then(result => {
                this.$store.state.myCharacters.push(result)
              })
          })
        })
    }
  },
  name: 'episodes',
  components: {
    EpisodeSearch,
    CharacterInfo
  }
}
</script>
