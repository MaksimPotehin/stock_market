<template>
  <section
      v-loading="isLoading"
      id="app">
    <Header/>
    <div class="2xl:container mx-auto">
      <router-view/>
    </div>
  </section>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
<script>
import Header from '@/components/header/Header'
import { SET_STOCKS } from '@/store/type'
import { initialData } from '@/data'

export default {
  components: {
    Header
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading
    }
  },
  created() {
    this.$store.commit(SET_STOCKS, initialData)
  }
}
</script>
