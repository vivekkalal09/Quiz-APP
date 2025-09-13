const questions = [
    {
        questions: "Midinnings does?",
        answers: [
            { text: "News Marketing Company", correct: false },
            { text: "Digital Marketing Company", correct: true },
            { text: "Advertising Company", correct: false },
            { text: "None of the above", correct: false }

        ]
    },
    {
        questions: "Who Manages N8N workflows?",
        answers: [
            { text: "Vivek Kalal", correct: true },
            { text: "Rahul goswami", correct: false },
            { text: "Pritam kailash", correct: false },
            { text: "Harsh sharma", correct: false }
        ]
    },
    {
        questions: "How many client it handles?",
        answers: [
            { text: "20", correct: false },
            { text: "46", correct: false },
            { text: "35", correct: false },
            { text: "32", correct: true }
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}