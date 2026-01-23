let queue = [];
let queueOps = 0;
let QUEUE_MAX = 5;


function enqueue() {
  let value = document.getElementById("queueInput").value;

  if (value === "") {
    alert("Enter a value first");
    return;
  }

  if (queue.length === QUEUE_MAX) {
    alert("Queue Overflow! Max size = " + QUEUE_MAX);
    return;
  }

  queue.push(value);
  queueOps++;
  updateQueueCounter();
  drawQueue();
}


function dequeue() {
  if (queue.length === 0) {
    alert("Queue Underflow! Nothing to dequeue.");
    return;
  }

  queue.shift(); // removes front
  queueOps++;
  updateQueueCounter();
  drawQueue();
}

function drawQueue() {
  let container = document.getElementById("queueContainer");
  container.innerHTML = "";

  for (let i = 0; i < queue.length; i++) {
    let box = document.createElement("div");
    box.className = "queueBox";
    box.innerText = queue[i];

    // Label front and rear
    if (i === 0) box.innerText += " (Front)";
    if (i === queue.length - 1) box.innerText += " (Rear)";

    container.appendChild(box);
  }
}

function updateQueueCounter() {
  document.getElementById("queueCounter").innerText =
    "Operations: " + queueOps;
}
