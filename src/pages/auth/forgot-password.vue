<script setup>
  import { ref } from 'vue'
  import Input from '@/components/form/input.vue'
  import IconMail from '@/assets/icons/mail.svg'

  const formData = ref({
    'email': ''
  })

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('formData: ', formData.value)
    // Call api
  }
</script>
<template>
  <div class="page-wrapper forgot-password bg-page">
    <div class="container">
      <div class="box-auth-container w-600 mx-auto w-100">
        <div class="back py-0">
          <RouterLink to="/signin" class="text-b4b4b4 fs-14 d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16">
              <path fill="#b4b4b4" fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
            Back
          </RouterLink>
        </div>
        <h1 class="text-white fw-bold fs-32">Forgot password</h1>
        <p class="forgot-password-text fs-14 text-white">Enter the email address associated with your account and we’ll send you a new password.</p>
        <form class="d-block w-100" @submit="onSubmit" autocomplete="false">
          <div class="form-item">
            <label for="email" class="form-label position-relative fs-14 text-b4b4b4">Email</label>
            <Input
              id="email"
              v-model="formData.email"
              placeholder="mail@gmail.com"
            />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-secondary fw-bold fs-14 text-black border-0 form-button transition">Send new password</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>