const DEFAULT_SIZE = 30; 
const btn = document.querySelector('button');
const container = document.querySelector('.container');

btn.addEventListener('click', () => { 
  let size = +prompt('Enter number of squares per side (max 100)');
  if (!size) return;
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
    gridElement.addEventListener('mouseover', changeColor);
    container.appendChild(gridElement);
  }
}

function changeColor(e) {
  const randomR = Math.floor(Math.random()*256);
  const randomG = Math.floor(Math.random()*256);
  const randomB = Math.floor(Math.random()*256);
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

setupGrid(DEFAULT_SIZE);