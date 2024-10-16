<script setup>
import { ref, watch } from 'vue';
const props = defineProps({
  modelValue: {
    type: [String, Object, null],
    required: false
  },
  id: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  placeholder: {
    type: String,
    required: false,
    default: 'Choose...'
  },
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})

const emits = defineEmits(['update:modelValue'])
const isDropdownVisible = ref(false);
const selectedValue = ref('');
const selectedKey = ref('');

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const hideDropdown = () => {
  isDropdownVisible.value = false;
};

const selectItem = (item) => {
  selectedValue.value = item.value;
  selectedKey.value = item.key;
  emits('update:modelValue', { key: selectedKey.value, value: selectedValue.value })
  hideDropdown();
};

watch(() => props.modelValue, (newValue) => {
  selectedKey.value = newValue.key
  selectedValue.value = newValue.value
})

</script>
<template>
  <div class="position-relative">
    <div class="input-group">
      <span class="input-group-text bg-transparent border-0" v-if="$slots['input-icon']">
        <slot name="input-icon"></slot>
      </span>
      <input type="text" class="form-control bg-transparent border-0 fs-14" :class="{'ms-3': !$slots['input-icon']}" :placeholder="props.placeholder"
        v-model="selectedValue" @click="toggleDropdown" @blur="hideDropdown" readonly>
      <span class="input-group-text bg-transparent border-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" fill="#b4b4b4" class="bi bi-chevron-down"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
        </svg>
      </span>
    </div>
    <ul class="select-custom" :class="{ 'd-none': !isDropdownVisible }">
      <li v-for="item in props.items" :data-key="item.key" @mousedown.prevent="selectItem(item)">{{ item.value }}</li>
    </ul>
    <select class="d-none" :name="props.name" :id="props.id" v-model="selectedKey">
      <option></option>
      <option v-for="item in props.items" :value="item.key">{{ item.value }}</option>
    </select>
  </div>
</template>
<style scoped>
.select-custom {
  background-color: var(--2c2c2f);
  border-radius: 5px;
  position: absolute;
  left: 0;
  right: 0;
  top: 49px;
  z-index: 9;
}

.select-custom li {
  padding: 13px 16px;
  cursor: pointer;
}

.select-custom li:hover {
  background-color: var(--4d4d4d);
  border-radius: 5px;
}
</style>