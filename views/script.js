
let modal,
	menu,
	close;

	close = document.getElementById('close');
	modal = document.getElementById('modal');
	menu = document.getElementById('menu');

	menu.addEventListener('click', openModal);
	close.addEventListener('click', closeModal);

	function openModal(){
		modal.style.transition = '.6s';
		modal.style.top = '0px';
	}
	function closeModal(){
		modal.style.transition = '.6s';
		modal.style.top = '-100%';
	}

