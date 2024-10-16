<script setup>
  import { ref } from 'vue'
  import Input from '@/components/form/input.vue'
  import InputPassword from '@/components/form/input-password.vue'
  import IconMail from '@/assets/icons/mail.svg'
  import IconLock from '@/assets/icons/lock.svg'

  const formData = ref({
    'email': '',
    'password': ''
  })

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('formData: ', formData.value)
    // Call api
  }
</script>
<template>
  <div class="page-wrapper signin bg-page">
    <div class="container">
      <div class="box-auth-container w-600 mx-auto w-100">
        <h1 class="text-white fw-bold fs-32">Sign in</h1>
        <p class="sign-up fs-14 text-b4b4b4">New user? <RouterLink to="/signup" class="text-primary">Create an account</RouterLink></p>
        <form class="d-block w-100" @submit="onSubmit">
          <div class="form-item">
            <Input
              id="email"
              v-model="formData.email"
              placeholder="Email"
              :iconLeft="IconMail"
            />
          </div>
          <div class="form-item">
            <InputPassword
              id="password"
              v-model="formData.password"
              placeholder="Password"
              :iconLeft="IconLock"
              :isShowPassword="true"
            />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-secondary fw-bold fs-14 text-black border-0 form-button transition">Sign in</button>
          </div>
        </form>
        <div class="text-center">
          <RouterLink to="/forgot-password" class="fs-14 text-b4b4b4 transition forgot-password-link">Forgot password?</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>