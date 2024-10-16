<script setup>
  import { ref } from 'vue'

  import PostItem from '@/components/posts/item.vue'
  import newsDemo1 from '@/assets/images/img_demo_news_1.png'

  const newBig = ref({
    img: newsDemo1,
    cat: 'Safety',
    create:'11 minutes',
    view: '1,245',
    name: 'Best car rental deals and discounts for cheap car hire',
    intro: 'Hiring a car gives you the freedom to go where you want, when you want. Plus, it means you won’t find yourself awkwardly lugging your bags on and off public transport or out of taxis. Renting a car can also be super cost-effective with the right deal. That’s where we come in. You’ll drive away with a top price and a quality ride. You …',
    slug: 'demo-latest'
  })

  const news = ref([
    {
      img: newsDemo1,
      create:'1 day ago',
      view: '1,245',
      name: 'Lorem ipsum dolor amet, uasi neque tempore. Lorem ipsum dolor amet, uasi neque tempore. Lorem ipsum dolor amet, uasi neque tempore.',
      intro: 'Debitis reiciendis numquam deleniti vel placeat culpa. Labore omnis recusandae delectus sit downs',
      slug: 'demo-1'
    },
    {
      img: newsDemo1,
      create:'15 day ago',
      view: '1,245',
      name: 'Neque rem nihil perspiciatis reprehenderit dolor unde',
      intro: 'Deleniti dolore earum recusandae consectetur. Eligendi esse magnam possimus tenetur voulenter',
      slug: 'demo-2'
    },
    {
      img: newsDemo1,
      create:'31/07/2024',
      view: '1,245',
      name: 'Laboriosam asperiores quia.',
      intro: 'Inventore eaque odio. Veniam ratione sunt. Ea qui quae est quis eveniet. Repellat ut dolorem dic ace',
      slug: 'demo-3'
    },
    {
      img: newsDemo1,
      create:'31/07/2024',
      view: '1,245',
      name: 'Eveniet quis et dolore assumenda distinctio pariatur.',
      intro: 'Quia totam beatae minus odio autem at. Quia doloribus incidunt ab ut animi est. In explicabo',
      slug: 'demo-4'
    },
  ])
</script>
<template>
  <div class="page-wrapper news">
    <div class="container">
      <h1 class="fs-32 mb-3">News</h1>
      <div class="post-item post-big mb-4">
        <div class="row flex-column flex-lg-row">
          <div class="col-lg-6">
            <div class="post-thumb bg-img-cover ratio-98-55 mb-3 mb-lg-0" :style="{ backgroundImage: `url(${newBig.img})` }">
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-center">
            <div class="post-content">
              <span class="post-badge-category mb-2 d-inline-block text-center text-4d4d4d">{{ newBig.cat }}</span>
              <p class="post-date-view mb-2 text-b4b4b4">
                <span class="me-3">{{ newBig.create }}</span>
                <img class="d-inline-block" src="@/assets/icons/eye.svg" alt="View" />
                {{ newBig.view }}
              </p>
              <h3 class="post-title fs-24">
                <RouterLink :to="{ name: 'newDetail', params: { slug: newBig.slug } }" class="text-white">
                  {{ newBig.name }}
                </RouterLink>
              </h3>
              <p class="post-description text-b4b4b4 line-4 mb-0">{{ newBig.intro }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="post-section" v-for="item in 3" :key="item">
        <div class="post-heading d-flex justify-content-between align-items-center">
          <h3 class="fs-24 font-weight-bold mb-0 text-b4b4b4">{{ item == 1 ? "Safety" : item == 2 ? "Travel" : "Lorem" }}</h3>
          <RouterLink :to="{ name: 'news' }" class="text-fae0a0">View more</RouterLink>
        </div>
        <div class="row row-news-other">
          <div class="col-6 col-lg-3" v-for="item in news" :key="item">
            <PostItem :data="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
