function makeDiagonalRed(table) {
  const tegtable = table;
  const tegtbody = table.firstElementChild;
  
  let lenghtTable = tegtable.rows.length;
  let lenghtTbody = tegtbody.rows.length;
  for(i = 0; i < lenghtTable; i++){
      for(n = 0; n < lenghtTbody; n++){
          if (i == n){
              
              tegtable.rows[i].cells[n].style.backgroundColor = 'red';
          }
      }
  }
  return tegtable ;

}
