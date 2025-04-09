<template>
  <div class="login-bg">
    <div class="login-pic">
    </div>
   <slot></slot>
  </div>
</template>

<style lang="scss">
.login-bg {
  // background: url('/images/login/login-bg.jpg') no-repeat center center;
  // background-size: cover;
  // height: 100vh;
  // width: 100vw;
  // display: flex;

  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), 
            url('/images/login/login-bg.jpg') center/cover no-repeat;
  padding: 50px;
  color: white;
  height: 100vh;
  width: 100vw;
}

.login-pic {
  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), 
  url('/images/login/login-pic.jpg') no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 30vw;
  position: absolute;
  top: 0;
  right: 0;  // z-index: -1;
}

</style>