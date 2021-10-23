function initElement()
  {
    let text= window.prompt("Nouvelle phrase...","lauris le plus beau");
    p.textContent=text;
  };
  
  var p = document.getElementById("player-1");

p.addEventListener("click", initElement);