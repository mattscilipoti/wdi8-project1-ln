var add;
var questions = ["1+1", "2+6", "10+9", "3+7", "PBJ?"];
var answers = [2, 8, 19, 10, "Peanut Butter and Jelly"];


function add (num1, num2){
    return num1+num2;
}

// loop thru itmes in questins
for(var questionIndex = 0; questionIndex < questions.length; questionIndex ++){

    var question = questions[questionIndex];

    prompt(question);
    // var answer = eval(question);
    var answer = answers[questionIndex];
    alert(answer);

// end of loop
