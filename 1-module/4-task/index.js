function checkSpam(str) {

lowerSrt = str.toLowerCase();

if(lowerSrt.indexOf('xxx') != -1){
    
    return true;
}

if(lowerSrt.indexOf('1xbet') != -1){
    
  return true;
}
else{
  return false;
}
}
