<script setup>
import { ref } from 'vue';
import Gallery from '@/components/car/gallery.vue'
import CarBuyItem from '@/components/car/buy-item.vue'

// Car for buy data
import carDemo1 from '@/assets/images/img_cardemo_1.png'
import carDemo2 from '@/assets/images/img_cardemo_2.png'
import carDemo3 from '@/assets/images/img_cardemo_3.png'
const carBuys = [
    {
        name: '2018 Toyota Kluger GXL Auto 2WD',
        slug: 'car-buy-detail-1',
        img: carDemo1,
        view: '1,245',
        brand: 'Toyota - Kluger',
        price: '$ 12,890.00',
        transmission: 'Automatic',
        odo: '12,560km',
        rego: '08/2025',
        request: null,
        review: 'Lorem ipsum dolor sit amet, consetetur sat thu',
        soldOut: false,
        new: true
    },
    {
        name: '2018 Toyota Kluger GXL Auto 2WD',
        slug: 'car-buy-detail-1',
        img: carDemo2,
        view: '1,245',
        brand: 'Toyota - Kluger',
        price: '$ 12,890.00',
        transmission: 'Automatic',
        odo: '12,560km',
        rego: '08/2025',
        request: null,
        review: null,
        soldOut: true,
    },
    {
        name: '2018 Toyota Kluger GXL Auto 2WD',
        slug: 'car-buy-detail-1',
        img: carDemo3,
        view: '1,245',
        brand: 'Toyota - Kluger',
        price: '$ 12,890.00',
        transmission: 'Automatic',
        odo: '12,560km',
        rego: '08/2025',
        request: null,
        review: null,
        soldOut: false,
    }
]

// Slide
import carDemo4 from '@/assets/images/img_cardemo_4.png'
import carDemo5 from '@/assets/images/img_cardemo_5.png'
import carDemo6 from '@/assets/images/img_cardemo_6.png'

const gallerys = [carDemo1, carDemo2, carDemo3, carDemo4, carDemo5, carDemo6, carDemo1, carDemo4]

const isViewAll = ref(false);
const isLinkViewAll = ref(true);

const toggleContent = (event) => {
    event.preventDefault();
    isViewAll.value = !isViewAll.value;
    isLinkViewAll.value = false;
};

const isViewAllPara = ref(false);
const isLinkViewAllPara = ref(true);

const toggleContentPara = (event) => {
    event.preventDefault();
    isViewAllPara.value = !isViewAllPara.value;
    isLinkViewAllPara.value = false;
};
</script>

<template>
    <div class="page-wrapper mt-32" id="page-buy-detail">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between mb-lg-4 mb-3">
                <h1 class="fs-24 fw-bold mb-0">Car detail</h1>
                <div class="social-share">
                    <div class="social-share-wrap text-b4b4b4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="17.507" viewBox="0 0 17.5 17.507">
                            <g id="ic_share_17" transform="translate(-3.25 -3.253)">
                                <path id="Path_9840" data-name="Path 9840"
                                    d="M17.5,14.25a3.24,3.24,0,0,0-2.62,1.35L9.59,13a3.205,3.205,0,0,0,0-2l5.29-2.6a3.23,3.23,0,1,0-.63-1.9,2.94,2.94,0,0,0,.05.5L8.83,9.75a3.19,3.19,0,0,0-2.33-1,3.25,3.25,0,1,0,0,6.5,3.19,3.19,0,0,0,2.33-1L14.3,17a2.94,2.94,0,0,0-.05.51,3.25,3.25,0,1,0,3.25-3.25Zm0-9.5A1.75,1.75,0,1,1,15.75,6.5,1.75,1.75,0,0,1,17.5,4.75Zm-11,9A1.75,1.75,0,1,1,8.25,12,1.75,1.75,0,0,1,6.5,13.75Zm11,5.5a1.75,1.75,0,1,1,1.75-1.75A1.75,1.75,0,0,1,17.5,19.25Z"
                                    fill="#b4b4b4" />
                            </g>
                        </svg>
                        Share
                    </div>
                </div>
            </div>
            <div class="row">
                <Gallery :gallerys="gallerys" :isNew="true" />
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="detail-info p-3 bg-2c2c2f mt-4">
                        <h2 class="fs-16 fw-bold text-b4b4b4 mb-0">Mercedes</h2>
                        <div class="fs-14 mt-3 content-area position-relative" :class="{ 'h-auto': isViewAll }">
                            <div class="content">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet.<br>Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy …Lorem ipsum dolor sit amet, consetetur sadipscing
                                elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet.<br>Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy …
                                <br>
                                <br>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet.<br>Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy …Lorem ipsum dolor sit amet, consetetur sadipscing
                                elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                sanctus est Lorem ipsum dolor sit amet.<br>Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy …
                            </div>
                            <a href="#" v-if="isLinkViewAll"
                                class="view-all position-absolute text-fae0a0 d-flex align-items-end justify-content-center pb-1"
                                @click="toggleContent">View all</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="price-info bg-2c2c2f mt-4 p-3">
                        <div class="brand d-flex flex-wrap align-items-center gap-lg-3 gap-1">
                            <span class="bg-black rounded-4 p-2 text-b4b4b4 order-lg-1 order-2">Toyota Camry</span>
                            <span class="car-name text-18 order-lg-2 order-1">2018 Toyota Kluger GXL Auto 2WD</span>
                        </div>
                        <div
                            class="price d-flex align-items-lg-center align-items-end justify-content-between mt-lg-3 mt-0">
                            <span class="fs-32 fw-bold">$12,250.00</span>
                            <RouterLink :to="{ name: 'buyRequest', params: { slug: 'car-buy-detail-1' } }">
                                <a href="#" class="btn btn-warning fs-14 fw-bold bg-ffdf01">Contact now</a>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="para-info bg-2c2c2f mt-3 p-3">
                        <div class="fs-16 fw-bold mb-16">Detail</div>
                        <div class="para-content position-relative" :class="{ 'h-auto': isViewAllPara }">
                            <div class="para-title fw-bold bg-4d4d4d p-3">Production details</div>
                            <div class="para-item px-3">
                                <div class="py-3 d-flex justify-content-between border-bottom border-4d4d4d">
                                    <span>Make</span>
                                    <span>Toyota</span>
                                </div>
                            </div>
                            <div class="para-item px-3">
                                <div class="py-3 d-flex justify-content-between border-bottom border-4d4d4d">
                                    <span>Model</span>
                                    <span>Kluger</span>
                                </div>
                            </div>
                            <div class="para-item px-3">
                                <div class="py-3 d-flex justify-content-between border-bottom border-4d4d4d">
                                    <span>Build</span>
                                    <span>2003</span>
                                </div>
                            </div>
                            <div class="para-item px-3">
                                <div class="py-3 d-flex justify-content-between border-bottom border-4d4d4d">
                                    <span>Odo</span>
                                    <span>2,000km</span>
                                </div>
                            </div>
                            <a href="#" v-if="isLinkViewAllPara"
                                class="view-all position-absolute text-fae0a0 d-flex align-items-end justify-content-center pb-1"
                                @click="toggleContentPara">View all</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="related-car mt-32">
                <h3 class="mb-0 text-b4b4b4 ds-24 fw-bold">You may also like</h3>
                <div class="group row justify-content-center">
                    <div v-for="car in carBuys" class="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <CarBuyItem :data="car" :class="['mt-3']"/>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <a class="btn btn-secondary fw-bold fs-14 text-white border-0" href="#">View more</a>
                </div>
            </div>
        </div>
    </div>
</template>