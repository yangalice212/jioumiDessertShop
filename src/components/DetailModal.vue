<template>
  <div
    id="detailModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-md modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header border-0">
          <h5 id="orderModalLabel" class="modal-title">查看訂單</h5>
          <button
            type="button"
            class="btn-close bg-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <ul class="list-unstyled">
              <li
                v-for="item in tempOrder.products"
                :key="item.id"
                class="d-flex justify-content-between"
              >
                <p>
                  {{ item.product.title }} x {{ item.qty }} / {{ item.product.unit }}
                </p>
                <p>NT$ {{ item.final_total }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-footer border-0">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
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
