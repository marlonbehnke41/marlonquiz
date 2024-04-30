const quizData = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte"],
        answer: "Brasília",
        background: "https://via.placeholder.com/600x400?text=Bras%C3%ADlia"
    },
    {
        question: "Quem escreveu 'Dom Quixote'?",
        options: ["Machado de Assis", "Miguel de Cervantes", "Fernando Pessoa", "William Shakespeare"],
        answer: "Miguel de Cervantes",
        background: "https://via.placeholder.com/600x400?text=Dom+Quixote"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Júpiter", "Saturno", "Terra", "Urano"],
        answer: "Júpiter",
        background: "https://via.placeholder.com/600x400?text=Maior+Planeta"
    },
    {
        question: "Qual é o país mais populoso do mundo?",
        options: ["China", "Índia", "Estados Unidos", "Brasil"],
        answer: "China",
        background: "https://via.placeholder.com/600x400?text=Pa%C3%ADs+Populoso"
    },
    {
        question: "Quem pintou a 'Mona Lisa'?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci",
        background: "https://via.placeholder.com/600x400?text=Mona+Lisa"
    },
    {
        question: "Qual é a montanha mais alta do mundo?",
        options: ["Everest", "K2", "Monte Kilimanjaro", "Monte Fuji"],
        answer: "Everest",
        background: "https://via.placeholder.com/600x400?text=Montanha+Mais+Alta"
    },
    {
        question: "Quem inventou a lâmpada elétrica?",
        options: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Alexander Graham Bell"],
        answer: "Thomas Edison",
        background: "https://via.placeholder.com/600x400?text=L%C3%A2mpada+El%C3%A9trica"
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Pacífico", "Índico", "Ártico"],
        answer: "Pacífico",
        background: "https://via.placeholder.com/600x400?text=Maior+Oceano"
    },
    {
        question: "Quem escreveu 'Os Lusíadas'?",
        options: ["Camões", "Fernando Pessoa", "Eça de Queirós", "Gil Vicente"],
        answer: "Camões",
        background: "https://via.placeholder.com/600x400?text=Os+Lus%C3%ADadas"
    },
    {
        question: "Qual é a fórmula química da água?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O",
        background: "https://via.placeholder.com/600x400?text=F%C3%B3rmula+da+%C3%81gua"
    }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById('questionContainer');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const answersElement = document.getElementById('answers');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.style.backgroundImage = `url(${currentQuizData.background})`;
    questionContainer.innerHTML = `<h2 id="question" class="card-title">${currentQuizData.question}</h2>`;
    optionsElement.innerHTML = '';

    currentQuizData.options.forEach((option, index) => {
        const optionElement = document.createElement('label');
        optionElement.innerHTML = `<input type="radio" name="option" value="${option}">${option}<br>`;
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer() {
    const answerElements = document.getElementsByName('option');
    let userAnswer;

    answerElements.forEach((element) => {
        if (element.checked) {
            userAnswer = element.value;
        }
    });

    if (userAnswer === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    resultElement.style.display = 'block';
    questionContainer.style.display = 'none';
    optionsElement.style.display = 'none';
    submitButton.style.display = 'none';

    quizData.forEach((quiz) => {
        const answerElement = document.createElement('li');
        answerElement.innerText = quiz.answer;
        answersElement.appendChild(answerElement);
    });

    scoreElement.innerText = `Você acertou ${score} de ${quizData.length} perguntas.`;
}

loadQuestion();
submitButton.addEventListener('click', checkAnswer);
