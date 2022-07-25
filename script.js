const quizData = [
    {
        question:'What is the slogan of Audi Car?',
        a: 'We are the competition',
        b: 'Being Ahead through Technology',
        c: 'Moving forward',
        d: 'None of these',
        answer: 'b'
    },
    {
        question:'Motor City is the nickname for which American city?',
        a: 'Chicago',
        b: 'Michigan',
        c: 'Detroit',
        d: 'None of these',
        answer: 'c'
    },
    {
        question:'The slogan for which Auto brand is "The best or nothing"?',
        a: 'Honda',
        b: 'Ford',
        c: 'Mercedes-Benz',
        d: 'None of these',
        answer: 'c'
    },
    {
        question:'Drive your dreams” is the slogan of which car?',
        a: 'Toyota',
        b: 'Honda',
        c: 'Volkswagen',
        d: 'None of these',
        answer: 'a'
    },{
        question:'Where is the headquarters of BMW located?',
        a: 'Frankfurt',
        b: 'Munich',
        c: 'Berlin',
        d: 'None of these',
        answer: 'b'
    }
]

const questionEl = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const questionContainer = document.getElementById('container')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const button = document.getElementById('submit')

var currentQuestion = 0;
var score = 0;

loadQuiz()

function loadQuiz(){
    var currentQuestionData = quizData[currentQuestion]
    questionEl.innerHTML = currentQuestionData.question
    a_text.innerHTML = currentQuestionData.a
    b_text.innerHTML = currentQuestionData.b
    c_text.innerHTML = currentQuestionData.c
    d_text.innerHTML = currentQuestionData.d  
}

button.addEventListener('click', ()=>{
    var answer = getSelected()
    // console.log(answer);
    if(answer && answer === quizData[currentQuestion].answer)
        score++
    currentQuestion++
    if(currentQuestion < quizData.length){
        // deSelect()
        loadQuiz()
    }else{
        alert("Score is "+score+"/5")
        location.reload()
        // questionContainer.innerHTML = `<h2>"Finished"</h2>`
    }
})

function getSelected(){

    let answer = undefined

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    });

    return answer
}

function deSelect(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false
    })
}

