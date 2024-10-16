<script setup>
  import { useRouter } from 'vue-router'
  import { onMounted, ref, watch } from 'vue'
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';

  import SelectCustom from '@/components/form/select-custom.vue'
  import { useSellStore } from '@/stores/sell'
  import Input from '@/components/form/input.vue'
  import InputNumber from '@/components/form/input-number.vue'
  import ImageDemo1 from '@/assets/images/img_cardemo_1.png'

  const router = useRouter()
  const sellStore = useSellStore()

  const dropOffs = ref([
    {
      key: 1,
      value: '1 Shop 2 / 376 Princes Highway, Rockdale, NSW, Australia, New South Wales'
    },
    {
      key: 2,
      value: '2 Shop 2 / 376 Princes Highway, Rockdale, NSW, Australia, New South Wales'
    },
    {
      key: 3,
      value: '3 Shop 2 / 376 Princes Highway, Rockdale, NSW, Australia, New South Wales'
    }
  ])

  const formData = ref({
    'drop_off': dropOffs.value[0],
    'drop_off_date': new Date(),
    'plate_number': 'AO-31-BE',
    'rego_validation': new Date(),
    'odometer': 12000,
    'price': 34000,
    'images': [
      ImageDemo1,
      ImageDemo1,
      ImageDemo1
    ]
  })

  const removeImage = (index) => formData.value.images.splice(index, 1)
  
  const onSubmit = (event) => {
    event.preventDefault()
    sellStore.setData(2, formData.value)
    router.push('/sell/contact-information')
  }

  const onFileChange = (event) => {
    const files = event.target.files
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        formData.value.images.push(e.target.result);
      }
      reader.readAsDataURL(file);
    }

    // Remove image when upload (cache image)
    event.target.value  = ''
  }

  onMounted(() => {
    sellStore.setData(2, formData.value)
  })
