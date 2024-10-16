<script setup>
  import { ref } from 'vue'
  import InputPassword from '@/components/form/input-password.vue'

  const formData = ref({
    'current_password': '',
    'new_password': '',
    'confirm_password': ''
  })
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('formData: ', formData.value)
    // Call api
  }
</script>

<template>
  <div class="page-wrapper change-password bg-page">
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
        <h1 class="text-white fw-bold fs-32">Change password</h1>
        <div class="helper-text text-fae0a0 fs-14">
          <svg enable-background="new 0 0 16 16" viewBox="0 0 48 48" width="17" height="17" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" fill="#ffdf01" r="21"/><g fill="#000"><path d="m22 22h4v11h-4z"/><circle cx="24" cy="16.5" r="2.5"/></g></svg>
          Password must be between 6 and 50 characters. Please choose a strong password.
        </div>
        <form class="d-block w-100" @submit="onSubmit">
          <div class="form-item">
            <label for="current_password" class="form-label position-relative fs-14 text-b4b4b4">Current password</label>
            <InputPassword
              id="current_password"
              v-model="formData.current_password"
              :isShowPassword="true"
            />
          </div>
          <div class="form-item">
            <label for="new_password" class="form-label position-relative fs-14 text-b4b4b4">New password</label>
            <InputPassword
              id="new_password"
              v-model="formData.new_password"
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
            <button type="submit" class="btn btn-secondary fw-bold fs-14 text-black border-0 form-button transition">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>