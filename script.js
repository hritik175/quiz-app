const questions = [
    {
        question: "Which year was the G-20 Summit first held?",
        answers: [
                {text: '1997', correct: false},
                {text: '2001', correct: false},
                {text: '2008', correct: true},
                {text: '2003', correct: false},
        ]
    },
    {   
        question: "Which country hosted the first G-20 summit?",
        answers: [
                {text: 'Canada', correct: false},
                {text: 'United States', correct: true},
                {text: 'United Kingdom', correct: false},
                {text: 'Germany', correct: false},
        ]
    },
    {
        question: "Which of the following is not the mamber of G-20?",
        answers: [
                {text: 'Brazil', correct: false},
                {text: 'Switzerland', correct: true},
                {text: 'China', correct: false},
                {text: 'Australia', correct: false},
        ]
    },
    {
        question: "How often is the G-20 Summit held?",
        answers: [
                {text: 'Annually', correct: true},
                {text: 'Quarterly', correct: false},
                {text: 'Monthly', correct: false},
                {text: 'Biennially', correct: false},
        ]
    },
    {
        question: "How many countries are member of G-20?",
        answers: [
                {text: '20', correct: false},
                {text: '24', correct: false},
                {text: '21', correct: true},
                {text: '23', correct: false},
        ]
    }
]



const choiceQuestion = document.getElementById('question');
const options = document.getElementById('answer-btn');
const submitBtn = document.getElementById('submit');

let questionIndex = 0;
let score = 0;

function startQuiz(){
    questionIndex = 0;
    score = 0;
    submitBtn.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetQuiz()
    let currentQuestionIndex = questions[questionIndex];
    let questionNumber = questionIndex + 1;
    choiceQuestion.innerHTML = questionNumber + ". " + currentQuestionIndex.question;
    
    currentQuestionIndex.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct;
        options.appendChild(button);
        button.addEventListener("click", selectedAnswer)
    })
    
}
function resetQuiz(){
    submitBtn.style.display = "none";
    while(options.firstChild){
        options.removeChild(options.firstChild);
    }
}

function selectedAnswer(event){
    const chosenBtn = event.target;
    const isCorrect = chosenBtn.dataset.correct === "true";
    if(isCorrect){
        chosenBtn.classList.add('correct')
    }
    else{
        chosenBtn.classList.add("incorrect")
        const correctBtn = options.querySelector('[data-correct="true"]')
        correctBtn.classList.add("correct")
    }
    const leftBtns = options.querySelectorAll('.btn')
    leftBtns.forEach(button => {
        button.disabled= true
    })
    submitBtn.style.display= "block";
}
startQuiz();