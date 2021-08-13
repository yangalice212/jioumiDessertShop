<template>
  <Loading :isLoading="isLoading" />
  <div class="container-fluid container-lg">
    <div class="d-flex justify-content-end my-4">
      <button
        type="button"
        class="btn btn-outline-warning me-2 d-flex align-items-center"
        @click.prevent="openModal({}, 'new')"
      >
        <span class="material-icons"> add </span>Add Products
      </button>
      <button
        type="button"
        class="btn btn-outline-danger d-flex align-items-center"
        @click.prevent="delProducts"
      >
        <span class="material-icons"> delete </span>Delete All
      </button>
    </div>
    <div class="table-responsive">
      <table class="table text-warning" style="min-width: 700px;">
        <thead>
          <tr>
            <th width="20%">Category</th>
            <th width="20%">Name</th>
            <th width="15%">Origin Price</th>
            <th width="15%">Price</th>
            <th width="15%">Enabled</th>
            <th width="15%" class="text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>
              {{ item.category }}
            </td>
            <td>{{ item.title }}</td>
            <td class="fw-bold">NT$ {{ item.origin_price }}</td>
            <td class="fw-bold">NT$ {{ item.price }}</td>
            <td>
              <span class="form-check form-switch" v-if="item.is_enabled">
                <input
                  class="form-check-input"
                  type="checkbox"
                  checked
                  @click="updateEnabled(item)"
                  :id="item.id"
                />
                <label class="form-check-label" :for="item.id">啟用</label>
              </span>
              <span class="form-check form-switch" v-else
                ><input
                  class="form-check-input"
                  type="checkbox"
                  @click="updateEnabled(item)"
                  :id="item.id"
                />
                <label class="form-check-label text-gray" :for="item.id">未啟用</label>
              </span>
            </td>
            <td class="text-center">
              <a href="#" class="me-1" @click.prevent="openModal(item, 'edit')">
                <span class="material-icons">
                  edit
                </span>
              </a>
              <a href="#" @click.prevent="delProduct(item.id)">
                <span class="material-icons">
                  delete
                </span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <ProductModal
    :product="tempProduct"
    :is-new="isNew"
    @update-product="updateProduct"
    ref="productModal"
  />
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';

export default {
  name: 'Products',
  data() {
    return {
      products: [],
      tempProduct: { imagesUrl: [] },
      pagination: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
            this.isLoading = false;
          } else {
            this.$swal({
              title: res.data.message,
              icon: 'error',
              showCancelButton: true,
              cancelButtonText: '取消',
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openModal(item, status) {
      const { productModal } = this.$refs;
      this.isNew = window.event.target.dataset.action;
      this.$refs.productModal.imgData = null;
      switch (status) {
        case 'new':
          this.isNew = true;
          this.tempProduct = { imagesUrl: [] };
          productModal.openModal();
          break;
        case 'edit':
          this.isNew = false;
          this.tempProduct = { ...item };
          if (!this.tempProduct.imagesUrl) {
            this.tempProduct.imagesUrl = [];
          }
          productModal.openModal();
          break;
        default:
          break;
      }
    },
    updateProduct() {
      this.isLoading = true;
      const { productModal } = this.$refs;
      const method = this.isNew ? 'post' : 'put';
      const id = this.isNew ? '' : `${this.tempProduct.id}`;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`;

      this.$http[method](url, { data: this.tempProduct })
        .then((res) => {
          if (res.data.success) {
            this.$swal({
              title: res.data.message,
              icon: 'success',
            });
            this.getProducts();
            productModal.hideModal();
            this.isLoading = false;
          } else {
            this.$swal({
              title: res.data.message,
              icon: 'error',
              showCancelButton: true,
              cancelButtonText: '取消',
            });
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateEnabled(item) {
      this.isLoading = true;
      this.tempProduct = { ...item };
      if (this.tempProduct.is_enabled) {
        this.tempProduct.is_enabled = 0;
      } else {
        this.tempProduct.is_enabled = 1;
      }
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
      this.$http
        .put(url, { data: this.tempProduct })
        .then((res) => {
          if (res.data.success) {
            this.$swal({
              title: res.data.message,
              icon: 'success',
            });
            this.getProducts();
            this.isLoading = false;
          } else {
            this.$swal({
              title: res.data.message,
              icon: 'error',
              showCancelButton: true,
              cancelButtonText: '取消',
            });
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delProduct(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
      this.$swal({
        icon: 'warning',
        title: '確定要刪除嗎？',
        showCancelButton: true,
        confirmButtonText: '確定',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          this.isLoading = true;
          this.$http.delete(url).then((res) => {
            if (res.data.success) {
              this.isLoading = false;
              this.$swal(res.data.message, '', 'success');
              this.getProducts();
            } else {
              this.$swal({
                title: res.data.message,
                icon: 'error',
                showCancelButton: true,
                cancelButtonText: '取消',
              });
            }
          });
        }
      });
    },
    delProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`;
      this.$swal({
        icon: 'warning',
        title: '確定要全部刪除嗎？',
        showCancelButton: true,
        confirmButtonText: '確定',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          this.isLoading = true;
          this.$http.delete(url).then((res) => {
            if (res.data.success) {
              this.isLoading = false;
              this.$swal(res.data.message, '', 'success');
              this.getProducts();
            } else {
              this.$swal({
                title: res.data.message,
                icon: 'error',
                showCancelButton: true,
                cancelButtonText: '取消',
              });
            }
          });
        }
      });
    },
  },
};
</script>
