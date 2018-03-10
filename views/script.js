	
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


let about;

	about = document.getElementById('executeAbout');
	about.addEventListener('click', AboutPage);

	function AboutPage() { document.location = "o-nama.html"; }

let proiz = document.getElementById('proizvodi-big');
	proiz.addEventListener('click', proizvodi);

	function proizvodi() { document.location = "proizvodi.html" }