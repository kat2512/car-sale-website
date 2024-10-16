<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import CarBuyItem from '@/components/car/buy-item.vue'
import CarRentItem from '@/components/car/rent-item.vue'

// Banner slide
import banner1 from '@/assets/images/home-banner.png'
const banners = [banner1, banner1, banner1]

// Hot menu data
import hotMenuRent from '@/assets/icons/home-hot-menu-rent.svg'
import hotMenuBuy from '@/assets/icons/home-hot-menu-buy.svg'
import hotMenuSell from '@/assets/icons/home-hot-menu-sell.svg'
const hotMenus = [
  {
    icon: hotMenuRent,
    title: 'Rent',
    intro: 'Explore rentals',
    url: '/'
  },
  {
    icon: hotMenuBuy,
    title: 'Buy',
    intro: 'Find your car',
    url: '/'
  },
  {
    icon: hotMenuSell,
    title: 'Sell',
    intro: 'Sell your car',
    url: '/sell'
  },
]

// promotion data
import promotion1 from '@/assets/images/home-promotion-1.png'
import promotion2 from '@/assets/images/home-promotion-2.png'
import promotion3 from '@/assets/images/home-promotion-3.png'
import promotion4 from '@/assets/images/home-promotion-1.png'
const promotions = [promotion1, promotion2, promotion3, promotion4]

// Car for rent data
import carDemo1 from '@/assets/images/img_cardemo_1.png'
import carDemo2 from '@/assets/images/img_cardemo_2.png'
import carDemo3 from '@/assets/images/img_cardemo_3.png'
const carRents = [
  {
    name: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed tests',
    slug: 'car-rent-detail-1',
    img: carDemo1,
    brand: 'Mercedes',
    price: '$270.00 / week',
    new: true
  },
  {
    name: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed tests',
    slug: 'car-rent-detail-1',
    img: carDemo2,
    brand: 'Toyota Camry',
    price: '$250.00 / week',
  },
  {
    name: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed tests',
    slug: 'car-rent-detail-1',
    img: carDemo3,
    brand: 'Mercedes',
    price: '$270.00 / week',
  },
]

// Car for buy data
import carDemo4 from '@/assets/images/img_cardemo_4.png'
import carDemo5 from '@/assets/images/img_cardemo_5.png'
import carDemo6 from '@/assets/images/img_cardemo_6.png'
const carBuys = [
  {
    name: '2018 Toyota Kluger GXL Auto 2WD',
    slug: 'car-buy-detail-1',
    img: carDemo4,
    view: '1,245',
    brand: 'Toyota - Kluger',
    price: '$ 12,890.00',
    transmission: 'Automatic',
    odo: '12,560km',
    rego: '08/2025',
    request: null,
    review: null,
    soldOut: true,
    new: true
  },
  {
    name: '2023 LDV D90 Auto',
    slug: 'car-buy-detail-1',
    img: carDemo5,
    view: '34',
    brand: 'LDV - D90',
    price: '$ 42,000.00',
    transmission: 'Automatic',
    odo: '12,560km',
    rego: '08/2025',
    request: 'Sent 08/08/2024',
    review: null,
    soldOut: false,
  },
  {
    name: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
    slug: 'car-buy-detail-1',
    img: carDemo6,
    view: '1,245',
    brand: 'Toyota - Kluger',
    price: '$ 45,890.00',
    transmission: 'Automatic',
    odo: '12,560km',
    rego: '08/2025',
    request: null,
    review: null,
    soldOut: false,
  },
]


// News
import newsDemo1 from '@/assets/images/img_demo_news_1.png'
import { RouterLink } from 'vue-router'
const lastestNews = [
  {
    img: newsDemo1,
    cat: 'Safety',
    create: '1 day ago',
    view: '1,245',
    name: 'Lorem ipsum dolor amet, uasi neque tempore.',
    intro: 'Debitis reiciendis numquam deleniti vel placeat culpa. Labore omnis recusandae delectus sit downs',
  },
  {
    img: newsDemo1,
    cat: 'Travel',
    create: '15 day ago',
    view: '1,245',
    name: 'Neque rem nihil perspiciatis reprehenderit dolor unde',
    intro: 'Deleniti dolore earum recusandae consectetur. Eligendi esse magnam possimus tenetur voulenter',
  },
  {
    img: newsDemo1,
    cat: 'Lorem ipsum',
    create: '31/07/2024',
    view: '1,245',
    name: 'Laboriosam asperiores quia.',
    intro: 'Inventore eaque odio. Veniam ratione sunt. Ea qui quae est quis eveniet. Repellat ut dolorem dic ace',
  },
  {
    img: newsDemo1,
    cat: 'Dolor amet',
    create: '31/07/2024',
    view: '1,245',
    name: 'Eveniet quis et dolore assumenda distinctio pariatur.',
    intro: 'Quia totam beatae minus odio autem at. Quia doloribus incidunt ab ut animi est. In explicabo',
  },
]

// Config slide
const bannerSlide = {
  wrapAround: true,
  itemsToShow: 1
}

