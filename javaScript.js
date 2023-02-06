const container = document.querySelector (".container");


for (let i = 1; i<257; i++) {
let div = document.createElement ('div');
div.style.cssText = "border: 1px solid black; height: 25px; width: 25px"; 
container.appendChild(div);


div.addEventListener ('mouseover', one);
div.addEventListener ('mousedown', one);


function one () {

  div.style.backgroundColor = "black";
}

}


const button = document.querySelector ('.button');

button.addEventListener ('click', function two () {

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



  for (let i = 1; i<num; i++) {
    let div = document.createElement ('div');
    div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
    div.id = "grid-element";  
    container.appendChild(div);
    
    
    div.addEventListener ('mouseover', one);
    div.addEventListener ('mousedown', one);
    function one () {

      div.style.backgroundColor = "black";
    }
  }
});



//exampls

function createGrid(number) {
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  for (let i = 1; i <= number*number; i++) {
      let div = document.createElement("div");
      div.classList.add("grid-box")
      gridContainer.appendChild(div);
  }
  document.querySelector(".grid-dimensions").textContent = `${number}x${number}`;
}



//https://github.com/jennifertieuu/top-etch-a-sketch/blob/main/script.js

//https://stackoverflow.com/questions/65890826/problem-with-resizing-of-a-grid-javascript-css-html-etch-a-sketch-for-the-odi