function checkAnswer() {
    const correctAnswer = "4";
    document.querySelector(`"name="quiz"`);

    const userAnswer = document.querySelector(`"name="quiz"`).value;
    
 document.getElementById("submit-answer").addEventListener('onclick', checkAnswer =>{

    });
    if (userAnswer == correctAnswer){
      feedback.textContent = "Correct! Well done.";
    } else {
      if(userAnswer != correctAnswer){
     feedback.textContent = "That's incorrect. Try again!";
     }
    }
   
}