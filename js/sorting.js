import { sleep } from "./utils.js";

let arr = [];
let callStack = [];
let comparisons = 0;
let learningMode = true;

function drawCallStack() {
  let container = document.getElementById("callStack");
  container.innerHTML = "";

  for (let i = callStack.length - 1; i >= 0; i--) {
    let frame = document.createElement("div");
    frame.className = "stackFrame";
    frame.innerText = callStack[i];
    container.appendChild(frame);
  }
}

function pushFrame(text) {
  callStack.push(text);
  drawCallStack();
}

function popFrame() {
  callStack.pop();
  drawCallStack();
}

async function mergeSortWrapper() {
  callStack = [];
  drawCallStack();
  await mergeSort(0, arr.length - 1);
}

async function mergeSort(left, right) {
  pushFrame(`mergeSort(${left}, ${right})`);
  await sleep(learningMode ? 500 : 100);

  if (left >= right) {
    popFrame();
    return;
  }

  let mid = Math.floor((left + right) / 2);

  await mergeSort(left, mid);
  await mergeSort(mid + 1, right);

  await merge(left, mid, right);

  popFrame();
}

async function merge(left, mid, right) {
  let temp = [];
  let i = left;
  let j = mid + 1;

  while (i <= mid && j <= right) {
    comparisons++;
    updateSortCounter();

    drawArray(i, j);
    await sleep(learningMode ? 500 : 100);

    if (arr[i] < arr[j]) {
      temp.push(arr[i++]);
    } else {
      temp.push(arr[j++]);
    }
  }

  while (i <= mid) temp.push(arr[i++]);
  while (j <= right) temp.push(arr[j++]);

  for (let k = 0; k < temp.length; k++) {
    arr[left + k] = temp[k];
    drawArray(left + k);
    await sleep(learningMode ? 300 : 80);
  }
}


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

function drawArray(highlight1 = -1, highlight2 = -1, sortedIndex = -1) {
  let container = document.getElementById("sortContainer");
  container.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let bar = document.createElement("div");
    bar.className = "sortBar";
    bar.style.height = arr[i] * 2 + "px";

    if (i === highlight1 || i === highlight2) {
      bar.style.backgroundColor = "orange"; // comparing
    } else if (i <= sortedIndex) {
      bar.style.backgroundColor = "green"; // sorted
    } else {
      bar.style.backgroundColor = "steelblue"; // unsorted
    }

    container.appendChild(bar);
  }
}



async function bubbleSort() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {

      comparisons++;
      updateSortCounter();

      drawArray(j, j + 1);
      await sleep(learningMode ? 1000 : 100);

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        drawArray(j, j + 1);
        await sleep(learningMode ? 1000 : 100);
      }
    }
  }
}

async function selectionSort() {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      comparisons++;
      updateSortCounter();

      // Highlight current min and current comparison
      drawArray(minIndex, j);
      await sleep(learningMode ? 1000 : 100);

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap minimum with first unsorted element
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;

      drawArray(i, minIndex);
      await sleep(learningMode ? 1000 : 100);
    }

    // Mark this position as sorted
    drawArray(-1, -1, i);
  }
}


function updateSortCounter() {
  document.getElementById("sortCounter").innerText =
    "Comparisons: " + comparisons;
}

function startSort() {
  let algo = document.getElementById("algoSelect").value;

  document.getElementById("sortComplexity").innerText =
    algo === "bubble"
      ? "Time: O(n^2) | Space: O(1) - Bubble Sort"
      : algo === "selection"
      ? "Time: O(n^2) | Space: O(1) - Selection Sort"
      : "Time: O(n log n) | Space: O(n) - Merge Sort";

  if (algo === "bubble") {
    bubbleSort();
  } else if (algo === "merge") {
    mergeSortWrapper();
  } else {
    selectionSort();
  }
}

const questions = [
  {
    question: "Time complexity of Bubble Sort?",
    options: ["O(n)", "O(n log n)", "O(n^2)"],
    answer: 2
  },
  {
    question: "Which is fastest sorting?",
    options: ["Bubble", "Merge", "Selection"],
    answer: 1
  },
  {
    question: "Merge sort uses?",
    options: ["Greedy", "Divide & Conquer", "DP"],
    answer: 1
  },
  {
    question: "Bubble sort is?",
    options: ["Stable", "Unstable", "Random"],
    answer: 0
  },
  {
    question: "Selection sort swaps?",
    options: ["Every time", "Once per iteration", "Never"],
    answer: 1
  },
  {
    question: "Worst case of bubble?",
    options: ["O(n)", "O(n^2)", "O(log n)"],
    answer: 1
  },
  {
    question: "Merge sort space?",
    options: ["O(1)", "O(n)", "O(log n)"],
    answer: 1
  },
  {
    question: "Bubble compares?",
    options: ["Adjacent", "Random", "All"],
    answer: 0
  },
  {
    question: "Stable sort?",
    options: ["Keeps order", "Breaks order", "Random"],
    answer: 0
  },
  {
    question: "Divide step in merge?",
    options: ["Split array", "Sort array", "Print"],
    answer: 0
  }
];

loadQuestion();

localStorage.setItem("sortingVisited", true);

// Make functions accessible to HTML
window.generateArray = generateArray;
window.startSort = startSort;