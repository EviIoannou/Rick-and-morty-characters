<template>
  <div>
    <EpisodeSearch @get-characters="loadCharacters"></EpisodeSearch>
  </div>
</template>

// <script>
// // @ is an alias to /src
import EpisodeSearch from "@/components/EpisodeSearch.vue";

export default {
  methods: {
    loadCharacters(choice) {
      this.$store.commit("setCharacters", []);
      console.log(this.$store.state.myCharacters);
      fetch(`https://rickandmortyapi.com/api/episode/${choice}`)
        .then(response => response.json())
        .then(result => {
          // console.log(result)
          // console.log(result.characters);
          result.characters.forEach(character => {
            fetch(`${character}`)
              .then(response => response.json())
              .then(result => {
                // console.log(result);
                this.$store.state.myCharacters.push(result);
              });
          });
        })
        .then(console.log(this.$store.state.myCharacters));
    }
  },
  name: "episodes",
  components: {
    EpisodeSearch
  }
};
</script>