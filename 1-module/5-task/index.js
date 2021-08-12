function truncate(str, maxlength) {
  if(str.length > maxlength){
    answer = str.slice(0, maxlength-1);
    return(answer + "…");
  }
  else{
    return str;
  }
}
