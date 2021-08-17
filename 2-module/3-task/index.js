let calculator = {

  read(a, b){
      this.a = a;
      this.b = b;
  },
  sum: function(){
    let answerSum = this.a + this.b;
    return answerSum;
  },
  mul: function(){
    let answerMul = this.a * this.b;
    return  answerMul;
  }

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
