const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(slideshow => {
	const slides = slideshow.querySelectorAll('.slideshow__slide');
	const controls = slideshow.querySelectorAll('.slideshow__control-button');
	const dots = slideshow.querySelectorAll('.slideshow__dot');
	const counter = slideshow.querySelector('.slideshow__counter');

	let index = 0;

	const totalSlides = slides.length;
	const lastIndex = slides.length - 1;

	const setIndex = (newIndex) => {
		index = newIndex;
	};

	const decreaseIndex = () => {
		if (index > 0) {
			index = index - 1;
		} else {
			index = lastIndex;
		}
	};

	const increaseIndex = () => {
		if (index < lastIndex) {
			index = index + 1;
		} else {
			index = 0;
		}
	};

	const renderSlideClass = () => {
		slides.forEach(slide => {
			slide.classList.remove('slideshow__slide--visible');
		});

		slides[index].classList.add('slideshow__slide--visible');
	}

	const renderCounter = () => {
		counter.textContent = `${index + 1} of ${totalSlides}`;
	}

	const changeSlide = (event) => {
		const button = event.currentTarget;

		if (button.dataset.direction === 'previous') {
			decreaseIndex();
		}

		if (button.dataset.direction === 'next') {
			increaseIndex();
		}

		if (button.dataset.index) {
			setIndex(parseInt(button.dataset.index));
		}

		renderSlideClass();
		renderCounter();
	}

	controls.forEach(button => {
		button.addEventListener('click', changeSlide);
	});

	dots.forEach(button => {
		button.addEventListener('click', changeSlide);
	});
})

/* dfgfghfhgf */

/* test filtrering */



const filterButtons = document.querySelectorAll('.filter-button');
const listItems = document.querySelectorAll('.list-item'); //NodeList
const listItemsContainer = document.querySelector('.list-items');

let lastClickedFilterBy = null;
let lastClickedFilterValue = null;

const filterList = (event) => {
	// the clicked filter button
	const currentButton = event.currentTarget;

	// data-filter-by
	let currentButtonFilterBy = currentButton.dataset.filterBy;
	// data-filter
	let currentButtonFilterValue = currentButton.dataset.filter;

	// use "*" if the button clicked is the same as in the previous iteration
	if (currentButtonFilterValue === lastClickedFilterValue) {
		currentButtonFilterValue = '*'
	}

	// store the values until the next time the function is called
	lastClickedFilterBy = currentButtonFilterBy;
	lastClickedFilterValue = currentButtonFilterValue;
	
	// filter items based on type
	const filteredItems = [...listItems].filter(item => {
		if (lastClickedFilterValue === '*') {
			return true;
		} else {
			// item.dataset["color"]
			// item.dataset["type"]
			// ... etc
			return item.dataset[currentButtonFilterBy] === currentButtonFilterValue;
		}
	});

	// remove every item in the list container
	listItemsContainer.innerHTML = '';
	
	// add back only filtered items
	filteredItems.forEach(item => {
		listItemsContainer.appendChild(item);
	});

	// remove active class from all filters
	filterButtons.forEach(button => {
		button.classList.remove('filter-button--active');
	})

	// add active class to the clicked button, only if it's
	// not the clear button
	if (currentButtonFilterValue !== '*') {
		currentButton.classList.add('filter-button--active');
	}
}

filterButtons.forEach(filterButton => {
	filterButton.addEventListener('click', filterList);
});



/*test filtrering */





/* filtrering */

const productInfo=[
	{
		"brand": "kerastase",
		"name": "blond absolu violet shampoo",
		"hair-type": ["chemically damage", "color correct"], 
		"price": "259",
		"type-of-product": "shampoo"
	},
	{
		"brand": "kerastase",
		"name": "blond absolu lumiere shampoo",
		"hair-type": ["chemically damage", "dryness"], 
		"price": "259",
		"type-of-product": "shampoo"
	},
	{
		"brand": "kerastase",
		"name": "blond absolu leave in cream",
		"hair-type": ["chemically damage", "dryness", "heat protection"], 
		"price": "310",
		"type-of-product": "leave in"
	},
	{
		"brand": "kerastase",
		"name": "blond absolu oil",
		"hair-type": ["chemically damage", "dryness", "heat protection"], 
		"price": "448",
		"type-of-product": "oil"
	},
	{
		"brand": "kerastase",
		"name": "blond absolu mask",
		"hair-type": ["chemically damage", "dryness"], 
		"price": "448",
		"type-of-product": "mask"
	},
	{
		"brand": "kerastase",
		"name": "densifique shampoo",
		"hair-type": "hair loss", 
		"price": "259",
		"type-of-product": "shampoo"
	},
	{
		"brand": "kerastase",
		"name": "densifique",
		"hair-type": "hair loss", 
		"price": "419",
		"type-of-product": "conditioner"
	},
	{
		"brand": "kerastase",
		"name": "densifique",
		"hair-type": "hair loss", 
		"price": "1269",
		"type-of-product": "scalp-serum"
	},
	{
		"brand": "kerastase",
		"name": "symbiose",
		"hair-type": ["anti-dandruff", "sensitive scalp"],
		"price": "1269",
		"type-of-product": "shampoo"
	},
	{
		"brand": "kerastase",
		"name": "symbiose",
		"hair-type": ["anti-dandruff", "sensitive scalp"],
		"price": "525",
		"type-of-product": "conditioner"
	},
	{
		"brand": "kerastase",
		"name": "symbiose",
		"hair-type": ["anti-dandruff", "sensitive scalp"],
		"price": "208",
		"type-of-product": "scalp-serum"
	},
]


//const kerastaseContainer = document.getElementById('test');
// Insert <p> elements into the container

function filter (){

	productInfo.forEach(item=>{
		const newDiv = document.createElement('div');
		newDiv.innerHTML = `<h2>${item.brand}</h2>
							<p>${item.name}</p>`;
		kerastaseContainer.appendChild(newDiv);
	})
}

//filter ()



/* Booking page start*/

var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = currentDateTime.getDate() + 1;

if (date < 10) {
  date = '0' + date;
}
if (month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var appointmentDateElem = document.querySelector("#appointment-date");

appointmentDateElem.setAttribute("min", dateTomorrow);


/* Booking page end */




