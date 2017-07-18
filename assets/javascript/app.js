$(document).ready(function(){
	
	startTimer();
	$("#submit").click(handleClick);	


	var i = 10;
	function startTimer() {

    	countdownTimer = setInterval(function() {
	        $("#timer").html(+ i);
		    i = i - 1;

		    if (i <= 0) {
		        clearInterval(countdownTimer);
		        $("#timer").html("0");
		        alert("Game Over");
		        }

		    }, 1000);
    	
	}

	function handleClick(){         
		var amountCorrect = 0;          
			for(var i = 1; i <= 2; i++) {
			var radios = document.getElementsByName('group'+i);
			  	for(var j = 0; j < radios.length; j++) {
			    	var radio = radios[j];
			    	if(radio.value == "correct" && radio.checked) {
			     	amountCorrect++;
			    	}
			  	}
		}
		alert("Correct Responses: " + amountCorrect);
		alert("Game Over");
		$("#timer").html("0");
		clearInterval(countdownTimer);	
	}		
});