const promotionSlide = {
  wrapAround: true,
  breakpoints: {
    0: {
      itemsToShow: 1.5,
      snapAlign: 'start',
    },
    992: {
      itemsToShow: 2.5,
      snapAlign: 'start',
    },
    1200: {
      itemsToShow: 3,
      snapAlign: 'start',
    },
  },
}
</script>
<template>
  <div class="page-wrapper" id="home">
    <div class="banner">
      <div class="container-xl">
        <Carousel v-bind="bannerSlide">
          <Slide v-for="(banner, index) in banners" :key="index">
            <div class="carousel__item">
              <img class="img-fluid" :src="banner" alt="" />
            </div>
          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
    <div class="hot-menu">
      <div class="container">
        <div class="col-row d-flex align-items-center justify-content-center align-items-stretch">
          <div v-for="menu in hotMenus" class="col-item w-100 d-flex align-items-stretch position-relative">
            <RouterLink :to="menu.url" class="w-100">
              <div class="item d-lg-flex align-items-center justify-content-between">
                <div class="group d-lg-flex align-items-center text-center text-lg-start">
                  <div class="img">
                    <img :src="menu.icon" alt="" />
                  </div>
                  <div class="text">
                    <div class="text-title fs-24 fw-bold text-white">{{ menu.title }}</div>
                    <div class="text-intro text-b4b4b4">{{ menu.intro }}</div>
                  </div>
                </div>
                <span class="icon">
                  <img src="@/assets/icons/home-hot-menu-arrow-right.svg" alt="" />
                </span>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="promotion">
      <div class="container">
        <h1 class="text-b4b4b4 fs-32 fw-bold mb-0">Today’s promotion</h1>
        <Carousel v-bind="promotionSlide">
          <Slide v-for="(promotion, index) in promotions" :key="index">
            <div class="carousel__item w-100 col-md-4">
              <a href="#">
                <img class="img-fluid w-100" :src="promotion" alt="" />
              </a>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
    <div class="car-for-rent">
      <div class="container">
        <h2 class="text-b4b4b4 fs-32 fw-bold mb-0">New car for rent</h2>
        <div class="group row justify-content-center">
          <div v-for="car in carRents" class="col-lg-4 col-md-6">
            <CarRentItem :data="car" :class="['mt-md-4 mt-3']"/>
          </div>
        </div>
        <div class="text-center">
          <a class="btn btn-secondary fw-bold fs-14 text-white border-0" href="#">View all rental cars</a>
        </div>
      </div>
    </div>
    <div class="car-for-buy">
      <div class="container">
        <h2 class="text-b4b4b4 fs-32 fw-bold mb-0">Find your car!</h2>
        <div class="group row justify-content-center">
          <div v-for="car in carBuys" class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <CarBuyItem :data="car" :class="['mt-md-4 mt-3']"/>
          </div>
        </div>
        <div class="text-center">
          <a class="btn btn-secondary fw-bold fs-14 text-white border-0" href="#">View all selling cars</a>
        </div>
      </div>
    </div>
    <div class="lastest-news">
      <div class="container">
        <h2 class="text-b4b4b4 fs-32 fw-bold mb-0">Lastest news</h2>
        <div class="first-news">
          <div class="row">
            <div class="col-lg-6">
              <div class="bg-img-cover ratio-98-55" :style="{ backgroundImage: `url(${newsDemo1})` }"></div>
            </div>
            <div class="col-lg-6 d-lg-flex align-items-center">
              <div class="content mt-lg-0 mt-3">
                <span class="category text-4d4d4d">Safety</span>
                <div class="infomation text-b4b4b4 d-flex align-items-center gap-3">
                  <span>11 minutes</span>
                  <div class="d-flex align-items-center gap-1">
                    <img src="@/assets/icons/eye.svg">
                    <span>1,236</span>
                  </div>
                </div>
                <h3 class="fs-24 mb-0">Best car rental deals and discounts for cheap car hire</h3>
                <div class="intro line-5 fs-18 text-b4b4b4">Hiring a car gives you the freedom to go where you want,
                  when
                  you want. Plus, it means you won’t find yourself awkwardly lugging your bags on and off public
                  transport
                  or out of taxis. Renting a car can also be super cost-effective with the right deal. That’s where we
                  come
                  in. You’ll drive away with a top price and a quality ride. You don't</div>
              </div>
            </div>
          </div>
        </div>
        <div class="list-news">
          <div class="row">
            <div v-for="news in lastestNews" class="col-lg-3 col-6">
              <div class="item">
                <div class="bg-img-cover ratio-16-9" :style="{ backgroundImage: `url(${news.img})` }"></div>
                <div class="content">
                  <div class="infomation text-b4b4b4 d-xl-flex align-items-center gap-xl-3 gap-2">
                    <span class="category text-4d4d4d text-nowrap">{{ news.cat }}</span>
                    <div class="other-info d-flex align-items-center gap-xl-3 gap-2 mt-xl-0 mt-2">
                      <span>{{ news.create }}</span>
                      <div class="d-flex align-items-center gap-1">
                        <img src="@/assets/icons/eye.svg">
                        <span>{{ news.view }}</span>
                      </div>
                    </div>
                  </div>
                  <h4 class="fs-16 line-2 mb-0">{{ news.name }}</h4>
                  <div class="intro line-3 text-b4b4b4">{{ news.intro }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <a class="btn btn-secondary fw-bold fs-14 text-white border-0" href="#">View all news</a>
        </div>
      </div>
    </div>
    <div class="app-download">
      <div class="container position-relative">
        <img class="bg" src="@/assets/images/img_Hera_logo_download.png" alt="">
        <div class="position-absolute top-50 start-50 translate-middle">
          <div class="download-content d-lg-flex align-items-center">
            <div class="download-text">
              <div class="fs-24 fw-bold text-b4b4b4">Download</div>
              <div class="fs-32 fw-bold mt-4 text-nowrap text-title">Download rent cars app for FREE</div>
              <div class="fs-18 text-b4b4b4 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div class="d-flex align-items-center mt-4 gap-3">
                <img class="img-fluid" src="@/assets/images/ic_googleplay.png" alt="">
                <img class="img-fluid" src="@/assets/images/ic_appstore.png" alt="">
              </div>
            </div>
            <div class="download-img">
              <img class="img-fluid" src="@/assets/images/img_app.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>