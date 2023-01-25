var seconds = 0.00;
var tens =0.00;
var addTens =document.getElementById("tens");
var addSecs =document.getElementById("seconds");
var buttonStart = document.getElementById("btn-start");
var buttonStop = document.getElementById("btn-stop");
var buttonRestart = document.getElementById("btn-restart");
var interval;

 startTimer = () => {
 	tens++;
 	 if(tens < 9){
        addTens.innerHTML = "0" + tens;
 	 }
 	 if(tens > 9){
		addTens.innerHTML = tens;
 	 }
 	 if(tens > 99){
 	 	seconds++;
 	 	addSecs.innerHTML = "0" + seconds;
 	 	tens =0;
 	 	addTens.innerHTML = "0" + 0; 	
 	 }
 	 if (seconds>9){
        addSecs.innerHTML = seconds;

 	 }
 }

 buttonStart.addEventListener("click",() => interval =setInterval(startTimer));
 buttonStop.addEventListener("click", () => clearInterval(interval));
 buttonRestart.addEventListener("click", () =>{
    clearInterval(interval);
 	tens ="0.00";
 	seconds="0.00";
 	addSecs.innerHTML = seconds;
 	addTens.innerHTML = tens;
 })
 