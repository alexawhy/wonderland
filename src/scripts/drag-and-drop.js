document.addEventListener("DOMContentLoaded", () => {
  const alexContainer = document.querySelector(".alex");
  const alex = document.querySelector(".alex img");

  const shrink = document.querySelector(".shrink");
  const newShrinkPrompt = document.createElement("p");
  newShrinkPrompt.innerHTML = "Drink Me!";
  let newShrinkImg = document.createElement("img");
  newShrinkImg.setAttribute("class", "draggable");
  newShrinkImg.setAttribute("draggable", "true");

  const enlarge = document.querySelector(".enlarge");
  const newEnlargePrompt = document.createElement("p");
  newEnlargePrompt.innerHTML = "Eat Me!";
  let newEnlargeImg = document.createElement("img");
  newEnlargeImg.setAttribute("class", "draggable");
  newEnlargeImg.setAttribute("draggable", "true");

  let shrinkCount = 4;
  let enlargeCount = 4;

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
  
    if (scale === 0.5) {
      shrinkCount -= 1;
      switch (shrinkCount) {
        case 3:
          shrink.removeChild(document.querySelector(".shrink img"));
          shrink.removeChild(document.querySelector(".shrink p"));
          newShrinkImg.setAttribute("src", "src/assets/drag-and-drop/potion-3.svg")
          shrink.appendChild(newShrinkImg);
          shrink.appendChild(newShrinkPrompt);
          break;
        case 2:
          shrink.removeChild(document.querySelector(".shrink img"));
          shrink.removeChild(document.querySelector(".shrink p"));
          newShrinkImg.setAttribute("src", "src/assets/drag-and-drop/potion-2.svg")
          shrink.appendChild(newShrinkImg);
          shrink.appendChild(newShrinkPrompt);
          break;
        case 1:
          shrink.removeChild(document.querySelector(".shrink img"));
          shrink.removeChild(document.querySelector(".shrink p"));
          newShrinkImg.setAttribute("src", "src/assets/drag-and-drop/potion-1.svg")
          shrink.appendChild(newShrinkImg);
          shrink.appendChild(newShrinkPrompt);
          break;
        case 0:
          shrink.removeChild(document.querySelector(".shrink img"));
          shrink.removeChild(document.querySelector(".shrink p"));
          newShrinkImg.setAttribute("draggable", "false")
          newShrinkImg.setAttribute("src", "src/assets/drag-and-drop/potion-0.svg")
          const end = document.createElement("p");
          end.innerHTML = "No more potion :("; 
          shrink.appendChild(newShrinkImg);
          shrink.appendChild(end);
          break;
      }
    } else {
      enlargeCount -= 1;
      switch (enlargeCount) {
        case 3:
          enlarge.removeChild(document.querySelector(".enlarge img"));
          enlarge.removeChild(document.querySelector(".enlarge p"));
          newEnlargeImg.setAttribute("src", "src/assets/drag-and-drop/cookie-3.svg")
          enlarge.appendChild(newEnlargeImg);
          enlarge.appendChild(newEnlargePrompt);
          break;
        case 2:
          enlarge.removeChild(document.querySelector(".enlarge img"));
          enlarge.removeChild(document.querySelector(".enlarge p"));
          newEnlargeImg.setAttribute("src", "src/assets/drag-and-drop/cookie-2.svg")
          enlarge.appendChild(newEnlargeImg);
          enlarge.appendChild(newEnlargePrompt);
          break;
        case 1:
          enlarge.removeChild(document.querySelector(".enlarge img"));
          enlarge.removeChild(document.querySelector(".enlarge p"));
          newEnlargeImg.setAttribute("src", "src/assets/drag-and-drop/cookie-1.svg")
          enlarge.appendChild(newEnlargeImg);
          enlarge.appendChild(newEnlargePrompt);
          break;
        case 0:
          enlarge.removeChild(document.querySelector(".enlarge img"));
          enlarge.removeChild(document.querySelector(".enlarge p"));
          newEnlargeImg.setAttribute("draggable", "false")
          newEnlargeImg.setAttribute("src", "src/assets/drag-and-drop/cookie-0.svg")
          const end = document.createElement("p");
          end.innerHTML = "No more cookie :("; 
          enlarge.appendChild(newEnlargeImg);
          enlarge.appendChild(end);
          break;
      }
    }
  })
})
