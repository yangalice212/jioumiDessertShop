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
      <a href="#" class="d-flex align-items-center text-decoration-none"
        ><span class="material-icons">
          local_mall
        </span></a
      >
    </div>
  </nav>
  <router-view/>
  <footer class="py-3">
    <div class="container d-flex align-items-center">
      <p class="mb-0">&copy; 2021 Jioumi All rights reserved</p>
      <router-link to="/admin/products"
        class="text-decoration-none ms-auto">
        Admin
      </router-link>
    </div>
  </footer>
</template>

<style lang="scss">
.navbar-brand {
  img {
    width: 100%;
    height: 38px;
  }
}
</style>
