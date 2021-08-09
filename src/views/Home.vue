<template>
  <div class="d-sm-flex align-items-center vh-100 banner">
    <section class="banner-img h-100"></section>
    <section class="banner-text p-5 d-flex flex-column justify-content-center">
      <h2>Nature/ Deicious/</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ipsa debitis, veritatis
        non recusandae fugit eveniet minus, dignissimos corporis, reiciendis reprehenderit
        repellat incidunt alias facere eaque id quaerat! Eaque, nobis.
      </p>
      <router-link
        to="/products"
        class="banner-link d-flex align-items-center text-decoration-none w-25 h5"
      >
        Shop
        <span class="material-icons">
          arrow_forward_ios
        </span>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.banner {
  margin-top: 70px;
  &-img,
  &-text {
    width: 100%;
  }
  &-img {
    background: url(../assets/img/banner.jpg)
      center;
    background-size: cover;
  }
  &-link {
    font-weight: bolder;
    &:hover {
      transition: all 0.5s;
      margin-left: 25px;
    }
  }

}
</style>
