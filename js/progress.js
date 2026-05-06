function showProgress() {
  document.getElementById("stackProgress").innerText =
    localStorage.getItem("stackVisited")
      ? "✔ Stack Completed"
      : "❌ Stack Pending";

  document.getElementById("queueProgress").innerText =
    localStorage.getItem("queueVisited")
      ? "✔ Queue Completed"
      : "❌ Queue Pending";

  document.getElementById("sortingProgress").innerText =
    localStorage.getItem("sortingVisited")
      ? "✔ Sorting Completed"
      : "❌ Sorting Pending";

  document.getElementById("searchProgress").innerText =
    localStorage.getItem("searchVisited")
      ? "✔ Search Completed"
      : "❌ Search Pending";

  document.getElementById("quizScoreDisplay").innerText =
    "Quiz Score: " + (localStorage.getItem("quizScore") || 0);
}

showProgress();