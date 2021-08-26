function makeFriendsList(friends) {
  let result2 = friends.map(results => "<li>"+ results.firstName + " " + results.lastName + "</li>");
  console.log(result2.length);
  let answer = "<ul>"
  for (let i = 0; i < result2.length; i++) {
      answer += result2[i];
      }
  answer += "</ul>"
  document.body.innerHTML += answer;
  const tegUl2 = document.querySelector("ul")

  return tegUl2;
}
