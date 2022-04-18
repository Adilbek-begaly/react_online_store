import React from "react";

function Drawer() {
    return (
      <div className="overlay" style={{display:'none'}}>
        <div className="drawer">
          <h2>Корзина <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/></h2>
          <div className="items">
            
            <div className="cart-item"> 
              <div className="cart-item-img" style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}></div>
              <div className="cart-text">
                <p>Мужские Кроссовки Nike Biazer Mid Suede</p>
                <b>12 999 тенге</b>
              </div>
              <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>
            <div className="cart-item"> 
              <div className="cart-item-img" style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}></div>
              <div className="cart-text">
                <p>Мужские Кроссовки Nike Biazer Mid Suede</p>
                <b>12 999 тенге</b>
              </div>
              <img className="remove-btn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>
            
          </div>

            <div className="cart-total-block">
              <ul className="items-ul">
                <li className="items-li">
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 тенге</b>
                </li>
                <li className="items-li">
                  <span>Налог 5%</span>
                  <div></div>
                  <b>"1074 тенге</b>
                </li>
              </ul>
              <button className="green-button">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
            </div>
            
        </div>
      </div>
    )
}
export default Drawer;