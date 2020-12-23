document.addEventListener("DOMContentLoaded", () => {
  const bush1 = document.getElementById("bush1");
  const bush2 = document.getElementById("bush2");
  const cloud1 = document.getElementById("cloud1");
  const cloud2 = document.getElementById("cloud2");
  const cloud3 = document.getElementById("cloud3");
  const star1 = document.getElementById("star1");
  const star2 = document.getElementById("star2");
  const star3 = document.getElementById("star3");
  const star4 = document.getElementById("star4");
  const title = document.getElementById("title");
  const plusParallax = document.getElementById("plus-parallax");
  const plusStar = document.getElementById("plus-star");
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
    plusParallax.style.top = `${5 + scroll/30}%`;
  
    cloud1.style.top = `${5 - scroll/20}%`;
    cloud1.style.left = `${3 - scroll/80}%`;
    cloud1.style.width = `${15 - scroll/80}%`;
    cloud2.style.top = `${20 - scroll/15}%`;
    cloud2.style.right = `${5 + scroll/60}%`;
    cloud2.style.width = `${15 - scroll/80}%`;
    cloud3.style.top = `${40 - scroll/10}%`;
    cloud3.style.left = `${15 - scroll/60}%`;
    cloud3.style.width = `${17.5 - scroll/80}%`;

    star1.style.top = `${5 - scroll/20}%`;
    star2.style.top = `${10 - scroll/20}%`;
    star3.style.top = `${30 - scroll/20}%`;
    star4.style.top = `${40 - scroll/20}%`;
    plusStar.style.top = `${10 - scroll/20}%`;
  })
})

