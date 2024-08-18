<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Main Application</h1>
    <button @click="goToGame1">Go to Game 1</button>
    <button @click="goToGame2">Go to Game 2</button>
    <router-view></router-view> <!-- This is where the game1 app will be loaded -->
    <div id="subapp-viewport"></div> <!-- This is where the micro frontend will mount -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  methods: {
    goToGame1() {
      this.$router.push('/game1');
    },
     goToGame2() {
      this.$router.push('/game2');
    }
  }
}
</script>
