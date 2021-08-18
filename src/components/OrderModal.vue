<template>
  <div
    id="orderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header border-0">
          <button
            type="button"
            class="btn-close bg-transparent"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-7 mb-3">
              <h3 class="mb-3">訂單資訊</h3>
              <div class="row mb-2">
                <div class="form-group col-md-6">
                  <label for="id" class="mb-2">訂單編號</label>
                  <input
                    type="text"
                    v-model="tempOrder.id"
                    id="id"
                    class="form-control bg-transparent border-0"
                    readonly
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="time" class="mb-2">購買時間</label>
                  <p class="form-control border-0">{{ $filter.date(tempOrder.create_at) }}</p>
                </div>
              </div>
              <div class="row mb-2">
                <div class="form-group col-md-6">
                  <label class="mb-2">是否付款</label>
                  <div>
                    <span v-if="tempOrder.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </div>
                </div>
                <div class="form-group col-md-6" v-if="tempOrder.is_paid">
                  <label for="paidTime" class="mb-2">付款時間</label>
                  <p class="form-control border-0">{{ $filter.date(tempOrder.paid_date) }}</p>
                </div>
              </div>
              <div class="row mb-2">
                <div class="form-group col">
                  <label for="message" class="mb-2">留言</label>
                  <textarea
                    type="text"
                    v-model="tempOrder.message"
                    id="message"
                    class="form-control border-0 bg-transparent"
                    readonly
                  />
                </div>
              </div>
              <h3 class="mb-3">訂購人資訊</h3>
              <div class="row mb-2" v-if="tempOrder.user">
                <div class="form-group col-md-6">
                  <label for="name" class="mb-2">姓名</label>
                  <input
                    type="text"
                    v-model="tempOrder.user.name"
                    id="name"
                    class="form-control border-0 border-bottom border-primary"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="tel" class="mb-2">電話</label>
                  <input
                    type="number"
                    v-model.number="tempOrder.user.tel"
                    id="tel"
                    class="form-control border-0 border-bottom border-primary"
                  />
                </div>
              </div>
              <div v-if="tempOrder.user">
                <div class="form-group mb-2">
                  <label for="address" class="mb-2">地址</label>
                  <input
                    type="text"
                    v-model="tempOrder.user.address"
                    id="address"
                    class="form-control border-0 border-bottom border-primary"
                  />
                </div>
                <div class="form-group">
                  <label for="email" class="mb-2">Email</label>
                  <input
                    type="email"
                    v-model="tempOrder.user.email"
                    id="email"
                    class="form-control border-0 border-bottom border-primary"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <h3 class="mb-3">產品資訊</h3>
              <ul class="list-unstyled">
                <li
                  v-for="item in tempOrder.products"
                  :key="item.id"
                  class="d-flex justify-content-between"
                >
                  <p>{{ item.product.title }} x {{ item.qty }} / {{ item.product.unit }}</p>
                  <p>NT$ {{ item.final_total }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button
            @click="$emit('update-order', tempOrder)"
            type="button"
            class="btn btn-primary text-white"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from '../mixins/modal';

export default {
  props: ['order'],
  data() {
    return {
      tempOrder: {},
    };
  },
  mixins: [modal],
  watch: {
    order() {
      this.tempOrder = this.order;
    },
  },
};
</script>
