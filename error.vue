<template>
  <NuxtLayout>
    <div class="container-with-navbar d-flex flex-column align-items-center justify-content-center gap-3 bg-light">
      <NuxtLoadingIndicator :throttle="0" />
      <h1>{{ error.statusCode }}</h1>
      <h5>{{ errorMessage[error.statusCode] }}</h5>
      <button class="btn btn-primary" @click="handleError">回首頁</button>
    </div>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
});


const handleError = () => clearError({ redirect: '/' })

const errorMessage = {
  403: '無頁面權限',
  404: '找不到此頁面',
  500: '頁面發生錯誤'
}

</script>