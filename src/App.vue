<template>
  <div id="app">
    <header class="app-header">
      <NavBar />
    </header>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

import NavBar from "./components/NavBar"
export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
