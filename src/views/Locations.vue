<template>
  <div>
    <LocationSearch @get-characters ="loadCharacters" title="Locations" msg="Select location"/>
    <CharacterInfo></CharacterInfo>
  </div>
</template>
<script>
// // @ is an alias to /src
import LocationSearch from '@/components/LocationSearch.vue'
import CharacterInfo from '@/components/CharacterInfo.vue'

export default {
  methods: {
    loadCharacters (choice) {
      this.$store.commit('setCharacters', [])
      fetch(`https://rickandmortyapi.com/api/location/${choice}`)
        .then(response => response.json())
        .then(result => {
          result.residents.forEach(resident => {
            fetch(`${resident}`)
              .then(response => response.json())
              .then(result => {
                this.$store.state.myCharacters.push(result)
              })
          })
        })
    }
  },
  name: 'locations',
  components: {
    LocationSearch,
    CharacterInfo
  }
}

</script>
