<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import CarRentItem from '@/components/car/rent-item.vue'
import SelectCustom from '@/components/form/select-custom.vue'

const date = ref(null);
const dateFormat = 'yyyy-MM-dd';
// Showroom
const showrooms = [
  {
    key: 1,
    value: 'Pick-up showroom 1'
  },
  {
    key: 2,
    value: 'Pick-up showroom 2'
  },
  {
    key: 3,
    value: 'Pick-up showroom 3'
  },
]
// Terms
const terms = [
  {
    key: 1,
    value: 'Term 1'
  },
  {
    key: 2,
    value: 'Term 2'
  },
  {
    key: 3,
    value: 'Term 3'
  },
]
// Car for rent data
import carDemo1 from '@/assets/images/img_cardemo_1.png'
import carDemo2 from '@/assets/images/img_cardemo_2.png'
import carDemo3 from '@/assets/images/img_cardemo_3.png'
import carDemo4 from '@/assets/images/img_cardemo_4.png'
import carDemo5 from '@/assets/images/img_cardemo_5.png'
import carDemo6 from '@/assets/images/img_cardemo_6.png'
const carRents = [
  {
    name: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed tests',
    slug: 'car-rent-detail-1',
    img: carDemo1,
    brand: 'Mercedes',
    price: '$270.00 / week',
    new: true
  },
  {
    name: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed tests',
    slug: 'car-rent-detail-1',
    img: carDemo2,
    brand: 'Toyota Camry',
    price: '$250.00 / week',
  },
  {
    name: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed tests',
    slug: 'car-rent-detail-1',
    img: carDemo3,
    brand: 'Mercedes',
    price: '$270.00 / week',
  },
  {
    name: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed tests',
    slug: 'car-rent-detail-1',
    img: carDemo4,
    brand: 'Honda Civic',
    price: '$270.00 / week',
  },
  {
    name: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed tests',
    slug: 'car-rent-detail-1',
    img: carDemo5,
    brand: 'Honda Civic',
    price: '$270.00 / week',
  },
  {
    name: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed tests',
    slug: 'car-rent-detail-1',
    img: carDemo6,
    brand: 'Mercedes',
    price: '$270.00 / week',
  },
]
// Filler Mobile
const isShowFiler = ref(false)
const showFillers = () => {
  isShowFiler.value = true
}
const closeFillers = () => {
  isShowFiler.value = false
}

</script>

