const visualTxt1 = document.querySelector('.visual-txt strong');
const visualTxt2 = document.querySelector('.visual-txt em');

window.addEventListener('load', () => {
  visualTxt1.classList.add('show');
  visualTxt2.classList.add('show');
});

//menu-button 클릭하면 sidebar 나타나기
const menuBtn = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');
const sidebarItem = document.querySelectorAll('.sidebar .snb-list li a');
const overlay = document.querySelector('.overlay');

function toggleClass() {
  menuBtn.classList.toggle('active');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
}

function removeClass() {
  menuBtn.classList.remove('active');
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
}

menuBtn.addEventListener('click', () => {
  toggleClass();
});

sidebarItem.forEach((element) => {
  element.addEventListener('click', () => {
    removeClass();
  });
});

overlay.addEventListener('click', () => {
  removeClass();
});

//scroll event : skill-item
const skillItem = document.querySelectorAll('.skill-item');

function showValue() {
  let innerHeight = window.innerHeight;

  skillItem.forEach((element) => {
    let clientRect = element.getBoundingClientRect();
    if (clientRect.y < innerHeight * 0.8) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', () => {
  showValue();
});

//scroll event : project-item
const projectItem = document.querySelectorAll('.project-item');

function showValue2() {
  let innerHeight = window.innerHeight;

  projectItem.forEach((element) => {
    let clientRect = element.getBoundingClientRect();
    if (clientRect.y < innerHeight * 0.8) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', () => {
  showValue2();
});
