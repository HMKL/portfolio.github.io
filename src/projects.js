/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-console */
const allP = document.querySelectorAll('p');
const getContainer = document.querySelectorAll('.container');
const getContainerFluid = document.querySelectorAll('.container-fluid');
const collapseAdd = document.getElementById('testBtn');
const allA = document.querySelectorAll('#navleft > div > a');
getContainerFluid[1].classList.add('_1');
// const photo = document.querySelector('img').addEventListener('contextmenu', (p) => {
//   p.preventDefault();
// });
const addClass = document.querySelectorAll('#navleft > div');
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
    getContainerFluid[4].classList.add('_6');
    getContainerFluid[4].classList.remove('_3');
    allP[2].setAttribute('class', '_7');
    allA.forEach((square) => {
      square.classList.add('text');
    });
  } else {
    getContainer[0].style.display = 'block';
    document.querySelector('#testBtn').classList.add('navbar-toggler', 'collapsed');

    getContainerFluid[4].classList.add('_3');
    getContainerFluid[4].classList.remove('_6');
    allP[2].removeAttribute('class', '_7');
    allA.forEach((square) => {
      square.classList.remove('text');
    });
  }
}
checkWidth(width);
width.addEventListener('change', checkWidth);

const cv = document.querySelectorAll('i');

for (let a = 1; a < cv.length; a += 1) {
  cv[a].classList.add('fa');
}
