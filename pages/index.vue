<template>
  <div class="container-with-navbar">
    <div class="bg-banner">
      <div class="bg-cover"></div>
      <div class="index-paragraph position-absolute d-flex flex-column align-items-start">
        <p class="py-3 text-white lh-lg">
          如果把品牌擬人化，關於我們頁面就是品牌的外在，一個好的關於我們頁面能幫助客戶迅速了解品牌，
          建立對品牌的第一認知。接下來這篇文章將會帶您學習如何做好關於我們頁面，讓您的客戶與品牌產生聯繫，
          留下正面的第一印象！留下正面的第一印象！留下正面的第一印象！
        </p>
        <nuxt-link class="btn btn-black px-4 py-2" to="/#">About US</nuxt-link>
      </div>
    </div>
    <div class="">
      <div class="main-content row align-items-center gy-3">
        <div class="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center gap-4">
          <div>
            <h2 class="mb-2">關於我們</h2>
            <p>
              本律師事務所致力於為客戶提供專業、高效且貼心的法律服務。我們的團隊由多位經驗豐富的律師組成，專精於民事、刑事、商業及勞動法等多個領域，旨在協助客戶解決複雜的法律問題。
              我們堅信每一位客戶的需求都值得被傾聽與重視，並以誠信、公正為核心，提供客製化的法律解決方案，成為您最可靠的法律夥伴。
            </p>
          </div>
          <div>
            <h2 class="mb-2">我們的願景</h2>
            <p>
              我們的願景是成為值得信賴的法律專家，不僅協助客戶應對當下的法律挑戰，更為他們的未來保駕護航。我們希望透過專業的法律服務，促進公平與正義，
              並為社會帶來正面的影響。我們矢志追求卓越，致力於讓法律變得更易於理解，助每一位客戶在複雜的法規環境中找到明確的方向。
            </p>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <img class="w-100" src="/images/aboutUs.jpg" alt="">
        </div>
      </div>
      <div class="d-flex flex-column align-items-center justify-content-center gap-4 bg-light px-4 bg-service">
        <div class="text-center">
          <h2 class="mb-3">Our Services</h2>
          <p>如果把品牌擬人化，關於我們頁面就是品牌的外在，一個好的關於我們頁面能幫助客戶迅速了解品牌，建立對品牌的第一認知。</p>
        </div>
        <div class="row w-100 justify-content-center gy-3">
          <div class="col-12 col-sm-6 col-md-2">
            <nuxt-link to="/#" class="card d-flex justify-content-center align-items-center p-2 text-center h-100">
              <img class="my-2" width="50" height="50" src="https://img.icons8.com/ios-filled/50/law.png" alt="law"/>
              <div>
                <h6 class="card-text my-2">訴訟</h6>
                <p class="card-text mb-2">Litigation</p>
              </div>
            </nuxt-link>
          </div>
          <div class="col-12 col-sm-6 col-md-2">
            <nuxt-link to="/#" class="card d-flex justify-content-center align-items-center p-2 text-center h-100">
              <img class="my-2" width="50" height="50" src="https://img.icons8.com/ios-filled/50/law.png" alt="law"/>
                <div>
                  <h6 class="card-text my-2">審約</h6>
                  <p class="card-text mb-2">Contracts</p>
                </div>
            </nuxt-link>
          </div>
          <div class="col-12 col-sm-6 col-md-2">
            <nuxt-link to="/#" class="card d-flex justify-content-center align-items-center p-2 text-center h-100">
              <img class="my-2" width="50" height="50" src="https://img.icons8.com/ios-filled/50/law.png" alt="law"/>
                <div>
                  <h6 class="card-text my-2">海外投資</h6>
                  <p class="card-text mb-2">Foreign investment</p>
                </div>
            </nuxt-link>
          </div>
          <div class="col-12 col-sm-6 col-md-2">
            <nuxt-link to="/#" class="card d-flex justify-content-center align-items-center p-2 text-center h-100">
              <img class="my-2" width="50" height="50" src="https://img.icons8.com/ios-filled/50/law.png" alt="law"/>
                <div>
                  <h6 class="card-text my-2">房地產買賣</h6>
                  <p class="card-text mb-2">Real estate</p>
                </div>
            </nuxt-link>
          </div>
          <div class="col-12 col-sm-6 col-md-2">
            <nuxt-link to="/#" class="card d-flex justify-content-center align-items-center p-2 text-center h-100">
              <img class="my-2" width="50" height="50" src="https://img.icons8.com/ios-filled/50/law.png" alt="law"/>
                <div>
                  <h6 class="card-text my-2">訴訟</h6>
                  <p class="card-text mb-2">Litigation</p>
                </div>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center justify-content-center gap-4 py-6 px-4">
        <div class="text-center">
          <h2 class="mb-3">案例分享</h2>
          <p>以下實際案例，為保護當事人，有部分加以修改:</p>
        </div>
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
        <div v-if="!isLoading" class="row g-4">
          <div class="col-12 col-sm-6 col-md-3" v-for="item in data" :key="item.id">
            <div class="card h-100">
              <img :src="item.image" :alt="item.title" class="card-img-top" alt="case1">
              <div class="card-body d-flex flex-column justify-content-between">
                <div>
                  <h6 class="card-title">{{ item.title }}</h6>
                  <p class="card-text my-3">{{ item.description }}</p>
                </div>
                <a href="#" class="btn btn-dark rounded-0">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!isLoading && error">error:{{ error.statusMessage }}</div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.421695298304!2d121.53736907595524!3d24.98578304023034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346801ff1fcabc63%3A0x88f2b5cdf71d7a31!2zMjMx5paw5YyX5biC5paw5bqX5Y2A5YyX5paw6Lev5LiJ5q61MjEz6Jmf!5e0!3m2!1szh-TW!2stw!4v1730888692322!5m2!1szh-TW!2stw"
          width="100%" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
