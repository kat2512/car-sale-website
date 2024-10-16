<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
      default: () => ({
        name: {
          type: String,
          required: true
        },
        slug: {
          type: String,
          required: true
        },
        cat: {
          type: String,
          default: null,
          required: false
        },
        img: {
          type: String,
          required: true
        },
        create: {
          type: String,
          required: true
        },
        view: {
          type: String,
          required: true
        },
        intro: {
          type: String,
          required: true
        }
      })
    },
    isCat: {
      type: Boolean,
      default: false,
      required: false
    }
  });
</script>

<template>
  <div class="post-item post-small">
    <div class="post-thumb">
      <RouterLink :to="{ name: 'newDetail', params: { slug: props.data.slug } }">
        <div class="bg-img-cover ratio-16-9" :style="{ backgroundImage: `url(${props.data.img})` }"></div>
      </RouterLink>
    </div>
    <div class="post-content">
      <div class="post-other d-flex flex-wrap align-items-center gap-2 gap-lg-3">
        <span v-if="isCat" class="post-badge-category d-inline-block text-center text-4d4d4d">{{ props.data.cat }}</span>
        <p class="post-date-view text-b4b4b4">
          <span class="me-3">{{ props.data.create }}</span>
          <img class="d-inline-block" src="@/assets/icons/eye.svg" alt="View" />
          {{ props.data.view }}
        </p>
      </div>
      <h3 class="post-title line-2 fs-16">
        <RouterLink :to="{ name: 'newDetail', params: { slug: props.data.slug } }" class="text-white">{{ props.data.name }}</RouterLink>
      </h3>
      <p class="post-description text-b4b4b4 line-3 mb-0">{{ props.data.intro }}</p>
    </div>
  </div>
</template>