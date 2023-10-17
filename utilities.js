function getRandomInteger(lower, upper) {
    //R = parseInt(rnd * (upper - (lower - 1)) + lower)
    var multipler = upper - (lower - 1);
    var rnd = parseInt(Math.random() * multipler) + lower;
    return rnd;
}

function initialize() {
    numberOutput = document.getElementById("numout");
    rndNum = 0;
    display();
}

function changeNumber() {
    rndNum = getRandomInteger(1, 10);
    display();
}

function display() {
    numberOutput.innerHTML = rndNum;
}