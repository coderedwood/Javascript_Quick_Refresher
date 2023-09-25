'use strict'

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {

//Initializations 
scores = [0,0];
currentScore =0;
activePlayer =0;
playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;

diceEl.classList.add('hidden');
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
};

init();

//Switch player function (DRYS Do not repeat yourself principle)
const switchPlayer = function() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function(){
    if(playing){
        //1. Generate random dice roll
        const dice = Math.trunc(Math.random() * 6)+1;
        console.log(dice);

        //2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `./images/dice-${dice}.png`;

        //3. Checked for rolled 1: if true, switch to next player
        if (dice !== 1){
            //Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            //Switch to next player
            switchPlayer();
        }
    }
});

//Hold score functionality
btnHold.addEventListener('click', function(){
    if (playing){
        //Adds score to active player score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //Check if score >= 100
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            //finish the game
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else{
            //Switch player
            switchPlayer();
        }
    }
});

//coding challenge for btnNew (WORKS!)
// btnNew.addEventListener('click', function(){
//     //remove winner class
//     document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
//     document.querySelector(`.player--0`).classList.add('player--active');
//     document.querySelector(`.player--1`).classList.remove('player--active');
    
//     //loop reset
//     for (let i = 0; i < scores.length; i++) {
//         //reset player scores to zero
//         scores[i] = 0; 
//         document.getElementById(`score--${i}`).textContent=scores[i]; 
//         document.getElementById(`current--${i}`).textContent  = scores[i];
//     }
//     //set active player and current score to 0
//         currentScore = 0;
//         activePlayer = 0;
    
//     // Set playing state to true
//     playing = true;
// });

//coding challenge solution
btnNew.addEventListener('click', init);