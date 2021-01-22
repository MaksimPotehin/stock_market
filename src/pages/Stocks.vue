<template>
  <main class="flex-1 p-5">
    <h1>Stocks:</h1>
    <div class="mt-8 grid gap-8 md:gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-12">
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
import { mapGetters } from 'vuex'

export default {
  name: 'Stocks',
  components: { Stock },
  computed: {
    ...mapGetters('stocks', {
      stocks: 'stocks'
    })
  }
}
</script>

<style scoped>

</style>
