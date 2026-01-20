let stack = [];

function pushStack() {
  let value = document.getElementById("stackInput").value;

  if (value === "") {
    alert("Enter a value first");
    return;
  }

  stack.push(value);
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
