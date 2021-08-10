<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-white fixed-top">
    <div class="container">
      <h1 class="mb-0">
        <router-link to="/" class="navbar-brand">
          <img src="../assets/img/logo.svg" alt="啾咪甜點舖" />
        </router-link>
      </h1>
      <button
        class="navbar-toggler ms-auto me-1 border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              About/
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">
              Products/
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">
              Contact/
            </router-link>
          </li>
        </ul>
      </div>
      <ul class="list-unstyled d-flex mb-0">
        <li class="me-3">
          <router-link to="/wishlist" class="d-flex align-items-center text-decoration-none"
            ><span class="material-icons">
              favorite
            </span></router-link
          >
        </li>
        <li>
          <router-link to="/cart" class="d-flex align-items-center text-decoration-none"
            ><span class="material-icons">
              local_mall
            </span></router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar-brand {
  img {
    height: 38px;
  }
}
</style>
