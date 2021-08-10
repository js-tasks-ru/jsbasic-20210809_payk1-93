function factorial(n) {
  var i = 0;
  var b = 1;
  while(i <= n) {
    if(n == 0 || n == 1 ) {
      b = 1;
      break;
    }
    if (i ==  0){
      i++;
    }
    b = i * b;
    i= i + 1;  
  }
  return b;
}

