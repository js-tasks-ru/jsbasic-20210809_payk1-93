function getMinMax(str) {
  let splits = str.split(' ');
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  for (let i = 0; i < splits.length; i++) {
      if ((splits[i] / "1" ) == true){
        console.log( splits[i] );
      }
    
    }
  let result1 = splits.map(results => results / "1" );
  let result2 = result1.filter(results => isNaN(results)== false);

  sortArr = result2.sort(compareNumeric);
  console.log(sortArr);

  let result = {
      min: 0,
      max: 0,
  }
  let minReslt = sortArr.shift();
  let maxReslt = sortArr.pop();
  result.min = minReslt;
  result.max = maxReslt;
  return result; 
}


/* задача Фильтрация по диапазону и Функция showSalary(users, age)


/* задача Функция showSalary(users, age)
let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
  };
let user2 = {
  "balance": "$2,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 22,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};
let age = 20; 
let users = [user1,user2];
let newArr = [];
let str1
  for (let i = 0; i < users.length; i++) { // перебор значейний и если ключ age больше чем age то значения name и balance добавялем в строку, строку пушим в массив
    if(users[i].age >= age){
      str1 = users[i].name
      str1 = str1 + ", " + users[i].balance
      newArr.push(str1);
      console.log( newArr );
    }
    }
let str = newArr.join('\n'); // объединить массив в строку через ;
console.log( str );

*/
