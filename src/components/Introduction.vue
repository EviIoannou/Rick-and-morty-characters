<template>
  <main>
    <h1>{{ title }}</h1>
    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="cover image">
    <h2>{{ subtitle }}</h2>
    <p id="welcome">
      Welcome to the ultimate Rick and Morty Character-verse! <br>
      Here you can search for info about all the characters from your favourite TV series, Rick and Morty.
    </p>
    <div class='intro'>
      <div id='story'>
        <h3>The story</h3>
        <p>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim.
          The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.
          Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of the family.
          The series originated from an animated short parody film of Back to the Future, created by Roiland for Channel 101, a short film festival co-founded by Harmon.
          The series has been acclaimed by critics for its originality, creativity and humor.
          The series has been picked up for an additional seventy episodes over an unspecified number of seasons, beginning with season 4.
          The fourth season premiered on November 10, 2019 and will consist of ten episodes.</p>
          <p class="source">Source: Wikipedia</p>
        <p class="link">You can watch all episodes as well as clips <a href="https://www.adultswim.com/videos/rick-and-morty">here</a>.</p>
      </div>
      <div id='search'>
        <h3>The character-verse</h3>
        <p>
          In this Character-verse, you can search for characters that appeared in different episodes. <br>
          Just choose the episode and you will see which characters played.
          Episodes available are up to season 2, episode 9.
        </p>
        <router-link to="/search/episode">Search in episodes...</router-link>
        <p>
          You can also look into which characters were last seen in which location.  <br>
          Just choose the location and you will see which characters were last seen there.
          There are 20 locations to choose from.
        </p>
        <router-link to="/search/location">Search in locations...</router-link>
      </div>
    </div>
    <footer>Data is retrieved by <a href="https://rickandmortyapi.com/" id='source'>https://rickandmortyapi.com/</a></footer>
  </main>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style scoped>

main{
  display: flex;
  flex-direction: column;
  width: 100%
  /* background-color: rgba(250, 228, 139, 0.952) */
}

main #welcome {
  font-weight: bold;
  color:#24325FFF
}
img{
  width: 30%;
  align-self: center
}

.intro{
  display: grid;
  grid-template-columns: auto auto;
  border-top: solid #24325FFF 0.1em;
  padding: 1em;
  text-align: start;
  width: 100%;
  align-self: center;
  color:#24325FFF
}

.intro div {
justify-self: center;
width: 50%;
margin-top: 1em;
margin-bottom: 1em
}

.intro .link{
  font-size: smaller
}

.intro .source{
  font-weight: lighter;
  font-size: small;
  font-style: italic;
}

h1, h2, h3 {
color: rgb(160, 54, 12)
}

h3 {
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: center
}

a {
  color: rgb(156, 67, 32);
}

#source {
color: rgba(170, 201, 216)
}

footer {
  padding: 1.2em;
  width: 100%;
  margin: 0;
  background-color: #24325FFF;
  color: rgba(170, 201, 216);
  font-size: small
}

@media screen and (max-width: 425px){
  .intro {
grid-template-columns: auto
  }
  .intro div {
    width: 70%
  }
}
</style>
