let currentquestionindex = 0;
let question = document.querySelector('.question');
let answerbtn = document.querySelector('.answerbtn');
let result = document.querySelector('.result');
let start_btn = document.querySelector('.start-btn');
let next = document.querySelector('.next');
let contents=document.querySelector('.contents');

start_btn.addEventListener('click', () => {
    showquestion();

    answerbtn.classList.remove('hide');

})
function showquestion(n) {
    resetState();
    question.innerHTML = questions[currentquestionindex].question;
    questions[currentquestionindex].answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        answerbtn.appendChild(button);
        button.classList.add("answerbtn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', (e) => {
            let selected_btn = e.target;
            const isCorrect = selected_btn.dataset.correct === "true";
            if (isCorrect) {
                result.innerHTML = "this is correct ans";
            } else {
                result.innerHTML = "this is wrong ans";
            }

            Array.from(answerbtn.children).forEach(button => {
                if (button.dataset.correct === 'true') {
                    button.classList.add('correct');
                }
                button.disabled = true;

            })
            next.style.display = "block";
        })
    });



}

next.addEventListener('click',()=>{
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        showquestion();
        result.innerHTML='';
    }else{
        contents.innerHTML='thankyou for playing';
        result.innerHTML='';
        next.innerHTML="PLAY AGAIN";
        contents.classList.add('lastpage');
        
    }
    
})

function resetState() {
    start_btn.style.display = "none";

    while (answerbtn.firstChild) {
        answerbtn.removeChild(answerbtn.firstChild);
    }

}


const questions = [
    {
        question: 'what is 2+2',
        answers: [{ text: 4, correct: true }, { text: 8, correct: false }, { text: 7, correct: false }, { text: 5, correct: false }]

    },
    {
        question: 'what is 2+8',
        answers: [{ text: 4, correct: false }, { text: 8, correct: false }, { text: 10, correct: true }, { text: 5, correct: false }],

    },
    {
        question: 'what is 2+10',
        answers: [{ text: 4, correct: false }, { text: 8, correct: false }, { text: 7, correct: false }, { text: 12, correct: true }],

    },
    {
        question: 'what is 12+12',
        answers: [{ text: 4, correct: false }, { text: 8, correct: false }, { text: 7, correct: false }, { text: 24, correct: true }],

    }
]