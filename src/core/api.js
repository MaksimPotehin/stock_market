import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://todoapp-4c0bd-default-rtdb.firebaseio.com/'
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
