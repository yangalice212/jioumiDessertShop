<template>
  <div
    id="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header border-0">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button
            type="button"
            class="btn-close bg-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-start text-dark">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-1">
                <div class="form-group">
                  <label for="imageUrl">上傳圖片</label>
                  <div class="input-group mb-1">
                    <input
                      @change="getImgData"
                      id="imageUrl"
                      type="file"
                      accept=".jpg, .png"
                      class="form-control"
                      placeholder="drag picture to here"
                      ref="imageUrl"
                    />
                    <button
                      @click="uploadImg"
                      :disabled="!imgData"
                      class="btn btn-sm btn-outline-warning flex-shrink-0"
                      type="button"
                    >
                      上傳
                    </button>
                  </div>
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl" />
              </div>
              <div v-if="Array.isArray(tempProduct.imagesUrl)">
                <div v-for="(item, key) in tempProduct.imagesUrl" :key="key" class="mb-1">
                  <div class="form-group">
                    <label :for="key">輸入圖片網址</label>
                    <input
                      v-model="tempProduct.imagesUrl[key]"
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                      :id="key"
                    />
                  </div>
                  <img class="img-fluid" :src="item" />
                </div>
                <div
                  v-if="
                    !tempProduct.imagesUrl.length ||
                      tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                  "
                >
                  <button
                    @click="tempProduct.imagesUrl.push('')"
                    class="btn btn-outline-primary btn-sm d-block w-100"
                  >
                    新增圖片
                  </button>
                </div>
                <div v-else>
                  <button
                    @click="tempProduct.imagesUrl.pop()"
                    class="btn btn-outline-danger btn-sm d-block w-100"
                  >
                    刪除圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group mb-2">
                <label for="title">標題</label>
                <input
                  v-model.trim="tempProduct.title"
                  id="title"
                  type="text"
                  class="form-control border-0 border-bottom border-primary"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="row mb-2">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input
                    v-model.trim="tempProduct.category"
                    id="category"
                    type="text"
                  class="form-control border-0 border-bottom border-primary"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">單位</label>
                  <input
                    v-model.trim="tempProduct.unit"
                    id="unit"
                    type="text"
                  class="form-control border-0 border-bottom border-primary"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>
              <div class="row mb-2">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    v-model.number="tempProduct.origin_price"
                    id="origin_price"
                    type="number"
                    min="0"
                  class="form-control border-0 border-bottom border-primary"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input
                    v-model.number="tempProduct.price"
                    id="price"
                    type="number"
                    min="0"
                  class="form-control border-0 border-bottom border-primary"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
              <div class="form-group mb-2">
                <label for="description">產品描述</label>
                <textarea
                  v-model.trim="tempProduct.description"
                  id="description"
                  type="text"
                  class="form-control border-0 border-bottom border-primary"
                  placeholder="請輸入產品描述"
                >
                </textarea>
              </div>
              <div class="form-group mb-2">
                <label for="content">說明內容</label>
                <textarea
                  v-model.trim="tempProduct.content"
                  id="content"
                  type="text"
                  class="form-control border-0 border-bottom border-primary"
                  placeholder="請輸入說明內容"
                >
                </textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    v-model="tempProduct.is_enabled"
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                  />
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button
            @click="$emit('update-product', tempProduct)"
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
import modal from '@/mixins/modal';

export default {
  props: ['product', 'isNew'],
  data() {
    return {
      imgData: null,
      tempProduct: { ...this.product },
    };
  },
  mixins: [modal],
  methods: {
    getImgData(e) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', file);
      this.imgData = formData;
    },
    uploadImg() {
      this.$http
        .post(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`,
          this.imgData,
        )
        .then((res) => {
          if (res.data.success) {
            this.imgData = null;
            this.$refs.imageUrl.value = '';
            if (this.isNew) {
              this.tempProduct.imageUrl = res.data.imageUrl;
            } else if (!this.isNew) {
              this.tempProduct.imagesUrl.push(res.data.imageUrl);
            }
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
  },
  watch: {
    product() {
      this.tempProduct = this.product;
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = [];
      }
      if (!this.tempProduct.imageUrl) {
        this.tempProduct.imageUrl = '';
      }
    },
  },
};
</script>
