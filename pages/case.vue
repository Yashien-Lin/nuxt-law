<template>
  <div class="container-with-navbar">
    <div class="title-wrap text-center bg-light">
      <h3 class="mb-3">成功案例</h3>
      <p class="lh-lg">
        我們曾成功協助客戶解決多項複雜案件，包括大型企業併購中的法律風險評估與合約談判，以及高爭議性民事訴訟的勝訴。<br />
        團隊專注於為客戶量身打造創新且務實的解決方案，並在智慧財產權保護及刑事辯護領域取得多項突破性成果。
        我們的專業與努力，讓每一位客戶在法律挑戰中獲得最佳保障，並深受信賴與肯定。
      </p>
    </div>
    <div class="row g-4 main-content">
      <div
        class="card rounded-0 mt-0 py-3"
        v-for="item in caseData?.data || []"
        :key="item.id"
      >
        <div class="row g-0">
          <div class="col-md-4">
            <TheImage
              :src="`${config.public.apiBase}${item.image?.url}`"
              :alt="item.title"
              class="object-fit-image"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <div class="card-text lh-lg">
                <div class="mb-2">
                  <div class="fw-bold">案件簡介</div>
                  <p>{{ item.description }}</p>
                </div>
                <div class="mb-2">
                  <div class="fw-bold">我們的協助</div>
                  <p>{{ item.solution }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { data: caseData, error: caseError } = await useCases();

if (caseError.value) {
  console.warn("Failed to fetch cases, fallback to empty array");
  caseData.value = [];
}
</script>

<style lang="scss" scoped>
.card {
  border: none;
  @include media-md {
    border-bottom: 1px solid $border-color;
  }
  .row {
    border-bottom: 1px solid $border-color;
    @include media-md {
      border-bottom: none;
    }
  }
}
</style>
