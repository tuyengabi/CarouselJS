"use strict";

let lis = document.getElementsByTagName('li');
console.log(typeof(lis));

let imgs = document.getElementsByTagName('img');
console.log(imgs);

function carousel() {

	for(let img of imgs) {
		img.style.display = "none";
	}
}
