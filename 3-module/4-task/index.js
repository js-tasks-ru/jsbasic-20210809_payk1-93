function showSalary(users, age) {
  let newArr = [];
  let str1;
    for (let i = 0; i < users.length; i++) { // перебор значейний и если ключ age больше чем age то значения name и balance добавялем в строку, строку пушим в массив
      if(users[i].age <= age){
        str1 = users[i].name
        str1 = str1 + ", " + users[i].balance
        newArr.push(str1);
      }
    }
  let str = newArr.join('\n'); // объединить массив в строку через ;
  return str;
}
