<template>
  <div class="footer-links">
    <p>© 2024 茂宇聯合法律事務所 All Rights Reserved</p>
  </div>
  <!-- <ul class="footer-links">
    <li>
      <NuxtLink>
        User Info
      </NuxtLink>
    </li>
    <li>
      <a href="">Social Links</a>
    </li>
    <li>
      <a href="">About Us</a>
    </li>
    <li>
      <a href="">Customer Service</a>
    </li>
  </ul> -->
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

  @include media-md() {
    height: $footer-height;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>
