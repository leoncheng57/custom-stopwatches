// import Timer from './time';

import Timer from "./time";

// When you click on the + button, it initializes a new Timer object
const addContainer:HTMLElement = document.getElementById("addContainer");
addContainer.addEventListener("click", () => {
    document.getElementById("modal").classList.remove("invisible");
})
const closeModal:HTMLElement = document.getElementById("closeModal");
closeModal.addEventListener("click", () => {
    document.getElementById("modal").classList.add("invisible");
})



// Create a new timer
const inputObjects:HTMLCollectionOf<HTMLInputElement> = document.getElementById("modalContent").getElementsByTagName("input");

const modalButton = document.getElementById("modalButton");
modalButton.addEventListener("click", () => {
    let Title:string; 
    let Hrs:number; 
    let Mins:number; 
    let Secs:number; 
    for (let inputObj of Array.from(inputObjects)) {
        console.log(inputObj);
        switch(inputObj.name) {
            case "Title":
                Title = inputObj.value
                break;
            case "Hrs":
                Hrs = +inputObj.value
                break;
            case "Mins":
                Mins = +inputObj.value
                break;
            case "Secs":
                Secs = +inputObj.value
                break;
        }
    }
    new Timer(() => {console.log('this should be updateBigTimer being called')}, Title, Hrs, Mins, Secs, 0);
    // close modal
    document.getElementById("modal").classList.add("invisible");
})

