let min=1,
    max=10,
    crtguess = randomNo(min, max),
    atmps = 3;
// UI Elements
function randomNo(min, max) {
      // console.log(Math.floor(Math.random() * (max-min + 1)+min ));
      return Math.floor(Math.random() * (max-min + 1)+min); 
}
const game=document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      inputBtn = document.querySelector('#input-btn'),
      message = document.querySelector('.message'),
      guessInp = document.querySelector('#input-num');
//Assign UI min and max

minNum.textContent=min;
maxNum.textContent=max;
//play aain eventlistener

game.addEventListener('mousedown',function(e){
      if(e.target.className === 'btn btn-primary play-again btn-warning'){
            window.location.reload();
      }
}) 

//liisten for guess
inputBtn.addEventListener('click',function () {
      let guess = parseInt(guessInp.value);
      //validate
      if(isNaN(guess) || guess > max || guess < min){
            setMessage(`Please enter in between ${min} and ${max}`,'red');
      }
      // check if won
      if(guess === crtguess){
            gameOver(true,`${crtguess} is correct , YOU WON!!`);
            // guessInp.disabled = true;
            // guessInp.style.borderColor = 'green';
            // setMessage(`${crtguess} is correct , YOU WON!!`,'green');
      } 
      // check lose
      else{
            atmps-=1;
            if(atmps === 0){
                  gameOver(false,`Game Over! YOU LOST !! ${crtguess} is the correct Guess`);
                  //Game over
                  // guessInp.disabled = true;
                  // guessInp.style.borderColor = 'red';
                  // setMessage(`Game Over! YOU LOST !! ${crtguess} is correct Guess ,`,'red')
            }
            else{
                  if(isNaN(guess) || guess > max || guess < min){
                        setMessage(`Please enter in between ${min} and ${max}`,'red');
                  }
                  else{
                  guessInp.style.borderColor = 'red';
                  guessInp.value = '';
                  setMessage(`wrong guess!. you have ${atmps} chances left`,'red');
                  }

            }
      }
})
//Game over
function gameOver(won,msg) {
      let color;
      won === true ? color='green' : color='red';
      guessInp.disabled = true;
      guessInp.style.borderColor =color;
      setMessage(msg,color);
      // play again
      inputBtn.value='Play again';
      inputBtn.className +=' play-again btn-warning';
}
//setMessage
function setMessage(msg, color){
      message.textContent = msg;
      message.style.color = color;
}