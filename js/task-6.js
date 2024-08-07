function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const controls = document.querySelector("#controls")
const boxes = document.querySelector("#boxes")


controls.addEventListener("click", handleControlsClick)


function handleControlsClick(event) {
  if (event.target.dataset.create === "") {

    const input = event.currentTarget.querySelector("input");
    const inputValue = Number(input.value.trim())

    if (inputValue < 1 || inputValue > 100) return

    createBoxes(inputValue)

    input.value = ""

  } else if (event.target.dataset.destroy === "") {
    destroyBoxes()
  }

}



function createBoxes(amount) {
  let size = 30;
  let markup = "";

  for (let i = 1; i <= amount; i += 1) {
    const color = getRandomHexColor();
    size += 10;
    markup += `<div style="background-color: ${color}; width: ${size}px; height: ${size}px; margin: 10px;"></div>`;
  }

  boxes.innerHTML = markup;
}
function destroyBoxes() {
  boxes.innerHTML = ""
}