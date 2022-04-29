/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
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

const getContainer = document.querySelectorAll('.container-fluid');
// getContainer[1].style.margin = '0px 10px 0px 10px';
getContainer[1].classList.add('_1');
