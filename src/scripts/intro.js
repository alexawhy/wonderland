import Typed from 'typed.js';

const intro = document.getElementById("intro");
const span = document.createElement("span");
span.setAttribute("id", "typed");
intro.appendChild(span);

const typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 40,
  startDelay: 1000,
  backDelay: 2000,
  backSpeed: 20,
  loop: true
}) 