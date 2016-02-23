var add;
var questions = ["1+1", "2+6", "10+9", "3+7", "PBJ?"];
var answers = [2, 8, 19, 10, "Peanut Butter and Jelly"];
var answerButton = document.getElementById("answerButton");
var questionButton =document.getElementById("questionButton");


function add (num1, num2){
    return num1+num2;
}

// for(var questionsIndex = 0; questionsIndex < questions.length; questionsIndex ++){
    var questionsIndex = 0;

    // fills in page
    var question = questions[questionsIndex];
    // alert(question);
    var questionTag = document.getElementById ("question")
    questionTag.textContent = question;

    var answer = answers[questionsIndex];
    var answerTag = document.getElementById("answer")
    answerTag.textContent = answer;
    // prompt(answer);

  // }

answerButton.addEventListener("click", function(){
  alert("Here's your anwer!");
});
questionButton.addEventListener("click", function (){
  questionsIndex ++
  // fill in page
  var question = questions[questionsIndex];
  // alert(question);
  var questionTag = document.getElementById ("question")
  questionTag.textContent = question;

  var answer = answers[questionsIndex];
  var answerTag = document.getElementById("answer")
  answerTag.textContent = answer;
});
