function hideSelf() {
 const tegButton = document.querySelector("button");

 function rightClick() {
  tegButton.setAttribute("hidden","");
  }

tegButton.addEventListener("click",rightClick );

}


