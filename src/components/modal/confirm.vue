<script setup>
  import { computed, onMounted, watch } from 'vue';
  import { useModalStore } from '@/stores/modal';
  
  const modelStore = useModalStore()
  const btnCancle = computed(() => modelStore.btnCancle)
  const btnOK = computed(() => modelStore.btnOK)
  const textCancle = computed(() => modelStore.textCancle)
  const textOk = computed(() => modelStore.textOk)
  const isVisible = computed(() => modelStore.isVisible)
  const isActionContent = computed(() => modelStore.isActionContent)
  const title = computed(() => modelStore.title)
  const content = computed(() => modelStore.content)

  onMounted(() => {
    watch(isVisible && isActionContent, (newVal) => {
      if (newVal) {
        setTimeout(() => {
          const resendElement = document.querySelector('.signup-resend .text-primary')
          if (resendElement) {
            resendElement.addEventListener('click', modelStore.callbackContent)
          }
        }, 100)
      } else {
        const resendElement = document.querySelector('.signup-resend .text-primary')
        if (resendElement) {
          resendElement.removeEventListener('click', modelStore.callbackContent)
        }
      }
    })
  })

</script>
<template>
  <div v-if="isVisible" class="modal fade show d-block" id="staticBackdrop" data-bs-backdrop="static" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-white fs-18 fw-bold" id="staticBackdropLabel">{{ title }}</h5>
          <button type="button" class="btn-close text-white p-0" data-bs-dismiss="modal" aria-label="Close" @click="modelStore.closeModal">
            <img src="@/assets/icons/ic_close.svg" alt="Icon" />
          </button>
        </div>
        <div class="modal-body fs-14" v-html="content"></div>
        <div class="modal-footer">
          <button v-if="btnCancle" type="button" class="btn btn-secondary btn-cancle p-0 transition fs-14 d-flex align-items-center" data-bs-dismiss="modal" @click="modelStore.closeModal">
            <img src="@/assets/icons/ic_close.svg" alt="Icon" />{{ textCancle }}
          </button>
          <button v-if="btnOK" type="button" class="btn btn-primary btn-yes transition fs-14 d-flex align-items-center" @click="modelStore.callback">
            <img src="@/assets/icons/ic_check.svg" alt="Icon" />{{ textOk }}
          </button>
          
        </div>
      </div>
    </div>
  </div>
  <div v-if="isVisible" class="modal-backdrop fade show"></div>
</template>