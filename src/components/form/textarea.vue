<script setup>
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
    }
  })

  const emit = defineEmits(['update:modelValue'])
</script>
<template>
  <div class="position-relative">
    <textarea
      type="text"
      class="form-control text-b4b4b4 fs-14 w-100"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="(e) => emit('update:modelValue', e.target.value)"
      autocomplete="false"
    ></textarea>
  </div>
</template>