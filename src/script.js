export default function fillScrollLine() {
	const scrolled = window.scrollY;
	const percentScrolled =
		(scrolled /
			(document.getElementById('container').clientHeight -
				window.innerHeight)) *
		100;
	document.querySelector('.scroll-line').style.width = percentScrolled + '%';
}
window.addEventListener('scroll', fillScrollLine);
