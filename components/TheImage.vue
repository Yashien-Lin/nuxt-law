<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    class="object-fit-image"
    :class="className"
    :priority="priority"
  />
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
  width: {
    type: [Number, String],
    required: true,
  },
  height: {
    type: [Number, String],
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
  priority: { type: Boolean, default: false }, // 可控制第一張圖是否 preload
});
</script>
