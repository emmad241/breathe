const leafOne = document.querySelector(".one");
const leafTwo = document.querySelector(".two");
const leafThree = document.querySelector(".three");
const leafFour = document.querySelector(".four");
const leafFive = document.querySelector(".five");
const leafSix = document.querySelector(".six");
const leafSeven = document.querySelector(".seven");

function leafLoop(leaf){
    $(leaf).animate({
        left: "+=110%",
    }, 4000, "linear", function() {
          console.log("right");
    });
    $(leaf).animate({
        top: "+=110%",
    }, 4000, "linear", function() {
          console.log("down");
    });
    $(leaf).animate({
        left: "-=110%",
    }, 4000, "linear", function() {
          console.log("left");
    });
    $(leaf).animate({
        top: "-=110%",
    }, 4000, "linear", function() {
          console.log("up");
    });
}

setInterval(() => {
    leafLoop(leafOne);
}, 0);

setInterval(() => {
    leafLoop(leafTwo);
}, 500);

setInterval(() => {
    leafLoop(leafThree);
}, 1000);

setInterval(() => {
    leafLoop(leafFour);
}, 1500);

setInterval(() => {
    leafLoop(leafFive);
}, 2000);

setInterval(() => {
    leafLoop(leafSix);
}, 2500);

setInterval(() => {
    leafLoop(leafSeven);
}, 3000);