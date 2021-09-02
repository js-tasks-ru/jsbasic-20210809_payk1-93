function toggleText() {
  
  const tegDiv = document.querySelector("div");
  const tegBut = document.querySelector("button");
  
function rightClick() {
  tegDiv.toggleAttribute("hidden");
}
tegBut.addEventListener("click",rightClick );
}
