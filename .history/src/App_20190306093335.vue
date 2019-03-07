<template>
  <div id="app">
    <router- />
    <About />
  </div>
</template>

<script>
import Home from './components/Home'
import About from './components/About'
export default {
  name: 'app',
  components: {
    Home,
    About
  }
}
</script>

<style>

</style>
