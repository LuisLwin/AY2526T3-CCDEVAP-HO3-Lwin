let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

function generateQuestions()
{
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);
    operator = operators[Math.floor(Math.random() * operators.length)];

    if (operator === "+")
    {
        correctAnswer = num1 + num2;
    }
    else if (operator === "-")
    {
        correctAnswer = num1 - num2;
    }
    else if (operator === "*")
    {
        correctAnswer = num1 * num2
    }

    document.getElementById("question").textContent = num1 + " " + operator + " " + num2;
};

function checkAnswer()
{
    let answer = document.getElementById("answer").value;

    if (correctAnswer === Number(answer))
    {
        score++;
        document.getElementById("message").textContent = "Correct!"
        document.getElementById("message").style.color = "green";
    }
    else
    {
        document.getElementById("message").textContent = "Wrong! Correct Answer is" + " " + correctAnswer + ".";
        document.getElementById("message").style.color = "red";
    }

    document.getElementById("score").textContent = score;

    if (score === 5)
    {
        document.getElementById("div-questions").style.display = "none";
        document.getElementById("div-success").style.display = "block";
    }

    document.getElementById("answer").value = "";
    generateQuestions();
};

function playAgain()
{
    score = 0;
    document.getElementById("score").textContent = score;
    document.getElementById("div-questions").style.display = "block";
    document.getElementById("div-success").style.display = "none";
    document.getElementById("message").textContent = "";
}

generateQuestions();