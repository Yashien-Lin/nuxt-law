<template>
  <nav>
    <NuxtLink to="/" class="h-100">
      <img src="/images/logo.png" alt="logo" class="h-100">
    </NuxtLink>
    <ul class="nav-links">
      <li>
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">
          About
        </NuxtLink>
      </li>
      <li>
          <NuxtLink to="/team">Our Team</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/case">Cases</NuxtLink>
        </li>
      <li>
        <NuxtLink to="/contact">
          Contact
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login">
          Log in
        </NuxtLink>
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