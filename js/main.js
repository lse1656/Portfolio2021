//window load 후 visual section 글자 나타나기
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

//scroll event: skill, project
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

//scroll event: banner
const bannerTxt = document.querySelector('.banner p');

window.addEventListener('scroll', () => {
  let clientRect = bannerTxt.getBoundingClientRect();
  if (clientRect.y < innerHeight * 0.9) {
    bannerTxt.style.transform = 'translateX(5%)';
  }
  if (clientRect.y < innerHeight * 0.8) {
    bannerTxt.style.transform = 'translateX(0)';
  }
  if (clientRect.y < innerHeight * 0.7) {
    bannerTxt.style.transform = 'translateX(-5%)';
  }
  if (clientRect.y < innerHeight * 0.6) {
    bannerTxt.style.transform = 'translateX(-10%)';
  }
  if (clientRect.y < innerHeight * 0.4) {
    bannerTxt.style.transform = 'translateX(-15%)';
  }
  if (clientRect.y < innerHeight * 0.3) {
    bannerTxt.style.transform = 'translateX(-20%)';
  }
  if (clientRect.y < innerHeight * 0.1) {
    bannerTxt.style.transform = 'translateX(-25%)';
  }
});

//project-detail팝업창 열기
const detailBtn = document.querySelectorAll('.project-item .detail-button');
const detailPopup = document.querySelectorAll('.popup');
const detailCloseBtn = document.querySelectorAll('.popup .close-button');
let activePopup;

detailBtn.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    activePopup = element.getAttribute('href');
    document.querySelector(activePopup).classList.add('active');
    overlay.classList.add('active');
  });
});

detailCloseBtn.forEach((element) => {
  element.addEventListener('click', () => {
    overlay.classList.remove('active');
    detailPopup.forEach((element) => {
      element.classList.remove('active');
    });
  });
});

overlay.addEventListener('click', () => {
  detailPopup.forEach((element) => {
    element.classList.remove('active');
  });
});
