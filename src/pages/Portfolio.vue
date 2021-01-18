<template>
  <main class="flex-1 p-5">
    <h1>Portfolio:</h1>
    <div class="flex flex-wrap">
      <Stock
          v-for="item of myStocks"
          :item="item"
          :key="item.id"
          :name="'portfolio'"
      />
    </div>
  </main>
</template>

<script>
import Stock from '@/components/Stock'

export default {
  name: 'Portfolio',
  components: { Stock },
  computed: {
    myStocks() {
      return this.$store.getters.myStocks
    }
  }
}
</script>

<style scoped>

</style>
