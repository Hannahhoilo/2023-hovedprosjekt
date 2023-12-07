/* Products filter page */

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
			<p>Blond Absolu Oil</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/blond-absolu-mask.jpg" alt="kerastase-blonde-absolute-mask" class="products">
			<p>Blond Absolu Mask</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/densifique-sh.jpg" alt="kerastase-densifique-shampoo" class="products">
			<p>Densifique Shampoo</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/densifique-con.jpg" alt="kerastase-densifique-conditioner" class="products">
			<p>Densifique Conditioner</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/densifique-serum.jpg" alt="kerastase-densifique-serum" class="products">
			<p>Densifique Serum</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/symbiose-sh.jpg" alt="kerastase-symbiose-shampoo" class="products">
			<p>Symbiose Shampoo</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/symbiose-con.jpg" alt="kerastase-symbiose-conditioner" class="products">
			<p>Symbiose Conditioner</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/symbiose-serum.jpg" alt="kerastase-symbiose-serum" class="products">
			<p>Symbiose Serum</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/kerastase/symbiose-mask.jpg" alt="kerastase-symbiose-mask" class="products">
			<p>Symbiose Mask</p>
		</div>
	</div>`;
};

function displayMatrix () {
	productItemContainer.innerHTML = `
	<div class="products-list-container">
		<div class="products-list-element">
			<img src="assets/pictures/products/matrix/matrix-builder-max-spray.jpg" alt="matrix-builder-max-spray" class="products">
			<p>Builder Wax Spray</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/matrix/matrix-fixer-hairspray.jpg" alt="matrix-fixer-hairspray" class="products">
			<p>Fixer Hairspray</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/matrix/matrix-food-for-soft-oil.jpg" alt="matrix-food-for-soft-oil-serum" class="products">
			<p>Food For Soft Multi-Use Hair Oil Serum</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/matrix/matrix-food-for-soft-hydrating-mask.jpg" alt="matrix-for-soft-rich-hydrating-treatment-mask" class="products">
			<p>Food For Soft Rich Hydrating Treatment Mask</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/matrix/matrix-a-curl-can-dream-sh.jpg" alt="matrix-a-curl-can-dream-shampoo" class="products">
			<p>A Curl Can Dream Shampoo</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/matrix/matrix-a-curl-can-dream-mask.jpg" alt="matrix-a-curl-can-dream-mask" class="products">
			<p>A Curl Can Dream Mask</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/matrix/matrix-a-curl-can-dream-gel.jpg" alt="matrix-a-curl-can-dream-light-hold-gel" class="products">
			<p>A Curl Can Dream Light-Hold Gel</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/matrix/matrix-a-curl-can-dream-cream.jpg" alt="matrix-a-curl-can-dream-cream" class="products">
			<p>A Curl Can Dream Cream</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/matrix/matrix-total-results-miracle-creator.jpg" alt="matrix-total-results-miracle-creator-spray" class="products">
			<p>Total Results Miracle Creator Spray</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/matrix/matrix-over-achiever.jpg" alt="matrix-over-achiever-3-in-1-paste" class="products">
			<p>Over Achiever 3-in-1 Paste</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/matrix/matrix-strong-hold-controller-gel.jpg" alt="matrix-strong-hold-controller-gel" class="products">
			<p>Strong Hold Controller Gel</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/matrix/matrix-height-riser.jpg" alt="matrix-height-riser-volumizing-powder" class="products">
			<p>Height Riser Volumizing Powder</p>
		</div>
	</div>`;
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
			<p>Tecni Art Fix Anti Frizz</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/loreal/tecni-art-fix-design.jpg" alt="loreal-tecni-art-fix-design" class="products">
			<p>Tecni Art Fix Design</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/loreal/tecni-art-full-volume-extra.jpg" alt="loreal-tecni-art-full-volume-extra" class="products">
			<p>Tecni Art Full Volume</p>
		</div>
	</div>`;
};

