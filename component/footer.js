Vue.component('footer-section', {
  template: `
    <section id="kontak" class="footer-section mt-5">
      <div class="position-relative">
        <img src="./img/segitiga3.svg" class="w-100" alt="">
        <div class="position-absolute text-center w-100" style="bottom: 0;">
          <img src="./img/crasher.png" width="250px" alt="">
        </div>
      </div>
      <div class="bg-coklat pb-5">
        <div class="container-lg">
          <footer class="mb-5">
            Copyright 2020. Coffee Collection
          </footer>   
          <div class="row justify-content-start">
            <div class="col-md-3">
              <img src="./img/logo.png" class="img-fluid" alt="logo">
            </div>
            <div class="col-md-3">
              <nav class="nav flex-column">
                <a 
                  v-for="item in nav" :key="item.link"
                  :href="item.link" 
                  class="nav-item nav-link font-weight-bold" 
                  style="color: inherit;">
                  {{ item.text }}
                </a>
              </nav>
            </div>
            <div class="col-md-3">
              <!-- <h5>Kontak kami</h5> -->
               <div class="d-flex align-items-center mb-2">
                 <img src="./icon/whatsapp.svg" width="30" alt="whatsapp">
                 <span class="ml-3">+62857 7756 9483</span>
               </div>
               <div class="d-flex align-items-center">
                 <img src="./icon/instagram.svg" width="30" alt="instagram">
                 <span class="ml-3">coco.official</span>
               </div>
            </div>
          </div>
        </div>
      </div>      
    </section>
  `,
  props: ['nav']
})