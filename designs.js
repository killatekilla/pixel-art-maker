//Program defaults
const tBody = document.createElement("tBody");
const table = document.getElementById("pixel_canvas");
// table.appendChild(tBody);
const colorPicker = document.getElementById("colorPicker");

const makeGrid = (height, width) => {

// Your code goes here!
  //Clear the table body
  while(table.rows.length > 0) {
    table.deleteRow(0)
  };
  //Create cells to insert
  for(let i = 0; i < height; i++) {
    const row = table.insertRow(i);
    for(let j = 0; j < width; j++) {
      const cell = row.insertCell(j);
      cell.onclick = () => {
        cell.style.backgroundColor = colorPicker.value;
      };
    }
  }
}

//Submit-button event listener
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(event){
  event.preventDefault();
  const inputHeight = document.getElementById("input_height").value;
  const inputWidth = document.getElementById("input_width").value;
  makeGrid(inputHeight, inputWidth);
});
