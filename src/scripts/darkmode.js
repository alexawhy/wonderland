document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const toggleSwitch = document.getElementById("dark-mode-switch");
  const currentTheme = localStorage.getItem('theme');
  // const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (currentTheme == "dark") {
    body.classList.add("dark-theme");
  } else if (currentTheme == "light") {
    body.classList.remove("dark-theme");
  }

  toggleSwitch.addEventListener("click", () => {
    let theme = body.classList.contains("dark-theme")
      ? "light"
      : "dark";
    body.classList.toggle('dark-theme');
    localStorage.setItem("theme", theme);
  })
});