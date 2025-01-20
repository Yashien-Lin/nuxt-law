<template>
  <div class="container-with-navbar">
    <div class="title-wrap text-center my-6 bg-light">
      <h3 class="mb-3">服務項目</h3>
      <p class="lh-lg">
        我們的團隊由多位專業且經驗豐富的律師組成，涵蓋民事、刑事、商業法律、智慧財產權及家庭法律等多個領域。
        每位成員皆擁有深厚的法律專業背景，並致力於提供貼心且高效的服務。
        我們相信團隊合作能帶來最全面的法律支援，為客戶打造最優化的解決方案，成為您值得信賴的夥伴。
      </p>
    </div>
    <!-- 服務項目 -->
    <ServiceCard />
  </div>
</template>

<script setup>
// const isLoading = ref(true);

// // 取得服務項目
// const { data: serviceData, error: serviceError } = useFetch('/api/service', {
//   async onRequest() {
//     isLoading.value = true;
//   },
//   onResponse() {
//     // 請求完成後將 isLoading 設置為 false
//     setTimeout(() => {
//       console.log('onResponse:', serviceData.value);
//       console.log('error:', serviceError.value);
      
//       // 模擬延遲，並設置 loading 狀態
//       isLoading.value = false;
//     }, 1000);  // 模擬延遲
//   },
//   onError() {
//     // 當發生錯誤時，設置 loading 為 false
//     isLoading.value = false;
//     console.log('error:', serviceError.value);
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
