<script setup>
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import Input from '@/components/form/input.vue'
import Textarea from '@/components/form/textarea.vue'

const date = ref(null);
const dateFormat = 'dd/MM/yyyy';

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
    'referrer_information': '',
    'agree': false
})
import carDemo2 from '@/assets/images/img_cardemo_2.png'
</script>

<template>
    <div class="page-wrapper mt-4 pb-5" id="page-buy-request">
        <div class="container">
            <div class="text-center position-relative">
                <a href="/"
                    class="text-b4b4b4 d-flex align-items-center gap-1 position-absolute top-50 start-0 translate-middle-y">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                    </svg>
                    <span>Back</span>
                </a>
                <h1 class="mb-0 fw-bold fs-32">Contact</h1>
            </div>
            <div class="form-request border rounded-10 border-4d4d4d p-3 mt-4">
                <div class="d-flex gap-2">
                    <div class="flex-shrink-0 car-img border border-4d4d4d bg-2c2c2f p-1">
                        <div class="bg-img-contain ratio-1-1" :style="{ backgroundImage: `url(${carDemo2})` }"></div>
                    </div>
                    <div class="flex-grow-1">
                        <h2 class="fs-14 mb-0 fw-bold">2018 Toyota Kluger GXL Auto 2WD</h2>
                        <div class="d-lg-flex align-items-center gap-2 mt-1">
                            <span class="text-b4b4b4">Plate number:</span>
                            <span class="text-f2f2f2">AO-38-B8</span>
                        </div>
                        <div class="d-lg-flex align-items-center gap-2 mt-1">
                            <span class="text-b4b4b4">Price:</span>
                            <span class="text-f2f2f2">$ 12,890.00</span>
                        </div>
                        <div class="d-lg-flex gap-2 mt-1">
                            <span class="text-b4b4b4">Showroom:</span>
                            <span class="text-f2f2f2">Showroom: Shop 2 / 376 Princes Highway, Rockdale, NSW, Australia, New South Wales</span>
                        </div>
                    </div>
                </div>
                <form class="border-top border-4d4d4d pt-4 mt-3" action="">
                    <div class="form-item mb-3">
                        <label for="full_name" class="form-label position-relative fs-14 text-b4b4b4">Full name</label>
                        <Input id="full_name" v-model="formData.full_name" />
                    </div>
                    <div class="form-item mb-3">
                        <label for="phone" class="form-label position-relative fs-14 text-b4b4b4">Phone number</label>
                        <Input id="phone" v-model="formData.phone" />
                    </div>
                    <div class="form-item mb-3">
                        <label for="email" class="form-label position-relative fs-14 text-b4b4b4">Email</label>
                        <Input id="email" v-model="formData.email" placeholder="mail@example.com" />
                    </div>
                    <div class="form-item mb-3">
                        <label for="preferred_date"
                            class="no-required form-label position-relative fs-14 text-b4b4b4">Preferred date</label>
                        <VueDatePicker v-model="date" :format="dateFormat" :enable-time-picker="false" dark
                            :auto-apply="true" placeholder="Preferred date" class="datepicker fs-14">
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
                    <div class="form-item mb-3">
                        <label for="note"
                            class="no-required form-label position-relative fs-14 text-b4b4b4">Note</label>
                        <Textarea id="note" v-model="formData.note" placeholder="Write a message here..." />
                    </div>
                    <div class="form-item mb-3">
                        <label for="referrer_information"
                            class="no-required form-label position-relative fs-14 text-b4b4b4">Referrer
                            information (if
                            any)</label>
                        <Input id="referrer_information" v-model="formData.referrer_information"
                            placeholder="Enter referrer’s email" />
                    </div>
                    <button class="btn btn-warning fs-14 fw-bold bg-ffdf01">Send</button>
                </form>
            </div>
        </div>
    </div>
</template>