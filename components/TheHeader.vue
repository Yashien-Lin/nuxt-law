<template>
  <nav>
    <NuxtLink to="/" class="h-100 d-flex align-items-center">
      <img src="/images/logo.png" alt="logo" class="h-100 me-1">
      <h1 class="fs-6">茂宇聯合法律事務所</h1>
    </NuxtLink>
    <ul class="nav-links">
      <li>
        <NuxtLink to="/about">關於茂宇</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/team">團隊成員</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/service">服務項目</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/case">案例分享</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">聯絡我們</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  height: $header-height-sm;
  color: #fff;
  background-color: #333;
  z-index: 1;

  @include media-md() {
    height: $header-height;
  }

  h1 {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
  }

  .nav-links {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 1.5rem;
    font-weight: bold;

    a {
      text-decoration: none;
      color: #fff;  
    }
  }
}
</style>