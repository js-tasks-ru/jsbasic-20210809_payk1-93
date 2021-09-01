function initCarousel() {
const rightBut = document.querySelector(".carousel__arrow_right");
const leftBut = document.querySelector(".carousel__arrow_left ");
const pic = document.querySelector(".carousel__inner");
console.log(rightBut);
console.log(leftBut);
console.log(pic);
let transX = 0;
function rightClick() {
    transX = transX + 988 + "px";
    pic.style.transform = 'translateX(+988px)';
}
rightBut.addEventListener("click",leftClick );
function leftClick() {
    transX = transX - 988 + "px";
    pic.style.transform = 'translateX(-988px)';
}
leftBut.addEventListener("click",leftClick );
}
