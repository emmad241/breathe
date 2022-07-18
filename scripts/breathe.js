const circle = document.querySelector(".circle");
var isLooping = false;
let breatheLoop;
let breathInTime;
let breatheOutTime;
let holdTime;

function stopLoop() {
	clearInterval(breatheLoop);
	circle.style.height = "20rem";
	circle.style.width = "20rem";
	circle.innerHTML = "Click to start";
	isLooping = false;
}

function breatheTimer(){
	circle.style.height = "40rem";
	circle.style.width = "40rem";
	circle.innerHTML = "Breathe in";
    setTimeout(() => {
		if(isLooping){
	        circle.innerHTML = "Hold";
		}
	}, 3000);
	setTimeout(() => {
		if(isLooping){
	        circle.style.height = "20rem";
	        circle.style.width = "20rem";
	        circle.innerHTML = "Breathe out";
		}
    }, 5000);
	setTimeout(() => {
		if(isLooping){
	        circle.innerHTML = "Hold";
		}
	}, 8000);
}

function startLoop(){
    isLooping = true;
	breatheTimer();
	breatheLoop = setInterval(breatheTimer, 10000);
}

circle.addEventListener("click", function(){
	if(!isLooping){
	    startLoop();
	}else{
		stopLoop();
	}
});
