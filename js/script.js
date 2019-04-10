"use strict";

let img = document.getElementsByTagName('img');
let li = document.getElementsByTagName('li');

function changeImg1() {
	let imgHere = document.querySelector('img:not(.displayNone)');
	console.log(imgHere);
	imgHere.classList.add("displayNone");
	img[0].classList.remove("displayNone");
	li[0].classList.add("bold");
}

function changeImg2() {
	let imgHere = document.querySelector('img:not(.displayNone)');
	console.log(imgHere);
	imgHere.classList.add("displayNone");
	img[1].classList.remove("displayNone");

}

function changeImg3() {
	let imgHere = document.querySelector('img:not(.displayNone)');
	console.log(imgHere);
	imgHere.classList.add("displayNone");
	img[2].classList.remove("displayNone");

}

function changeImg4() {
	let imgHere = document.querySelector('img:not(.displayNone)');
	console.log(imgHere);
	imgHere.classList.add("displayNone");
	img[3].classList.remove("displayNone");

}

function changeImg5() {
	let imgHere = document.querySelector('img:not(.displayNone)');
	console.log(imgHere);
	imgHere.classList.add("displayNone");
	img[4].classList.remove("displayNone");

}

