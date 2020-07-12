import '../component/header.js'
import '../component/banner.js'
import '../component/header_produk.js'
import '../component/product.js'
import '../component/footer_produk.js'
import '../component/testimoni.js'
import '../component/footer.js'

const app = new Vue({
    el: '#app',
    data: {
        header: [
			{ link: '#home', text: 'HOME' },
			{ link: '#produk', text: 'PRODUK' },
			{ link: '#testimoni', text: 'TESTIMONI' },
			{ link: '#kontak', text: 'KONTAK' },
		]
    }
})