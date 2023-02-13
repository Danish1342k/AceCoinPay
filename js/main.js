// Time Up & Pop Up Comes
let minutes = 01;
let seconds = 59;

function updateTimer() {
    // Decrement seconds by 1
    seconds = (seconds === 0) ? 59 : seconds - 1;

    // If seconds reaches 0, decrement minutes by 1 and reset seconds to 59
    minutes = (seconds === 59) ? minutes - 1 : minutes;

    // If minutes becomes negative, stop the interval and hide contentMain
    if (minutes < 0) {
        clearInterval(interval);
        document.getElementById("contentMain").style.display = "none";
        document.getElementById("model").style.display = "block";
        return;
    }

    // Calculate the values for each digit of the timer
    let minute1 = Math.floor(minutes / 10);
    let minute2 = minutes % 10;
    let second1 = Math.floor(seconds / 10);
    let second2 = seconds % 10;

    // Update the timer on the page
    document.getElementById("minute1").innerHTML = minute1;
    document.getElementById("minute2").innerHTML = minute2;
    document.getElementById("second1").innerHTML = second1;
    document.getElementById("second2").innerHTML = second2;
}

// Set an interval to call updateTimer every second
let interval = setInterval(updateTimer, 1000);

// Function to hide the model and show contentMain
function hideModel() {
    document.getElementById("contentMain").style.display = "flex";
    document.getElementById("model").style.display = "none";
}


// Inuput card number detail filling outcome in card last four digit OR
//it changes the image of input also number enter in input has hyphons on it


var input = document.getElementById("inputNumber");
var output = document.getElementById("displayLastFour");
const correctIcon = document.getElementsByClassName("correctIcon")[0];
const incorrectIcon = document.getElementsByClassName("uncorrectIcon")[0];

input.addEventListener("input", function () {
    var lastFour = this.value.slice(15, 19);
    output.innerHTML = "**** " + lastFour;

    let value = this.value.replace(/\D/g, "");
    let formattedValue = "";

    for (let i = 0; i < value.length; i++) {
        if (i % 4 === 0 && i !== 0) {
            formattedValue += "-";
        }
        formattedValue += value[i];
    }
    this.value = formattedValue;

    if (input.value.length === 19) {
        correctIcon.style.display = "block";
        incorrectIcon.style.display = "none";
    } else {
        correctIcon.style.display = "none";
        incorrectIcon.style.display = "block";
    }
});

//Expiry Date/year Detail Filling  outcome in card  OR
//only two number shows in  Date/year Script
const inputNumberexp = document.getElementById("inputNumberexp");
const displaydigit = document.getElementById("displaydigit");

const monthInput = inputNumberexp.querySelector(".month");
const yearInput = inputNumberexp.querySelector(".year");

monthInput.addEventListener("input", updateDisplayDigit);
yearInput.addEventListener("input", updateDisplayDigit);

function updateDisplayDigit() {
    displaydigit.innerHTML = `<sup>${monthInput.value}/${yearInput.value}</sup>`;
}


//onclick of edit changes show reenter the detail

function editDetails() {
    document.getElementById("inputNumber").value = "";
    document.querySelector(".dotImage input").value = "";
    document.querySelector(".expDate .date").value = "";
    document.querySelector(".expDate .year").value = "";
    document.querySelector(".passwords input").value = "";
}

//submit button process
function openpaymentload() {
    document.getElementById("contentMain").style.display = "none";
    document.getElementById("model").style.display = "none";
    document.getElementById("payment").style.display = "block";
}

function hideModeltwo() {
    document.getElementById("contentMain").style.display = "flex";
    document.getElementById("model").style.display = "none";
    document.getElementById("payment").style.display = "none";
}