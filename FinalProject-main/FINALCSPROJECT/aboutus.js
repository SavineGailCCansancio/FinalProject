const quizData = [
    { question: "What is the goal of SDG 5?", options: ["Eradicate poverty", "Climate action", "Gender equality", "Quality education"], answer: 2 },
    { question: "Which of the following is a barrier to gender equality?", options: ["Equal pay", "Patriarchy", "Education", "Women's leadership"], answer: 1 },
    { question: "Which global event significantly advanced women’s rights in the 20th century?", options: ["The Industrial Revolution", "World War II", "The Cold War", "Renaissance"], answer: 1 },
    { question: "Which of the following is NOT a factor contributing to the gender wage gap?", options: ["Unequal pay for equal work", "Occupational segregation", "Women working fewer hours", " Men having higher IQs"], answer: 3 },
    { question: "Which of these movements is most associated with advocating for women's rights and gender equality?", options: ["Suffragette Movement", "Industrial Revolution", "Renaissance", "Space Exploration"], answer: 0 },
];

let currentQuestion = 0;
let score = 0;

function question() {
    document.getElementById("nextButton").disabled = true;
    let q = quizData[currentQuestion];
    document.getElementById("question").textContent = q.question;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach((opt, index) => {
        let btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(index, btn);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(index, button) {
    let correctIndex = quizData[currentQuestion].answer;
    if (index === correctIndex) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
    }
    document.getElementById("nextButton").disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        question();
    } else {
        document.getElementById("question").textContent = "Quiz Completed!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("score").textContent = `Your score: ${score}/${quizData.length}`;
        document.getElementById("nextButton").style.display = "none";
    }
}

question();