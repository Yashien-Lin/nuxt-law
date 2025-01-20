<template>
  <div class="container-with-navbar">
    <div class="title-wrap text-center my-6 bg-light">
      <h3 class="mb-3">成功案例</h3>
      <p class="lh-lg">
        我們曾成功協助客戶解決多項複雜案件，包括大型企業併購中的法律風險評估與合約談判，以及高爭議性民事訴訟的勝訴。
        團隊專注於為客戶量身打造創新且務實的解決方案，並在智慧財產權保護及刑事辯護領域取得多項突破性成果。
        我們的專業與努力，讓每一位客戶在法律挑戰中獲得最佳保障，並深受信賴與肯定。
      </p>
    </div>
    <!-- <ClientOnly>
      <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
        <SplideSlide>
          <img src="/images/case1.jpg" alt="Sample 1">
        </SplideSlide>
        <SplideSlide>
          <img src="/images/case2.jpg" alt="Sample 2">
        </SplideSlide>
      </Splide>
    </ClientOnly> -->
  </div>
</template>


<script setup>
// import { Splide, SplideSlide } from '@splidejs/vue-splide';
// const isClient = ref(false);

// onMounted(() => {
//   isClient.value = true;
// })

// const isLoading = ref(false);

// const { data, error } = useFetch('/api/cases', {
//   async onRequest() {
//     isLoading.value = true;
//   },
//   onResponse() {
//     setTimeout(() => {
//       console.log('onResponse');
//       console.log('error', error.value);
      
//       // 模擬延遲，並設置 loading 狀態
//     }, 2000);  // 模擬延遲
//   },
//   onError() {
//     // 當發生錯誤時，設置 loading 為 false
//     console.log('error', error.value);
//   }
// });

</script>


<style lang="scss" scoped>
.title-wrap {
  padding: 2.5rem;

  @include media-xl {
    padding-right: 160px;
    padding-left: 160px;
  }
}
</style>