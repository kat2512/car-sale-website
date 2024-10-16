<script setup>
  import { ref } from 'vue'

  import PostItem from '@/components/faqs/item.vue'

  const faqs = ref([
    {
      id: 1,
      name: 'How to rent a car in Australia?',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum justo nec arcu laoreet convallis. Aenean pharetra tempus sollicitudin. Curabitur ac dui in enim aliquam pulvinar.',
      slug: 'faqs-1'
    },
    {
      id: 2,
      name: 'Lorem ipsum dolor sit amet',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum justo nec arcu laoreet convallis. Aenean pharetra tempus sollicitudin. Curabitur ac dui in enim aliquam pulvinar. Vestibulum commodo suscipit faucibus.',
      slug: 'faqs-2'
    },
    {
      id: 3,
      name: 'Lorem ipsum dolor sit amet',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum justo nec arcu laoreet convallis. Aenean pharetra tempus sollicitudin. Curabitur ac dui in enim aliquam pulvinar. Vestibulum commodo suscipit faucibus.',
      slug: 'faqs-3'
    },
    {
      id: 4,
      name: 'Curabuitur ac dui in enim aliquam pluviar',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum justo nec arcu laoreet convallis. Aenean pharetra tempus sollicitudin. Curabitur ac dui in enim aliquam pulvinar.',
      slug: 'faqs-4'
    },
    {
      id: 5,
      name: 'Curabuitur ac dui in enim aliquam pluviar',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum justo nec arcu laoreet convallis. Aenean pharetra tempus sollicitudin. Curabitur ac dui in enim aliquam pulvinar. Vestibulum commodo suscipit faucibus. Vivamus id quam ac nisi tempus.',
      slug: 'faqs-5'
    },
    {
      id: 6,
      name: 'Curabuitur ac dui in enim aliquam pluviar',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum justo nec arcu laoreet convallis. Aenean pharetra tempus sollicitudin. Curabitur ac dui in enim aliquam pulvinar.',
      slug: 'faqs-6'
    },
    {
      id: 7,
      name: 'Curabitur ac dui in enim aliquam pulvinar. Vestibulum commodo suscipit faucibus.',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum justo nec arcu laoreet convallis. Aenean pharetra tempus sollicitudin. Curabitur ac dui in enim aliquam pulvinar. Vestibulum commodo suscipit faucibus. Vivamus id quam ac nisi tempus.',
      slug: 'faqs-7'
    },
    {
      id: 8,
      name: 'Dolor asit amet socn',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum justo nec arcu laoreet convallis. Aenean pharetra tempus sollicitudin. Curabitur ac dui in enim aliquam pulvinar. Vestibulum commodo suscipit faucibus.',
      slug: 'faqs-8'
    },
    {
      id: 9,
      name: 'Integer est ante, viverra vitae tortor ut, vestibulum placerat augue.',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum justo nec arcu laoreet convallis. Aenean pharetra tempus sollicitudin. Curabitur ac dui in enim aliquam pulvinar. Vestibulum commodo suscipit faucibus. Vivamus id quam ac nisi tempus.',
      slug: 'faqs-9'
    }
  ])

  const keyword = ref(null)
  const onSearch = (event) => {
    event.preventDefault();
    // Call api
  }
</script>
<template>
  <div class="page-wrapper faqs bg-page">
    <div class="container">
      <div class="section-heading text-center">
        <h1 class="text-white">Frequently Asked Questions</h1>
        <form class="form-search position-relative w-50 mx-auto d-block" @submit="onSearch">
          <span @click="onSearch" role="button" class="icon-search position-absolute d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20" height="20">
              <path fill="#ffffff" d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/>
            </svg>
          </span>
          <input v-model="keyword" class="rounded w-100 h-100 text-b4b4b4 fs-14" type="text" placeholder="Search..." />
        </form>
      </div>
      <div class="section-body">
        <div class="row">
          <div class="col-lg-4" v-for="item in faqs" :key="item">
            <PostItem :data="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
