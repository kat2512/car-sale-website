<script setup>
  import { ref } from 'vue'

  import promotion1 from '@/assets/images/home-promotion-1.png'

  const data = ref({
    description: `
      <p>Hiring a car gives you the freedom to go where you want, when you want. Plus, it means you won’t find yourself awkwardly lugging your bags on and off public transport or out of taxis. Renting a car can also be super cost-effective with the right deal. That’s where we come in. You’ll drive away with a top price and a quality ride. You …</p>

      <h3>Lorem ipsum</h3>

      <p>Hiring a car gives you the freedom to go where you want, when you want. Plus, it means you won’t find yourself awkwardly lugging your bags on and off public transport or out of taxis. Renting a car can also be super cost-effective with the right deal. That’s where we come in. You’ll drive away with a top price and a quality ride. You …</p>

      <div class="text-center">
        <img class="img-fluid" src="${promotion1}" alt="Hera" />  
      </div>

      <h3>Dolor amet asset</h3>

      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
    `,
  })
</script>
<template>
  <div class="page-wrapper promotions-detail">
    <div class="container">
      <div class="back py-0">
        <RouterLink :to="{ name: 'promotions' }" class="text-b4b4b4 fs-14 d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16">
            <path fill="#b4b4b4" fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          </svg>
          Back
        </RouterLink>
      </div>
      <div class="content-detail fs-14 text-ffffff" v-html="data.description"></div>
    </div>
  </div>
</template>