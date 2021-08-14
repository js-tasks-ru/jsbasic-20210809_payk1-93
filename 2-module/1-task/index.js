
function sumSalary(salaries) {
  if("John" in salaries && "Pete" in salaries && "Ann" in salaries ) {
    return salaries.John + salaries.Pete + salaries.Ann;
  }
  else {
    return 0;
  }
}
