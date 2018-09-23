/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


Lets play ... Enjoy //Abdus Salam
mccyber007@gmail.com
Facebook - m.a.salam15

*/

var scores,roundScores,activePlayer,gamePlaying;

init();

//New Game Start

document.querySelector('.btn-new').addEventListener('click',init);


document.querySelector('.btn-roll').addEventListener('click',function(){

	if(gamePlaying){
		//1.Generate Random Number
		var dice = Math.floor(Math.random() * 6) + 1;

		//Show Results
		var diceDom = document.querySelector('.dice');
		diceDom.style.display = 'block';
		diceDom.src = 'dice-' + dice + '.png';

		//3.Update the round  score if the score is not a 1
		if(dice !== 1){
			roundScores += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScores;

		}
		else{
			//Next Player dont repeat yourself
			nextPlayer();
		}
	}
	
});

document.querySelector('.btn-hold').addEventListener('click',function(){

	if(gamePlaying){
		//Add current score to global score
		scores[activePlayer]+= roundScores;
		
		//Update Interface
		document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

		//Check if Player won the game
		if(scores[activePlayer] >= '100'){
			document.getElementById('name-' + activePlayer).textContent = 'Winner';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			gamePlaying = false;
		}else{
			nextPlayer();
			
		}
		//Next Player
	}
	
	
})

document.querySelector('.btn-hold').addEventListener('click',function(){
	
})

function nextPlayer(){
	//Next Player
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScores = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
}

function init(){
	scores = [0,0];
	roundScores = 0;
	activePlayer = 0;
	gamePlaying = true;
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');
}