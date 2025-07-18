<template>
  <div class="footer-links">
    <!-- <p>© 2025 茂宇聯合法律事務所 All Rights Reserved</p> -->
    <p>© 2025 正茂聯合法律事務所 All Rights Reserved</p>
  </div>
</template>

<style lang="scss" scoped>
.footer-links {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 1rem;
  padding: 0;
  height: $footer-height-sm;
  color: #fff;
  background-color: #333;
  list-style: none;
  font-size: 0.875rem;

  @include media-md {
    height: $footer-height;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>
