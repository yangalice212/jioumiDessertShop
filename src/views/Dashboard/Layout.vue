<template>
  <div class="container-fluid">
    <div class="row">
      <aside
        class="sidebar vh-100 sticky-top col-lg-3 py-3 lh-lg
        d-none d-lg-flex flex-column border-end border-primary"
      >
        <div class="d-flex justify-content-between">
          <router-link to="/">
            <img src="../../assets/img/logo.svg" alt="啾咪甜點舖" class="mb-3" />
          </router-link>
        </div>
        <ul class="nav flex-column mb-auto">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link d-flex align-items-center"
              ><span class="material-icons me-2">shopping_bag </span>Products</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/orders" class="nav-link d-flex align-items-center"
              ><span class="material-icons me-2"> receipt_long </span>Orders</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupons" class="nav-link d-flex align-items-center"
              ><span class="material-icons me-2"> local_activity </span>Coupons</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupons" class="nav-link d-flex align-items-center"
              ><span class="material-icons me-2"> article </span>Articles</router-link
            >
          </li>
        </ul>
        <a
          href="#"
          class="d-flex align-items-center text-decoration-none ps-3"
          @click.prevent="signout"
          ><span class="material-icons me-2"> logout </span>Logout</a
        >
      </aside>
      <div class="col-lg-9 py-3">
        <div class="text-end d-lg-none">
          <button
            class="bg-transparent border-0 text-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span class="material-icons">
              menu
            </span>
          </button>
        </div>
        <ul class="collapse nav flex-column flex-sm-row justify-content-end" id="navbarNavDropdown">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link d-flex align-items-center"
              ><span class="material-icons me-2">shopping_bag </span>Products</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/orders" class="nav-link d-flex align-items-center"
              ><span class="material-icons me-2"> receipt_long </span>Orders</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupons" class="nav-link d-flex align-items-center"
              ><span class="material-icons me-2"> local_activity </span>Coupons</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupons" class="nav-link d-flex align-items-center"
              ><span class="material-icons me-2"> article </span>Articles</router-link
            >
          </li>
          <a href="#" class="nav-link d-flex align-items-center" @click.prevent="signout"
            ><span class="material-icons me-2"> logout </span>Logout</a
          >
        </ul>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      checkLoginStatus: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const url = `${process.env.VUE_APP_API}api/user/check`;
        this.$http
          .post(url)
          .then((res) => {
            if (res.data.success) {
              this.checkLoginStatus = true;
            } else {
              alert(res.data.message);
              this.$router.push('/login');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert('您尚未登入');
        this.$router.push('/login');
      }
    },
    signout() {
      document.cookie = 'hexToken=;expires=;';
      alert('請重新登入');
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  img {
    height: 35px;
  }
  font-size: 24px;
  font-weight: bold;
}
</style>
