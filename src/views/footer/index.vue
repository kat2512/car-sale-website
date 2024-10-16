<script setup>
import Copyright from '@/views/footer/copyright.vue'
</script>
<template>
  <footer id="footer">
    <div class="container mb-4">
      <div class="row">
        <div class="col-xl-3 footer-logo order-1 mb-4 mb-lg-0">
          <RouterLink to="/" class="d-block mb-4 text-center">
            <img src="@/assets/logo-footer.svg" alt="Hera" />
          </RouterLink>
          <p class="text-center text-white fs-18">HERA TRADING PTY LTD</p>
        </div>
        <div class="col-xl-3 footer-list order-4 order-lg-2 text-xl-start text-center d-lg-block">
          <h3 class="fw-bold text-white fs-24 mb-3 d-none d-lg-block mt-xl-0 mt-4">Company</h3>
          <ul class="d-flex flex-wrap flex-row align-items-center justify-content-center d-lg-block">
            <li class="me-3 me-lg-0 mb-3">
              <RouterLink class="d-block transition text-b4b4b4" to="/contact-us">Contact us</RouterLink>
            </li>
            <li class="me-3 me-lg-0 mb-3">
              <RouterLink class="d-block transition text-b4b4b4" to="/faqs">FAQs</RouterLink>
            </li>
            <li class="me-3 me-lg-0 mb-3">
              <RouterLink class="d-block transition text-b4b4b4" to="/">Terms & Conditions</RouterLink>
            </li>
            <li class="me-3 me-lg-0 mb-3">
              <RouterLink class="d-block transition text-b4b4b4" to="/">Privacy policy</RouterLink>
            </li>
            <li class="me-3 me-lg-0 mb-3">
              <RouterLink class="d-block transition text-b4b4b4" to="/faqs/loyalty-program">Loyalty program</RouterLink>
            </li>
          </ul>
        </div>
        <div class="col-xl-3 footer-list order-2 order-lg-3 text-xl-start text-center d-lg-block">
          <h3 class="fw-bold text-white fs-24 mb-3">Our services</h3>
          <ul class="d-flex flex-column align-items-center justify-content-center d-lg-block">
            <li class="mb-3">
              <RouterLink class="d-block transition text-b4b4b4" to="/rent">Rent a car</RouterLink>
            </li>
            <li class="mb-3">
              <RouterLink class="d-block transition text-b4b4b4" to="/buy">Buy a car</RouterLink>
            </li>
            <li class="mb-3">
              <RouterLink class="d-block transition text-b4b4b4" to="/">Sell your car</RouterLink>
            </li>
          </ul>
          <div class="application d-none d-lg-block">
            <h3 class="fw-bold text-white fs-24 mb-4">Download app</h3>
            <div class="application-images d-flex align-items-center justify-content-center justify-content-xl-start gap-2">
              <a href="#" target="_blank" rel="noopener noreferrer" class="d-inline-block">
                <img src="@/assets/images/google-play.png" alt="Google Play" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" class="d-inline-block">
                <img src="@/assets/images/app-store.png" alt="App Store" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-xl-3 footer-list order-3 order-lg-4 text-xl-start text-center d-lg-block mb-2 mb-lg-0">
          <h3 class="fw-bold text-white fs-24 mb-3">Contact</h3>
          <ul class="d-flex flex-column align-items-center justify-content-center d-lg-block">
            <li class="mb-3 text-b4b4b4">
              <p>
                <img class="me-1" src="@/assets/icons/map_maker.svg" alt="Address" />
                Shop 2 / 376 Princes Highway Rockdale, NSW, Australia
              </p>
            </li>
            <li class="mb-3 text-b4b4b4">
              <p>
                <img class="me-1" src="@/assets/icons/phone.svg" alt="Phone" />
                <a href="tel:+61 2 9072 9005" class="text-b4b4b4">+61 2 9072 9005</a>
              </p>
            </li>
            <li class="mb-3 mb-lg-0 text-b4b4b4">
              <p>
                <img class="me-2" src="@/assets/icons/mail.svg" alt="Mail" />
                <a href="mailto:info@heratrading.com.au" class="text-fae0a0">info@heratrading.com.au</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Copyright />
  </footer>
</template>