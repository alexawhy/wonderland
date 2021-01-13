document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", ev => {
    const eyes = document.querySelectorAll(".eye");
    eyes.forEach(eye => {
      let x = (eye.getBoundingClientRect().left)+ (eye.clientWidth / 2);
      let y = (eye.getBoundingClientRect().top)+ (eye.clientHeight / 2);
      let radian = Math.atan2(ev.pageX - x, ev.pageY - y);
      let rotation = (radian * (180 * Math.PI) * -1) + 270;
      eye.style.transform = `rotate(${rotation/120}deg)`
      // let x = ev.pageX;
      // let y = ev.pageY;
      // eye.style.transform = `translate(${x / 100}}em, ${y / 100}em)`
    })
  })
});