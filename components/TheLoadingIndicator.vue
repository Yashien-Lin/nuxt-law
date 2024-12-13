<template>
  <div class="loading-indicator" :class="isLoading ? 'loader-visible' : 'loader-hidden'"></div>
</template>

<script setup>
const isLoading = ref(false)

function show() {
	if (import.meta.client) {
	  isLoading.value = true
	}
}

function hide() {
	if (import.meta.client) {
	  isLoading.value = false
	}
}
</script>

<style lang="scss" scoped>
.loading-indicator {
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  pointer-events: none;
  width: auto;
  height: 3px;
  opacity: 0;
  background: repeating-linear-gradient(to right, rgb(0, 220, 130) 0%, rgb(52, 205, 254) 50%, rgb(0, 71, 225) 100%);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.1s, height 0.4s, opacity 0.4s;
  z-index: 999999;
}

.loading-indicator.loader-visible {
  visibility: visible;
  opacity: 1;
  scale: 1.5;
}

.loading-indicator.loader-hidden {
  visibility: hidden;
  opacity: 0;
  scale: 1;
}
  
</style>