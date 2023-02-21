var artBody = document.getElementById('articleBody');
var artHead = document.getElementById('articleHeader');
var timerEl = document.getElementById('timer');
var scoreEl = document.getElementById('score');
var score = 0;
var availableQuestions = 0;
var highScore = [];
// array of objects for questions
var questions = [
  {
    id: "0",
    question: "What are variables used for in JavaScript Programs?",
    answer: ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", "None of the above"],
    correctAnswer: "Storing numbers, dates, or other values",
  },
  {
    id: "1",
    question: "Which of the following can't be done with client-side JavaScript?",
    answer: ["Validating a form", "Sending a forms contents by email", "Storing the forms contents to a database file on the server", "None of the above"],
    correctAnswer: "Storing the forms contents to a database file on the server",
  },
  {
    id: "2",
    question: "Which types of image maps can be used with JavaScript?",
    answer: ["Server-side image maps", "Client-side image maps", "Server-side image maps and Client-side image maps", "None of the above"],
    correctAnswer: "Client-side image maps",
  },
  {
    id: "3",
    question: "Which of the following best describes JavaScript",
    answer: ["a low-level programming language.", "a scripting language precompiled in the browser.", "a compiled scripting language.", "an object-oriented scripting language."],
    correctAnswer: "an object-oriented scripting language.",
  },
  {
    id: "4",
    question: "Choose the client-side JavaScript object?",
    answer: ["Database", "Cursor", "Client", "FileUpLoad"],
    correctAnswer: "FileUpLoad",
  },
];


var timer = 100;
// function to start timer
function startQuiz() {
  timer = 100
  availableQuestions = 0
  setInterval(function () {
      timer--;
      timerEl.textContent = timer + " time left"
      
      if (timer <= 0) {
          // stop quiz
          timer = 0
          artHead.innerHTML = 'Quiz over!!';
          artBody.innerHTML = 'Here is the highlights from your quiz!';
          var form = document.createElement('form')
          form.setAttribute("type", "text")
          form.setAttribute("placeholder", "Initials")
          artBody.appendChild(form);
          var option1 = document.createElement("button")
    artBody.appendChild(option1);
    option1.innerHTML = "reset"
    option1.addEventListener("click", function(){startQuiz(), getQuestion(0)});
          
      }
  }, 1000);

            artHead.innerHTML = 'Good luck!';
            artBody.innerHTML = ''; // clear whatever is there currently
            
            var ul = document.createElement('ul');
}
// pull a new question and set of answers
function getQuestion(i) {
  
    artBody.innerHTML = questions[i].question;
    var option1 = document.createElement("button")
    artBody.appendChild(option1);
    option1.innerHTML = questions[i].answer[0]
    option1.addEventListener("click", function(){checker(questions[i].answer[0], questions[i].correctAnswer)});
    var option2 = document.createElement("button")
    artBody.appendChild(option2)
    option2.innerHTML = questions[i].answer[1]
    option2.addEventListener("click", function(){checker(questions[i].answer[1], questions[i].correctAnswer)});
    var option3 = document.createElement("button")
    artBody.appendChild(option3)
    option3.innerHTML = questions[i].answer[2]
    option3.addEventListener("click", function(){checker(questions[i].answer[2], questions[i].correctAnswer)});
    var option4 = document.createElement("button")
    artBody.appendChild(option4)
    option4.innerHTML = questions[i].answer[3]
    option4.addEventListener("click", function(){checker(questions[i].answer[3], questions[i].correctAnswer)});
              
              
}
// check if answer is correct and update score and timer accordingly
function checker(x, y){
  if (availableQuestions <4) {
    if (x===y){
      score++
      console.log("correct")
      availableQuestions++
      scoreEl.textContent = score
      console.log(score)
      getQuestion(availableQuestions)
    }
    else{
      timer=timer-10
      console.log("incorrect")
      availableQuestions++
      getQuestion(availableQuestions)
      
    }
}
else{
  timer = 0
}
}