<script setup>
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'

  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide } from 'vue3-carousel'

  import { useModalStore } from '@/stores/modal'
  import { useSellStore } from '@/stores/sell'
  import { formatNumber, convertDateByFormat } from '@/utils/helper'
  import Input from '@/components/form/input.vue'
  import Textarea from '@/components/form/textarea.vue'

  const router = useRouter()
  const modelStore = useModalStore()
  const sellStore = useSellStore()
  const formData = ref({
    'drop_off': {
      key: 1,
      value: '1 Shop 2 / 376 Princes Highway, Rockdale, NSW, Australia, New South Wales'
    },
    'drop_off_date': new Date(),
    'plate_number': 'AO-31-BE',
    'rego_validation': new Date(),
    'odometer': 12000,
    'price': 34000,
    'images': [],
    'full_name': '',
    'phone': '',
    'email': '',
    'note': '',
    'agree': false
  })
  
  const onSubmit = (event) => {
    event.preventDefault()

    if (!formData.value.agree) return

    modelStore.openModal({
      btnCancle: false,
      title: 'Success',
      content: 'We’ve received your car selling request. A member of our team will reach out to you to assess your car and provide a quote.',
      callback: () => {
        setTimeout(() => {
          modelStore.closeModal()
          router.replace({ path: '/profile' })
        }, 200)
      }
    })
  }

  const configSlide = ref({
    wrapAround: false,
    loop: false,
    nextButton: false,
    prevButton: false,
    breakpoints: {
      0: {
        itemsToShow: 2.5,
        snapAlign: 'start',
      },
      992: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
      1200: {
        itemsToShow: 6,
        snapAlign: 'start',
      },
    },
  })

  onMounted(() => {
    formData.value = sellStore.getData()
  })
</script>

<template>
  <div class="page-wrapper sell sell-contact-information">
    <div class="container">
      <div class="position-relative sell-heading mx-auto w-100">
        <div class="back py-0 position-absolute top-50 start-0 translate-middle-y">
          <RouterLink to="/sell" class="text-b4b4b4 fs-14 d-flex">
            <img class="me-1" src="@/assets/icons/back.svg" lat="Icon" />
            Back
          </RouterLink>
        </div>
        <h1 class="text-center texxt-white mb-0 fs-32 fw-bold">Contact information</h1>
      </div>
      <div class="sell-body box-auth-container mx-auto w-100">
        <div class="sell-box-info">
          <ul>
            <li class="d-flex justify-content-between align-items-center fs-14 text-white">
              <div class="flex-shrink-0">Plate number</div>
              <div class="text-end">{{ formData.plate_number }}</div>
            </li>
            <li class="d-flex justify-content-between fs-14 text-white">
              <div class="flex-shrink-0">Odometer</div>
              <div class="text-end">{{ formatNumber(formData.odometer) }}km</div>
            </li>
            <li class="d-flex justify-content-between fs-14 text-white">
              <div class="flex-shrink-0">Rego validation</div>
              <div class="text-end">{{ convertDateByFormat(formData.rego_validation, 'MM/yyyy') }}</div>
            </li>
            <li class="d-flex justify-content-between fs-14 text-white">
              <div class="flex-shrink-0">Price</div>
              <div class="text-end">$ {{ formatNumber(formData.price) }}</div>
            </li>
            <li class="line"></li>
            <li class="d-flex justify-content-between fs-14 text-white">
              <div class="flex-shrink-0">Drop-off date</div>
              <div class="text-end">{{ convertDateByFormat(formData.drop_off_date, 'dd/MM/yyyy HH:ii') }}</div>
            </li>
            <li class="d-flex justify-content-between fs-14 text-white">
              <div class="flex-shrink-0">Drop-off</div>
              <div class="text-end">{{ formData.drop_off.value }}</div>
            </li>
          </ul>
        </div>
        <div class="sell-box-info sell-box-info-slide">
          <div class="no-required mb-0 fs-14 text-b4b4b4">Car’s images ({{ formData.images.length }})</div>
          <Carousel v-bind="configSlide" :loop="false">
            <Slide v-for="(item, index) in formData.images" :key="index">
              <div class="carousel__item w-100">
                <img class="img-fluid w-100 object-fit-contain transition" :src="item" alt="" />
              </div>
            </Slide>
          </Carousel>
        </div>
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
              placeholder="mail@example.com"
            />
          </div>
          <div class="form-item">
            <label for="note" class="no-required form-label position-relative fs-14 text-b4b4b4">Note</label>
            <Textarea
              id="note"
              v-model="formData.note"
              placeholder="Write a message here..."
            />
          </div>
          <div class="license fs-14 text-white">
            <div class="form-check mb-0 ps-0">
              <input class="form-check-input float-none ms-0 me-1" type="checkbox" v-model="formData.agree" id="agree">
              <label class="form-check-label d-inline user-select-none" for="agree">
                Please note that upon approval of your sale request, you will be required to present <span class="fw-bold text-primary">your rego paper and driver’s license</span> to confirm ownership of the vehicle at the drop-off showroom.
              </label>
            </div>
          </div>
          <div class="text-center text-lg-start">
            <button type="submit" class="btn btn-secondary fw-bold fs-14 text-black border-0 form-button transition">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>