'use strict'

const initialMessage = document.querySelector('.message').textContent;
const initialNumber = document.querySelector('.number').textContent;
const initialWidth = '15rem'
const initialBackgroundColor = '#222'
const initialScore = 20;
let score = initialScore;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20)+1;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    
    //When there is no input
    if(!guess){
        // document.querySelector('.message').textContent = '⛔️ No Number!';
        displayMessage('⛔️ No Number!');

    //When player wins
    } else if(guess === secretNumber){
        displayMessage( '🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';    

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    
        //When guess is wrong
    } else if(guess !== secretNumber) {
        if(score >1) {
            displayMessage( guess > secretNumber ? '📈 Too High!': '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }   

        //When guess is too high
    // } else if(guess > secretNumber){
    //     if(score >1) {
    //         document.querySelector('.message').textContent = '📈 Too High!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     //When guess is too low
    // } else if(guess < secretNumber){
    //     if(score >1) {
    //         document.querySelector('.message').textContent = '📉 Too Low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.reset').addEventListener('click', function(){
    score = initialScore;
    secretNumber = Math.trunc(Math.random() * 20)+1;
    displayMessage(initialMessage);
    document.querySelector('.number').textContent = initialNumber;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = initialBackgroundColor;
    document.querySelector('.number').style.width = initialWidth;  
})