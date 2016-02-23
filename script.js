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
    // alert(question);
    var questionTag = document.getElementById ("question")
    questionTag.textContent = question;

    var answer = answers[questionIndex];
    var answerTag = document.getElementById("answer")
    answerTag.textContent = answer;
    // prompt(answer);

}

answerButton.addEventListener("click", function(){
  alert("Here's your anwer!");
});
nextQuestionButton.addEventListener("click", function (){
  questionsIndex ++
  displayQuestion(questionsIndex);

});
