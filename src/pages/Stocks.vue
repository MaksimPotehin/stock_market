<template>
  <main class="flex-1 p-5">
    <h1>Stocks:</h1>
    <div class="flex flex-wrap">
      <Stock
          v-for="item of stocks"
          :item="item"
          :key="item.id"
          :type="'stocks'"
      />
    </div>
  </main>
</template>

<script>
import Stock from '@/components/Stock'

export default {
  name: 'Stocks',
  components: { Stock },
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  }
}
</script>

<style scoped>

</style>