const isLoading = ref(false);

// const { data, status, error } = useFetch('/api/case');

// useFetch: ( 等於useAsyncData(key, () => $fetch(url)) ) 
const { data, error } = useFetch('/api/case', {
  async onRequest() {
    isLoading.value = true;
  },
  onResponse() {
    // 請求完成後將 isLoading 設置為 false
    setTimeout(() => {
      console.log('onResponse');
      console.log('error', error.value);
      
      // 模擬延遲，並設置 loading 狀態
      isLoading.value = false;
    }, 2000);  // 模擬延遲
  },
  onError() {
    // 當發生錯誤時，設置 loading 為 false
    isLoading.value = false;
    console.log('error:', error.value);
  }
});

// useAsyncData:
// const { data, error, isLoading } = useAsyncData('exampleData', async () => {
//   // 模擬延遲時間（隨機延遲 0 到 3 秒）
//   // const delayTime = Math.random() * 3000;
//   await new Promise(resolve => setTimeout(resolve, 4000)); // 模擬延遲

//   // 呼叫 API 並返回資料
//   const response = await $fetch('/api/case');
//   return response;
// });

</script>

<style lang="scss" scoped>

.bg-banner {
  position: relative;
  background-image: url("/images/bg-image.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  mask-image: linear-gradient(93deg, transparent 22%, white 23%);
  -webkit-mask-image: -webkit-linear-gradient(93deg, transparent 22%, white 23%);
  
  .bg-cover {
    background-color: #8c8c8c;
    opacity: 0.8;
    width: 100%;
    height: 100vh;
  }
  
  .index-paragraph {
      width: 80%;
      left: 10%;
      top: 10%;

    @include media-sm {
      width: 70%;
      left: 10%;
      top: 20%;
    }
    @include media-md {
      width: 50%;
      left: 10%;
      top: 20%;
   
    }
  }
}
.bg-service{
  padding-top: 180px;
  padding-bottom: 100px;
  clip-path: polygon(0% 100%, 0% 5%, 100% 0%, 100% 100%);
  -webkit-clip-path: polygon(0% 100%, 0% 5%, 100% 0%, 100% 100%);

  @include media-md {
    clip-path: polygon(0% 100%, 0% 15%, 100% 0%, 100% 100%);
    -webkit-clip-path: polygon(0% 100%, 0% 15%, 100% 0%, 100% 100%);
	}

  @include media-lg {
    clip-path: polygon(0% 100%, 0% 23%, 100% 0%, 100% 100%);
    -webkit-clip-path: polygon(0% 100%, 0% 23%, 100% 0%, 100% 100%);
	}
}

</style>
