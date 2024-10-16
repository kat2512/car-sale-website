<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const menus = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'Rent',
    path: '/rent'
  },
  {
    id: 3,
    name: 'Buy',
    path: '/buy'
  },
  {
    id: 4,
    name: 'News',
    path: '/news'
  },
  {
    id: 5,
    name: 'FAQs',
    path: '/faqs'
  },
  {
    id: 6,
    name: 'Contact Us',
    path: '/contact-us'
  }
]

// Fixed header
const isFixed = ref(false)
const handleScroll = () => {
  if (window.scrollY > 64) {
    isFixed.value = true;
  } else {
    isFixed.value = false;
  }
};

// Close menu mobile when click
const isMenuHide = ref(true)
const handleMenuClick = () => {
  isMenuHide.value = true;
};
const toggleMenu = () => {
  isMenuHide.value = !isMenuHide.value;
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const isActive = (path) => {
  return path !== '/' && route.path.startsWith(path);
}
</script>
<template>
  <nav id="header" class="navbar navbar-expand-xl"
    :class="{ 'position-absolute w-100': route?.name === 'home', 'bg-black w-100': route?.name !== 'home', 'position-fixed bg-black': isFixed }">
    <div class="container-xl container-fluid">
      <div class="logo">
        <RouterLink to="/" class="d-flex align-items-center">
          <span class="me-xl-3 me-2">
            <img src="@/assets/logo.svg" alt="Hera" class="logo-img" />
          </span>
          <span>
            <img src="@/assets/logo-text.svg" alt="Hera" class="logo-text" />
          </span>
        </RouterLink>
      </div>
      <button class="navbar-toggler" :class="{ 'collapsed': isMenuHide }" type="button"
        data-bs-toggle="collapse" data-bs-target="#menuContent" aria-controls="menuContent" aria-expanded="false" @click="toggleMenu"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" :class="{ 'show': !isMenuHide }" id="menuContent">
        <div class="menu-auth flex-grow-1 d-xl-flex align-items-center justify-content-end">
          <div class="menu">
            <ul class="menu-list d-xl-flex align-items-center justify-content-between">
              <li v-for="menu in menus" :key="menu.id" class="menu-item">
                <RouterLink :class="['menu-link', {'menu-link-sub-active': isActive(menu.path)}]" :to="menu.path" @click="handleMenuClick">{{ menu.name }}</RouterLink>
              </li>
            </ul>
          </div>
          <div class="auth ms-5 d-none d-xl-block">
            <button v-if="false" class="btn-custom btn-login">
              Sign in
            </button>
            <div v-else class="d-flex align-items-center profile">
              <RouterLink to="/profile"><span>My profile</span></RouterLink>
              <div class="avatar ms-2">
                <img src="https://placehold.co/32x32.jpg" atl="Avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>