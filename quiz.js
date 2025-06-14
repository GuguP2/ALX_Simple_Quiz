function checkAnswer() {
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');

 document.getElementById("submit-answer").addEventListener('onclick', checkAnswer);
 if (!selected) {
    feedback.textContent = "Please select an answer.";
    return;
  }
  userAnswer = selected.value;

    if (userAnswer == correctAnswer){
      feedback.textContent = "Correct! Well done.";
    } else {
      if(userAnswer != correctAnswer){
     feedback.textContent = "That's incorrect. Try again!";
     }
    }
  }


