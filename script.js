// mms: what is this variable used for?
var add;
var questions = ["1+1", "2+6", "10+9", "3+7", "PBJ?"];
var answers = [2, 8, 19, 10, "Peanut Butter and Jelly"];
var answerButton = document.getElementById("answerButton");
var nextQuestionButton =document.getElementById("nextQuestionButton");

// for(var questionsIndex = 0; questionsIndex < questions.length; questionsIndex ++){
    var questionsIndex = 0;
    displayQuestion(questionsIndex);


function displayQuestion(questionIndex){
    // fills in page
    var question = questions[questionIndex];
    // mms: I recommend cleaning up, removing this commented out code once its functionalit has been replaced.
    // alert(question);
    // mms: should we have created questionTag and answerTag when we created answerButton and nextQuestionButton?
    var questionTag = document.getElementById ("question");
    questionTag.textContent = question;

    var answer = answers[questionIndex];
    var answerTag = document.getElementById("answer");
    answerTag.style.visibility ="hidden";
    answerTag.textContent = answer;
}

answerButton.addEventListener("click", function(){
  // mms: is there a way to make this visible using css and classes?
  document.getElementById("answer").style.visibility ="visible";

  // alert("Here's your answer!");
  // prompt(answer);
});

nextQuestionButton.addEventListener("click", function (){
  questionsIndex ++;
  console.log("questionsIndex", questionsIndex);  // what happens after the last question?
  displayQuestion(questionsIndex);
});
