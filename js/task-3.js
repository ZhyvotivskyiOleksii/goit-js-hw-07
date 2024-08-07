const nameInput = document.querySelector("#name-input")
const nameOutput = document.querySelector("#name-output")

nameInput.addEventListener("input", handleInput)

function handleInput(event) {
    const value = event.target.value.trim();
    if (value === "") {
        nameOutput.textContent = "Anonymous"
    } else {
        nameOutput.textContent = value
    }
}

