//if we click start button.
var playing = false;
//score is initial to zero.
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById('startreset').onclick = function ( ) {
	    //if we are playing..
	      if(playing === true){
			  location.reload();
		  }
	     else{
			 //if we are not playing sp playing is true;
			 playing=true;
			 // set score to zero.
			 score=0;
			 //update score value in document
			 document.getElementById('scorevalue').innerHTML= score;
			 //show countdown
			 show('timeremaining');
			 
			 timeremaining=60;
			 
			 document.getElementById('timeremainingvalue').innerHTML=timeremaining;
			 hide('gameOver');
			 //change button to reset
			 document.getElementById('startreset').innerHTML="Reset Game";
			// document.getElementById('startreset').style.color = "red";
			 
			 //startcountdown
			 startCountdown();
			 
			 //generate question answer
			 generateQA();
			 
		 }
   }

for( var i=1 ;i<5;i++){
document.getElementById('box'+i).onclick = function(){
	if(playing===true){
		if(this.innerHTML == correctAnswer){
			// increase score
			score++;
			//update
			document.getElementById('scorevalue').innerHTML=score;
			hide('wrong');
			show('correct');
			setTimeout(function(){
				hide('correct');
			},1000);
			generateQA();
		}
		else{
			hide('correct');
			show('wrong');
			setTimeout(function(){
				hide('wrong');
			},1000);
		}
	}
  }
}
// function of startcountdown
function startCountdown(){
	action=setInterval(function(){
		timeremaining-= 1;
    document.getElementById('timeremainingvalue').innerHTML=timeremaining;
		if(timeremaining === 0){//gameOver
			stopCountdown();
			show('gameOver');
			document.getElementById('gameOver').innerHTML = "<p>Game Over!</p><p>Your score is "+ score +".</p>";
			hide('timeremaining');
			hide('correct');
			hide('wrong');
			playing=false;
			document.getElementById('startreset').innerHTML="Start Game";
			
		}
	},1000);
}

function stopCountdown(){
	clearInterval(action);
}

//hide function
function hide(Id){
	document.getElementById(Id).style.display ="none";
}
//show function
function show(Id){
	document.getElementById(Id).style.display ="block";
}
//generate question
function  generateQA(){
	var x= 1+ Math.round(9*Math.random());
	var y= 1+ Math.round(9*Math.random());
	correctAnswer = x*y ;
	
	document.getElementById('question').innerHTML = x + "x" + y;
	
	var correctPosition = 1+Math.round(3*Math.random());
	document.getElementById('box'+correctPosition).innerHTML= correctAnswer;
	//fill other boxes
	var answers=[correctAnswer];
	for(var i=1;i<5;i++){
		if(i!== correctPosition){
		   var wrongAnswer;
			do{
			  wrongAnswer=(1+ Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
				
			}while(answers.indexOf(wrongAnswer)>-1)
				
		document.getElementById('box'+i).innerHTML= wrongAnswer;
			answers.push(wrongAnswer);
	     }
	}
}