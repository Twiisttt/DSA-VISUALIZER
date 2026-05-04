let searchArr = [];
let searchComparisons = 0;
let learningMode = true;

function generateSearchArray() {
  searchArr = [];
  searchComparisons = 0;

  for (let i = 0; i < 10; i++) {
    let value = Math.floor(Math.random() * 100) + 1;
    searchArr.push(value);
  }

  drawSearchArray();
}

function drawSearchArray(highlight = -1, mid = -1, left = -1, right = -1) {
  let container = document.getElementById("searchContainer");
  container.innerHTML = "";

  for (let i = 0; i < searchArr.length; i++) {
    let box = document.createElement("div");
    box.className = "queueBox";
    box.innerText = searchArr[i];

    if (i === mid) {
      box.style.backgroundColor = "red"; // MID
    } else if (i === left) {
      box.style.backgroundColor = "green"; // LEFT
    } else if (i === right) {
      box.style.backgroundColor = "blue"; // RIGHT
    } else if (i === highlight) {
      box.style.backgroundColor = "orange"; // linear
    }

    container.appendChild(box);
  }
}

function startSearch() {
  let algo = document.getElementById("searchAlgo").value;

  if (algo === "linear") {
    linearSearch();
  } else {
    binarySearch();
  }
}

async function linearSearch() {
  let target = parseInt(document.getElementById("searchInput").value);

  for (let i = 0; i < searchArr.length; i++) {
    searchComparisons++;
    updateSearchCounter();

    drawSearchArray(i);
    await sleep(learningMode ? 500 : 100);

    if (searchArr[i] === target) {
      document.getElementById("searchResult").innerText = "Found at index " + i;
      return;
    }
  }

  document.getElementById("searchResult").innerText = "Not Found";
}

async function binarySearch() {
  let target = parseInt(document.getElementById("searchInput").value);

  searchArr.sort((a, b) => a - b); // sort first

  let left = 0;
  let right = searchArr.length - 1;

  while (left <= right) {
    let midIndex = Math.floor((left + right) / 2);

    searchComparisons++;
    updateSearchCounter();

    drawSearchArray(-1, midIndex,left,right);
    await sleep(learningMode ? 500 : 100);

    if (searchArr[midIndex] === target) {
      document.getElementById("searchResult").innerText = "Found at index " + midIndex;
      return;
    } else if (searchArr[midIndex] < target) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }

  document.getElementById("searchResult").innerText = "Not Found";
}

function updateSearchCounter() {
  document.getElementById("searchCounter").innerText =
    "Comparisons: " + searchComparisons;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

questions = [
  { question: "Binary search works on?", options: ["Sorted", "Unsorted", "Any"], answer: 0 },
  { question: "Binary search TC?", options: ["O(n)", "O(log n)", "O(n^2)"], answer: 1 },
  { question: "Linear search TC?", options: ["O(n)", "O(log n)", "O(1)"], answer: 0 },
  { question: "Binary uses?", options: ["Recursion", "Divide", "Loop"], answer: 1 },
  { question: "Mid formula?", options: ["(l+r)/2", "l*r", "l+r"], answer: 0 },
  { question: "Search fails when?", options: ["found", "l>r", "mid"], answer: 1 },
  { question: "Binary faster because?", options: ["skip half", "loop", "sort"], answer: 0 },
  { question: "Linear checks?", options: ["all", "half", "none"], answer: 0 },
  { question: "Binary needs?", options: ["sorted", "unsorted", "random"], answer: 0 },
  { question: "Best case binary?", options: ["O(1)", "O(n)", "O(log n)"], answer: 0 }
];

loadQuestion();