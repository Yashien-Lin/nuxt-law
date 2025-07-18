<template>
  <a href="https://www.line.me/tw/" target="_blank" class="line-icon">
    <TheImage src="/images/line_icon.png" alt="line_icon" />
  </a>
</template>

<style lang="scss" scoped>
.line-icon{
  position: fixed;
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: center;
  bottom: 100px;
  right: 20px;
  z-index: 999;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.8);
  border-radius: 16px;
  img{
    width: 65px;
    height: 65px;
  }
}
</style>
