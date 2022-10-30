const toggleButton = document.getElementsByClassName("toggle-button")[0]
const listContainer = document.getElementsByClassName("list-container")[0]
const kontakt = document.getElementsByClassName("kontakt")[0]

toggleButton.addEventListener("click", () =>{
    listContainer.classList.toggle("active")
    kontakt.classList.toggle("active")
})

const submenup = document.getElementsByClassName("submenup")[0]
const produkte = document.getElementsByClassName("Produkte")[0]

produkte.addEventListener("click", () => {
    submenup.classList.toggle("active")
    
})

const button = document.getElementsByClassName("btn")[0]

button.addEventListener("click", () => {
    alert("Danke für die Nachricht!")
})