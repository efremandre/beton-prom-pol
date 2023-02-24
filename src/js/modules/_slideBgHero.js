'use strict';
export function slideBgHero() {
	const hero = document.querySelector('[data-hero]');

	function getRandomNum() {
		return Math.floor(Math.random() * 4);
	}

	function setBg() {
		let randomNum = getRandomNum();
		let bgNum = String(randomNum);
		hero.style.backgroundImage = `url('../assets/images/bg-hero${bgNum}.jpg')`;

		setTimeout(setBg, 3000);
	}

	setTimeout(setBg, 3000);
}