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
        intro: {
          type: String,
          required: true
        }
      })
    }
  });
</script>

<template>
  <div class="faqs-item">
    <h5 class="title line-2">
      <RouterLink :to="{ name: 'faqDetail', params: { slug: props.data.slug } }" class="text-white fs-16 fw-bold d-block">
        {{ props.data.name }}
      </RouterLink>
      </h5>
    <div class="description line-5 text-b4b4b4">{{ props.data.intro }}</div>
    <RouterLink :to="{ name: 'faqDetail', params: { slug: props.data.slug } }" class="btn btn-warning text-nowrap text-black fw-bold fs-14 border-0 transition">
      Read more
    </RouterLink>
  </div>
</template>