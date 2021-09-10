/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable { 
  constructor(rows) { 
    this.rows = rows;
    this.render();
  }
  render(){
    const tableDOM = document.createElement("TABLE");    
    let theadTable = `<thead><tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
          </tr></thead>`
    tableDOM.innerHTML = theadTable
    tableDOM.innerHTML += this.rows.map(rowsItem => {
        return `<tr>
          <td>${rowsItem.name}</td>
          <td>${rowsItem.age}</td>
          <td>${rowsItem.salary}</td>
          <td>${rowsItem.city}</td>
          <td><button>X</button></td>
          </tr>`;
      }).join("");
    tableDOM.addEventListener(`click`, this.onClick);
    this.elem = tableDOM
    return  tableDOM;
    }
    onClick(event){
      if(event.target.tagName === "BUTTON"){
        event.target.parentElement.parentElement.remove();
      }
    }
}
    /**   const theadDom = `<thead><tr>
    <th>Имя</th>
    <th>Возраст</th>
    <th>Зарплата</th>
    <th>Город</th>
    <th></th>
    </tr></thead>`
    let tbodyDom
    for (const rowsItem in this.rows){
      tbodyDom = `<tbody><tr>
      <td>${rowsItem.name}</td>
      <td>${rowsItem.age}</td>
      <td>${rowsItem.salary}</td>
      <td>${rowsItem.city}</td>
      <td><button>X</button></td>
      </tr></tbody>`;
      return tableDOM.innerHTML = theadDom + tbodyDom;
 */   
  



