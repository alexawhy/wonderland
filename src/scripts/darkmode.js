document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const toggleSwitch = document.querySelector('.dark-btn-container input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');

  console.log(body);
  console.log(toggleSwitch);

});