function namify(users) {
  let answer = [];
for (let i = 0; i < users.length+2; i++) {
  let result = users.find(item => item.name)
  answer.push(result.name)
  users.splice(0, 1);
}
users = answer;
return users;
}

/** 
 решение этой задачи через map , а не через find

function namify(users) {
  return users.map((user) => user.name);
}


const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

var myString = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
var splits = myString.split(' ');

console.log(splits);


 */