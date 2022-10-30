const toggleButton = document.getElementsByClassName("toggle-button")[0]
const listContainer = document.getElementsByClassName("list-container")[0]

toggleButton.addEventListener("click", () =>{
    listContainer.classList.toggle("active")
})

const submenup = document.getElementsByClassName("submenup")[0]
const produkte = document.getElementsByClassName("Produkte")[0]

produkte.addEventListener("click", () => {
    submenup.classList.toggle("active")
})