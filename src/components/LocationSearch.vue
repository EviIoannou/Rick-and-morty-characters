<template>
  <div>
    <h2>Location</h2>
    <select v-model="choice">
      <option value="default">Select location</option>
      <option
        v-for="(location,l) in $store.state.locations"
        :key="`${l}-${location.id}`"
        :value="location.id"
      >{{location.name}}</option>
    </select>
    <h2>Characters</h2>
    <dl class="allCharacters">
      <dd
        v-for="(myCharacter, c) in $store.state.myCharacters"
        :key="`${c}-${myCharacter.id}`"
        :value="myCharacter.id"
      >
        {{myCharacter.name}}
        <input type="button" value="Info" :id="myCharacter.id" />
      </dd>
    </dl>
 
  </div>

</template>
<script>

export default {
  data() {
    return {
      choice: null
    };
  },
  created() {
    this.$store.commit("setCharacters", []);
    fetch("https://rickandmortyapi.com/api/location/")
      .then(response => response.json())
      .then(result => {
        this.$store.state.locations = result.results;
        console.log(this.$store.state.locations);
      });
  },
  watch: {
    choice(val) {
      this.choice = val;
      console.log(this.choice);
      this.$emit("get-characters", this.choice);
    }
  },
  name: "LocationSearch"
};
</script>

<style scoped>
</style>