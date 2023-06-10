const typingText = document.querySelector(".change-txt");
let Designation = ["Narijiel Vincent", "Front End Developer", "Student", "Back End Developer"];

let arrayIndex = 0;

function ChangingTxt() {
    if (arrayIndex < Designation.length) {
        typingText.innerHTML = Designation[arrayIndex];
        arrayIndex = arrayIndex + 1;
    } else {
        arrayIndex = 0;
        typingText.innerHTML = Designation[arrayIndex];
        arrayIndex = arrayIndex + 1;
    }
}

console.log("Hello world!");
setInterval(ChangingTxt,5000);
ChangingTxt();
