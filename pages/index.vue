<template>
  <div class="container-with-navbar mb-0">
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.179138307729!2d121.47218787520214!3d25.027994038533695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a84733e915f3%3A0xb60f88e892b016dc!2zMjIw5paw5YyX5biC5p2_5qmL5Y2A6ZuZ5Y2B6Lev5LqM5q61MTQz6Jmf!5e0!3m2!1szh-TW!2stw!4v1747292219183!5m2!1szh-TW!2stw"
        width="100%" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script setup>

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
