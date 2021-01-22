import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:',
  source: '*',
  headers: { 'Access-Control-Allow-Origin': true }
})

export const authApi = {
  signIn(userData) {
    console.log('userData', userData)
    return instance.post('signInWithPassword??key=AIzaSyAc9HyDUEqMcxRkAfSNp7O8mqfWMtdf4V4', {
      email: userData.email,
      password: userData.password
    })
      .then(res => res.data)
      .then(res => console.log(res.data))
  },
  signUpUser(userData) {
    return instance.post('signUp?key=AIzaSyAc9HyDUEqMcxRkAfSNp7O8mqfWMtdf4V4', {
      email: userData.email,
      password: userData.password,
      returnSecureToken: true
    })
      .then(res => console.log(res.data))
  }
}
