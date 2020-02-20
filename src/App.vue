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
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #24325FFF;
  margin: 0;
  padding: 1em;
  text-align: start;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: rgb(70, 158, 190);
  text-decoration: none;
  font-size: larger
}

#nav a.router-link-exact-active {
  color: rgb(238, 238, 214);
}

h2 {
  color: #24325FFF
}

@media screen and (max-width: 425px){
  #nav {
   font-size: small
  }
}
</style>
