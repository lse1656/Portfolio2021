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

//scroll event
const skillItem = document.querySelectorAll('.skill-item');
const projectImg = document.querySelectorAll('.project-item .project-img');
const projectInfor = document.querySelectorAll('.project-item .project-infor');

function showValue(e) {
  let innerHeight = window.innerHeight;

  e.forEach((element) => {
    let clientRect = element.getBoundingClientRect();
    if (clientRect.y < innerHeight * 0.8) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', () => {
  showValue(skillItem);
  showValue(projectInfor);
  showValue(projectImg);
});

const bannerTxt = document.querySelector('.banner p');

window.addEventListener('scroll', () => {
  let clientRect = bannerTxt.getBoundingClientRect();
  if (clientRect.y < innerHeight * 0.95) {
    bannerTxt.style.transform = 'translateX(7%)';
  }
  if (clientRect.y < innerHeight * 0.6) {
    bannerTxt.style.transform = 'translateX(0)';
  }
  if (clientRect.y < innerHeight * 0.4) {
    bannerTxt.style.transform = 'translateX(-3%)';
  }
  if (clientRect.y < innerHeight * 0.3) {
    bannerTxt.style.transform = 'translateX(-6%)';
  }
  if (clientRect.y < innerHeight * 0.1) {
    bannerTxt.style.transform = 'translateX(-10%)';
  }
});
