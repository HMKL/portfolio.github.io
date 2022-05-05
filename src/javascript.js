/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-console */
const getDescription = document.querySelectorAll('.container > div >.row > div ');
getDescription[0].classList.add('col-md-4');
getDescription[1].classList.add('col-md-8');
const getRows = document.querySelectorAll('.row');
const getcontainerBtn = document.querySelectorAll('.buttons > div');
getcontainerBtn[0].classList.add('containerBtn');
const getContainer = document.querySelectorAll('.container');
const getContainerFluid = document.querySelectorAll('.container-fluid');
getContainerFluid[1].classList.add('_1');

const addClass = document.getElementById('navleft').querySelectorAll('div');
for (let i = 0; i < addClass.length; i += 1) {
  if (addClass.length) {
    addClass[i].addEventListener('mouseenter', () => {
      for (let z = 0; z < addClass.length; z += 1) {
        addClass[i].setAttribute('class', 'under');
      }
    });
  }
}

const removeClass = document.getElementById('navleft').querySelectorAll('div');
for (let a = 0; a < removeClass.length; a += 1) {
  if (removeClass.length) {
    removeClass[a].addEventListener('mouseout', () => {
      for (let j = 0; j < removeClass.length; j += 1) {
        removeClass[j].removeAttribute('class', 'under');
      }
    });
  }
}

let count = 0;
const collapseAdd = document.getElementById('testBtn');
collapseAdd.addEventListener('click', () => {
  count += 1;
  if (count === 1) {
    // document.querySelector('#navbarCollapse').classList.add('inherit');
    getContainer[0].style.display = 'none';
    getContainerFluid[2].style.display = 'none';
    document.querySelector('#testBtn > span').innerHTML = '<i class="fa-solid fa-grip-lines-vertical"></i>';
  } else {
    // document.querySelector('#navbarCollapse').classList.remove('inherit');
    getContainer[0].style.display = 'block';
    getContainerFluid[2].style.display = 'block';
    document.querySelector('#testBtn > span').innerHTML = '<i class="fa-solid fa-bars"></i>';
    count -= 2;
  }
});

const width = window.matchMedia('(max-width:769px)');
const allDivs = document.querySelectorAll('.container > div');
const allA = document.querySelectorAll('#navleft > div > a');
// allA.forEach((square) => {
//   square.classList.add('text');
// });
allDivs.forEach((div) => {
  div.classList.add('col-12');
});

function checkWidth(e) {
  if (e.matches) {
    document.querySelector('#navbarCollapse').classList.add('inherit');
    getRows[0].classList.add('flex-column-reverse', 'flex-md-row');
    allA.forEach((square) => {
      square.classList.add('text');
    });
  } else {
    document.querySelector('#navbarCollapse').classList.remove('inherit');
    getContainer[0].style.display = 'block';
    document.querySelector('#testBtn').classList.add('navbar-toggler', 'collapsed');
    getRows[0].classList.remove('flex-column-reverse', 'flex-md-row');
    allA.forEach((square) => {
      square.classList.remove('text');
    });
  }
}
checkWidth(width);
width.addEventListener('change', checkWidth);
