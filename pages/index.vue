<template>
  <div class="container-with-navbar">
    <!-- 輪播 -->
    <HomeBanner />  
    <!-- 願景 -->
    <HomeVision />
    <!-- 服務項目 -->
    <HomeService />
    <!-- 案例分享 -->
    <HomeCase />
    <!-- google map -->
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.421695298304!2d121.53736907595524!3d24.98578304023034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346801ff1fcabc63%3A0x88f2b5cdf71d7a31!2zMjMx5paw5YyX5biC5paw5bqX5Y2A5YyX5paw6Lev5LiJ5q61MjEz6Jmf!5e0!3m2!1szh-TW!2stw!4v1730888692322!5m2!1szh-TW!2stw"
        width="100%" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</template>

<script setup>

// 新增資料 (遠端MongoDB Atlas)
// const form = ref({});
// const submit = async () => {
//   const response = await $fetch('/api/case', {
//     method: 'POST',
//     body: form.value
//   });
//   console.log(response);
// };

if (import.meta.prerender) {
  console.log('prerender');
}

if (import.meta.client) {
  console.log('client');
}

if (import.meta.server) {
  console.log('server');
}

</script>

<style lang="scss" scoped>

</style>
