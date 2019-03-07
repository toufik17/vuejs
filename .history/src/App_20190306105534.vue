<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar"

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>

</style>
