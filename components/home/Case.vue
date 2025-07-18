<template>
  <div class="main-content d-flex flex-column align-items-center justify-content-center gap-4 px-3 py-5">
    <div class="text-center">
      <h2 class="mb-3">案例分享</h2>
      <p>
        我們相信，法律不是冰冷的文字，而是能幫助人解決問題的工具。
        無論是家庭、財產、還是工作上的困擾，<br>每一位來找我們的人，都有自己的故事。
        以下分享幾個我們陪伴客戶走過的真實案例:
      </p>
    </div>
    <div class="row g-4">
      <div class="col-12 col-sm-6 col-md-3" v-for="item in caseData?.data" :key="item.id">
        <div class="card h-100">
          <TheImage :src="`${config.public.apiBase}${item.image.url}`" :alt="item.title" class="card-img-top" />
          <div class="card-body h-100 d-flex flex-column justify-content-between">
            <div>
              <h6 class="card-title text-primary-120 mb-4">{{ item.title }}</h6>
              <div class="card-text mb-3">
                <div class="mb-3">
                  <div class="fw-bold">案件簡介</div>
                  <p class="multiline-truncate-3">{{ item.description }}</p>
                </div>
                <div class="mb-3">
                  <div class="fw-bold">我們的協助</div>
                  <p class="multiline-truncate-4">{{ item.solution }}</p>
                </div>
              </div>
            </div>
            <nuxt-link to="/case" class="btn btn-primary rounded-0 text-white">看更多 ...</nuxt-link>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const config = useRuntimeConfig();
const { data: caseData, error } = await useFetch(`${config.public.apiBase}/api/cases?populate=*`, {
  server: true,
  lazy: false,
  onRequestError({ error }) {
    console.error('Case request error:', error);
  },
  onError({ error }) {
    console.error('Case fetch error:', error);
  }

});

</script>

<style lang="scss" scoped>
.multiline-truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 顯示幾行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.multiline-truncate-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4; /* 顯示幾行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-img-top {
  height: fit-content;
}

</style>