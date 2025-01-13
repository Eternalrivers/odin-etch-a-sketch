const main = document.querySelector('.main');
const parent = document.querySelector('#parent');


let x = 16;
let y = 16;
function createRow(x) {
  for ( let i=0 ; i < x; i++) {
    
    const div = document.createElement('div');
    parent.appendChild(div);
    div.classList.add('main');
  } 
}

createRow (x);

const mains = document.querySelectorAll('.main');

mains.forEach((createCol) => {
  for ( let i=0 ; i < y; i++) {
  const div = document.createElement('div');
    createCol.appendChild(div);
    div.classList.add('grid');
  }
});

const grid = document.querySelectorAll('.grid');

grid.forEach (grids => {
  grids.addEventListener('mouseenter', (e) => {
 
    const r =  Math.floor(Math.random()*255);
    const g =  Math.floor(Math.random()*255);
    const b =  Math.floor(Math.random()*255);

    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;

    console.log(`rgb(${r},${g},${b})`);
  })
});