function displayRedken() {
	productItemContainer.innerHTML = `
	<div class="products-list-container">
		<div class="products-list-element">
			<img src="assets/pictures/products/redken/redken-all-soft-sh.jpg" alt="redken-all-soft-shampoo" class="products">
			<p>All Soft Shampoo</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/redken/redken-all-soft-con.jpg" alt="redken-all-soft-conditioner" class="products">
			<p>All Soft Conditioner</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/redken/redken-all-soft-cream.jpg" alt="redken-all-soft-cream" class="products">
			<p>All Soft Cream</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/redken/redken-all-soft-oil.jpg" alt="redken-all-soft-oil" class="products">
			<p>All Soft Oil</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/redken/redken-25-benefits-one-united.jpg" alt="redken-25-benefits-one-united" class="products">
			<p>25 Benefits One United</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/redken/redken-strong-hold-hairspray.jpg" alt="redken-strong-hold-hairspray" class="products">
			<p>Strong Hold Hairspray</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/redken/redken-touchable-texture.jpg" alt="redken-touchable-texture" class="products">
			<p>Touchable Texture</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/redken/redken-texture-paste.jpg" alt="redken-texture-paste" class="products">
			<p>Texture Paste</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/redken/redken-extreme-sh.jpg" alt="redken-extreme-shampoo" class="products">
			<p>Extreme Shampoo</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/redken/redken-extreme-con.jpg" alt="redken-extreme-conditioner" class="products">
			<p>Extreme Conditioner</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/redken/redken-extreme-mask.jpg" alt="redken-extreme-mask" class="products">
			<p>Extreme Mask</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/redken/redken-extreme-anti-snap-treatment.jpg" alt="redken-extreme-anti-snap-treatment" class="products">
			<p>Extreme Anti Snap Treatment</p>
		</div>		
	</div>`;
};

function displayShuuemura () {
	productItemContainer.innerHTML = `
	<div class="products-list-container">
		<div class="products-list-element">
			<img src="assets/pictures/products/shuuemura/shu-uemura-izumi-sh.jpg" alt="shu-uemura-izumi-shampoo" class="products">
			<p>Izumi Shampoo</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/shuuemura/shu-uemura-izumi-con.jpg" alt="shu-uemura-izumi-conditioner" class="products">
			<p>Izumi Conditioner</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/shuuemura/shu-uemura-izumi-treatment.jpg" alt="shu-uemura-izumi-treatment" class="products">
			<p>Izumi Treatment</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/shuuemura/shu-uemura-izumi-tonic.jpg" alt="shu-uemura-izumi-tonic" class="products">
			<p>Izumi Tonic</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/shuuemura/shu-uemura-tsuki-shape.jpg" alt="shu-uemura-tsuki-shape-blow-dry-spray" class="products">
			<p>Tsuki Shape Blow Dry Spray</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/shuuemura/shu-uemura-umou-hold.jpg" alt="shu-uemura-umou-hold-cream" class="products">
			<p>Umou Hold Cream</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/shuuemura/shu-uemura-essence-absolue-nourishing-serum.jpg" alt="shu-uemura-essence-absolue-nourishing-serum" class="products">
			<p>Essence Absolue Nourishing Overnight Hair Serum</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/shuuemura/shu-uemura-essence-absolue-nourishing-oil.jpg" alt="shu-uemura-essence-absolue-nourishing-protective-hair-oil" class="products">
			<p>Essence Absolue Nourishing Protective Hair Oil</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/shuuemura/shu-uemura-ultimate-reset-sh.jpg" alt="shu-uemura-ultimate-reset-shampoo" class="products">
			<p>Ultimate Reset Shampoo</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/shuuemura/shu-uemura-ultimate-reset-con.jpg" alt="shu-uemura-ultimate-reset-conditioner" class="products">
			<p>Ultimate Reset Conditioner</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/shuuemura/shu-uemura-ultimate-reset-mask.jpg" alt="shu-uemura-ultimate-reset-mask" class="products">
			<p>Ultimate Reset Mask</p>
		</div>
		<div class="products-list-element">
			<img src="assets/pictures/products/shuuemura/shu-uemura-ultimate-reset-serum.jpg" alt="shu-uemura-ultimate-reset-serum" class="products">
			<p>Ultimate Reset Serum</p>
		</div>
	</div>`;
};



kerastaseSelector.addEventListener("click", displayKerastase);
matrixSelector.addEventListener("click", displayMatrix);
lorealSelector.addEventListener("click", displayLoreal);
redkenSelector.addEventListener("click", displayRedken);
shuuemuraSelector.addEventListener("click", displayShuuemura);