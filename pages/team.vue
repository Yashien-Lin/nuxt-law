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
      <div class="w-100 d-flex flex-wrap justify-content-end">
        <button type="button" class="btn btn-primary text-white" @click="addTeam">增加成員</button>
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
        <div v-if="!isLoading && data.data?.length != 0" class="row g-4">
          <div class="col-12 col-sm-6 col-md-3" v-for="item in data.data" :key="item.id">
            <div class="card h-100">
              <img :src="item.image" :alt="item.image" class="card-img-top" alt="case1">
              <div class="card-body d-flex flex-column justify-content-between px-lg-4">
                <div class="mb-2">
                  <h3 class="card-title fs-5">
                    {{ item.name }}
                    <span class="fs-6">{{ item.title }}</span>
                  </h3>
                  <ul class="mb-2">
                    <p class="fw-bold">經歷:</p>
                    <li v-for="(experience, index) in item.experiences" :key="index" class="card-text">{{ experience }}</li>
                  </ul>
                  <ul class="mb-2">
                    <p class="fw-bold">負責領域:</p>
                    <li v-for="(field, index) in item.fields" :key="index" class="card-text">{{ field }}</li>
                  </ul>
                </div>
                <a href="#" class="btn btn-blue rounded-0 text-white mb-2">Read More</a>
                <a href="#" class="btn btn-danger rounded-0 text-white" @click="deleteTeam(item._id)">Delete, id:{{ item._id }}</a>
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
  _id: '',
  name: '測試名字',
  fields: ['民事', '刑事', '商法', '國際法'],
  image: '/images/member2.jpg',
  experiences: [],
  title: '首席律師',
});

// 取得資料
const { data: data, error } = useFetch('/api/team', {
  async onRequest() {
    isLoading.value = true;
  },
  onResponse() {
    // 請求完成後將 isLoading 設置為 false
    setTimeout(() => {
      console.log('onResponse:', data.value);
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

// 新增成員
const { data: postData, refresh: addTeam} = useFetch('/api/team', {
  method: 'POST',
  body: form.value,
  async onRequest() {
    isLoading.value = true;
    console.log('post onRequest:', postData.value);
  },
  onResponse() {
    // 請求完成後將 isLoading 設置為 false
    setTimeout(() => {
      console.log('post onResponse:', postData.value);
      console.log('post error:', error.value);
      
      // 模擬延遲，並設置 loading 狀態
      isLoading.value = false;
    }, 500);  // 模擬延遲
  },
  onError() {
    // 當發生錯誤時，設置 loading 為 false
    isLoading.value = false;
    console.log('post error:', error.value);
  }
})
watch(postData, () => {
  // if (postData.value) {
    data.value.data = postData.value;
    console.log('watch data:', data.value);
  // }
})

// 刪除成員
// const deleteData = ref([]);
const deleteTeam = async (id) => {
  const deleteData = await $fetch(`/api/team/${id}`, {
    method: 'DELETE',
    immediate: false,
    async onRequest() {
      isLoading.value = true;
      // console.log('delete onRequest:', deleteData.value);
    },
    onResponse() {
      // 請求完成後將 isLoading 設置為 false
      setTimeout(() => {
        console.log('delete onResponse:', deleteData);
        console.log('delete error:', error.value);
        
        // 模擬延遲，並設置 loading 狀態
        isLoading.value = false;

      }, 500);  // 模擬延遲
    },
    onError() {
      // 當發生錯誤時，設置 loading 為 false
      isLoading.value = false;
      console.log('post error:', error.value);
    }
  })
}







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
