<template>
  <!-- <NuxtImg :src="src" :alt="alt" format="webp" class="object-fit-image" :class="className" /> -->
  <img :src="src" :alt="alt" class="object-fit-image" :class="className" />
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  }
});
</script>



