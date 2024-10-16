<script setup>
  import { ref } from 'vue'

  import promotion1 from '@/assets/images/home-promotion-1.png'
  import promotion2 from '@/assets/images/home-promotion-2.png'
  import promotion3 from '@/assets/images/home-promotion-3.png'
  import promotion4 from '@/assets/images/home-promotion-1.png'

  const promotions = ref([promotion1, promotion2, promotion3, promotion4, promotion2, promotion3, promotion4, promotion2, promotion3])

</script>
<template>
  <div class="page-wrapper promotions">
    <div class="container">
      <h1 class="fs-32 text-white mb-0">Promotions</h1>
      <div class="row">
        <div class="col-lg-4" v-for="(item, index) in promotions" :key="index">
          <RouterLink :to="{ name: 'promotionDetail', params: { slug: 'promotion-' + (++index) } }">
            <img class="img-fluid w-100" :src="item" alt="Hera" />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>