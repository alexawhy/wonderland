import Typed from 'typed.js';

// append #typed when it intersects 

let visibility = "invisible";
let intersectionRatio = 0;

document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const span = document.createElement("span");
  span.setAttribute("id", "typed");
  intro.appendChild(span);

  const typed = new Typed("#typed", {
    stringsElement: "#typed-strings",
    typeSpeed: 40,
    startDelay: 1000,
    backDelay: 1000,
    backSpeed: 12,
    loop: true
  }) 

  // const io = new IntersectionObserver(entries => {
  //   console.log(entries);    

  //   if (entries[0].intersectionRatio === 0) {
  //     visibility = 'invisible';
  //     intersectionRatio = 0;

  //     const cursor = document.querySelector(".typed-cursor");

  //     intro.removeChild(span);
  //     intro.removeChild(cursor);

  //     console.log("invisible");
  //   } else if (entries[0].intersectionRatio > 0.5) {
  //     visibility = 'visible';
  //     intersectionRatio = entries[0].intersectionRatio;
  //     console.log("visible");
  //     intro.appendChild(span);
  //   }
  // })

  // io.observe(intro);
})


