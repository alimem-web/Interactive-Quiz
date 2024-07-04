const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic", correct: false },
            { text: "Indian", correct: false },
            { text: "Pacific", correct: true },
            { text: "Arctic", correct: false }
        ]
    },
    {
        question: "Who was first Muslim President of India?",
        answers: [
            { text: "Badar-ud-din Tayyab", correct: false },
            { text: "Mahbub-ul-haq", correct: false },
            { text: "Zakir Hussain", correct: true },
            { text: "Sardar Abdul Qayum Khan", correct: false }
        ]
    },
    {
        question: "Makki period of the holy quran consist of?",
        answers: [
            { text: "12Y 9M 5D", correct: false },
            { text: "13Y 9M 20D", correct: false },
            { text: "12 Year", correct: true },
            { text: "11Y 7M 12D", correct: false }
        ]
    },
    {
        question: "which ayat of the holy quran is called sardar ul ayat?",
        answers: [
            { text: "surah yaseen", correct: false },
            { text: "Ayatul-ul-kursi", correct: true },
            { text: "Surah Fateh", correct: false },
            { text: "Surah Baqra", correct: false }
        ]
    },
    {
        question: "Minimum Verses in a surah in the holy quran are?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "Which alpahabet is mostly used in the holy quran?",
        answers: [
            { text: "Te", correct: false },
            { text: "jeem", correct: false },
            { text: "Alif", correct: true },
            { text: "Dal", correct: false }
        ]
    },
    {
        question: "How Many Rukus are in the Holy Quran ?",
        answers: [
            { text: "460", correct: false },
            { text: "490", correct: false },
            { text: "558", correct: true },
            { text: "570", correct: false }
        ]
    },
    {
        question: "How Many stages of holy quran?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "7", correct: true }
        ]
    },
    {
        question: "Name The tallest pakistani man who died at the age 30 on 2nd july 2024?",
        answers: [
            { text: "Zia Rashid", correct: true },
            { text: "Naseer soomro", correct: false },
            { text: "Alam Channa", correct: false },
            { text: "N,O,T", correct: false }
        ]
    },
    {
        question: "Who has recently been nominated as the first woman chief justice oflahore high court?",
        answers: [
            { text: "Musrat Hilali", correct: false },
            { text: "Aalia Neelum", correct: true },
            { text: "Ayesha Malik", correct: false },
            { text: "N,O,T", correct: false }
        ]
    },
    {
        question: "The Current Chief justice of lahore High Court is?",
        answers: [
            { text: "M.Ameer Khatti", correct: false },
            { text: "Shujaat Ali Khan", correct: false },
            { text: "Aalia Neelum", correct: true },
            { text: "Mamoon Rashid Sheikh", correct: false }
        ]
    },
    {
        question: "choose the correct meaning of idioms: To plough the sand?",
        answers: [
            { text: "To make the desert blomm", correct: false },
            { text: "To work in vain", correct: true },
            { text: "To do a difficult work", correct: false },
            { text: "To make the dessert fertile", correct: false }
        ]
    },
    {
        question: "The cheque is ______Habib  Bank.use suitable preposition?",
        answers: [
            { text: "at", correct: false },
            { text: "on", correct: true },
            { text: "upon", correct: false },
            { text: "up", correct: false }
        ]
    },
    {
        question: "Synonyme of Quarry is _______?",
        answers: [
            { text: "Trend", correct: false },
            { text: "Decoy", correct: false },
            { text: "Prey", correct: true },
            { text: "seeking explanation", correct: false }
        ]
    },
    {
        question: "Identify the correct spelling?",
        answers: [
            { text: "commision", correct: false },
            { text: "comission", correct: false },
            { text: "comision", correct: false },
            { text: "commission", correct: true }
        ]
    },
    {
        question: "Which country is called the landof prophet?",
        answers: [
            { text: "SaudiArabia", correct: false },
            { text: "Syria", correct: false },
            { text: "Palestine", correct: true },
            { text: "Iraq", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "O2", correct: false },
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "NaCl", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function startQuiz() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    answerButtons.forEach((button, index) => {
        button.textContent = question.answers[index].text;
        button.dataset.correct = question.answers[index].correct;
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });
    nextButton.style.display = "none";
}

function selectAnswer(button) {
    const correct = button.dataset.correct === "true";
    button.classList.add(correct ? "correct" : "wrong");
    if (correct) score++;
    answerButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.correct === "true") btn.classList.add("correct");
    });
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    answerButtons.forEach(button => button.style.display = "none");
    nextButton.style.display = "none";
    resultElement.textContent = `You scored ${score} out of ${questions.length}`;
}

startQuiz();