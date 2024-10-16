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
            brand: {
                type: String,
                required: true
            },
            price: {
                type: String,
                required: true
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
    <div class="car-rent p-3">
        <span v-if="props.data.new" class="new position-absolute">
            <img src="@/assets/icons/new.svg">
        </span>
        <RouterLink :to="{ name: 'rentDetail', params: { slug: props.data.slug } }">
            <div class="bg-img-contain ratio-16-9" :style="{ backgroundImage: `url(${props.data.img})` }">
            </div>
        </RouterLink>
        <RouterLink :to="{ name: 'rentDetail', params: { slug: props.data.slug } }">
            <div class="text">
                <div class="text-top d-flex align-items-center justify-content-between">
                    <span class="text-brand text-white fs-12 bg-black text-center opacity-75">{{ props.data.brand
                        }}</span>
                    <span class="text-price text-white fs-16 fw-bold">{{ props.data.price }}</span>
                </div>
                <div class="text-bottom d-flex align-items-center justify-content-between gap-3 mt-3">
                    <div class="text-intro text-white opacity-75 line-2">{{ props.data.name }}</div>
                    <a class="btn btn-warning text-nowrap text-black fw-bold fs-14 border-0">Book now</a>
                </div>
            </div>
        </RouterLink>
    </div>
</template>