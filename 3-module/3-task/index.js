function camelize(str) {
  arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] == '-')
    {
      arr.splice([i],1);
      let big = arr[i].toUpperCase();
      arr[i] = big;
    }
  }
  
  let str1 = arr.join('')
  return str1;
}
