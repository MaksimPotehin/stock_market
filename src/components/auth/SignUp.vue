<template>
  <div class="p-10 bg-white border-8 border-blue-400">
    <h2>Sign Up</h2>
    <form model="form">
      <Input
          placeholder="Name"
          label="Name"
          v-model="form.name"
      />
      <Input
          placeholder="Email"
          label="Email"
          v-model="form.email"
      />
      <Input
          placeholder="Password"
          label="Password"
          v-model="form.password"
          inputType="password"
      />
      <br>
      <br>
      <Button
          text="Submit"
          @handleClick="handleClick"
      />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { SET_NEW_USER } from '@/store/type'
import Button from '@/components/Button'
import Input from '@/components/Input'

export default {
  name: 'SignUp',
  components: {
    Button,
    Input
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      signUp: SET_NEW_USER
    }),
    handleClick() {
      console.log('signUp', this.form)
      // this.signUp(this.form)
    }
  }
}
</script>
