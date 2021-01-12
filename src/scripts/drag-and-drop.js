document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".alex");
  const dummyText = document.querySelector(".alex p");
  const shrink = document.querySelector(".shrink");
  const enlarge = document.querySelector(".enlarge");

  shrink.addEventListener("dragstart", event => {
    event.dataTransfer.setData("text/plain", "shrink")
  })

  enlarge.addEventListener("dragstart", event => {
    event.dataTransfer.setData("text/plain", "enlarge")
  })


  container.addEventListener("dragover", event => {
    event.preventDefault();
  });

  container.addEventListener("drop", event => {
    event.preventDefault();
    let scale = event.dataTransfer.getData("text") === "shrink" ? 0.5 : 2;
    dummyText.style.transform = `scale(${scale})`
  })
})
