const main = document.querySelector('.main');
const body = document.querySelector('#parent');

let x = 16;

function createCol(x) {
  for ( let i=0 ; i < x; i++) {
    
    const div = document.createElement('div');
    body.appendChild(div);
    div.classList.add('main');
  } 
}

createCol (x);

const mains = document.querySelectorAll('.main');

mains.forEach((mainsDiv) => {
  for ( let i=0 ; i < x; i++) {
  const div = document.createElement('div');
    mainsDiv.appendChild(div);
    div.classList.add('grid');
  }
});