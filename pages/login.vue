<template>
  <div class="login-page">
    <h1>Login</h1>
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'login'
})
</script>
