const main = document.querySelector('#main');

function createDiv() {
  for ( let i = 0 ; i < 16; i++) {
    const div = document.createElement('div');
    main.appendChild(div);
    div. classList.add('grid');
  } 
    
}
  
createDiv();
