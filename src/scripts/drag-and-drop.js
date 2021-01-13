document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".drag-and-drop");
  const dummyTextcontainer = document.querySelector(".alex");
  const dummyText = document.querySelector(".alex p");
  const shrink = document.querySelector(".shrink");
  const enlarge = document.querySelector(".enlarge");

  shrink.innerHTML = "Drink Me";
  enlarge.innerHTML = "Eat Me";

  shrink.addEventListener("dragstart", ev => {
    ev.dataTransfer.setData("text/plain", "0.5");
  })

  enlarge.addEventListener("dragstart", ev => {
    ev.dataTransfer.setData("text/plain", "1.5");
  })

  dummyTextcontainer.addEventListener("dragover", ev => {
    ev.preventDefault();
  });

  dummyTextcontainer.addEventListener("drop", ev => {
    ev.preventDefault();
    let originalMatrix = window.getComputedStyle(dummyText).getPropertyValue("transform");
    let originalScale = originalMatrix.slice(7).split(",")[0];
    
    let scale = parseFloat(ev.dataTransfer.getData("text/plain"));
    let newScale = originalScale * scale;
    dummyText.style.transform = `scale(${newScale})`;
  })
})
