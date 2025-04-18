<template>
  <div class="bg-light">
    <div class="main-content d-flex flex-column align-items-center justify-content-center gap-4 px-3 bg-service">
      <div class="text-center">
        <h2 class="mb-3">服務項目</h2>
        <p>如果把品牌擬人化，關於我們頁面就是品牌的外在，一個好的關於我們頁面能幫助客戶迅速了解品牌，建立對品牌的第一認知。</p>
      </div>
      <ServiceCard />
    </div>
  </div>
</template>

<script setup>
const isLoading = ref(false); 

const config = useRuntimeConfig();
console.log('config:', config);

// 取得服務項目
const { data: serviceData, error: serviceError } = useFetch(`${config.public.apiBase}/api/services`, {
  async onRequest() {
    isLoading.value = true;
    // console.log('service onRequest:', serviceData.value);
  },
  onResponse() {
    // 請求完成後將 isLoading 設置為 false
    setTimeout(() => {
      // console.log('service onResponse:', serviceData.value);
      
      // 模擬延遲，並設置 loading 狀態
      isLoading.value = false;
    }, 1000);  // 模擬延遲
  },
  onError() {
    // 當發生錯誤時，設置 loading 為 false
    isLoading.value = false;
    // console.log('service error:', serviceError.value);
  }
});

</script>

<style lang="scss" scoped>

.bg-service {
  padding-top: 80px;
  padding-bottom: 90px;
  clip-path: polygon(0% 100%, 0% 5%, 100% 0%, 100% 100%);
  -webkit-clip-path: polygon(0% 100%, 0% 3%, 100% 0%, 100% 97%);

  @include media-md {
    clip-path: polygon(0% 100%, 0% 15%, 100% 0%, 100% 100%);
    -webkit-clip-path: polygon(0% 100%, 0% 15%, 100% 0%, 100% 85%);
	}

  @include media-lg {
    padding-top: 120px;
    padding-bottom: 130px;
    clip-path: polygon(0% 100%, 0% 12%, 100% 0%, 100% 100%);
    -webkit-clip-path: polygon(0% 100%, 0% 12%, 100% 0%, 100% 88%);
	}

}
</style>