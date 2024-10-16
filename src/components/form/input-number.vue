<script setup>
  import { watch } from 'vue'
  import { useCurrencyInput } from 'vue-currency-input'

  const props = defineProps({
    modelValue: {
      type: Number,
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
    iconRight: {
      type: String,
      required: false
    },
    helperText: {
      type: String,
      required: false
    },
    className: {
      type: String,
      required: false
    }
  })

  const { inputRef, formattedValue, setValue } = useCurrencyInput({
    currency: 'USD',
    currencyDisplay: 'hidden',
    hideCurrencySymbolOnFocus: false,
    hideGroupingSeparatorOnFocus: false,
    precision: 0,
    valueRange: { min: 0 },
  })

  watch(
    () => props.modelValue,
    (value) => setValue(value)
  )
</script>
<template>
  <div class="position-relative">
    <input
      type="text"
      :class="['form-control fs-14', {'inp-helper-text': helperText}, className]"
      :id="id"
      :placeholder="placeholder"
      :value="formattedValue"
      autocomplete="false"
      ref="inputRef"
    />
    <span v-if="iconLeft" class="position-absolute icon-left position-absolute top-50 translate-middle-y" role="button">
      <img :src="iconLeft" alt="Icon" />
    </span>
    <span v-if="iconRight" class="position-absolute icon-right position-absolute top-50 translate-middle-y" role="button">
      <img :src="iconRight" alt="Icon" />
    </span>
    <span v-if="helperText" class="icon-right-button position-absolute top-50 translate-middle-y end-0 text-b4b4b4 d-flex align-items-center justify-content-center" role="button">{{ helperText }}</span>
  </div>
</template>