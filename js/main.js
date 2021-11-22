const visualTxt1 = document.querySelector('.visual-txt strong');
const visualTxt2 = document.querySelector('.visual-txt em');

window.addEventListener('load', () => {
  visualTxt1.classList.add('show');
  visualTxt2.classList.add('show');
});

const menuBtn = document.querySelector('.global-header .menu');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  menuBtn.classList.remove('active');
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});
