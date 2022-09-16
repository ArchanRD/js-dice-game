let randomNumber1 = Math.floor(Math.random()*6) + 1;
let randomNumber2 = Math.floor(Math.random()*6) + 1;

let dice1 = document.querySelector('.dice-1');
let dice2 = document.querySelector('.dice-2');

dice1.innerHTML = randomNumber1;
dice2.innerHTML = randomNumber2;

if(randomNumber1 > randomNumber2){
    document.querySelector('.heading').innerHTML = "Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
    document.querySelector('.heading').innerHTML = "Player 2 Wins";
}else{
    document.querySelector('.heading').innerHTML = "Draw";
}
