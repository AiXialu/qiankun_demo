<template>
  <div>
    <Game></Game>
    <button @click="handleStartGame">startGame</button>
  </div>
</template>

<script setup>
import Game from "./components/GamePage.vue";
import { startGame } from "./game";

function handleStartGame() {
  console.log("开始游戏");
  startGame()
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
