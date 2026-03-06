<template>
  <nav class="navbar">
    <div class="navbar-container w-100 position-relative d-flex">
      <!-- LOGO -->
      <NuxtLink to="/" class="d-flex align-items-center">
        <img
          src="/images/logo.png"
          alt="logo"
          width="64px"
          height="64px"
          class="me-1"
        />
        <h1 class="fs-6">正茂聯合法律事務所</h1>
      </NuxtLink>
      <!-- icon -->
      <input type="checkbox" id="navbarBtn" name="navbarBtn" v-model="isOpen" />
      <div class="navbar-button" :class="{ open: isOpen }">
        <div class="navbar-icon"></div>
      </div>
      <!-- menu -->
      <ul class="nav-menu">
        <li class="nav-item">
          <NuxtLink to="/about">關於正茂</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/team">團隊成員</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/service">服務項目</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/case">案例分享</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const isOpen = ref(false);
const route = useRoute();

watch(route, () => {
  isOpen.value = false;
});
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 24px;
  height: $header-height-sm;
  color: #fff;
  background-color: #333;
  z-index: 1;

  @include media-md() {
    height: $header-height;
  }

  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
  }

  .nav-menu {
    display: flex;
    font-weight: bold;
    position: fixed;
    background-color: #333;
    flex-direction: column;
    top: 0;
    right: 0;
    height: 100vh;
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);
    padding: 100px 0 0 0;
    font-size: 1.25rem;
    gap: 2.5rem;
    text-align: center;
    width: 100%;

    @include media-md {
      position: static;
      flex-direction: row;
      font-size: 1rem;
      height: auto;
      width: auto;
      padding: 0;
      transform: translateX(0);
    }

    a {
      position: relative;
      padding-bottom: 5px;
      color: #fff;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2.5px;
        width: 0%;
        background-color: $primary-80;
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  input[type="checkbox"]:checked ~ .nav-menu {
    transform: translateX(0);
  }

  input[type="checkbox"] {
    position: absolute;
    height: 32px;
    width: 32px;
    top: 25px;
    right: 0;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  @include media-md {
    input[type="checkbox"],
    .navbar-button {
      display: none;
    }
  }

  .navbar-button {
    position: absolute;
    height: 32px;
    width: 32px;
    top: 0px;
    right: 0;
    z-index: 2;
    transition-duration: 0.3s;

    @include media-lg {
      display: none;
    }

    // 漢堡選單icon
    .navbar-icon {
      transition-duration: 0.3s;
      position: absolute;
      height: 3px;
      width: 30px;
      top: 40px;
      right: 0;
      background-color: $white;

      &::before {
        transition-duration: 0.3s;
        position: absolute;
        width: 30px;
        height: 3px;
        background-color: $white;
        content: "";
        top: -12px;
      }

      &::after {
        transition-duration: 0.3s;
        position: absolute;
        width: 30px;
        height: 3px;
        background-color: $white;
        content: "";
        top: 12px;
      }
    }

    &.open {
      .navbar-icon {
        transition-duration: 0.3s;
        background: transparent;

        &::before {
          transform: rotateZ(45deg) scaleX(1.25) translate(5px, 2px);
        }

        &::after {
          transform: rotateZ(-45deg) scaleX(1.25) translate(12px, -12px);
        }
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
