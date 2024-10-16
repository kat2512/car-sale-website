<script setup>
  import { ref, onMounted } from 'vue'
  import ImageDemo from '@/assets/images/img_cardemo_1.png'
  import { useModalStore } from '@/stores/modal'
  import { useRouter } from 'vue-router'

  const gradientAngle = ref(0)
  const tabCurrent = ref(1)
  const tabs = ([
    {
      id: 1,
      name: 'All'
    },
    {
      id: 2,
      name: 'Rent'
    },
    {
      id: 3,
      name: 'Buy'
    },
    {
      id: 4,
      name: 'Sell'
    }
  ])

  const bookings = ref([
    {
      id: 1,
      img: ImageDemo,
      tag: [
        {
          id: 1,
          name: 'Rent',
          color: '#EA8543'
        },
        {
          id: 2,
          name: 'Booked',
          color: '#FAE0A0'
        }
      ],
      info: [
        {
          id: 1,
          key: 'Order ID:',
          value: '#R240701001'
        },
        {
          id: 2,
          key: 'Valid until:',
          value: '31/05/2025 23:59'
        }
      ]
    },
    {
      id: 2,
      img: ImageDemo,
      tag: [
        {
          id: 1,
          name: 'Buy',
          color: '#FEC734'
        },
        {
          id: 2,
          name: 'Booking',
          color: '#FAE0A0'
        }
      ],
      info: [
        {
          id: 1,
          key: 'Order ID:',
          value: '#R240701001'
        },
        {
          id: 2,
          key: 'Car:',
          value: '2018 Toyota Kluger GXL Auto 2…'
        }
      ]
    },
    {
      id: 3,
      img: ImageDemo,
      tag: [
        {
          id: 1,
          name: 'Sell',
          color: '#33D7B4'
        },
        {
          id: 2,
          name: 'Request',
          color: '#FAE0A0'
        }
      ],
      info: [
        {
          id: 1,
          key: 'Order ID:',
          value: '#R240701001'
        },
        {
          id: 2,
          key: 'Plate number:',
          value: 'AO-38-BE'
        }
      ]
    },
    {
      id: 4,
      img: ImageDemo,
      tag: [
        {
          id: 1,
          name: 'Sell',
          color: '#33D7B4'
        },
        {
          id: 2,
          name: 'Reject',
          color: '#B4B4B4'
        }
      ],
      info: [
        {
          id: 1,
          key: 'Order ID:',
          value: '#R240701001'
        },
        {
          id: 2,
          key: 'Plate number:',
          value: 'AO-38-BE'
        }
      ]
    }
  ])

  const getBackgroundColor = (color) => {
    return `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.2)`
  }

  const onChangeTab = (value) => {
    tabCurrent.value = value

    // Call api
  }

  onMounted(() => {
    gradientAngle.value = 240
    updateProgess(gradientAngle.value)    
    onChangeTab(1)
  })

  const updateProgess = () => {
    let newValue = gradientAngle.value >= 360 ? 360 : gradientAngle.value
    const element = document.getElementById('points-progress');
    element.style.setProperty('--dynamic-deg', parseInt(newValue) + 'deg');
  }

  const router = useRouter()
  const modelStore = useModalStore()

  const onSignOut = async () => {
    modelStore.openModal({
      textOk: 'Sign out',
      title: 'Sign out',
      content: 'Are you sure you want to sign out?',
      callback: () => {
        setTimeout(() => {
          modelStore.closeModal()
          router.replace({ path: '/signin' })
        }, 200)
      }
    })
  }

</script>
<template>
  <div class="page-wrapper profile bg-page">
    <div class="container">
      <div class="profile-container w-600 mx-auto w-100">
        <div class="user-info-points">
          <div class="user-info">
            <div class="d-flex flex-column flex-lg-row align-items-center">
              <div class="img text-center text-lg-start flex-shrink-0 overflow-hidden rounded-circle">
                <img class="w-100" src="https://placehold.co/120x120.jpg" alt="User" />
              </div>
              <div class="info flex-grow-1">
                <h3 class="text-white fs-24 fw-bold text-center text-lg-start">Jacob Mark</h3>
                <p class="text-b4b4b4">+61290729005 - mail@gmail.com</p>
                <div class="user-action">
                  <RouterLink to="/profile/change-password" class="btn-secondary fs-14 text-white">Change password</RouterLink>
                  <button @click="onSignOut" class="btn-secondary fs-14 text-white">Sign out</button>
                </div>
              </div>
            </div>
          </div>
          <div class="user-points">
            <div class="d-flex align-items-center justify-content-center position-relative">            
              <div id="points-progress" class="points-progress flex-shrink-0 rounded-circle position-relative">
                <div class="icon mx-auto"></div>
              </div>
              <div class="points-info flex-grow-1">
                <h3 class="fs-24 fw-bold text-primary">2,000 <span class="fs-14 fw-normal">points</span></h3>
                <p class="text-b4b4b4">Earn 80 points to unlock Golden!</p>
              </div>
              <div role="button" class="points-view position-absolute rounded-circle">
                <img src="@/assets/icons/arrown_circle_right.svg" alt="Icon" />
              </div>
            </div>
          </div>
        </div>
        <div class="user-booking">
          <h3 class="booking-title text-b4b4b4 fs-18 fw-bold">My booking</h3>
          <ul class="booking-tab">
            <li
              v-for="tab in tabs"
              :key="tab.id"
              role="button"
              @click="onChangeTab(tab.id)"
              :class="{
                'd-inline-block text-white fs-14 transition': true,
                'active': tabCurrent === tab.id
              }"
            >
              {{ tab.name }}
          </li>
          </ul>
          <ul class="booking-tab-content">
            <li class="d-flex justify-content-between align-items-center" v-for="booking in bookings" :key="booking.id">
              <div class="img flex-shrink-0 d-flex align-items-center justify-content-center">
                <img class="w-100" :src="booking.img" alt="Demo" />
              </div>
              <div class="info flex-grow-1">
                <div class="tag">
                  <span
                    v-for="(tag, index) in booking.tag" :key="tag.id"
                    class="fs-14 d-inline-block"
                    :style="{ background: index == 0 ? getBackgroundColor(tag.color) : tag.color, color: index == 0 ? tag.color : '#000000' }"
                  >
                    {{ tag.name }}
                  </span>
                </div>
                <div class="info-order d-flex align-items-center gap-2" v-for="info in booking.info" :key="info.id">
                  <div class="fs-14 text-b4b4b4">{{ info.key }} </div>
                  <div class="fs-14 line-1">{{ info.value }}</div>
                </div>
              </div>
            </li>
          </ul>
          <div class="end-list text-4d4d4d fs-12 fst-italic text-center">End of list.</div>
        </div>
      </div>
    </div>
  </div>
</template>