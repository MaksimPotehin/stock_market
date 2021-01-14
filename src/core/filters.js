import Vue from 'vue'

Vue.filter('changeFunds', value => {
  return '$' + value.toLocaleString()
})
