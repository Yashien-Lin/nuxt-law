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
    required: false,
  },
  height: {
    type: [Number, String],
    required: false,
  },
  className: {
    type: String,
    default: "",
  },
  priority: { type: Boolean, default: false }, // 可控制第一張圖是否 preload
});
</script>
