<template>
  <Navbar/>
  <router-view />
  <footer class="py-3">
    <div class="container d-flex align-items-center">
      <p class="mb-0">&copy; 2021 Jioumi All rights reserved</p>
      <router-link to="/admin/products" class="text-decoration-none ms-auto">
        Admin
      </router-link>
    </div>
  </footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>
