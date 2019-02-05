<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
/* Make bootstrap globally available */
@import "assets/bootstrap.min.css";

#app {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background: #c9e5ff;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #f2f7ff, #c9e5ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #f2f7ff, #c9e5ff);
  font-family: 'Lato', sans-serif;
  user-select: none;
  height: 100vh;
}
</style>
