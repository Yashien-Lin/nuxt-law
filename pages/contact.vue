<template>
  <div class="container-with-navbar">
    <div class="title-wrap text-center my-6 py-5 bg-light">
      <h3 class="mb-3">聯絡我們</h3>
      <p class="lh-lg">
        如需法律諮詢或了解更多服務內容，歡迎透過電話或電子郵件與我們聯繫。
        我們的專業團隊隨時準備為您提供協助，成為您值得信賴的法律夥伴!
      </p>
    </div>
    <div class="main-content row justify-content-center align-items-center gap-3">
      <form class="col-12 col-lg-6 row g-3">
        <h3 class="mt-0">諮詢表單</h3>
        <div class="col-12 col-md-6">
          <input type="text" class="form-control" placeholder="名字">
        </div>
        <div class="col-12 col-md-6">  
          <input type="tel" class="form-control" placeholder="連絡電話">
        </div>
        <div class="col-12 col-md-6">
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp">
        </div>
        <div class="col-12 col-md-6">
          <input type="text" class="form-control" placeholder="主旨">
        </div>
        <div class="col-12">
          <textarea class="form-control" rows="6" cols="50" placeholder="諮詢內容"></textarea>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary text-white w-100">Submit</button>
        </div>
      </form>
      <div class="col-12 col-lg-6">
        <img src="/images/contact.jpg" class="img-fluid" alt="contact">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-wrap {
  padding: 2.5rem;

  @include media-xl {
    padding-right: 160px;
    padding-left: 160px;
  }
}
</style>
