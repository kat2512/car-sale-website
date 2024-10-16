<script setup>
  import FacebookIcon from '@/assets/icons/facebook.svg'
  import InstagramIcon from '@/assets/icons/instagram.svg'
  import TelegramIcon from '@/assets/icons/telegram.svg'

  const socials = [
    {
      id: 1,
      name: 'Facebook',
      icon: FacebookIcon,
      link: 'https://facebook.com'
    },
    {
      id: 2,
      name: 'Instagram',
      icon: InstagramIcon,
      link: 'https://instagram.com'
    },
    {
      id: 3,
      name: 'Telegram',
      icon: TelegramIcon,
      link: 'https://telegram.com'
    }
  ]
</script>
<template>
  <div class="copyright">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="copyright-text">
        <p>Copyright © by Hera Trading 2024</p>
      </div>
      <div class="copyright-social">
        <ul class="d-flex align-items-center justify-content-between gap-3">
          <li v-for="social in socials" :key="social.id" class="d-flex align-items-center">
            <span class="me-lg-1">
              <img :src="social.icon" :alt="social.name" class="d-block" />
            </span>
            <a class="d-none d-lg-inline-block" :href="social.link" target="_blank" rel="noreferrer">{{ social.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>