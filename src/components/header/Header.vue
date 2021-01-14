<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
          <router-link to="/">Stock Trader</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/stocks">Stocks</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/portfolio">Portfolio</router-link>
        </el-menu-item>
        <el-menu-item @click="handleEndDay" class="end-day">End day</el-menu-item>
        <el-submenu index="2">
          <template slot="title">Save&Load</template>
          <el-menu-item @click="handleSaveData">Save Data</el-menu-item>
          <el-menu-item @click="handleLoadData">Load Data</el-menu-item>
        </el-submenu>
        <el-menu-item class="funds-amount">Funds: {{ funds | changeFunds }}</el-menu-item>
      </el-menu>
    </el-header>
  </el-container>
</template>

<script>
import { mapActions } from 'vuex'
import { END_DAY, LOAD_DATA, SAVE_DATA } from '@/store/type'

export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    },
    myStoks() {
      return this.$store.getters.myStocks
    },
    stocks() {
      return this.$store.getters.stocks
    }
  },
  methods: {
    ...mapActions({
      endDay: END_DAY,
      saveData: SAVE_DATA,
      loadData: LOAD_DATA
    }),
    handleSelect() {
      // console.log('handleSelect',key, keyPath);
    },
    handleSaveData() {
      this.saveData()
    },
    handleLoadData() {
      this.loadData()
    },
    handleEndDay() {
      this.endDay()
    }
  }
}
</script>

<style scoped>
.funds-amount {
  color: black !important;
}
</style>
