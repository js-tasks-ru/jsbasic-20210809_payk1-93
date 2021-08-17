function sumSalary(salaries) {
  let sumZp = 0;
  for (let key in salaries) {
    if(typeof salaries[key] == "number" && Number.isNaN(salaries[key]) == false && Number.isInteger(salaries[key]) == true ){
      sumZp = sumZp + salaries[key];
    }
    
  }
  return sumZp;  
}

