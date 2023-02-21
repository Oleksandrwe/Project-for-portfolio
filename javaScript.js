
//createGrid 
let number = 16;
function createGrid (number) {

const container = document.querySelector ('.container');
container.style.gridTemplateColumns = `repeat(${number}, 25fr)`;
container.style.gridTemplateRows = `repeat(${number}, 25fr)`;

for (let i = 0; i<=number*number; i++) {
let div = document.createElement ('div');

div.classList.add('grid-box');
 
container.appendChild(div);

//changeColor 
function changeColor () {

  div.style.backgroundColor = 'black';
}
div.addEventListener ('mouseover', changeColor);
div.addEventListener ('mousedown', changeColor);
}


}
createGrid (number);

//resetGrid 
function resetGrid () {

const container = document.querySelector ('.container');
const resetButton = document.querySelector ('.reset-button');

resetButton.addEventListener ('click', function two () {
  let num = prompt("Please enter the number of squares");
  if (num === undefined || num === null || num === "") {
    return;
}

while (num > 100){
    num = prompt("Number too big! Please enter grid size less than or equal to 100:");
}

while (container.hasChildNodes()) {
  container.removeChild(container.firstChild);
}
createGrid (num);

})


}

resetGrid ();

//clearGrid 
function clearGrid () {

  const container = document.querySelector ('.container');
  const clearButton = document.querySelector ('.clear-button');
  
  clearButton.addEventListener ('click', function two () {
    
    let gridBoxList = document.querySelectorAll(".grid-box");
      gridBoxList.forEach(gridBox => {gridBox.style.backgroundColor = null});
    }

)}

clearGrid ();

