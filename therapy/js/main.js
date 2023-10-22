let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

document.querySelector('.burger').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('open');
  document.querySelector('body').classList.toggle('fixed_page');
 
})

document.querySelector('.menu__list-link').addEventListener('click', function(){
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('open');
document.querySelector('body').classList.toggle('fixed_page');
})

document.querySelector('.link2').addEventListener('click', function(){
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('open');
document.querySelector('body').classList.toggle('fixed_page');
})

document.querySelector('.link3').addEventListener('click', function(){
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('open');
document.querySelector('body').classList.toggle('fixed_page');
})

document.querySelector('.link4').addEventListener('click', function(){
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('open');
document.querySelector('body').classList.toggle('fixed_page');
})

document.querySelector('.link5').addEventListener('click', function(){
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('open');
document.querySelector('body').classList.toggle('fixed_page');
})

document.querySelector('.link6').addEventListener('click', function(){
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('open');
document.querySelector('body').classList.toggle('fixed_page');
})