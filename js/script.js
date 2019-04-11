"use strict";

let img = document.getElementsByTagName('img');
let li = document.getElementsByTagName('li');
//let liHere = document.querySelectorAll('li.bold');

//FUNCTIONS CHANGE IMAGES
function changeImg1() {
	//CHANGE IMAGE;
	let imgHere = document.querySelector('img:not(.displayNone)');
	imgHere.classList.add("displayNone");
	img[0].classList.remove("displayNone");
	//CHANGE LI;
	let liHere = document.querySelector('li.bold');
	li[0].classList.add("bold");
	liHere.classList.remove("bold");
}

function changeImg2() {
	//CHANGE IMAGE;
	let imgHere = document.querySelector('img:not(.displayNone)');
	imgHere.classList.add("displayNone");
	img[1].classList.remove("displayNone");
	//CHANGE LI;
	let liHere = document.querySelector('li.bold');
	li[1].classList.add("bold");
	liHere.classList.remove("bold");
}

function changeImg3() {
	//CHANGE IMAGE;
	let imgHere = document.querySelector('img:not(.displayNone)');
	imgHere.classList.add("displayNone");
	img[2].classList.remove("displayNone");
	//CHANGE LI;
	let liHere = document.querySelector('li.bold');
	li[2].classList.add("bold");
	liHere.classList.remove("bold");
}

function changeImg4() {
	//CHANGE IMAGE;
	let imgHere = document.querySelector('img:not(.displayNone)');
	imgHere.classList.add("displayNone");
	img[3].classList.remove("displayNone");
	//CHANGE LI;
	let liHere = document.querySelector('li.bold');
	li[3].classList.add("bold");
	liHere.classList.remove("bold");
}

function changeImg5() {
	//CHANGE IMAGE;
	let imgHere = document.querySelector('img:not(.displayNone)');
	imgHere.classList.add("displayNone");
	img[4].classList.remove("displayNone");
	//CHANGE LI;
	let liHere = document.querySelector('li.bold');
	li[4].classList.add("bold");
	liHere.classList.remove("bold");
}


/*FUNCTIONS CHANGE FONT THE LI

function changeFont2() {
	let liHere = document.querySelector('li.bold');
	li[1].classList.add("bold");
	liHere.classList.remove("bold");
}*/
