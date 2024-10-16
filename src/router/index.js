import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  linkActiveClass: 'nav-link-active',
  linkExactActiveClass: 'nav-link-exact-active',
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: (to, from, savedPosition) => {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/Home.vue')
        },
        {
          path: '/rent',
          name: 'rent',
          component: () => import('@/pages/rent/index.vue')
        },
        {
          path: '/rent/:slug',
          name: 'rentDetail',
          component: () => import('@/pages/rent/detail.vue')
        },
        {
          path: '/buy',
          name: 'buy',
          component: () => import('@/pages/buy/index.vue')
        },
        {
          path: '/buy/:slug',
          name: 'buyDetail',
          component: () => import('@/pages/buy/detail.vue')
        },
        {
          path: '/buy/:slug/request',
          name: 'buyRequest',
          component: () => import('@/pages/buy/request.vue')
        },
        {
          path: '/news',
          name: 'news',
          component: () => import('@/pages/news/index.vue'),
        },
        {
          path: '/news/:slug',
          name: 'newDetail',
          component: () => import('@/pages/news/detail.vue')
        },
        {
          path: '/faqs',
          name: 'faqs',
          component: () => import('@/pages/faqs/index.vue')
        },
        {
          path: '/faqs/:slug',
          name: 'faqDetail',
          component: () => import('@/pages/faqs/detail.vue')
        },
        {
          path: '/faqs/loyalty-program',
          name: 'faqsLoyaltyProgram',
          component: () => import('@/pages/faqs/loyalty-program.vue')
        },
        {
          path: '/contact-us',
          name: 'contactUs',
          component: () => import('@/pages/contact-us/index.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('@/pages/profile/index.vue')
        },
        {
          path: '/profile/change-password',
          name: 'profileChangePassword',
          component: () => import('@/pages/profile/change-password.vue')
        },
        {
          path: '/signin',
          name: 'signin',
          component: () => import('@/pages/auth/signin.vue')
        },
        {
          path: '/signup',
          name: 'signup',
          component: () => import('@/pages/auth/signup.vue')
        },
        {
          path: '/forgot-password',
          name: 'forgotPassword',
          component: () => import('@/pages/auth/forgot-password.vue')
        },
        {
          path: '/promotions',
          name: 'promotions',
          component: () => import('@/pages/promotions/index.vue')
        },
        {
          path: '/promotions/:slug',
          name: 'promotionDetail',
          component: () => import('@/pages/promotions/detail.vue')
        },
        {
          path: '/sell',
          name: 'sell',
          component: () => import('@/pages/sell/index.vue')
        },
        {
          path: '/sell/contact-information',
          name: 'sellContactInformation',
          component: () => import('@/pages/sell/contact-information.vue')
        },
      ]
    },
  ]
})

export default router
