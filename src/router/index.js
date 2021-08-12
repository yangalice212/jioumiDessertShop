import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/Product.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/Cart.vue'),
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import('../views/Checkout.vue'),
      },
      {
        path: '/check/:order',
        name: 'check',
        component: () => import('../views/Check.vue'),
      },
      {
        path: '/finish/:order',
        name: 'finish',
        component: () => import('../views/Finish.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Dashboard/Layout.vue'),
    children: [
      {
        path: 'products',
        name: 'Adminproducts',
        component: () => import('../views/Dashboard/Products.vue'),
      },

      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/Dashboard/Orders.vue'),
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('../views/Dashboard/Coupons.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
