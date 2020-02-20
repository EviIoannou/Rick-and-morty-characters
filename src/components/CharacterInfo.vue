<template>
  <main>
    <h2>Characters</h2>
    <section id="allCharacters" >
      <p
        v-for="(myCharacter, c) in $store.state.myCharacters"
        :key="`${c}-${myCharacter.id}`"
        :value="myCharacter.id"
      >
        {{myCharacter.name}}
        <input type="button" value="Info" class='show' :id="myCharacter.id" @click="getId" />
      </p>
    </section>

    <section v-if="$store.state.myInfo!==null" class="overlay">
      <div class="popup">
        <a class="close" href="#" @click="closeOverlay">×</a>
        <div class="content">
          <h2>{{$store.state.myInfo.name}}</h2>
          <img alt="Character image" :src="$store.state.imageSource" />
          <table>
            <tbody>
              <tr><td class="subtitle">Species</td><td class="info">{{$store.state.myInfo.species}}</td></tr>
              <tr><td class="subtitle">Origin</td><td class="info">{{$store.state.myInfo.origin.name}}</td></tr>
              <tr><td class="subtitle">Status</td><td class="info">{{$store.state.myInfo.status}}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
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
          console.log(this.$store.state.myInfo)
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

#allCharacters {
  margin: 1em;
  padding: 1em;
  display: grid;
  grid-template-columns:  auto auto auto;
  grid-template-rows: auto auto auto auto;
  grid-row-gap: 1em;
  grid-column-gap: 0.5em;
  justify-content: center;
  /* justify-items: start; */
  text-align: center
}

#allCharacters p {
  margin-left: 1em;
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center
}

.show {
align-self: center;
display: block;
width: 70px;
background-color: #008CBA;
padding: 0.3em 0.8em;
border-radius: 8px;
color: bisque;
cursor: pointer;
transition-duration: 0.4s;
}

.show:hover {
  background-color: rgb(0, 52, 70); /* Green */
  color: white;
}

.overlay {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  cursor: pointer;
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

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}

.popup .close {
  position: absolute;
  top: 5px;
  right: 5px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: rgb(192, 7, 16);
}

.popup .close:hover {
  color: rgb(22, 89, 151);
}

.popup .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 30%;
  overflow: auto
}

table {
margin-top: 1em;
color: #333;
font-family: Tahoma, Arial, sans-serif;
}

.info {
  text-align: start
}
.subtitle {
font-weight: bold;
padding-right: 1em
}

@media screen and (max-width: 425px){
  .popup{
    width: 50%
  }
  .popup img{
  width: 80%;
}}
</style>
