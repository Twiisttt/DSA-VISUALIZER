function toggleTheme() {
  document.body.classList.toggle("darkMode");

  // Save theme
  if (document.body.classList.contains("darkMode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("darkMode");
}