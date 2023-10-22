

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


$(function(){
  var mixer = mixitup('.portfolio__content');
})

/* function changeItem() {
  document.getElementById('one-two').style.width = '200px';
}// функция, которая сработает при наведении.
//она означает - выбрать элемент к Id у которого надо что-то изменить.
// когда в скобки где написано one-two добавите Id своего элемента
function rechangeItem() {
  document.getElementById('one-two').style.width = '100px';
}// тут всё также. но наобарот. протсес происходящий про отводе курсора. */