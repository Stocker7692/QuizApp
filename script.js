const quizData = [
  {
    question: "How old is sandy?",
    a: '10',
    b: '17',
    c: '26',
    d: '11',
    correct: 'a'
  },
  {
    question: "What is the most used programming laguage in 2019",
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaSript',
    correct: 'a'
  },
  {
    question: "Who is the present of india?",
    a: 'Mode',
    b: 'Shah',
    c: 'Shivraj',
    d: 'Yogi',
    correct: 'a'
  },
  {
    question: "What does HTML stands for?",
    a: 'HyperText MarkupLanguage',
    b: 'CSS',
    c: 'OOPS',
    d: 'React',
    corect: 'a'
  },
  {
    question: "What year was JavaScript lanched?",
    a: '1991',
    b: '1992',
    c: '1993',
    d: '1994',
    correct: 'a'
  },
];

// const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const sub_btn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  

  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked=false;

  });
}

sub_btn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer ) {
    if(answer===quizData[currentQuiz].correct){
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Your socre is: ${score}</h2><button onclick="location.reload()">Reload</button>`;
    }

  }


  
}
);
