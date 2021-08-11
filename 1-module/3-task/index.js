function ucFirst(str) {

  if(str != ''){
    if(str.length > 1){
      return str[0].toUpperCase()+"ася";
    }
    else{
      return str[0].toUpperCase();
    }
  }
  else{
    return str;
  }
}
