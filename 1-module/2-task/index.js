/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  let haveNull = true;
  if(name != null){
    for (let char of name) {
      if(char == " "){
        haveNull = false;
        
      }
    }
  }
  if(name == null ||name.length < 4 || haveNull == false || name == "null") {
    return false;
  }

  else{
    return true;
  } 
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
