"use strict"
let modal = document.querySelector('.modall');
let btn_rent = document.querySelector('#btn-rent');
function closeModall () {
	modal.classList.add('hide');
}
function openModall () {
	console.log(btn_rent)
	modal.classList.remove('hide');
}