<template >
  <div>
    <h2>Episode</h2>
    <select v-model='choice'>
      <option value='default'>Select episode</option>
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
      this.choice = val
      console.log(this.choice)
      this.$emit('get-characters', this.choice)
    }
  },
  name: 'EpisodeSearch'
}
</script>
