<template >
  <div>
    <h2>{{title}}</h2>
    <select v-model='choice'>
      <option value='default'>{{msg}}</option>
      <option
        v-for='(episode,e) in $store.state.episodes'
        :key='`${e}-${episode.id}`'
        :value='episode.id'
      >{{episode.episode}}</option>
    </select>
  </div>
</template>
<script>

export default {
  data () {
    return {
      choice: null
    }
  },
  created () {
    this.$store.commit('setCharacters', [])
    fetch('https://rickandmortyapi.com/api/episode/')
      .then(response => response.json())
      .then(result => {
        this.$store.state.episodes = result.results
        console.log(this.$store.state.episodes)
      })
  },

  watch: {
    choice (val) {
      this.$emit('get-characters', val)
    }
  },
  props: {
    title: String,
    msg: String
  },
  name: 'EpisodeSearch'
}
</script>

<style scoped>
select {
  font-size: large
}

@media screen and (max-width: 425px){
  h2 {
    font-size: medium
  }
  select {
  font-size: small
  }
}
</style>
