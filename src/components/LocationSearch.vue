<template>
  <div>
    <h2>Location</h2>
    <select v-model='choice'>
      <option value='default'>Select location</option>
      <option
        v-for='(location,l) in $store.state.locations'
        :key='`${l}-${location.id}`'
        :value='location.id'
      >{{location.name}}</option>
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
    fetch('https://rickandmortyapi.com/api/location/')
      .then(response => response.json())
      .then(result => {
        this.$store.state.locations = result.results
        console.log(this.$store.state.locations)
      })
  },
  watch: {
    choice (val) {
      this.choice = val
      console.log(this.choice)
      this.$emit('get-characters', this.choice)
    }
  },
  name: 'LocationSearch'
}
</script>

<style scoped>
</style>
