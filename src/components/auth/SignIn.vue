<template>
  <div class="p-10 bg-white border-8 border-blue-400">
    <h2>Sign In</h2>
    <form @submit.prevent="handleClick" :model="form">
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
    </form>
    <br>
    <Button
        text="Submit"
        @handleClick="handleClick"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { AUTH_USER } from '@/store/type'
import Input from '@/components/Input'
import Button from '@/components/Button'

export default {
  name: 'SignIn',
  components: {
    Button,
    Input
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      signIn: AUTH_USER
    }),
    handleClick() {
      console.log('this.form', { ...this.form })
      // this.signIn(this.form)
    }
  }
}
</script>
