let GalleryCenter = document.getElementById('GalleryCenter');
var count = 0;
let scrollBtn = document.getElementById('scrollbtn')

window.addEventListener('wheel', function (event) {
	if (event.deltaY < 0) {
		count -= 12;
		console.log(count)
		GalleryCenter.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateY(' + count + 'deg)'
	}
	else if (event.deltaY > 0) {
		count += 12;
		console.log(count)
		GalleryCenter.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateY(' + count + 'deg)'
	}
});

window.addEventListener('scroll', btnScroll)

scrollBtn.addEventListener('click', () => {
	if (window.scrollY >= 1100) {
		window.scrollTo({top: 0, behavior: 'smooth'})
	} else {
		window.scrollTo(0, 700)
	}
})

function btnScroll() {
	if (window.scrollY <= 0 || window.scrollY >= 1100) {
		//Mostra o botão
		scrollBtn.style.display = 'block'
		if(window.scrollY >= 1100){
			//Se o botão estiver embaixo, ele fica branco e troca o atributo
			scrollBtn.style.color = 'white'
			scrollBtn.classList.remove('fa-arrow-down')
			scrollBtn.classList.add('fa-arrow-up')
		} else {
			//Se o botão estiver em cima, ele volta ao preto e troca o atributo
			scrollBtn.style.color = 'black'
			scrollBtn.classList.remove('fa-arrow-up')
			scrollBtn.classList.add('fa-arrow-down')
		}
	} else {
		//Esconde o botão
		scrollBtn.style.display = 'none'
	}
}