<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1a1a1a;
  color: white;
  font-family: 'Arial', sans-serif;
}

.background-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0, 255, 136, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: moveParticles 60s linear infinite;
}

.grid-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: moveGrid 20s linear infinite;
}

@keyframes moveParticles {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 1000px 1000px;
  }
}

@keyframes moveGrid {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 40px 40px;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  min-height: 100vh;
  background: var(--background-color);
  width: 100vw;
  overflow-x: hidden;
}

.v-application__wrap {
  min-height: 100vh;
  width: 100vw;
}
</style>
