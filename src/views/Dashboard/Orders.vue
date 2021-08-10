<template>
  <!-- <Loading :isLoading="isLoading" /> -->
  <div class="container-fluid container-lg">
    <div class="d-flex justify-content-end my-4">
      <button
        type="button"
        class="btn btn-outline-danger d-flex align-items-center"
        @click.prevent="delOrders"
      >
        <span class="material-icons"> delete </span>Delete All
      </button>
    </div>
    <div class="table-responsive">
      <table class="table text-warning" style="min-width: 650px;">
        <thead>
          <tr>
            <th width="15%">Date</th>
            <th width="25%">Email</th>
            <th width="15%">Detail</th>
            <th width="15%">Total</th>
            <th width="15%">isPaid</th>
            <th width="15%" class="text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td>
              {{ $filter.date(item.create_at) }}
            </td>
            <td>{{ item.user.email }}</td>
            <td class="fw-bold"><a href="#">Order Detail</a></td>
            <td class="fw-bold">NT$ {{ item.total }}</td>
            <td>
              <span class="form-check form-switch" v-if="item.is_paid">
                <input
                  class="form-check-input"
                  type="checkbox"
                  checked
                  @click="updateOrder(item)"
                  :id="item.id"
                />
                <label class="form-check-label" :for="item.id">已付款</label>
              </span>
              <span class="form-check form-switch" v-else
                ><input
                  class="form-check-input"
                  type="checkbox"
                  @click="updateOrder(item)"
                  :id="item.id"
                />
                <label class="form-check-label text-gray" :for="item.id">未付款</label>
              </span>
            </td>
            <td class="text-center">
              <a href="#" class="me-1" @click.prevent="openModal(item, 'edit')">
                <span class="material-icons">
                  remove_red_eye
                </span>
              </a>
              <a href="#" @click.prevent="delOrder(item.id)">
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
  <!-- <ProductModal /> -->
</template>

<script>
// import ProductModal from '@/components/ProductModal.vue';

export default {
  name: 'Orders',
  data() {
    return {
      orders: [],
      tempOrders: {},
      pagination: {},
      isNew: false,
      isLoading: false,
    };
  },
  // components: {
  //   ProductModal,
  // },
  mounted() {
    this.getOrders();
  },
  methods: {
    getOrders(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders;
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
      const { orderModal } = this.$refs;
      this.tempOrder = { ...item };
      switch (status) {
        case 'new':
          this.isNew = true;
          orderModal.openModal();
          break;
        case 'edit':
          this.isNew = false;
          orderModal.openModal();
          break;
        default:
          break;
      }
    },
    updateOrder() {
      this.isLoading = true;
      const { orderModal } = this.$refs;
      const method = this.isNew ? 'post' : 'put';
      const id = this.isNew ? '' : `${this.tempOrder.id}`;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`;

      this.$http[method](url, { data: this.tempOrder })
        .then((res) => {
          if (res.data.success) {
            this.$swal({
              title: res.data.message,
              icon: 'success',
            });
            this.getOrders();
            orderModal.hideModal();
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
    delOrder(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
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
              this.getOrders();
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
    delOrders() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`;
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
              this.getOrderss();
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
