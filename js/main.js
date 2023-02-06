
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

// Inuput card number detail filling outcome in card javascript are here

var input = document.getElementById("inputNumber");
var output = document.getElementById("displayLastFour");

input.addEventListener("input", function () {

    //we can also either substrac or uses slice method anyone
    // var lastFour = this.value.substr(this.value.length - 4);
    // output.innerHTML = "**** " + lastFour;

    var lastFour = this.value.slice(-4);
    output.innerHTML = "**** " + lastFour;
});

//it changes the image of input also number enter in input has hyphons on it
const inputNumber = document.getElementById("inputNumber");
const correctIcon = document.getElementsByClassName("correctIcon")[0];
const incorrectIcon = document.getElementsByClassName("uncorrectIcon")[0];

inputNumber.addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");
    let formattedValue = "";

    for (let i = 0; i < value.length; i++) {
        if (i % 4 === 0 && i !== 0) {
            formattedValue += "-";
        }
        formattedValue += value[i];
    }
    this.value = formattedValue;

    if (inputNumber.value.length === 19) {
        correctIcon.style.display = "block";
        incorrectIcon.style.display = "none";
    } else {
        correctIcon.style.display = "none";
        incorrectIcon.style.display = "block";
    }
});

//Expiry Date/Month Detail Filling  outcome in card  JavaScript are Here

const inputNumberexp = document.getElementById("inputNumberexp");
const displaydigit = document.getElementById("displaydigit");

inputNumberexp.addEventListener("input", function () {
    let month = inputNumberexp.children[0].value;
    let year = inputNumberexp.children[2].value;

    displaydigit.textContent = `${month}/${year}`;
});

// only two number shows in  Date/Month Script

const inputs = document.getElementById('inputNumberexp');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function () {
        if (this.value.length > 2) {
            this.value = this.value.substr(0, 2);
        }
    });
}


//onclick of edit change show reenter the detail

function editDetails() {
    document.getElementById("inputNumber").value = "";
    document.getElementsByClassName("form-control")[1].value = "";
    document.getElementsByClassName("form-control")[2].value = "";
}

document.getElementsByClassName('edit-btn').addEventListener('click', editDetails);

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