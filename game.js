var value = window.prompt("Please Enter your name");
valur = document.write(value + " ,Welcome to play Paper Scissors Rock game!. ");

	var click = 0;
	var paperPlayed = 0;
	var scissorsPlayed = 0;
	var rockPlayed = 0;
function play(){
    click++;
    var play = ["Paper", "Scissors", "Rock"];
    var computerSelect = play[Math.floor(Math.random()*3)];
    var youSelect = (document.youSelect.Selection.value);
    var answer = answer();
    document.getElementById('play').innerHTML = computerSelect;
    document.getElementById('computerSelect').innerHTML = computerSelect;
    document.getElementById('youSelect').innerHTML = youSelect;
    document.getElementById('answer').innerHTML= answer;
    if(youSelect=="Paper"){
    	paperPlayed++;
    }
    if(youSelect=="Scissors"){
    	scissorsPlayed++;
    }
    if(youSelect=="Rock"){
    	rockPlayed++;
    }
    document.getElementById('history').innerHTML = click;
    document.getElementById('paperPlayed').innerHTML = paperPlayed;
    document.getElementById('scissorsPlayed').innerHTML = scissorsPlayed;
    document.getElementById('rockPlayed').innerHTML = rockPlayed;
 	function answer(){
 	if (computerSelect == youSelect){
 		return answer = "Tie"
	}else if (computerSelect == "Rock" && youSelect == "Paper"){
		return answer = "You Win"
 	}else if (computerSelect == "Rock" && youSelect == "Scissors"){
 		return answer = "You lost"
 	}else if (computerSelect == "Paper" && youSelect == "Rock"){
 		return answer = "You lost"
 	}else if (computerSelect == "Paper" && youSelect == "Scissors"){
		return answer = "You Win"
 	}else if (computerSelect == "Scissors" && youSelect == "Rock"){
 		return answer = "You Win"
 	}else if (computerSelect == "Scissors" && youSelect == "Paper"){
 		return answer = "You lost"
 	}
 }

}

 