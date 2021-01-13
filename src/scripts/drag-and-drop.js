document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".drag-and-drop");
  const alexContainer = document.querySelector(".alex");
  const alex = document.querySelector(".alex img");
  const shrink = document.querySelector(".shrink img");
  const enlarge = document.querySelector(".enlarge img");

  shrink.innerHTML = "Drink Me";
  enlarge.innerHTML = "Eat Me";

  shrink.addEventListener("dragstart", ev => {
    ev.dataTransfer.setData("text/plain", "0.5");
  })

  enlarge.addEventListener("dragstart", ev => {
    ev.dataTransfer.setData("text/plain", "2");
  })

  alexContainer.addEventListener("dragover", ev => {
    ev.preventDefault();
  });

  alexContainer.addEventListener("drop", ev => {
    ev.preventDefault();
    let originalMatrix = window.getComputedStyle(alex).getPropertyValue("transform");
    let originalScale = originalMatrix.slice(7).split(",")[0];
    
    let scale = parseFloat(ev.dataTransfer.getData("text/plain"));
    let newScale = originalScale * scale;
    alex.style.transform = `scale(${newScale})`;
  })
})
