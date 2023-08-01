const DEFAULT_SIZE = 16; 
const btn = document.querySelector('button');
const container = document.querySelector('.container');

btn.addEventListener('click', () => { 
  let size = prompt('Enter number of squares per side (max 100)');
  if (size === null) return;
  else if (size > 100 || size < 0) alert('Invalid entry. Try again');
  else {
    container.innerHTML = '';
    setupGrid(size);
  }  
});

function setupGrid(size) {
  for (let i=0; i<size**2; i++) {
    const gridElement = document.createElement('div');
    gridElement.style.cssText = `width: ${800/size}px; height: ${800/size}px;`;
    gridElement.addEventListener('mousedown', () => gridElement.classList.add('color'));
    container.appendChild(gridElement);
  }
}

setupGrid(DEFAULT_SIZE);