<template>
  <div class="card">
    <div class="card-header">
      <h2>{{ item.name }}</h2>
      <h4>( price: {{ pageProps.subtitle | changeFunds }} )</h4>
    </div>
    <div class="card-content items-baseline">
      <Input
          placeholder="Please input"
          inputType="number"
          v-model="count"
      />
      <Button
          :text="type === 'stocks' ? 'Buy' : 'Sell'"
          :disabled="pageProps.disabled"
          @handleClick="handleClick"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { BUY_STOCK, SELL_STOCK } from '@/store/type'
import Button from '@/components/Button'
import Input from '@/components/Input'

export default {
  name: 'Stock',
  components: { Button, Input },
  data() {
    return {
      count: 1
    }
  },
  props: ['item', 'type'],
  methods: {
    ...mapActions({
      buy: BUY_STOCK,
      sell: SELL_STOCK
    }),
    handleClick() {
      const quantity = parseInt(this.count)
      if (this.type === 'stocks') {
        this.buy({
          ...this.item,
          quantity
        })
        this.count = 1
      } else {
        this.sell({
          ...this.item,
          quantity
        })
        this.count = 1
      }
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    },
    pageProps() {
      if (this.type === 'stocks') {
        return {
          disabled: this.count * this.item.price >= this.funds,
          subtitle: this.item.price
        }
      } else {
        return {
          disabled: this.item.quantity < this.count,
          subtitle: this.item.price + ' | quantity: ' + this.item.quantity
        }
      }
    }
  }
}
</script>

<style scoped>

.card {
  border: 1px solid #cecece;
  border-radius: 5px;
}

.card-header {
  display: flex;
  align-items: center;
  background-color: #3a8ee642;
  padding: 0 20px;
}

.card-header h4 {
  margin-left: 10px;
}

.card-content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.card-content div {
  max-width: 250px !important;
}
</style>
