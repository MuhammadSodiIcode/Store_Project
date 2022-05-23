document.addEventListener("DOMContentLoaded", ()=> {
	const hamburger = document.querySelector('.hamburger');
	const hamburgerMenu = document.querySelector('.hamburger_menu');
	hamburger.addEventListener('click',e => {
		if(hamburger.classList.contains('hamburger'),
		hamburgerMenu.classList.contains('hamburger_menu')) {
			hamburger.classList.remove('hamburger');
			hamburger.classList.add('hamburger_close');
			hamburgerMenu.classList.remove('hamburger_menu');
			hamburgerMenu.classList.add('hamburger_menu_active');
		} else {
			hamburger.classList.remove('hamburger_close');
			hamburger.classList.add('hamburger');
			hamburgerMenu.classList.remove('hamburger_menu_active');
			hamburgerMenu.classList.add('hamburger_menu');
		}
	});
});