"use strict";

/*let lis = document.getElementsByTagName('li');
console.log(typeof(lis));

let imgs = document.getElementsByClassName('.carousel__img');
console.log(imgs);


function carousel() {

}*/

let count = 0;

function imgNext() {
	let imgs = document.getElementsByClassName('carousel__img');
	
	if(count >= imgs.length - 1) {
	count = 0;
	imgs[count].classList.remove('displayNone');
	} else {
	imgs[count].classList.add('displayNone');
	imgs[count+1].classList.remove('displayNone');
	count++;
	}
}
