<template>
  <main class="p-5 max-w-screen-2xl w-full">
    <div class="p-5 border border-gray-400 mx-auto my-12 text-left">
      <h2>Trade or View your portfolio</h2>
      <p>You may "save & load" your data</p>
      <p>Click on "End Day" to begin a new Day</p>
      <p>I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.</p>
      <hr class="my-8">
      <h3>Your Funds: {{ funds | changeFunds }}</h3>
    </div>
  </main>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState({
      funds: state => state.portfolio.funds
    })
  }
}
</script>
