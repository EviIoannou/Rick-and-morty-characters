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
        <input type="button" value="Info" class='show' @click="getId(myCharacter.id)" />
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
    getId (target) {
      console.log(target)
      fetch(`https://rickandmortyapi.com/api/character/${target}`)
        .then(response => response.json())
        .then(result => {
          this.$store.state.myInfo = result
          console.log(this.$store.state.myInfo)
          this.$store.state.imageSource = `https://rickandmortyapi.com/api/character/avatar/${target}.jpeg`
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
  margin-top:0;
  padding: 1em;
  padding-left: 0.5em;
  padding-top:0;
  font-size: 1.5em;
  display: grid;
  grid-template-columns:  auto auto auto;
  grid-template-rows: auto auto auto auto;
  grid-row-gap: 1em;
  grid-column-gap: 0.5em;
  justify-content: center;
  align-items: center;
  /* justify-items: start; */
  text-align: center
}

#allCharacters p {
  margin-left: 1em;
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  justify-items: center
}

h2{
  margin-top: 1.5em;
  margin-bottom: 0.5em
}

.info {
  text-align: start
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
  font-size: 1.5em
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

.show {
align-self: center;
display: block;
width: 70px;
background-color: #008CBA;
padding: 0.3em 0.8em;
margin: 1em;
font-size: 0.7em;
border-radius: 8px;
color: bisque;
cursor: pointer;
transition-duration: 0.4s;
}

.show:hover {
  background-color: rgb(0, 52, 70); /* Green */
  color: white;
}

.subtitle {
font-weight: bold;
padding-right: 1em
}

table {
margin-top: 1em;
color: #333;
font-family: Tahoma, Arial, sans-serif;
}
@media screen and (max-width: 768px){
  .popup{
    width: 50%
  }
  .popup img{
  width: 80%;
}}
@media screen and (max-width: 425px){
  h2 {
    font-size: medium
  }
  .popup{
    font-size: 1em
  }
  #allCharacters {
    font-size: 0.8em;
    grid-row-gap: 0.5m;
    grid-column-gap: 0
  }

.show{
  /* font-size: 0.5em; */
  width: 40px
}
}
</style>
