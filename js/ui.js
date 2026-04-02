function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

let darkMode = false;

function toggleTheme() {
  darkMode = !darkMode;

  if (darkMode) {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "white";
    document.getElementById("themeBtn").innerText = "☀️ Light Mode";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("themeBtn").innerText = "🌙 Dark Mode";
  }
}