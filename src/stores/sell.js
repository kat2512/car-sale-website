import { defineStore } from 'pinia';

const initialData = {
  step: 1,
  data: {
    'drop_off': '',
    'drop_off_date': new Date(),
    'plate_number': '',
    'rego_validation': new Date(),
    'odometer': 0,
    'price': 0,
    'images': [],
    'full_name': '',
    'phone': '',
    'email': '',
    'note': ''
  }
}

export const useSellStore = defineStore({
  id: 'sell',
  state: () => ({...initialData}),
  actions: {
    setData(step, data) {
      this.step = step
      this.data = data
    },
    clearData() {
      this.state = {...initialData}
    },
    getData() {
      return this.data
    }
  },
  persist: true // save in local storage
})
