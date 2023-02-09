// Time Up & Pop Up Comes

let minutes = 01;
let seconds = 59;

function updateTimer() {
    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    if (minutes < 0) {
        clearInterval(interval);
        document.getElementById("contentMain").style.display = "none";
        document.getElementById("model").style.display = "block";
        return;
    }

    let minute1 = Math.floor(minutes / 10);
    let minute2 = minutes % 10;
    let second1 = Math.floor(seconds / 10);
    let second2 = seconds % 10;

    document.getElementById("minute1").innerHTML = minute1;
    document.getElementById("minute2").innerHTML = minute2;
    document.getElementById("second1").innerHTML = second1;
    document.getElementById("second2").innerHTML = second2;
}

let interval = setInterval(updateTimer, 1000);

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

inputNumberexp.addEventListener("input", function () {
    let date = inputNumberexp.children[0].value;
    let year = inputNumberexp.children[2].value;

    if (date.length > 2) {
        date = date.substr(0, 2);
        inputNumberexp.children[0].value = date;
    }

    if (year.length > 2) {
        year = year.substr(0, 2);
        inputNumberexp.children[2].value = year;
    }
    // if (date || date > 31 || date < 1 || year || year > 12 || year < 1) {
    //     displaydigit.textContent = "Invalid date";
    // } else {
    //     displaydigit.textContent = `${date}/${year}`;
    // }


    displaydigit.textContent = `${date}/${year}`;
});


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