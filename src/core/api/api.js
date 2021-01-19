import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.VUE_APP_API_PATH
})

export const dataApi = {
  saveData(data) {
    return instance.put('data.json', data)
  },
  getData() {
    return instance.get('data.json')
      .then(res => res.data)
  }
}
