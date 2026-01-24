let arr = [];
let comparisons = 0;

function generateArray() {
  arr = [];
  comparisons = 0;
  updateSortCounter();

  for (let i = 0; i < 10; i++) {
    let value = Math.floor(Math.random() * 100) + 10;
    arr.push(value);
  }

  drawArray();
}

function drawArray(highlight1 = -1, highlight2 = -1) {
  let container = document.getElementById("sortContainer");
  container.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let bar = document.createElement("div");
    bar.className = "sortBar";
    bar.style.height = arr[i] * 2 + "px";

    if (i === highlight1 || i === highlight2) {
      bar.style.backgroundColor = "orange";
    }

    container.appendChild(bar);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {

      comparisons++;
      updateSortCounter();

      drawArray(j, j + 1);
      await sleep(learningMode ? 500 : 100);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        drawArray(j, j + 1);
        await sleep(learningMode ? 500 : 100);
      }
    }
  }
}

function updateSortCounter() {
  document.getElementById("sortCounter").innerText =
    "Comparisons: " + comparisons;
}
