<template>
  <div class="">
    <label
        class="block text-left mb-1 mt-4"
        v-if="label"
        :for="inputName"
    >
      {{label}}
    </label>
    <input
        :class="inputStyle"
        :id="inputName || placeholder"
        :type="inputType"
        :placeholder="placeholder"
        :value="value"
        @input="onChange"
    >
  </div>
</template>

<script>
export default {
  name: 'Input',
  computed: {
    inputStyle() {
      return 'py-2 px-4 border-gray-700-400 border rounded-sm w-full d-block outline-none'
    }
  },
  props: {
    inputName: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      default: 'text'
    },
    value: {
      default: 1
    }
  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
