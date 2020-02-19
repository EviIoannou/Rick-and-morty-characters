<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Introduction title="Rick and Morty" subtitle="A character-verse"/>
  </div>
</template>

<script>
import Introduction from '@/components/Introduction.vue'

export default {
  name: 'Home',
  components: {
    Introduction
  }
}
</script>
