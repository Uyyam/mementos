let petType;
let petSelection = document.getElementById("pet");;
let selectedPet;
let state = 0;
let petName;

let walk = false;
let walkCount = 0;

document.addEventListener("DOMContentLoaded", () => {
    const petName = localStorage.getItem("petName");
    const petType = localStorage.getItem("petType");
    if (petName) {
        document.getElementById("petName").innerHTML = petName;
    }
});

function setPet(pet){
    petType = pet;
    document.getElementById("pet-selection").style.display = "none";
    document.getElementById("chose-pet").style.display = "flex";
    document.getElementById("petType").innerHTML = "Chose A " + petType;
    localStorage.setItem("petType", petType);
    petSelection = document.getElementById("pet");;
    if (petType === "Dog") {
        petSelection.setAttribute("class", "dog1");
        selectPet();
}
    else if (petType === "Cat") {
    next();
    }
}

function next(){
        if(state === 0){
            petSelection.setAttribute("class", "cat1");
            state++;
        }
        else if (state === 1) {
            petSelection.setAttribute("class", "cat2");
            state++;
        }
        else if (state === 2) {
            petSelection.setAttribute("class", "cat3");
            state = 0;;
        }
     }

    
function selectPet(){
    pet = petSelection.getAttribute("class");
    localStorage.setItem("pet", pet);
    console.log("Selected Pet: " + pet);
    document.getElementById("next").style.display = "none";
    document.getElementById("select").style.display = "none";
    document.getElementById("petType").innerHTML = "Give Them a Name!";
    document.getElementById("petName").style.display = "flex";

}

function submitPet(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    petName = document.getElementById("petName").value;
    console.log("Submitted Pet Name:", petName);
    localStorage.setItem("petName", petName);
    window.location.href = "play.html"; // Redirect to index.html after submission
    // Add further logic for handling the pet name here
}

function playTime(){
    document.getElementById("petName").innerHTML = localStorage.getItem("petName");
    document.getElementById("pet").setAttribute("class", String(localStorage.getItem("pet")));
    console.log(pet)
    if(localStorage.getItem("petType") === "Dog") {
        document.getElementById("walk-container").style.display = "flex";
    }
}

function feedPet() {

}

function playWith() {

}

function walkPet() {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup").innerHTML = "Do I have to...?";
    if(walk){
        console.log("Walking the pet...");
    }
    else if (walkCount === 3){
        console.log("Mom will walk the pet...");
    }
}

function setWalk(){
    walk = true;
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
    walkCount ++;
}

function reset() {
    localStorage.removeItem("pet");
    localStorage.removeItem("petName");
    document.getElementById("petName").value = ""; // Clear the input field
    document.getElementById("petName").placeholder = "Enter Pet Name"; // Reset placeholder
    
}
