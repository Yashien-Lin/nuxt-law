<template>
  <div class="container-with-navbar">
    <div class="title-wrap text-center bg-light">
      <h3 class="mb-3">團隊成員</h3>
      <p class="lh-lg">
        我們的團隊由多位專業且經驗豐富的律師組成，涵蓋民事、刑事、商業法律、智慧財產權及家庭法律等多個領域。
        每位成員皆擁有深厚的法律專業背景，並致力於提供貼心且高效的服務。
        我們相信團隊合作能帶來最全面的法律支援，為客戶打造最優化的解決方案，成為您值得信賴的夥伴。
      </p>
    </div>
    <div class="d-flex flex-column align-items-center justify-content-center gap-4">
      <div class="row g-6 main-content">
        <div class="text-center mt-0">
          <h2 class="mb-3">專業律師</h2>
        </div>
        <div class="col-12 col-sm-6 col-md-4" v-for="item in TeamData?.data" :key="item.id">
          <div class="card h-100">
            <TheImage :src="config.public.apiBase + item.avatar?.url" :alt="item.avatar?.url" className="card-img-top"/>
            <div class="card-body d-flex flex-column justify-content-between px-lg-4">
              <div class="mb-2">
                <h3 class="card-title fs-5">
                  {{ item.name }}
                  <span class="fs-6">{{ getTitle(item.title) }}</span>
                </h3>
                <ul class="mb-2">
                  <p class="fw-bold">經歷:</p>
                  <li v-for="(experience, index) in item.experiences" :key="`experience_${index}`" class="card-text">{{ experience.text }}</li>
                </ul>
                <ul class="mb-2">
                  <p class="fw-bold">負責領域:</p>
                  <li v-for="(field, index) in item.fields" :key="`field_${index}`" class="card-text">{{ field.text }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const getTitle = (title) => title.slice(1); // 取得 title

// 取得資料
const config = useRuntimeConfig();
const { data: TeamData, error } = await useFetch(`${config.public.apiBase}/api/authors?populate=*`, {
  server: true,
  lazy: false,
  onRequestError({ error }) {
    console.log('Team page request error:', error);
  },
  onError({ error }) {
    console.log('Team page fetch error:', error);
  }
});

</script>

<style lang="scss" scoped>
.card-img-top {
  object-fit: cover;
  object-position: top;
  max-height: 450px;
  height: fit-content;
}
</style>
