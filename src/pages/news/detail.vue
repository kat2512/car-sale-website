<script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'

  import PostItem from '@/components/posts/item.vue'
  import newsDemo1 from '@/assets/images/img_demo_news_1.png'

  const router = useRoute();
  console.log(router.params.slug)

  const data = ref({
    name: 'Best car rental deals and discounts for cheap car hire',
    description: `
      <p>Hiring a car gives you the freedom to go where you want, when you want. Plus, it means you won’t find yourself awkwardly lugging your bags on and off public transport or out of taxis. Renting a car can also be super cost-effective with the right deal. That’s where we come in. You’ll drive away with a top price and a quality ride. You …</p>

      <h3>Lorem ipsum</h3>

      <p>Hiring a car gives you the freedom to go where you want, when you want. Plus, it means you won’t find yourself awkwardly lugging your bags on and off public transport or out of taxis. Renting a car can also be super cost-effective with the right deal. That’s where we come in. You’ll drive away with a top price and a quality ride. You …</p>

      <h3>Dolor amet asset</h3>

      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>

      <p>Hiring a car gives you the freedom to go where you want, when you want. Plus, it means you won’t find yourself awkwardly lugging your bags on and off public transport or out of taxis. Renting a car can also be super cost-effective with the right deal. That’s where we come in. You’ll drive away with a top price and a quality ride. You …</p>

      <h3>Lorem ipsum</h3>

      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>

      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
    `,
    cat: 'Safely',
    create: '11 minutes',
    view: '1,245',
    img: newsDemo1
  })

  const news = ref([
    {
      img: newsDemo1,
      create:'1 day ago',
      cat: 'Safety',
      view: '1,245',
      name: 'Lorem ipsum dolor amet, uasi neque tempore. Lorem ipsum dolor amet, uasi neque tempore. Lorem ipsum dolor amet, uasi neque tempore.',
      intro: 'Debitis reiciendis numquam deleniti vel placeat culpa. Labore omnis recusandae delectus sit downs',
      slug: 'demo-1'
    },
    {
      img: newsDemo1,
      create:'15 day ago',
      cat: 'Safety',
      view: '1,245',
      name: 'Neque rem nihil perspiciatis reprehenderit dolor unde',
      intro: 'Deleniti dolore earum recusandae consectetur. Eligendi esse magnam possimus tenetur voulenter',
      slug: 'demo-2'
    },
    {
      img: newsDemo1,
      create:'31/07/2024',
      cat: 'Safety',
      view: '1,245',
      name: 'Laboriosam asperiores quia.',
      intro: 'Inventore eaque odio. Veniam ratione sunt. Ea qui quae est quis eveniet. Repellat ut dolorem dic ace',
      slug: 'demo-3'
    },
    {
      img: newsDemo1,
      create:'31/07/2024',
      cat: 'Safety',
      view: '1,245',
      name: 'Eveniet quis et dolore assumenda distinctio pariatur.',
      intro: 'Quia totam beatae minus odio autem at. Quia doloribus incidunt ab ut animi est. In explicabo',
      slug: 'demo-4'
    },
  ])
</script>

<template>
  <div class="page-wrapper news-detail">
    <div class="container">
      <div class="back">
        <RouterLink to="/news" class="text-b4b4b4 fs-14">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16">
            <path fill="#b4b4b4" fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          </svg>
          Back
        </RouterLink>
      </div>
      <div class="news-detail-thumb">
        <img class="w-100" :src="data.img" :alt="data.title" />
      </div>
      <div class="news-detail-info">
        <div class="post-content d-flex flex-wrap justify-content-center align-items-center gap-3 gap-lg-4">
          <span class="post-badge-category d-inline-block text-center text-4d4d4d">{{ data.cat }}</span>
          <p class="post-date-view text-b4b4b4">
            <span class="me-3">{{ data.create }}</span>
            <img class="d-inline-block eye-icon" src="@/assets/icons/eye.svg" alt="View" />
            {{ data.view }}
          </p>
          <span class="favourite text-b4b4b4">
            <img class="d-inline-block" src="@/assets/icons/favourite.svg" alt="View" />
            Favourite
          </span>
          <span class="shared text-b4b4b4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
            </svg>
            Share
          </span>
        </div>
        <h3 class="post-title fs-32 text-center fw-bold">{{ data.name }}</h3>
        <div class="post-description text-ffffff mb-0" v-html="data.description"></div>
      </div>
      <div class="post-section post-news">
        <div class="post-heading">
          <h3 class="fs-24 font-weight-bold mb-0 text-b4b4b4">You may like also</h3>
        </div>
        <div class="row row-news-detail-other">
          <div class="col-6 col-lg-3" v-for="item in news" :key="item">
            <PostItem :data="item" :isCat="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>