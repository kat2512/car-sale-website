<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true,
        default: () => ({
            name: {
                type: String,
                required: true
            },
            slug: {
                type: String,
                required: true
            },
            img: {
                type: String,
                required: true
            },
            view: {
                type: String,
                required: true
            },
            brand: {
                type: String,
                required: true
            },
            price: {
                type: String,
                required: true
            },
            transmission: {
                type: String,
                required: true
            },
            odo: {
                type: String,
                required: true
            },
            rego: {
                type: String,
                required: true
            },
            request: {
                type: String,
                default: null,
                required: false
            },
            review: {
                type: String,
                default: null,
                required: false
            },
            soldOut: {
                type: Boolean,
                default: false,
                required: false
            },
            new: {
                type: Boolean,
                default: false,
                required: false
            },
        })
    },
});
</script>

<template>
    <div class="car-buy w-100">
        <span v-if="props.data.new" class="new position-absolute">
            <img src="@/assets/icons/new.svg">
        </span>
        <RouterLink :to="{ name: 'buyDetail', params: { slug: props.data.slug } }">
            <div class="car-img px-3 pt-3 position-relative">
                <div class="bg-img-contain ratio-16-9" :style="{ backgroundImage: `url(${props.data.img})` }">
                    <div class="car-view position-absolute bottom-0 end-0">
                        <span class="d-flex align-items-center text-b4b4b4 px-2 py-1 gap-1 rounded-4 bg-4d4d4d">
                            <img src="@/assets/icons/eye-xs.svg" alt="">
                            <span class="fs-10">{{ props.data.view }}</span>
                        </span>
                    </div>
                </div>
                <div v-if="props.data.soldOut" class="car-sold-out">
                    <img src="@/assets/icons/ic_soldout_list.png" alt="">
                </div>
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'buyDetail', params: { slug: props.data.slug } }">
            <div class="text mt-2 px-3 pb-3">
                <div class="text-top d-flex align-items-center justify-content-between">
                    <span class="text-brand text-white fs-12 bg-black text-center opacity-75">{{ props.data.brand
                        }}</span>
                    <span class="text-price text-white fs-16 fw-bold">{{ props.data.price }}</span>
                </div>
                <div class="text-middle">
                    <div class="text-name text-b4b4b4 fw-bold line-1">{{ props.data.name }}</div>
                    <div
                        class="text-infomation d-flex align-items-center justify-content-between text-b4b4b4 gap-3 line-1">
                        <div class="transmission d-flex align-items-center gap-1">
                            <img src="@/assets/icons/transmission-xs.svg">
                            <span>{{ props.data.transmission }}</span>
                        </div>
                        <div class="odo d-flex align-items-center gap-1">
                            <img src="@/assets/icons/odo-xs.svg">
                            <span>{{ props.data.odo }}</span>
                        </div>
                        <div class="rego d-flex align-items-center gap-1">
                            <span>Rego</span>
                            <span>{{ props.data.rego }}</span>
                        </div>
                    </div>
                </div>
                <div v-if="props.data.review !== null && !props.data.soldOut"
                    class="d-flex align-items-center justify-content-between mt-3">
                    <div class="btn-label d-flex align-items-center gap-2 w-100 bg-black">
                        <div class="d-flex align-items-center text-primary">
                            <span>4</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </div>
                        <span class="text-b4b4b4 line-1">{{ props.data.review }}</span>
                    </div>
                </div>
                <div v-if="props.data.review === null && props.data.request !== null && !props.data.soldOut"
                    class="d-flex align-items-center justify-content-between mt-3">
                    <div class="btn-label d-flex align-items-center text-fae0a0 gap-2 w-100 bg-42381e">
                        <img src="@/assets/icons/check_circle-xs.svg">
                        <span>{{ props.data.request }}</span>
                    </div>
                </div>
                <div v-if="props.data.review === null && props.data.request === null && !props.data.soldOut"
                    class="text-bottom d-flex align-items-center justify-content-between mt-3 gap-3">
                    <a class="btn btn-outline-warning text-nowrap text-primary fw-bold fs-14 w-50">View detail</a>
                    <a class="btn btn-warning text-nowrap text-black fw-bold fs-14 border-0 w-50">Contact now</a>
                </div>
            </div>
        </RouterLink>
    </div>
</template>