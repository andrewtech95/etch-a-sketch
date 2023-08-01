const btn = document.querySelector('button');
const container = document.querySelector('.container');

btn.addEventListener('click', () => { 
  let squaresNumberPerSide = prompt('Enter number of squares per side (max 100)');
  if (squaresNumberPerSide === null) return;
  else if (squaresNumberPerSide > 100 || squaresNumberPerSide < 0) alert('Invalid entry. Try again');
  else {
    container.innerHTML = '';
    newGrid(squaresNumberPerSide);
  }  
});

function newGrid(snps) {
  for (let i=0; i<snps**2; i++) {
    const div = document.createElement('div');
    div.style.cssText = `width: ${800/snps}px; height: ${800/snps}px;`;
    div.addEventListener('mouseover', () => div.classList.add('color'));
    container.appendChild(div);
  }
}

newGrid(16);