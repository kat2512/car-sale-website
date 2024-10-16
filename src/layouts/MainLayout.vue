<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/views/header/index.vue'
import Footer from '@/views/footer/index.vue'
</script>

<template>
  <Header />
  <main id="main">
    <RouterView />
  </main>
  <Footer />
</template>