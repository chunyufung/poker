<template>
  <div id="app">
      <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  padding-top: 52px;
}
</style>