<template>
  <div class="page-wrapper mt-4" id="page-rent">
    <div class="container">
      <div class="row">
        <div class="col-xl-4">
          <button @click="showFillers"
            class="btn btn-outline-secondary btn-filter d-xl-none d-flex align-items-center gap-2 px-3 py-2"
            type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g id="ic_filter_active" transform="translate(-28 -149)">
                <g id="ic_filter" transform="translate(28 149)">
                  <path id="Path_9943" data-name="Path 9943" d="M0,0H24V24H0Z" fill="none" />
                  <path id="Path_9944" data-name="Path 9944" d="M10,18h4V16H10ZM3,6V8H21V6Zm3,7H18V11H6Z" fill="#fff" />
                </g>
                <circle id="Ellipse_128" data-name="Ellipse 128" cx="5" cy="5" r="5" transform="translate(42 149)"
                  fill="#ef0505" />
              </g>
            </svg>
            <span class="fw-bold fs-14 text-white">Filter</span>
          </button>
          <div :class="['filters', { 'd-none': !isShowFiler }, 'p-3', 'd-xl-block']">
            <div class="filters-title">
              <span class="fs-18 fw-bold">Filter</span>
              <span @click="closeFillers" class="btn-filter-close d-xl-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x"
                  viewBox="0 0 16 16">
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </span>
            </div>
            <div class="filters-content mt-3">
              <div class="form-check mb-0 d-flex align-items-center gap-2">
                <input class="form-check-input" type="checkbox" value="" id="filter-new">
                <label class="form-check-label d-flex align-items-center gap-1" for="filter-new">
                  <img src="@/assets/icons/new.svg">
                  <span>New</span>
                </label>
              </div>
              <div class="filter-keyword mt-3">
                <div class="input-group">
                  <span class="input-group-text bg-transparent border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#ffffff" class="bi bi-search"
                      viewBox="0 0 16 16">
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </span>
                  <input type="text" class="form-control bg-transparent border-0 fs-14" value="Lorem ipsum">
                  <span class="input-group-text bg-transparent border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#b4b4b4" class="bi bi-x-lg"
                      viewBox="0 0 16 16">
                      <path
                        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div class="filter-showroom mt-4 pt-4 border-top border-4d4d4d">
                <div class="fs-18 fw-bold">Pick-up showroom</div>
                <SelectCustom class="filter-showroom-group mt-3" placeholder="Pick-up location" :items="showrooms">
                  <template #input-icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18.55" viewBox="0 0 15.5 18.55">
                      <path id="Path_5295" data-name="Path 5295"
                        d="M12,21.25a.69.69,0,0,1-.41-.13c-.3-.19-7.34-4.92-7.34-10.67a7.75,7.75,0,1,1,15.5,0c0,5.75-7,10.48-7.34,10.67a.69.69,0,0,1-.41.13Zm0-17a6.23,6.23,0,0,0-6.25,6.2c0,4.21,4.79,8.06,6.25,9.13,1.46-1.07,6.25-4.92,6.25-9.13A6.23,6.23,0,0,0,12,4.25Z"
                        transform="translate(-4.25 -2.7)" fill="#b4b4b4" />
                      <path id="Path_5296" data-name="Path 5296"
                        d="M12,12.75A2.75,2.75,0,1,1,14.75,10,2.75,2.75,0,0,1,12,12.75Zm0-4A1.25,1.25,0,1,0,13.25,10,1.25,1.25,0,0,0,12,8.75Z"
                        transform="translate(-4.25 -2.7)" fill="#b4b4b4" />
                    </svg>
                  </template>
                </SelectCustom>
              </div>
              <div class="filter-rental mt-4 pt-4 border-top border-4d4d4d">
                <div class="fs-18 fw-bold">Rental</div>
                <VueDatePicker v-model="date" :format="dateFormat" :enable-time-picker="false" dark :auto-apply="true"
                  placeholder="Pick-up date" class="mt-3 datepicker">
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
                <SelectCustom class="filter-term-group mt-3" placeholder="Choose a term" :items="terms">
                  <template #input-icon>
                    <svg id="ic_car_17" xmlns="http://www.w3.org/2000/svg" width="17.5" height="16.75"
                        viewBox="0 0 17.54 16.75">
                        <path id="Path_5297" data-name="Path 5297"
                          d="M19.78,9.44l-1.84-5A1.75,1.75,0,0,0,16.3,3.25H7.7A1.75,1.75,0,0,0,6.06,4.4l-1.84,5a1.76,1.76,0,0,0-1,1.56v4.5A1.73,1.73,0,0,0,4,16.94S4,17,4,17v2a1,1,0,0,0,1,1H6a1,1,0,0,0,1-1V17.25H17V19a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V16.94a1.73,1.73,0,0,0,.76-1.44V11A1.76,1.76,0,0,0,19.78,9.44Zm-.53,6.06a.25.25,0,0,1-.25.25H5a.25.25,0,0,1-.25-.25V11A.25.25,0,0,1,5,10.75H19a.25.25,0,0,1,.25.25ZM7.47,4.91a.25.25,0,0,1,.23-.16h8.6a.25.25,0,0,1,.23.16l1.4,3.84H6.07Z"
                          transform="translate(-3.22 -3.25)" fill="#b4b4b4" />
                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="1.5" cy="1.5" r="1.5"
                          transform="translate(3.28 8.5)" fill="#b4b4b4" />
                        <circle id="Ellipse_2" data-name="Ellipse 2" cx="1.5" cy="1.5" r="1.5"
                          transform="translate(11.28 8.5)" fill="#b4b4b4" />
                      </svg>
                  </template>
                </SelectCustom>
              </div>
              <div class="filter-make mt-4 pt-4 border-top border-4d4d4d">
                <div class="fs-18 fw-bold">Make</div>
                <div class="form-check mb-0 d-flex align-items-center gap-2 mt-3">
                  <input class="form-check-input" type="checkbox" value="" id="filter-make-1">
                  <label class="form-check-label" for="filter-make-1">Luxury car</label>
                </div>
                <div class="form-check mb-0 d-flex align-items-center gap-2 mt-3">
                  <input class="form-check-input" type="checkbox" value="" id="filter-make-2">
                  <label class="form-check-label" for="filter-make-2">Mercedes</label>
                </div>
                <div class="form-check mb-0 d-flex align-items-center gap-2 mt-3">
                  <input class="form-check-input" type="checkbox" value="" id="filter-make-3">
                  <label class="form-check-label" for="filter-make-3">Honda Civic</label>
                </div>
                <div class="form-check mb-0 d-flex align-items-center gap-2 mt-3">
                  <input class="form-check-input" type="checkbox" value="" id="filter-make-4">
                  <label class="form-check-label" for="filter-make-4">Toyota Camry</label>
                </div>
                <div class="form-check mb-0 d-flex align-items-center gap-2 mt-3">
                  <input class="form-check-input" type="checkbox" value="" id="filter-make-5">
                  <label class="form-check-label" for="filter-make-5">Lorem ipsum</label>
                </div>
                <div class="mt-3">
                  <a href="#" class="filter-make-all"><i>View all</i></a>
                </div>
              </div>
              <div class="filter-action d-flex align-items-center justify-content-between gap-3 mt-4 pt-4 border-top border-4d4d4d">
                <button class="btn btn-secondary text-nowrap text-white fw-bold fs-14 w-50 pt-2 pb-2">Clear all</button>
                <button
                  class="btn btn-warning text-nowrap text-black fw-bold fs-14 border-0 w-50 pt-2 pb-2">Apply</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 mt-xl-0 mt-3">
          <h1 class="fs-32 fw-bold mb-0">Book a car today!</h1>
          <div class="intro-main fs-18 mt-xl-3 mt-2 text-b4b4b4">Feel the best experience with our rental deals.</div>
          <div class="group row justify-content-center">
            <div v-for="car in carRents" class="col-xl-6 col-lg-4 col-md-6">
              <CarRentItem :data="car" :class="['mt-md-4 mt-3']"/>
            </div>
          </div>
          <div class="text-center mt-4">
            <a class="btn btn-secondary fw-bold fs-14 text-white border-0" href="#">View more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
