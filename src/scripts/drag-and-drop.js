document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".drag-and-drop");
  const dummyTextcontainer = document.querySelector(".alex");
  const dummyText = document.querySelector(".alex p");
  const shrink = document.querySelector(".shrink");
  const enlarge = document.querySelector(".enlarge");

  shrink.innerHTML = "Drink Me";
  enlarge.innerHTML = "Eat Me";

  // no longer able to drag when originalScale exceed 2

  shrink.addEventListener("dragstart", ev => {
    ev.dataTransfer.setData("text/plain", "0.5");
  })

  enlarge.addEventListener("dragstart", ev => {
    ev.dataTransfer.setData("text/plain", "2");
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
    console.log(newScale);
    dummyText.style.transform = `scale(${newScale})`;
  })
})
