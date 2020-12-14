const bush1 = document.getElementById("bush1");
const bush2 = document.getElementById("bush2");
const cloud1 = document.getElementById("cloud1");
const cloud2 = document.getElementById("cloud2");
const cloud3 = document.getElementById("cloud3");
const title = document.getElementById("title");
const rabbithole = document.getElementById("rabbithole");

let scroll = window.pageYOffset;

document.addEventListener("scroll", (e) => {
  let offset = window.pageYOffset;
  scroll = offset;

  bush1.style.left = `${-scroll/20}%`;
  bush1.style.width = `${60 + scroll/40}%`;

  bush2.style.right = `${-scroll/20}%`;
  bush2.style.width= `${60 + scroll/40}%`;

  rabbithole.style.width = `${120 + scroll/15}%`;

  title.style.top = `${scroll/30}%`;

  cloud1.style.top = `${5 - scroll/20}%`;
  cloud1.style.left = `${3 - scroll/80}%`;
  cloud1.style.width = `${15 - scroll/80}%`;
  cloud2.style.top = `${20 - scroll/15}%`;
  cloud2.style.right = `${5 + scroll/60}%`;
  cloud2.style.width = `${15 - scroll/80}%`;
  cloud3.style.top = `${40 - scroll/10}%`;
  cloud3.style.left = `${15 - scroll/60}%`;
  cloud3.style.width = `${17.5 - scroll/80}%`;
})