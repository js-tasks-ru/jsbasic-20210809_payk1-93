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
