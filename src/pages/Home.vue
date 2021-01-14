<template>
  <el-main class="home">
    <div class="card">
      <h2>Trade or View your portfolio</h2>
      <p>You may "save & load" your data</p>
      <p>Click on "End Day" to begin a new Day</p>
      <p>I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.</p>
      <el-divider></el-divider>
      <h3>Your Funds: {{ funds | changeFunds }}</h3>
    </div>
  </el-main>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  },
  filters: {
    changeFunds(value) {
      return '$' + value.toLocaleString()
    }
  }
}
</script>

<style scoped>
.card {
  /*max-width: 1200px;*/
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #929292;
  text-align: left;
}
</style>
