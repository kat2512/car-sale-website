<script setup>
import { ref, onMounted, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import 'vue3-carousel/dist/carousel.css'

const currentSlide = ref(0);

const slideTo = (val) => {
    currentSlide.value = val;
}

const props = defineProps({
    gallerys: {
        type: Array,
        required: true,
        default: () => [],
    },
    isNew: {
        type: Boolean,
        required: false,
        default: false
    }
});

const gallerySlide = {
    wrapAround: false,
    itemsToShow: 1,
    snapAlign: 'start'
}

const thumbsSlide = {
    wrapAround: true,
    snapAlign: 'start',
    breakpoints: {
        0: {
            itemsToShow: 3.5
        },
        992: {
            itemsToShow: false
        },
    }
}

const openFancyboxAtIndex = (index) => {
    Fancybox.close();
    Fancybox.show(
        props.gallerys.map((src) => ({ src, type: 'image' })),
        { startIndex: index }
    );
};
</script>

<template>
    <div class="col-lg-6">
        <div id="gallery-car-wrap" class="position-relative">
            <span v-if="isNew" class="new position-absolute">
                <img src="@/assets/icons/new.svg">
            </span>
            <Carousel id="gallery-car" v-bind="gallerySlide" v-model="currentSlide">
                <Slide v-for="(slide, index) in gallerys" :key="index">
                    <div class="carousel__item custom-carousel-item bg-2c2c2f">
                        <img class="img-fluid" :src="slide" alt="" />
                    </div>
                </Slide>
                <template #addons>
                    <Navigation>
                        <template #prev>
                            <svg id="ic_slider_pre" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                viewBox="0 0 32 32">
                                <circle id="Ellipse_88" data-name="Ellipse 88" cx="16" cy="16" r="16" fill="#4d4d4d" />
                                <g id="chevron-right" transform="translate(12.751 11)">
                                    <path id="Path_5305" data-name="Path 5305"
                                        d="M15,17.75a.74.74,0,0,0,.53-.22.75.75,0,0,0,0-1.06L11.06,12l4.47-4.47a.75.75,0,0,0-1.06-1.06l-5,5a.75.75,0,0,0,0,1.06l5,5A.74.74,0,0,0,15,17.75Z"
                                        transform="translate(-9.251 -6.269)" fill="#fff" />
                                </g>
                            </svg>
                        </template>
                        <template #next>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <g id="ic_slider_next" transform="translate(-959 -345)">
                                    <circle id="Ellipse_88" data-name="Ellipse 88" cx="16" cy="16" r="16"
                                        transform="translate(959 345)" fill="#4d4d4d" />
                                    <g id="chevron-right" transform="translate(962.5 349.731)">
                                        <path id="Path_5305" data-name="Path 5305"
                                            d="M10,17.75a.74.74,0,0,1-.53-.22.75.75,0,0,1,0-1.06L13.94,12,9.47,7.53a.75.75,0,0,1,1.06-1.06l5,5a.75.75,0,0,1,0,1.06l-5,5A.74.74,0,0,1,10,17.75Z"
                                            fill="#fff" />
                                    </g>
                                </g>
                            </svg>
                        </template>
                    </Navigation>
                </template>
            </Carousel>
        </div>
    </div>
    <div class="col-lg-6">
        <Carousel id="thumbnails-car" v-bind="thumbsSlide" v-model="currentSlide" ref="carousel">
            <Slide v-for="(slide, index) in gallerys" :key="index" :class="['d-lg-none']">
                <div class="carousel__item custom-carousel-thumb bg-2c2c2f mt-3" @click="slideTo(index)">
                    <img class="img-fluid" :src="slide" alt="" />
                </div>
            </Slide>
            <template #addons>
                <div class="custom-pagination d-none d-lg-flex row">
                    <div class="col-4" v-for="(slide, index) in gallerys" :key="index">
                        <div class="custom-pagination-img bg-2c2c2f"
                            :class="{ 'active': currentSlide === index, 'mt-3': index > 2 }" @click="slideTo(index)"
                            v-if="index <= 5">
                            <img class="img-fluid" :src="slide" alt="" />
                            <div class="custom-pagination-addons" v-if="index === 5 && gallerys.length > 6"
                                @click.stop="openFancyboxAtIndex(5)">
                                <span class=" fs-18 fw-bold">+{{ gallerys.length - 6 }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<style scoped>
#gallery-car-wrap .new {
    top: 10px;
    left: 10px;
    z-index: 1;
}

#gallery-car {
    border-radius: 10px;
    background-color: var(--2c2c2f);
    overflow: hidden;
}

#gallery-car.carousel .custom-carousel-item {
    position: relative;
    width: 100%;
    padding-top: 65.8%;
}

#gallery-car.carousel .custom-carousel-item img {
    position: absolute;
    top: 50%;
    bottom: 50%;
    object-fit: contain;
    transform: translate(-50%, -50%);
}

#thumbnails-car.carousel .custom-carousel-thumb {
    position: relative;
    width: 100%;
    padding-top: 100%;
    border-radius: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin-right: 8px
}

#thumbnails-car.carousel .carousel__slide:last-child .custom-carousel-thumb {
    margin-right: 0;
}

#thumbnails-car.carousel .carousel__slide--active .custom-carousel-thumb::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid var(--ffdf01);
    border-radius: 10px;
}

#thumbnails-car.carousel .custom-carousel-thumb img {
    position: absolute;
    top: 50%;
    bottom: 50%;
    object-fit: contain;
    transform: translate(-50%, -50%);
    max-width: 90%
}

#thumbnails-car.carousel .custom-pagination.row {
    margin-left: -8px;
    margin-right: -8px;
}

#thumbnails-car.carousel .custom-pagination.row .col-4 {
    padding-right: 8px;
    padding-left: 8px;
}

#thumbnails-car.carousel .custom-pagination .custom-pagination-img {
    position: relative;
    width: 100%;
    padding-top: 100%;
    border-radius: 10px;
    cursor: pointer;
}

#thumbnails-car.carousel .custom-pagination .custom-pagination-img img {
    position: absolute;
    top: 50%;
    bottom: 50%;
    object-fit: contain;
    transform: translate(-50%, -50%);
    max-width: 90%;
}

#thumbnails-car.carousel .custom-pagination .custom-pagination-img.active::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid var(--ffdf01);
    border-radius: 10px;
}

#thumbnails-car.carousel .custom-pagination .custom-pagination-addons {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0 0 0 / 30%);
}

#thumbnails-car.carousel .custom-pagination .custom-pagination-addons span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>