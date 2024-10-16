<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  import { useModalStore } from '@/stores/modal'
  import Input from '@/components/form/input.vue'
  import InputPassword from '@/components/form/input-password.vue'

  const router = useRouter()
  const modelStore = useModalStore()
  const formData = ref({
    'full_name': '',
    'phone': '',
    'email': '',
    'password': '',
    'confirm_password': ''
  })

  const onResend = () => {
    alert('ok')
  }

  const onSubmit = (event) => {
    event.preventDefault();
    
    modelStore.openModal({
      isActionContent: true,
      btnCancle: false,
      title: 'Success',
      content: `
        <div class="signup-helper-text fs-14">Hey there! Almost ready to explore with Hera Trading. Just verify your email by clicking the link we sent to <span class="text-primary">mail@gmail.com</span>.</div>
        <div class="signup-resend text-b4b4b4 fs-14"><span class="text-primary text-decoration-underline">Resend</span> 00:59</div>
      `,
      callbackContent: onResend,
      callback: () => {
        setTimeout(() => {
          modelStore.closeModal()
          router.replace({ path: '/profile' })
        }, 200)
      }
    })
    // Call api
  }
</script>
<template>
  <div class="page-wrapper signup bg-page">
    <div class="container">
      <div class="box-auth-container w-600 mx-auto w-100">
        <div class="back py-0">
          <RouterLink to="/profile" class="text-b4b4b4 fs-14 d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16">
              <path fill="#b4b4b4" fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
            Back
          </RouterLink>
        </div>
        <h1 class="text-white fw-bold fs-32">Create an account</h1>
        <form class="d-block w-100" @submit="onSubmit">
          <div class="form-item">
            <label for="full_name" class="form-label position-relative fs-14 text-b4b4b4">Full name</label>
            <Input
              id="full_name"
              v-model="formData.full_name"
            />
          </div>
          <div class="form-item">
            <label for="phone" class="form-label position-relative fs-14 text-b4b4b4">Phone number</label>
            <Input
              id="phone"
              v-model="formData.phone"
            />
          </div>
          <div class="form-item">
            <label for="email" class="form-label position-relative fs-14 text-b4b4b4">Email</label>
            <Input
              id="email"
              v-model="formData.email"
            />
          </div>
          <div class="helper-text text-fae0a0 fs-14">
            <svg enable-background="new 0 0 16 16" viewBox="0 0 48 48" width="17" height="17" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" fill="#ffdf01" r="21"/><g fill="#000"><path d="m22 22h4v11h-4z"/><circle cx="24" cy="16.5" r="2.5"/></g></svg>
            Password must be between 6 and 50 characters. Please choose a strong password.
          </div>
          <div class="form-item">
            <label for="password" class="form-label position-relative fs-14 text-b4b4b4">Password</label>
            <InputPassword
              id="password"
              v-model="formData.password"
              :isShowPassword="true"
            />
          </div>
          <div class="form-item">
            <label for="confirm_password" class="form-label position-relative fs-14 text-b4b4b4">Confirm password</label>
            <InputPassword
              id="confirm_password"
              v-model="formData.confirm_password"
              :isShowPassword="true"
            />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-secondary fw-bold fs-14 text-black border-0 form-button transition">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>