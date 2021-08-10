<template>
  <!-- <Loading :isLoading="isLoading" /> -->
  <div class="container-fluid container-lg">
    <div class="d-flex justify-content-end my-4">
      <button
        type="button"
        class="btn btn-outline-warning me-2 d-flex align-items-center"
        @click.prevent="openModal({}, 'new')"
      >
        <span class="material-icons"> add </span>Add Coupons
      </button>
      <button
        type="button"
        class="btn btn-outline-danger d-flex align-items-center"
        @click.prevent="delCoupons"
      >
        <span class="material-icons"> delete </span>Delete All
      </button>
    </div>
    <div class="table-responsive">
      <table class="table text-warning" style="min-width: 650px;">
        <thead>
          <tr>
            <th width="20%">Title</th>
            <th width="15%">Percent</th>
            <th width="20%">Due Date</th>
            <th width="15%">Enabled</th>
            <th width="15%" class="text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coupons" :key="item.id">
            <td>
              {{ item.title }}
            </td>
            <td>{{ item.percent }} %</td>
            <td class="fw-bold">{{ $filter.date(item.due_date) }}</td>
            <td>
              <span class="form-check form-switch" v-if="item.is_enabled">
                <input
                  class="form-check-input"
                  type="checkbox"
                  checked
                  @click="updateCoupon(item)"
                  :id="item.id"
                />
                <label class="form-check-label" :for="item.id">啟用</label>
              </span>
              <span class="form-check form-switch" v-else
                ><input
                  class="form-check-input"
                  type="checkbox"
                  @click="updateCoupon(item)"
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
              <a href="#" @click.prevent="delCoupon(item.id)">
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
  name: 'Coupons',
  data() {
    return {
      coupons: [],
      tempCoupon: {},
      pagination: {},
      isNew: false,
      isLoading: false,
    };
  },
  // components: {
  //   ProductModal,
  // },
  mounted() {
    this.getCoupons();
  },
  methods: {
    getCoupons(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.coupons = res.data.coupons;
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
      const { couponModal } = this.$refs;
      this.tempCoupon = { ...item };
      switch (status) {
        case 'new':
          this.isNew = true;
          couponModal.openModal();
          break;
        case 'edit':
          this.isNew = false;
          couponModal.openModal();
          break;
        default:
          break;
      }
    },
    updateCoupon() {
      this.isLoading = true;
      const { couponModal } = this.$refs;
      const method = this.isNew ? 'post' : 'put';
      const id = this.isNew ? '' : `${this.tempCoupon.id}`;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`;

      this.$http[method](url, { data: this.tempCoupon })
        .then((res) => {
          if (res.data.success) {
            this.$swal({
              title: res.data.message,
              icon: 'success',
            });
            this.getCoupons();
            couponModal.hideModal();
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
    delCoupon(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`;
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
              this.getCoupons();
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
    delCoupons() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons/all`;
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
              this.getCoupons();
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
