const questions = [
  {
    question: "What is the name of SpongeBob's pet snail?",
    answers: [
      { text: "Gary", correct: true },
      { text: "Larry", correct: false },
      { text: "Harry", correct: false },
      { text: "Barry", correct: false },
    ],
  },
  {
    question: "Who is SpongeBob's best friend?",
    answers: [
      { text: "Patrick Star", correct: true },
      { text: "Squidward Tentacles", correct: false },
      { text: "Sandy Cheeks", correct: false },
      { text: "Mr. Krabs", correct: false },
    ],
  },
  {
    question: "What is the name of the restaurant where SpongeBob works?",
    answers: [
      { text: "The Krusty Krab", correct: true },
      { text: "The Chum Bucket", correct: false },
      { text: "The Salty Spitoon", correct: false },
      { text: "Weenie Hut Jr", correct: false },
    ],
  },
  {
    question: "Who is the owner of the Chum Bucket?",
    answers: [
      { text: "Plankton", correct: true },
      { text: "Mr. Krabs", correct: false },
      { text: "Sandy Cheeks", correct: false },
      { text: "Patrick Star", correct: false },
    ],
  },
  {
    question: "What is the name of SpongeBob's boss?",
    answers: [
      { text: "Mr. Krabs", correct: true },
      { text: "Sandy Cheeks", correct: false },
      { text: "Plankton", correct: false },
      { text: "Squidward Tentacles", correct: false },
    ],
  },
  {
    question: "What instrument does Squidward play?",
    answers: [
      { text: "Clarinet", correct: true },
      { text: "Flute", correct: false },
      { text: "Saxophone", correct: false },
      { text: "Trumpet", correct: false },
    ],
  },
  {
    question: "What is the name of SpongeBob's boating school teacher?",
    answers: [
      { text: "Mrs. Puff", correct: true },
      { text: "Mrs. Flounder", correct: false },
      { text: "Mrs. Fish", correct: false },
      { text: "Mrs. Whale", correct: false },
    ],
  },
];

const questionel = document.getElementById("question");
const answerbtns = document.getElementById("answer-buttons");
const nextbtn = document.getElementById("next-btn");

let currntindex = 0;
let score = 0;

function start() {
  currntindex = 0;
  score = 0;
  nextbtn.textContent = "Next";
  show();
}

function show() {
  reset();
  let currentquestion = questions[currntindex];
  let questionnum = currntindex + 1;
  questionel.textContent = questionnum + ". " + currentquestion.question;

  currentquestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    answerbtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", select);
  });
}
function reset() {
  nextbtn.style.display = "none";
  while (answerbtns.firstChild) {
    answerbtns.removeChild(answerbtns.firstChild);
  }
}
function select(e) {
  const selectbtn = e.target;
  const iscorrect = selectbtn.dataset.correct === "true";
  if (iscorrect) {
    selectbtn.classList.add("correct");
    score++;
  } else {
    selectbtn.classList.add("incorrect");
  }
  Array.from(answerbtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextbtn.style.display = "block";
}
function showscore(){
    reset();
    questionel.textContent=`your score is ${score} out of ${questions.length}`;
    nextbtn.textContent="Play Again";
    nextbtn.style.display="block"
}
function Nextbtn(){
    currntindex++;
    if(currntindex<questions.length){
        show();
    }else{
        showscore()
    }
}
nextbtn.addEventListener("click",()=>{
    if(currntindex<questions.length){
        Nextbtn();
    }else{
        start();
    }
})
start();
