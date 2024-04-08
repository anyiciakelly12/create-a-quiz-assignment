// Modern family Quiz Program
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let q1 = document.getElementById("q1-in").value.toLowerCase();
  let q2 = document.getElementById("q2-in").value.toLowerCase();
  let q3 = document.getElementById("q3-in").value.toLowerCase();
  let q4 = document.getElementById("q4-in").value.toLowerCase();
  let q5 = document.getElementById("q5-in").value.toLowerCase();
  let score = 0;

  //PROCESS
  // Question 1
  if (q1 === "magic shop") {
    document.getElementById("q1-in").style.borderBlockColor = "green";
    document.getElementById("answer1").style.color = "green";
    document.getElementById("answer1").innerHTML = "CORRECT";
    score++;
  } else {
    document.getElementById("q1-in").style.borderBlockColor = "red";
    document.getElementById("answer1").style.color = "red";
    document.getElementById("answer1").innerHTML = "INCORRECT";
  }
  // Question 2
  if (q2 === "dede") {
    document.getElementById("q2-in").style.borderBlockColor = "green";
    document.getElementById("answer2").style.color = "green";
    document.getElementById("answer2").innerHTML = "CORRECT";
    score++;
  } else {
    document.getElementById("q2-in").style.borderBlockColor = "red";
    document.getElementById("answer2").style.color = "red";
    document.getElementById("answer2").innerHTML = "INCORRECT";
  }
  // Question 3
  if (q3 === "lawyer & football coach" || q3 === "lawyer & music teacher") {
    document.getElementById("q3-in").style.borderBlockColor = "green";
    document.getElementById("answer3").style.color = "green";
    document.getElementById("answer3").innerHTML = "CORRECT";
    score++;
  } else {
    document.getElementById("q3-in").style.borderBlockColor = "red";
    document.getElementById("answer3").style.color = "red";
    document.getElementById("answer3").innerHTML = "INCORRECT";
  }
  // Question 4
  if (q4 === "columbia") {
    document.getElementById("q4-in").style.borderBlockColor = "green";
    document.getElementById("answer4").style.color = "green";
    document.getElementById("answer4").innerHTML = "CORRECT";
    score++;
  } else {
    document.getElementById("q4-in").style.borderBlockColor = "red";
    document.getElementById("answer4").style.color = "red";
    document.getElementById("answer4").innerHTML = "INCORRECT";
  }
  // Question 5
  if (q5 === "haley") {
    document.getElementById("q5-in").style.borderBlockColor = "green";
    document.getElementById("answer5").style.color = "green";
    document.getElementById("answer5").innerHTML = "CORRECT";
    score++;
  } else {
    document.getElementById("q5-in").style.borderBlockColor = "red";
    document.getElementById("answer5").style.color = "red";
    document.getElementById("answer5").innerHTML = "INCORRECT";
  }
  // MARKING QUIZ
  // 5/5
  if (score === 5) {
    document.getElementById("score-in").innerHTML = ` ${score}/5  100%`;
    document.getElementById("response").innerHTML =
      "Amazing! You are 100% a Modern family fan!";
    // 4/5
  } else if (score === 4) {
    document.getElementById("score-in").innerHTML = ` ${score}/5 80%`;
    document.getElementById("response").innerHTML = "Good Job!";
    // 3/5
  } else if (score === 3) {
    document.getElementById("score-in").innerHTML = ` ${score}/5 60%`;
    document.getElementById("response").innerHTML =
      "Good try, you might need to brush up on your Modern Family Knowledge.";
    // 2/5
  } else if (score === 2) {
    document.getElementById("score-in").innerHTML = ` ${score}/5 50%`;
    document.getElementById("response").innerHTML =
      "Try again, I know you can do it!";
    // 1/5
  } else if (score === 1) {
    document.getElementById("score-in").innerHTML = ` ${score}/5 20%`;
    document.getElementById("response").innerHTML =
      "Nice try, You may need to rewatch Modern Family.";
    // 0/5
  } else {
    document.getElementById("score-in").innerHTML = ` ${score}/5 0%`;
    document.getElementById("response").innerHTML = "Please try again.";
  }
}
