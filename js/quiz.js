let questions = [];
let currentQ = 0;
let score = 0;

function loadQuestion() {
  if (currentQ >= questions.length) {
    document.getElementById("questionText").innerText =
      "Quiz Finished! Score: " + score + "/" + questions.length;
    return;
  }

  let q = questions[currentQ];

  document.getElementById("questionText").innerText = q.question;

  let buttons = document.querySelectorAll("#questionBox button");

  buttons[0].innerText = q.options[0];
  buttons[1].innerText = q.options[1];
  buttons[2].innerText = q.options[2];
}

function checkAnswer(selected) {
  let correct = questions[currentQ].answer;

  if (selected === correct) {
    score++;
    document.getElementById("quizResult").innerText = "✅ Correct";
  } else {
    document.getElementById("quizResult").innerText = "❌ Wrong";
  }

  localStorage.setItem("quizScore",score);

  currentQ++;
  setTimeout(loadQuestion, 800);
}

questions = [
  { question: "Queue follows?", options: ["FIFO", "LIFO", "Random"], answer: 0 },
  { question: "Enqueue?", options: ["add rear", "add front", "remove"], answer: 0 },
  { question: "Dequeue?", options: ["remove front", "remove rear", "add"], answer: 0 },
  { question: "Overflow?", options: ["full", "empty", "half"], answer: 0 },
  { question: "Underflow?", options: ["empty", "full", "half"], answer: 0 },
  { question: "Queue used in?", options: ["BFS", "DFS", "stack"], answer: 0 },
  { question: "Front pointer?", options: ["start", "end", "middle"], answer: 0 },
  { question: "Queue TC?", options: ["O(1)", "O(n)", "O(log n)"], answer: 0 },
  { question: "FIFO means?", options: ["first out", "last out", "random"], answer: 0 },
  { question: "Queue DS?", options: ["linear", "tree", "graph"], answer: 0 }
];

loadQuestion();