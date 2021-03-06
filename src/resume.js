/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-console */
const getContainerFluid = document.querySelectorAll('.container-fluid');
const getContainer = document.querySelectorAll('.container');
const getRows = document.querySelectorAll('.row');
const allP = document.querySelectorAll('p');
const allA = document.querySelectorAll('#navleft > div > a');
const addClass = document.querySelectorAll('#navleft > div');
getContainerFluid[1].classList.add('_1');
const cv = document.querySelectorAll('i');

for (let a = 1; a < cv.length; a += 1) {
  cv[a].classList.add('fa');
}

addClass.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    element.classList.add('under');
  });
});

addClass.forEach((element) => {
  element.addEventListener('mouseout', () => {
    element.removeAttribute('class', 'under');
  });
});

let count = 0;
const collapseAdd = document.getElementById('testBtn');
collapseAdd.addEventListener('click', () => {
  count += 1;
  if (count === 1) {
    document.querySelector('#navbarCollapse').classList.add('inherit');
    getContainer[0].style.display = 'none';
    getContainerFluid[2].style.display = 'none';
    getContainerFluid[3].style.display = 'none';

    document.querySelector('#testBtn > span').innerHTML = '<i class="fa-solid fa-grip-lines-vertical"></i>';
  } else {
    document.querySelector('#navbarCollapse').classList.remove('inherit');
    getContainer[0].style.display = 'block';
    getContainerFluid[2].style.display = 'block';
    getContainerFluid[3].style.display = 'block';
    document.querySelector('#testBtn > span').innerHTML = '<i class="fa-solid fa-bars"></i>';
    count -= 2;
  }
});

const width = window.matchMedia('(max-width:769px)');

function checkWidth(e) {
  if (e.matches) {
    getRows[10].classList.add('_5');
    getRows[10].classList.remove('_2');
    allP[5].setAttribute('class', '_7');
    getContainerFluid[4].classList.add('_6');
    getContainerFluid[4].classList.remove('_3');
    allA.forEach((square) => {
      square.classList.add('text');
    });
  } else {
    getRows[10].classList.remove('_5');
    getRows[10].classList.add('_2');
    allP[5].removeAttribute('class', '_7');
    getContainerFluid[4].classList.add('_3');
    getContainerFluid[4].classList.remove('_6');
    allA.forEach((square) => {
      square.classList.remove('text');
    });
  }
}
checkWidth(width);
width.addEventListener('change', checkWidth);
