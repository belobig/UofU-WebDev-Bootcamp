document.getElementById("growBtn").addEventListener("click", function(){

	document.getElementById("box").style.height = "400px";
	document.getElementById("box").style.width = "400px";

});

document.getElementById("blueBtn").addEventListener("click", function(){

	document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("fadeBtn").addEventListener("click", function(){

	document.getElementById("box").style.opacity = "0.4";

});

document.getElementById("resetBtn").addEventListener("click", function(){

	document.getElementById("box").style.height = "150px";
	document.getElementById("box").style.width = "150px";
	document.getElementById("box").style.backgroundColor = "orange";
	document.getElementById("box").style.opacity = "1";
	document.getElementById("box").style.borderRadius = "0%";
	document.getElementById("box").style.transform = "skew(0deg, 0deg)";

});

document.getElementById("circleBtn").addEventListener("click", function(){

	document.getElementById("box").style.borderRadius = "50%";

});

document.getElementById("skewBtn").addEventListener("click", function(){

	document.getElementById("box").style.transform = "skew(45deg, 2deg)";

});