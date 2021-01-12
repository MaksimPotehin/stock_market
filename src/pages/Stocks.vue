<template>
  <el-main class="portfolio">
    <el-row>
      <el-col :span="24">
        <h1>Stocks:</h1>
      </el-col>
      <Stock
          v-for="item of stocks"
          :item="item"
          :key="item.id"
          :type="'stocks'"
      />
    </el-row>
  </el-main>
</template>


<script>
import Stock from "@/components/Stock";

export default {
  name: "Stocks",
  components: {Stock},
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  }
}
</script>

<style scoped>

</style>