<template>
  <div>
    <h2>{{title}}</h2>
       <select v-model='choice'>
      <option value='default'>{{msg}}</option>
      <option
        v-for='(location,l) in $store.state.locations'
        :key='`${l}-${location.id}`'
        :value='location.id'
      >{{location.name}}</option>
    </select>
    <h2 v-if="$store.state.chosenLoc !== null">Location: {{$store.state.chosenLoc}}</h2>
    </div>
</template>
<script>

export default {
  data () {
    return {
      choice: null,
      chosenLoc: null
    }
  },
  created () {
    this.$store.commit('setCharacters', [])
    this.$store.commit('setLocation', null)
    fetch('https://rickandmortyapi.com/api/location/')
      .then(response => response.json())
      .then(result => {
        this.$store.state.locations = result.results
        console.log(this.$store.state.locations)
      })
  },
  watch: {
    choice (val) {
      this.chosenLoc = this.$store.state.locations.filter(location => location.id === val)
      console.log(val)
      this.$store.commit('setLocation', this.chosenLoc[0].name)
      this.$emit('get-characters', val)
    }
  },
  props: {
    title: String,
    msg: String
  },
  name: 'LocationSearch'
}
</script>

<style scoped>
select{
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
