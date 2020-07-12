Vue.component('header-section', {
  template: `
    <header>
      <div class="navbar navbar-expand-md bg-header py-3">
        <div class="container justify-content-center">
          <nav class="navbar-nav">
            <a 
              v-for="item in nav" :key="item.link"
              :href="item.link" 
              class="nav-item nav-link font-weight-bold text-krem mx-3">
              {{ item.text }}
            </a>
          </nav>
        </div>
      </div>
    </header> 
  `,
  props: ['nav']
})