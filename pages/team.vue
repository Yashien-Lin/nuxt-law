<template>
  <div class="container-with-navbar">
    <div class="title-wrap text-center bg-light">
      <!-- 團隊成員 -->
      <h3 class="mb-3">團隊成員</h3>
      <p class="lh-lg">
        我們的團隊由多位專業且經驗豐富的律師組成，涵蓋民事、刑事、商業法律、智慧財產權及家庭法律等多個領域。
        每位成員皆擁有深厚的法律專業背景，並致力於提供貼心且高效的服務。
        我們相信團隊合作能帶來最全面的法律支援，為客戶打造最優化的解決方案，成為您值得信賴的夥伴。
      </p>
    </div>
    <div class="d-flex flex-column align-items-center justify-content-center gap-4 py-6 px-4">
      <div class="text-center">
        <h2 class="mb-3">專業律師</h2>
      </div>
      <clientOnly>
        <div v-if="isLoading" class="d-flex gap-4">
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
        <div v-if="!isLoading && TeamData?.data?.length > 0" class="row g-5 main-content">
          <div class="col-12 col-sm-6 col-md-4" v-for="item in TeamData.data" :key="item.id">
            <div class="card h-100">
              <!-- TeamData: {{TeamData.data}} -->
              <img :src="uri.public.apiBase + item.avatar.url" :alt="item.avatar.url" class="card-img-top" alt="case1">
              <div class="card-body d-flex flex-column justify-content-between px-lg-4">
                <div class="mb-2">
                  <h3 class="card-title fs-5">
                    {{ item.name }}
                    <span class="fs-6">{{ getTitle(item.title) }}</span>
                  </h3>
                  <ul class="mb-2">
                    <p class="fw-bold">經歷:</p>
                    <li v-for="(experience, index) in item.experiences" :key="index" class="card-text">{{ experience.text }}</li>
                  </ul>
                  <ul class="mb-2">
                    <p class="fw-bold">負責領域:</p>
                    <li v-for="(field, index) in item.fields" :key="index" class="card-text">{{ field.text }}</li>
                  </ul>
                </div>
                <a href="#" class="btn btn-blue rounded-0 text-white mb-2">看更多 ...</a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!isLoading && error">error:{{ error.statusMessage }}</div>
      </clientOnly>
    </div>
  </div>
</template>

<script setup>

const isLoading = ref(false);
const form = ref({
  // _id: '',
  name: '陳柏毅 律師',
  fields: ['消費者保護', '醫療糾紛', '行政訴訟'],
  avatar: '/images/member6.jpg',
  experiences: ['輔仁大學法律系學士', '曾於國內知名律師事務所擔任訴訟律師', '公益訴訟協會成員'],
  title: '合夥律師',
});


const getTitle = (title) => title.slice(1); // 取得 title 的值並去除第一個字元

// 取得資料
const { data: TeamData, error } = useFetch(`${uri.public.apiBase}/api/authors?populate=*`, {
  async onRequest() {
    isLoading.value = true;
  },
  onResponse() {
    // 請求完成後將 isLoading 設置為 false
    setTimeout(() => {
      console.log('onResponse:', TeamData.value);
      console.log('error:', error.value);
      
      // 模擬延遲，並設置 loading 狀態
      isLoading.value = false;
    }, 500);  // 模擬延遲
  },
  onError() {
    // 當發生錯誤時，設置 loading 為 false
    isLoading.value = false;
    console.log('error:', error.value);
  }
});

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
