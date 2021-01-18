<template>
  <button :class="[inputStyle, { 'opacity-60 pointer-events-none':disabled }]" class="button" @click.prevent="click">
    <span>{{ text }}</span>
    <div>{{ iconName }}</div>
  </button>
</template>

<script>

export default {
  name: 'Button',
  computed: {
    inputStyle() {
      return '' +
          'w-28 border border-blue-400' +
          ' outline-none focus:outline-none transition-all' +
          ' duration-500 rounded-md' +
          ' hover:bg-blue-400 cursor-pointer py-2'
    }
  },
  props: {
    text: {
      type: String,
      default: '',
      required: true
    },
    iconName: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click() {
      this.$emit('handleClick')
    }
  }
}
</script>

<style scoped>

</style>
