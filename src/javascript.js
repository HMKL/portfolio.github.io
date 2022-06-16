/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-console */
const getDescription = document.querySelectorAll('.container > div >.row > div ');
const allP = document.querySelectorAll('p');
const getRows = document.querySelectorAll('.row');
const getcontainerBtn = document.querySelectorAll('.btns > div');
getcontainerBtn[0].classList.add('containerBtn');
const getContainer = document.querySelectorAll('.container');
const getContainerFluid = document.querySelectorAll('.container-fluid');
getContainerFluid[1].classList.add('_1');
const photo = document.querySelector('img').addEventListener('contextmenu', (p) => {
  p.preventDefault();
});

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
const allA = document.querySelectorAll('#navleft > div > a');

function checkWidth(e) {
  if (e.matches) {
    getRows[0].classList.add('flex-column-reverse', 'flex-md-row');
    getRows[1].classList.add('_5');
    getRows[1].classList.remove('_2');
    getContainerFluid[4].classList.add('_6');
    getContainerFluid[4].classList.remove('_3');
    allP[0].setAttribute('class', '_7');
    allA.forEach((square) => {
      square.classList.add('text');
    });
  } else {
    getContainer[0].style.display = 'block';
    document.querySelector('#testBtn').classList.add('navbar-toggler', 'collapsed');
    getRows[0].classList.remove('flex-column-reverse', 'flex-md-row');
    getRows[1].classList.remove('_5');
    getRows[1].classList.add('_2');
    getContainerFluid[4].classList.add('_3');
    getContainerFluid[4].classList.remove('_6');
    allP[0].removeAttribute('class', '_7');
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

const app = document.getElementById('app');

const typewriter = new Typewriter(app, {
  // loop: true,
  cursor: '_',
});

typewriter
  .pauseFor(300)
  .typeString('<strong>I\'m Catalin.</strong>')
  .pauseFor(1000)
  .typeString('<strong><span style="color: #0000008c;">Creative.</span></strong>')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString('<strong><span style="color: #0000008c;">Designer.</span></strong>')
  .pauseFor(1000)
  .deleteChars(7)
  // .deleteAll()
  .typeString('<strong><span style="color: #0000008c;">veloper.</span></strong>')
  .pauseFor(3000)
  .start();
