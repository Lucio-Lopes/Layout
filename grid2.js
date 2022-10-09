const openBtn = document.querySelector('#menu');
const nav = document.querySelector('#sidemenu');

function toggleMenu(){
	nav.classList.toggle('active')
}

openBtn.addEventListener('click',toggleMenu);
