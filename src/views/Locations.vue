<template>
  <div>
    <LocationSearch @get-characters ="loadCharacters"/>
  </div>
</template>

// <script>
// // @ is an alias to /src
import LocationSearch from '@/components/LocationSearch.vue'

export default {
   methods: {
    
   loadCharacters(choice) {
      this.$store.commit("setCharacters", []);
      console.log(this.$store.state.myCharacters);
      fetch(`https://rickandmortyapi.com/api/location/${choice}`)
        .then(response => response.json())
        .then(result => {
          // console.log(result)
          // console.log(result.characters);
          result.residents.forEach(resident => {
            fetch(`${resident}`)
              .then(response => response.json())
              .then(result => {
                // console.log(result);
                this.$store.state.myCharacters.push(result);
              })
          })
        })
        .then(console.log(this.$store.state.myCharacters))
    }
  },
  name: "locations",
  components: {
    LocationSearch
  }
}

</script>