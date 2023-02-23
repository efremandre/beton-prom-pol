'use strict';
export function animationScroll() {
	const onEntry = (entry) => {
		entry.forEach(change => {
			if (change.isIntersecting) {
				change.target.classList.add('element-show');
			}
		});
	}

	let options = {
		threshold: [0.5] };
	let observer = new IntersectionObserver(onEntry, options);
	let elements = document.querySelectorAll('.animation');
	let cardtop = document.querySelectorAll('.animation-top');
	let cardleft = document.querySelectorAll('.animation-left');
	let cardright = document.querySelectorAll('.animation-right');

	for (let elm of elements) {
		observer.observe(elm);
	}

	for (let elm of cardtop) {
		observer.observe(elm);
	}

	for (let elm of cardleft) {
		observer.observe(elm);
	}

	for (let elm of cardright) {
		observer.observe(elm);
	}
}