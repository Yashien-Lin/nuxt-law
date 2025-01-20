<template>
  <div class="main-content d-flex flex-column align-items-center justify-content-center gap-4 px-3">
    <div class="text-center">
      <h2 class="mb-3">案例分享</h2>
      <p>以下實際案例，為保護當事人，有部分加以修改:</p>
    </div>
    <!-- Loading -->
    <ClientOnly>
      <div v-if="isLoading" class="d-flex gap-4 justify-content-center">
        <div class="spinner-grow text-dark d-flex justify-content-center align-items-center" role="status">
          <span class="visually-hidden"></span>
        </div>
        <div class="spinner-grow text-dark d-flex justify-content-center align-items-center" role="status">
          <span class="visually-hidden"></span>
        </div>
        <div class="spinner-grow text-dark d-flex justify-content-center align-items-center" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>
      <div v-if="!isLoading && caseData.data.length != 0" class="row g-4">
        <div class="col-12 col-sm-6 col-md-3" v-for="item in caseData.data" :key="item.id">
          <div class="card h-100">
            <img :src="item.image" :alt="item.title" class="card-img-top" alt="case1">
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h6 class="card-title">{{ item.title }}</h6>
                <p class="card-text my-3">{{ item.description }}</p>
              </div>
              <nuxt-link to="/service" class="btn btn-primary rounded-0 text-white">Read More</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
    <div v-if="!isLoading && caseError">error:{{ caseError.statusMessage }}</div>
  </div>
</template>

<script setup>
const isLoading = ref(false);

// 取得案例
const { data: caseData, error:caseError } = useFetch('/api/case', {
  async onRequest() {
    isLoading.value = true;
  },
  onResponse() {
    // 請求完成後將 isLoading 設置為 false
    setTimeout(() => {
      // console.log('case onResponse:', caseData.value);
      
      // 模擬延遲，並設置 loading 狀態
      isLoading.value = false;
    }, 1000);  // 模擬延遲
  },
  onError() {
    // 當發生錯誤時，設置 loading 為 false
    isLoading.value = false;
    console.log('case error:', caseError.value);
  }
});

</script>

<style lang="scss" scoped>

</style>