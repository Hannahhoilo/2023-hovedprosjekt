
/* Products */
let productItemContainer = document.getElementById("product-list-container");
let kerastaseSelector = document.getElementById("kerastase");
let matrixSelector = document.getElementById("matrix");
let lorealSelector = document.getElementById("loreal");
let redkenSelector = document.getElementById("redken");
let shuuemuraSelector = document.getElementById("shuuemura");


function displayKerastase () {
	productItemContainer.innerHTML = `
	<div class="products-list-container">
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/blond-absolu-violet-sh.jpg" alt="kerastase-blonde-absolute-violet-shampoo" class="products">
			<p>Blond Absulu Violet Shampoo</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/blond-absolu-lumiere-sh.jpg" alt="kerastase-blonde-absolute-lumiere-shampoo" class="products">
			<p>Blond Absolu Lumiere Shampoo</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/blond-absolu-leavein.jpg" alt="kerastase-blonde-absolute-leave-in-cream" class="products">
			<p>Blond Absolu Leave In</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/blond-absolu-oil.jpg" alt="kerastase-blonde-absolute-oil" class="products">
			<p>Blonde Absolu Oil</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/blond-absolu-mask.jpg" alt="kerastase-blonde-absolute-mask" class="products">
			<p>Blonde</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/densifique-sh.jpg" alt="kerastase-densifique-shampoo" class="products">
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/densifique-con.jpg" alt="kerastase-densifique-conditioner" class="products">
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/densifique-serum.jpg" alt="kerastase-densifique-serum" class="products">
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/symbiose-sh.jpg" alt="kerastase-symbiose-shampoo" class="products">
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/symbiose-con.jpg" alt="kerastase-symbiose-conditioner" class="products">
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/symbiose-serum.jpg" alt="kerastase-symbiose-serum" class="products">
		</div>
	</div>`;
};

function displayMatrix () {
	productItemContainer.innerHTML = `
	<p>Matrix</p>`;
};

function displayLoreal () {
	productItemContainer.innerHTML = `
	<div class="products-list-container">
		<div class="products-list-element">
			<img src="assets/pictures/products/loreal/tecni-art-beach-waves.jpg" alt="loreal-tecni-art-beach-waves" class="products">
			<p>Tecni Art Beach Waves</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/loreal/tecni-art-fix-anti-frizz.jpg" alt="loreal-tecni-art-fix-anti-frizz" class="products">
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/loreal/tecni-art-fix-design.jpg" alt="loreal-tecni-art-fix-design" class="products">
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/loreal/tecni-art-full-volume-extra.jpg" alt="loreal-tecni-art-full-volume-extra" class="products">
		</div>
	</div>`;
};

function displayRedken() {
	productItemContainer.innerHTML = `
	<p>Redken</p>`;
};

function displayShuuemura () {
	productItemContainer.innerHTML = `
	<p>Shuuemura</p>`;
};



kerastaseSelector.addEventListener("click", displayKerastase);
matrixSelector.addEventListener("click", displayMatrix);
lorealSelector.addEventListener("click", displayLoreal);
redkenSelector.addEventListener("click", displayRedken);
shuuemuraSelector.addEventListener("click", displayShuuemura);