<template>
  <header>
    <nav class="border-b">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button @click="isMenuOpen=!isMenuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/">Stock Trader</router-link>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <router-link class="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm" to="/stocks">Stocks</router-link>
                <router-link class="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm" to="/portfolio">Portfolio</router-link>
                <!--dropdown-->
                <div class="ml-3 relative">
                  <div @click="isDropdownOpen=!isDropdownOpen"  class="flex items-center cursor-pointer">
                    <div class="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm focus:outline-none" >
                      Save&Load
                    </div>
                    <img class="w-3 opacity-60" src="https://cdn.onlinewebfonts.com/svg/img_128880.png" alt="">
                  </div>
                  <div :class="isDropdownOpen? 'absolute': 'hidden'" class="origin-top-right left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" >
                    <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" @click="handleSaveData">Save Data</div>
                    <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" @click="handleLoadData">Load Data</div>
                  </div>
                </div>
                </div>
            </div>
          </div>

          <!--Left Nav-->
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 hidden sm:flex sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="text-black px-3 py-2 rounded-md text-sm">Funds: {{ funds | changeFunds }}</div>
            <div class="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm cursor-pointer" @click="handleEndDay">End day</div>
          </div>
        </div>
      </div>

      <div :class="isMenuOpen? 'block': 'hidden'" class="sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <div class="text-black px-3 py-2 rounded-md text-sm">Funds: {{ funds | changeFunds }}</div>
          <div class="text-gray-500 hover:text-black px-3 py-2 rounded-md text-sm cursor-pointer" @click="handleEndDay">End day</div>
          <router-link class="block text-black px-3 py-2 rounded-md text-sm" to="/stocks">Stocks</router-link>
          <router-link class="block text-black px-3 py-2 rounded-md text-sm" to="/portfolio">Portfolio</router-link>
          <!--dropdown-->
          <div class="ml-3 relative">
            <div @click="isDropdownOpen=!isDropdownOpen"  class="flex items-center cursor-pointer justify-center">
              <div class="text-black px-3 py-2 rounded-md text-sm focus:outline-none" >
                Save&Load
              </div>
              <img class="w-3 opacity-60" src="https://cdn.onlinewebfonts.com/svg/img_128880.png" alt="">
            </div>
            <div :class="isDropdownOpen? 'absolute': 'hidden'" class="origin-top-right left-1/3 mt-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" >
              <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" @click="handleSaveData">Save Data</div>
              <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" @click="handleLoadData">Load Data</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      isDropdownOpen: false,
      isMenuOpen: false
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions({
      endDay: 'endDay',
      saveData: 'saveData',
      loadData: 'loadData'
    }),
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
