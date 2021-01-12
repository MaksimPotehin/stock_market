<template>
  <el-main class="portfolio">
    <el-row>
      <el-col :span="24">
        <h1>Portfolio:</h1>
      </el-col>
      <Stock
          v-for="item of myStocks"
          :item="item"
          :key="item.id"
          :name="'portfolio'"
      />
    </el-row>
  </el-main>
</template>

<script>
import Stock from "@/components/Stock";

export default {
  name: "Portfolio",
  components: {Stock},
  computed: {
    myStocks() {
      return this.$store.getters.myStocks
    }
  }
}
</script>

<style scoped>

</style>