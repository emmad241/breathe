let rightArrow = document.querySelector(".fa-angle-right");
let leftArrow = document.querySelector(".fa-angle-left");
let title = document.querySelector("p");
let video = document.querySelector("iframe");

let videos = [
    "https://www.youtube.com/embed/9BqNYzjc9-U",
	"https://www.youtube.com/embed/3G4kCi_ldr8",
];

let titles = [
    "Turtles",
    "Sit around the fire",
];

let counter = 0;

title.innerHTML = titles[counter];
rightArrow.addEventListener("click", function () {
	counter++;
	video.src = videos[counter];
    if(counter===1){
        leftArrow.style.display="block";
    }
    if(counter===videos.length-1){
        rightArrow.style.display="none";
    }
    title.innerHTML = titles[counter];
});

leftArrow.addEventListener("click", function () {
	counter--;
	video.src = videos[counter];
    if(counter===0){
        leftArrow.style.display="none";
        rightArrow.style.display="block";
    }
    title.innerHTML = titles[counter];
});
