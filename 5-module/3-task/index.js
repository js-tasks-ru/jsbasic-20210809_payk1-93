function initCarousel() {
const rightBut = document.querySelector(".carousel__arrow_right");
const leftBut = document.querySelector(".carousel__arrow_left ");
const pic = document.querySelector(".carousel__inner");
// const picAll = document.querySelectorAll(".carousel__slide");
// let displayFlag = pic.hasAttribute('translate') ? 'none' : "";
// rightBut.style.display = displayFlag;

/**
 * Цикл по добавлению data атрибута с нумерацей
 * 
    for (let i = 0; i < picAll.length; i++) {                
    picAll[i].setAttribute('data-numberSlide', i); 
  }
*/
if(!pic.hasAttribute('translateX')){
    leftBut.style.display = 'none';
}

let transX = 0;
let clickNum = 0;
function rightClick() { // функция для Клика правой кнопки 
    clickNum = clickNum + 1;
    const picId = document.querySelector(".carousel__slide");
    transX = transX - 500;
    pic.style.transform = "translateX(" + (transX) + "px)";
    if(clickNum == 3){
        rightBut.style.display = 'none';
    }
    if(clickNum == 0){
        leftBut.style.display = 'none';
    }
    if(clickNum != 0){
        leftBut.style.display = '';
    }
    if(clickNum != 3){
        rightBut.style.display = '';
    }

}
rightBut.addEventListener("click",rightClick ); // срабатывание клика

function leftClick() {      // функция для Клика левой кнопки 
    clickNum = clickNum - 1;
    transX = transX + 500;
    pic.style.transform = "translateX(" + (transX) + "px)";
    if(clickNum == 3){
        rightBut.style.display = 'none';
    }
    if(clickNum == 0){
        leftBut.style.display = 'none';
    }
    if(clickNum != 0){
        leftBut.style.display = '';
    }
    if(clickNum != 3){
        rightBut.style.display = '';
    }

}
leftBut.addEventListener("click",leftClick ); // срабатывание клика

}
