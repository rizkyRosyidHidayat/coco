Vue.component('product-section', {
  template: `
  <section id="produk" class="bg-coklat produk">
    <div class="container-lg">
      <div class="row justify-content-end">
        <div class="col-lg-8">
          <div 
            v-for="(item, i) in product" :key="i"
            class="row">
            <div v-if="i === 1" class="col-md-6"></div>
            <div class="col-md-6">
              <div class="bg-light shadow">
                <div class="card-body">
                  <div class="text-center mb-5">
                    <img src="./img/1.png" class="img-produk" alt="img produk">
                  </div>
                  <div class="d-flex justify-content-between align-items-end">
                    <div>
                      <div>FLUFFY COFFEE</div>
                      <p class="h5 font-weight-bold">
                        Robusta Coffee Powder <br>
                        Rp. 15.000
                      </p>
                    </div>
                    <div>
                      <a href="#" class="btn btn-produk btn-danger rounded-0">
                        <img src="./icon/arrow_right.svg" width="24px" alt="arrow_right">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
  data: () => ({
    product: [
      { img: '1.png', price: 20000, company: 'Fulffy Coffee', title: 'ORIGINAL ROBUSTA' },
      { img: '34.png', price: 40000, company: 'Fulffy Coffee', title: 'ORIGINAL ROBUSTA' },
      { img: '1.png', price: 20000, company: 'Fulffy Coffee', title: 'ORIGINAL ROBUSTA' },
    ]
  }),
  // computed: {
  //   hasilProduct() {
  //     let array = this.product.concat(this.product)
  //     return array
  //   }
  // }
})