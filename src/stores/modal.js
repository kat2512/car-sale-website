import { defineStore } from 'pinia';

export const useModalStore = defineStore('modalStore', {
  state: () => ({
    isActionContent: false,
    isVisible: false,
    btnCancle: true,
    btnOK: true,
    textCancle: 'Cancle',
    textOk: 'OK',
    title: '',
    content: '',
    callback: () => {},
    callbackContent: () => {}
  }),
  actions: {
    openModal({isActionContent, btnCancle, btnOK, textCancle, textOk, title, content, callback, callbackContent}) {
      this.isActionContent = isActionContent ?? this.isActionContent
      this.btnCancle = btnCancle ?? this.btnCancle
      this.btnOK = btnOK ?? this.btnOK
      this.textCancle = textCancle ?? this.textCancle
      this.textOk = textOk ?? this.textOk
      this.title = title ?? this.title
      this.content = content ?? this.content
      this.isVisible = true
      this.callback = callback ?? this.callback
      this.callbackContent = callbackContent ?? this.callbackContent
    },
    closeModal() {
      this.isActionContent = false
      this.isVisible = false
      this.textCancle = 'Cancle'
      this.textOk = 'OK'
      this.title = ''
      this.content =''
      this.btnCancle = true
      this.btnOK = true
    }
  }
});