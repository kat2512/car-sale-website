<script setup>
  import { ref } from 'vue'
  import EyeIcon from '@/assets/icons/eye.svg'
  import EyeSlashIcon from '@/assets/icons/eye-slash.svg'

  defineProps({
    modelValue: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Input'
    },
    iconLeft: {
      type: String,
      required: false
    },
    isShowPassword: {
      type: Boolean,
      required: false
    }
  })

  const emit = defineEmits(['update:modelValue'])

  const isShow = ref(false)
  const togglePasswordVisibility = () => {
    isShow.value = !isShow.value
  }
</script>
<template>
  <div class="position-relative">
    <input
      :type="isShow ? 'text' : 'password'"
      class="form-control text-b4b4b4 fs-14"
      :id="id"
      :placeholder="placeholder"
      @input="(e) => emit('update:modelValue', e.target.value)"
      autocomplete="false"
    />
    <span v-if="iconLeft" class="position-absolute icon-left position-absolute top-50 translate-middle-y" role="button">
      <img :src="iconLeft" alt="Icon" />
    </span>
    <span v-if="isShowPassword" class="position-absolute icon-right position-absolute top-50 translate-middle-y" role="button" @click="togglePasswordVisibility">
      <img :src="isShow ? EyeIcon: EyeSlashIcon" alt="Icon" />
    </span>
  </div>
</template>