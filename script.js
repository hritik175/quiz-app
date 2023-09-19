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


// ERROR HANDLING
if(!choiceQuestion || !options || !submitBtn){
    console.error("One or more required elements not found.")
    alert("Something went wrong!!")
} 

let questionIndex = 0;
let score = 0;

//Quiz Starts here 
function startQuiz(){
    questionIndex = 0;
    score = 0;
    submitBtn.innerHTML = 'Next';
    showQuestion();
}

// This function takes objects from the array and displays them
function showQuestion(){
    resetQuiz()
    let currentQuestion = questions[questionIndex];
    let questionNumber = questionIndex + 1;
    choiceQuestion.innerHTML = questionNumber + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct;
        options.appendChild(button);
        button.addEventListener("click", selectedAnswer)
    })
    
}

// Removes previous question and buttons
function resetQuiz(){
    submitBtn.style.display = "none";
    while(options.firstChild){
        options.removeChild(options.firstChild);
    }
}

// Check if the answer chosen is correct or not 
function selectedAnswer(event){
    const chosenBtn = event.target;
    const isCorrect = chosenBtn.dataset.correct === "true";
    if(isCorrect){
        chosenBtn.classList.add('correct')
        score++;
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

function showScore(){
    resetQuiz()     
    choiceQuestion.innerHTML = `Your score is ${score} out of ${questions.length}`;
    submitBtn.innerHTML = 'Play Again';
    submitBtn.style.display = "block";
}


function handleNextBtn(){
    questionIndex++;
    if(questionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
submitBtn.addEventListener('click', ()=>{
    if(questionIndex < questions.length){
        handleNextBtn()
    }
    else{
        startQuiz();
    }
})
startQuiz();


