import { defineStore } from 'pinia';

const initialData = {
  key: '',
}

export const useExampleStore = defineStore({
  id: 'example',
  state: () => ({...initialData}),
  actions: {
    async setToken(token) {
      this.key = token;
    },
    async clearToken() {
      this.key = '';
    },
  },
  persist: true // save in local storage
})
