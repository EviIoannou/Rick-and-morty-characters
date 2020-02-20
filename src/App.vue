<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/search/episode">Episodes</router-link> |
      <router-link to="/search/location">Locations</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body{
  background-color: rgba(170, 201, 216, 0.829);
  margin: 0;
  width: 100%
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* margin: 0; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 1em;
  margin: 0;
  width: 100%;
  text-align: start;
  background-color: #24325FFF;
}

#nav a {
  font-weight: bold;
  color: rgb(70, 158, 190);
  text-decoration: none
}

#nav a.router-link-exact-active {
  color: rgb(238, 238, 214);
}

h2 {
  color: #24325FFF
}

@media screen and (max-width: 425px){
  #app {
   font-size: smaller
  }
}
</style>
