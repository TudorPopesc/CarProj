let modal = document.querySelector('.modall');

function closeModall () {
	modal.classList.add('hide');
}
function openModall () {
	modal.classList.remove('hide');
}

modal.addEventListener('click' , function(e){
     const target = e.target;
     if(target == modal || target == closeModal){
     	modal.classList.add('hide');
     }  
});
document.addEventListener('keydown' ,  function(event) {
	const key = event.key;
	if(key == 'Escape'){
		modal.classList.add('hide');
	}
});