</script>
<template>
  <div class="page-wrapper sell">
    <div class="container">
      <div class="position-relative sell-heading mx-auto w-100">
        <div class="back py-0 position-absolute top-50 start-0 translate-middle-y">
          <RouterLink to="/signin" class="text-b4b4b4 fs-14 d-flex">
            <img class="me-1" src="@/assets/icons/back.svg" lat="Icon" />
            Back
          </RouterLink>
        </div>
        <h1 class="text-center texxt-white mb-0 fs-32 fw-bold">Sell your car</h1>
      </div>
      <div class="sell-body box-auth-container mx-auto w-100 pt-0">
        <form class="d-block w-100" @submit="onSubmit">
          <div class="form-item">
            <label for="drop_off" class="form-label position-relative fs-14 text-b4b4b4">Drop-off</label>
            <SelectCustom v-model="formData.drop_off" class="ms-0" :items="dropOffs"></SelectCustom>
          </div>
          <div class="form-item">
            <label for="drop_off_date" class="form-label position-relative fs-14 text-b4b4b4">Drop-off date</label>
            <VueDatePicker
              id="drop_off_date"
              v-model="formData.drop_off_date"
              :enable-time-picker="false"
              :auto-select="true"
              auto-apply
              format="dd/MM/yyyy"
              placeholder="DD/MM/YYYY"
            >
              <template #input-icon>
                <svg id="event_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24">
                  <path id="Path_5245" data-name="Path 5245" d="M0,0H24V24H0Z" fill="none" />
                  <path id="Path_5246" data-name="Path 5246"
                    d="M19,4H18V2H16V4H8V2H6V4H5A1.991,1.991,0,0,0,3.01,6L3,20a2,2,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,19,4Zm0,16H5V10H19ZM19,8H5V6H19Z"
                    fill="#b4b4b4" />
                </svg>
              </template>
            </VueDatePicker>
          </div>
          <div class="form-item">
            <label for="plate_number" class="form-label position-relative fs-14 text-b4b4b4">Plate number</label>
            <Input
              id="plate_number"
              v-model="formData.plate_number"
              className="text-white"
            />
          </div>
          <div class="form-item">
            <label for="rego_validation" class="form-label position-relative fs-14 text-b4b4b4">Rego validation</label>
            <VueDatePicker
              id="rego_validation"
              v-model="formData.rego_validation"
              :enable-time-picker="false"
              :auto-select="true"
              auto-apply
              format="MM/yyyy"
              placeholder="MM/YYYY"
            >
              <template #input-icon>
                <svg id="event_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24">
                  <path id="Path_5245" data-name="Path 5245" d="M0,0H24V24H0Z" fill="none" />
                  <path id="Path_5246" data-name="Path 5246"
                    d="M19,4H18V2H16V4H8V2H6V4H5A1.991,1.991,0,0,0,3.01,6L3,20a2,2,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,19,4Zm0,16H5V10H19ZM19,8H5V6H19Z"
                    fill="#b4b4b4" />
                </svg>
              </template>
            </VueDatePicker>
          </div>
          <div class="form-item">
            <label for="odometer" class="form-label position-relative fs-14 text-b4b4b4">Odometer</label>
            <InputNumber
              id="odometer"
              v-model="formData.odometer"
              helperText="km"
              className="text-b4b4b4"
            />
          </div>
          <div class="form-item">
            <label for="price" class="form-label position-relative fs-14 text-b4b4b4">Price</label>
            <InputNumber
              id="price"
              v-model="formData.price"
              helperText="$"
              className="text-b4b4b4"
            />
          </div>
          <div class="form-item">
            <label for="price" class="no-required form-label form-label-img position-relative fs-14 text-b4b4b4">Car’s images</label>
            <p>- Accepted: PNG, JPG, JPEG</p>
            <div class="form-images">
              <div class="row">
                <div class="img-item p-0 d-flex align-items-center justify-content-center position-relative overflow-hidden cursor-pointer" v-for="(item, index) in formData.images" :key="item">
                  <img class="img-fluid w-100 object-fit-contain transition" :src="item" alt="" />
                  <span class="remove-btn position-absolute rounded-circle d-flex align-items-center justify-content-center" role="button" @click="removeImage(index)">
                    <img class="img-fluid w-100 object-fit-contain" src="@/assets/icons/ic_close.svg" alt="Close" />
                  </span>
                </div>
                <div class="img-item img-item-upload d-flex align-items-center justify-content-center position-relative" role="button">
                  <label class="no-required" for="file-upload">
                    <input id="file-upload" class="opacity-0 position-absolute w-100 h-100 start-0 top-0 cursor-pointer" accept="image/png, image/jpeg" type="file" @change="onFileChange" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35.778" viewBox="0 0 40 35.778">
                      <g id="ic_addimage_38" transform="translate(1 1)">
                        <path id="Path_5295" data-name="Path 5295" d="M41,18.778V33.556a4.222,4.222,0,0,1-4.222,4.222H7.222A4.222,4.222,0,0,1,3,33.556v-19a4.222,4.222,0,0,1,4.222-4.222h3.167a4.222,4.222,0,0,0,3.378-1.689l2.217-2.956A4.222,4.222,0,0,1,19.361,4h5.278" transform="translate(-3 -4)" fill="none" stroke="#b4b4b4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        <path id="Path_5296" data-name="Path 5296" d="M21.278,4V9.278m0,5.278V9.278m0,0H16m5.278,0h5.278" transform="translate(11.444 -4)" fill="none" stroke="#b4b4b4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        <circle id="Ellipse_85" data-name="Ellipse 85" cx="8.444" cy="8.444" r="8.444" transform="translate(10.556 10.556)" fill="none" stroke="#b4b4b4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                      </g>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center text-lg-start">
            <button type="submit" class="btn btn-secondary fw-bold fs-14 text-black border-0 form-button transition">Continue</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>