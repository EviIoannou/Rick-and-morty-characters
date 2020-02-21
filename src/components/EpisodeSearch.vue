<template >
  <div>
    <h2>{{title}}</h2>
    <select v-model='choice'>
      <option value='default'>{{msg}}</option>
      <option
        v-for='(episode,e) in $store.state.episodes'
        :key='`${e}-${episode.id}`'
        :value='episode.id'
        :id='episode.name'
      >{{episode.episode}}</option>
    </select>
    <h2 v-if="$store.state.chosenEp !== null">Episode "{{$store.state.chosenEp}}"</h2>
  </div>
</template>
<script>

export default {
  data () {
    return {
      choice: null,
      chosenEp: null
    }
  },
  created () {
    this.$store.commit('setCharacters', [])
    this.$store.commit('setEpisode', null)
    fetch('https://rickandmortyapi.com/api/episode/')
      .then(response => response.json())
      .then(result => {
        this.$store.state.episodes = result.results
        console.log(this.$store.state.episodes)
      })
  },

  watch: {
    choice (val) {
      this.chosenEp = this.$store.state.episodes.filter(episode => episode.id === val)
      console.log(val)
      this.$store.commit('setEpisode', this.chosenEp[0].name)
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
