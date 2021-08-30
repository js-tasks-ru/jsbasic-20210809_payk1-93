function highlight(table) {
  const table = document.querySelector("tbody");
  const tegtable = table.querySelectorAll("td");
  const tagtd = document.querySelector("td");
  const tegtableTr = table.querySelectorAll("tr");
  console.log(tegtableTr)

  for(i = 0; i < tegtable.length; i++){
    if(tegtable[i].dataset.available =="false"){
      tegtable[i].parentElement.classList.add("unavailable");
    console.log(tegtable[i].parentElement);
    }
  }

  for(i = 0; i < tegtable.length; i++){
    if(tegtable[i].dataset.available =="true"){
      tegtable[i].parentElement.classList.add("available");
    console.log(tegtable[i].parentElement);
    }
  }

  for(i = 0; i < tegtableTr.length; i++){
    if(tegtableTr[i].className !="available" && tegtableTr[i].className !="unavailable" ){
      tegtableTr[i].setAttribute("hidden", "");
      console.log(tegtableTr[i]);
    }
  }

  for(i = 0; i < tegtable.length; i++){
    if(tegtable[i].innerHTML =="m"){
      tegtable[i].parentElement.classList.add("male");
    console.log(tegtable[i]);
    }
  }
  
  for(i = 0; i < tegtable.length; i++){
    if(tegtable[i].innerHTML =="f"){
      tegtable[i].parentElement.classList.add("female");
    console.log(tegtable[i]);
    }
  }
  
  for(i = 0; i < tegtable.length; i++){
    if(tegtable[i].innerHTML <="18"){
      tegtable[i].parentElement.style="text-decoration: line-through";
      console.log(tegtable[i].parentElement);
    }
  }
}
