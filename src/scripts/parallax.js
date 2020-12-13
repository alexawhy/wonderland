const bush1 = document.getElementById("bush1");
const bush2 = document.getElementById("bush2");
const sky = document.getElementById("sky");
const title = document.getElementById("title");
const rabbithole = document.getElementById("rabbithole");

let scroll = window.pageYOffset;

document.addEventListener("scroll", (e) => {
  let offset = window.pageYOffset;
  scroll = offset;

  bush1.style.left = `${-scroll/20}%`;
  bush1.style.width= `${60 + scroll/40}%`;

  bush2.style.right = `${-scroll/20}%`;
  bush2.style.width= `${60 + scroll/40}%`;

  sky.style.top = `${20 -scroll/50}%`;

  rabbithole.style.width = `${120 + scroll/40}%`;

  title.style.top = `${scroll/30}%`;
})