let stack = [];
let MAX_SIZE = 5;
let learningMode = true;

document.documentElement.style.setProperty("--speed", "0.5s");



let operations = 0;

function pushStack() {
  let value = document.getElementById("stackInput").value;

  if (value === "") {
    alert("Enter a value first");
    return;
  }

   // Overflow check
  if (stack.length === MAX_SIZE) {
    alert("Stack Overflow! Max size = " + MAX_SIZE);
    return;
  }

  stack.push(value);
  operations++;
  updateCounter();
  drawStack();
}

function popStack() {
  if (stack.length === 0) {
    alert("Stack is empty! Cannot POP.");
    return;
  }

  stack.pop();
  operations++;
  updateCounter();
  drawStack();
}


function drawStack() {
  let container = document.getElementById("stackContainer");
  container.innerHTML = "";

  for (let i = stack.length - 1; i >= 0; i--) {
    let box = document.createElement("div");
    box.className = "stackBox";
    box.innerText = stack[i];
    container.appendChild(box);
  }
}

function updateCounter() {
  document.getElementById("opCounter").innerText =
    "Operations: " + operations;
}

function toggleMode() {
  learningMode = !learningMode;

  let btn = document.getElementById("modeBtn");

  if (learningMode) {
    document.documentElement.style.setProperty("--speed", "0.5s");
    btn.innerText = "Mode: Learning";
  } else {
    document.documentElement.style.setProperty("--speed", "0.1s");
    btn.innerText = "Mode: Fast";
  }
}



