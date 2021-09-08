import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  constructor(product) {
    this.product = product;
  }

render(){
  table.innerHTML += this.rows.map(rowsItem => {
    return elem = createElement(`
    <div class="card">
        <div class="card__top">
            <img src="/assets/images/products/${rowsItem.image}" class="card__image" alt="product">
            <span class="card__price">${rowsItem.price}` + `€<!--значение product.price--></span>
        </div>
        <div class="card__body">
            <div class="card__title">${rowsItem.name}<!--значение product.name--></div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
    </div>`)
    
    });
  }
}
