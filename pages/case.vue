<template>
  <div class="container-with-navbar">
  </div>
</template>

<style lang="scss" scoped>

</style>


<script setup>
const isLoading = ref(false);

const { data, error } = useFetch('/api/casess', {
  async onRequest() {
    isLoading.value = true;
  },
  onResponse() {
    setTimeout(() => {
      console.log('onResponse');
      console.log('error', error.value);
      
      // 模擬延遲，並設置 loading 狀態
    }, 2000);  // 模擬延遲
  },
  onError() {
    // 當發生錯誤時，設置 loading 為 false
    console.log('error', error.value);
  }
});

</script>