const main = document.querySelector('.main');
const mainCont = document.querySelector('#mainCont');

let mouseClicked = false;
mainCont.addEventListener ('mousedown', (e) => {
  mouseClicked = true;
  console.log(mouseClicked);
  
  //stops the event from propagating
  e.preventDefault();
});

mainCont.addEventListener ('mouseup', () => {
  mouseClicked = false;
});

//Initial grid size during load up.
let x = 16;

function createRow(x) {
  for ( let i=0 ; i < x; i++) {
    
    const div = document.createElement('div');
    mainCont.appendChild(div);
    div.classList.add('main');
  } 
}

createRow (x);

const mains = document.querySelectorAll('.main');

mains.forEach((createCol) => {
  for ( let i=0 ; i < x; i++) {
  const div = document.createElement('div');
    createCol.appendChild(div);
    div.classList.add('grid');
  }
});

const grid = document.querySelectorAll('.grid');

grid.forEach (grids => {
  grids.addEventListener('mouseenter', (e) => {
   if (mouseClicked) {
    const r =  Math.floor(Math.random()*255);
    const g =  Math.floor(Math.random()*255);
    const b =  Math.floor(Math.random()*255);
    
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    console.log (e.target.style.backgroundColor);
    
    let opacity = Number(window.getComputedStyle(e.target).opacity);
    console.log(opacity);
    console.log(e.target.style.opacity);
      
      if (opacity < 1) {
        e.target.style.opacity = opacity + 0.1;
      }
    }
  })
});

function gridSize () {
  let x = document.querySelector('#numb').value;
  if (x > 100 || isNaN(x)) {
    document.querySelector('.textOutput').textContent = 'Input a number less than 100';
  } else {
    return x;
  }
}

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const mains = document.querySelectorAll('.main');
  let val = mains.length

    for ( let i=0 ; i < val; i++) {
    deleteChild();
      
  }
  
  let y = gridSize ();
  createRow (y);
  
  const col = document.querySelectorAll('.main');
  let x = col.length;
  
  col.forEach((createCol) => {
    for ( let i=0 ; i < x; i++) {
    const div = document.createElement('div');
      createCol.appendChild(div);
      div.classList.add('grid');
    }
  });
  //redeclares const and eventListener after grid deletion
  const grid = document.querySelectorAll('.grid');

  grid.forEach (grids => {
    grids.addEventListener('mouseenter', (e) => {
      if (mouseClicked) {
        const r =  Math.floor(Math.random()*255);
    const g =  Math.floor(Math.random()*255);
    const b =  Math.floor(Math.random()*255);

    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;

    console.log(`rgb(${r},${g},${b})`);

    let opacity = Number(window.getComputedStyle(e.target).opacity);
    console.log(opacity);
      
      if (opacity < 1) {
        e.target.style.opacity = opacity + 0.1;
      }
      }
    
  })
});
})

function deleteChild() {
  const mainCont = document.querySelector('#mainCont');
  const main = document.querySelector('.main');
  mainCont.removeChild(main);
}


