// Variables ......

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/diamond.jpg", "./assets/images/emerald.jpg", "./assets/images/ruby.jpg", "./assets/images/sapphire.jpg"];

// Functions  ......

function randomTargetNumber() {
    targetNumber = Math.floor(Math.random() * 120) + 19;
}

function resetCrystals() {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("gems");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        crystal.attr("height", "100");
        $(".gems-images").append(crystal);
    }
}

function resetHTML() {
    $(".target-number").html(targetNumber);
    $(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
    $(".score-number").html(counter);
    $(".gems-images").empty();
}

function totalReset() {
    randomTargetNumber();
    counter = 0;
    resetHTML();
    resetCrystals();
}



randomTargetNumber();
resetHTML();
resetCrystals();


function crystalClick() {

    counter += parseInt($(this).attr("value"));
    $(".score-number").html(counter);
    if (counter == targetNumber) {
        wins++;
        window.alert("You win!")
        totalReset();
    }
    else if (counter > targetNumber) {
        losses++;
        window.alert("You lost!")
        totalReset();
    };
};


$(document).on("click", ".gems", crystalClick);