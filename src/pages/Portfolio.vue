<template>
  <main class="flex-1 p-5">
    <h1>Portfolio:</h1>
    <div class="mt-8 grid gap-8 md:gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-12">
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
