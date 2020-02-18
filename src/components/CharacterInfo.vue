<template>
  <div>
    <h2>Characters</h2>
    <dl>
      <dd
        v-for="(myCharacter, c) in $store.state.myCharacters"
        :key="`${c}-${myCharacter.id}`"
        :value="myCharacter.id"
      >
        {{myCharacter.name}}
        <input type="button" value="Info" :id="myCharacter.id" @click="getId" />
      </dd>
    </dl>

    <div v-if="$store.state.myInfo!==null" class="overlay">
      <div class="popup">
        <a class="close" href="#" @click="closeOverlay">×</a>
        <div class="content">
          <img alt="Character image" :src="$store.state.imageSource" />
          <p>{{$store.state.myInfo.name}}</p>
          <p>{{$store.state.myInfo.species}}</p>
          <p>{{$store.state.myInfo.location.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getId (e) {
      console.log(e.target.id)
      fetch(`https://rickandmortyapi.com/api/character/${e.target.id}`)
        .then(response => response.json())
        .then(result => {
          this.$store.state.myInfo = result
          this.$store.state.imageSource = `https://rickandmortyapi.com/api/character/avatar/${e.target.id}.jpeg`
        })
    },
    closeOverlay () {
      this.$store.state.myInfo = null
    }
  },
  name: 'CharacterInfo'
}
</script>

<style scoped>

.overlay {
  position: fixed; /* Sit on top of the page content */
  /* display: none; Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  /* z-index: 2; Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
.close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
}

/* .popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
} */

.popup .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.popup .close:hover {
  color: rgb(22, 89, 151);
}

.popup .content {
  max-height: 30%;
  overflow: auto;
}
</style>
