<template>
  <ClientOnly>
    <Splide :options="{ rewind: true, lazyLoad: 'nearby' }" aria-label="My Favorite Images" class="splide-container">
      <SplideSlide class="splide-slide">
        <img class="splide-image" src="/images/bg-image.jpg" alt="Sample 1">
        <div class="overlay"></div>
        <div class="index-paragraph position-absolute d-flex flex-column align-items-start py-4 px-5 p-md-6">
          <p class="p-3 text-white">
            本律師事務所致力於為客戶提供專業、高效且貼心的法律服務。
            我們的團隊由多位經驗豐富的律師組成，專精於民事、刑事、商業及勞動法等多個領域，旨在協助客戶解決複雜的法律問題。
            我們堅信每一位客戶的需求都值得被傾聽與重視，並以誠信、公正為核心，提供客製化的法律解決方案，成為您最可靠的法律夥伴！
          </p>
          <nuxt-link class="btn btn-black px-4 py-2 m-3" to="/about">About US</nuxt-link>
        </div>
      </SplideSlide>
      <SplideSlide class="splide-slide">
        <img class="splide-image" src="/images/case2.jpg" alt="case2">
        <div class="overlay"></div>
      </SplideSlide>
    </Splide>
  </ClientOnly>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

</script>

<style lang="scss" scoped>
.splide-container {
  height: calc(100vh - $footer-height-sm);
  @include media-sm {
    height: calc(100vh - $footer-height);
  }
  .splide-slide {
    height: 100%;
    .splide-image {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $dark-30;
      opacity: 0.8;
    }
  }
}


.index-paragraph {
  left: 0;
  top: 0;
  p {
    line-height: 2.5;
  }

  @include media-sm {
    top: 36px;
  }
  @include media-md {
    left: 50px;
    top: 60px;
    line-height: 1.5rem;
    p {
      font-size: 1.05rem; 
      width: 80%;
    }
  }
  @include media-lg {
    left: 50px;
    top: 80px;
    p {
      font-size: 1.125rem; 
      width: 70%;
    }
  }
  @include media-xl {
    left: 50px;
    top: 90px;
    p {
      font-size: 1.25rem; 
      width: 60%;
    }
  }
}
</style>