<template>
  <div class="main-content row align-items-center text-center justify-content-center gap-3 gap-lg-4 mb-0">
    <div class="row w-100 justify-content-center gy-3 mb-3">
      <div v-for="service in serviceData?.data" :key="service.id" class="col-12 col-sm-6 col-md-3">
        <nuxt-link to="/service" class="card d-flex justify-content-center align-items-center p-2 text-center h-100">
          <svg fill="#000000" width="70px" height="70px" viewBox="-2 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M9.316 14.722a.477.477 0 0 1-.475.475H1.433a.477.477 0 0 1-.475-.475v-.863a.477.477 0 0 1 .475-.475h7.408a.476.476 0 0 1 .475.475zm-2.767-2.587a.552.552 0 0 1-.392-.163L2.96 8.776a.554.554 0 0 1 .784-.784L6.94 11.19a.554.554 0 0 1-.392.946zm7.33.992L9.435 8.682l1.085-1.084-3.173-3.173-2.97 2.97 3.173 3.172 1.102-1.101 4.445 4.445a.554.554 0 1 0 .784-.784zm-2.33-5.993a.552.552 0 0 1-.391-.162L7.96 3.775a.554.554 0 1 1 .784-.784l3.196 3.197a.554.554 0 0 1-.391.946z"/></svg>
          <div>
            <h6 class="card-text my-2">{{ service.name }}</h6>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { data: serviceData, error } = await useFetch(`${config.public.apiBase}/api/services`, {
  server: true,
  lazy: false,
  onRequestError({ error }) {
    console.log('Service request error:', error);
  },
  onError({ error }) {
    console.log('Service fetch error:', error);
  }
});

</script>

<style lang="scss" scoped>

a {
  transition: box-shadow 0.3s ease, transform 0.1s ease; /* 平滑過渡效果 */
}

a:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); /* 增加陰影 */
  transform: scale(1.03); /* 提升效果 (可選) */
  background-color: $primary-40;
  color: #fff;
  outline: 1px solid $primary-60;

  .cf-icon-svg {
    fill: #fff;
  }
}

</style>