import React from "react";

function Drawer({onClose, onRemove , items=[]}) {
    return (
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина <img onClick={onClose} className="remove-btn" src="/img/btn-remove.svg" alt="Close"/></h2>
          <div className="items">

            {items.map((obj) => (
              <div className="cart-item"> 
                <div className="cart-item-img" style={{backgroundImage: `url(${obj.avatar})`}}></div>
                  <div className="cart-text">
                    <p>{obj.name}</p>
                    <b>{obj.price} тенге</b>
                  </div>
                <img className="remove-btn" onClick={() => onRemove(obj.id)} src="/img/btn-remove.svg" alt="Remove"/>
              </div>
            ))}
         
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
                  <b>1074 тенге</b>
                </li>
              </ul>
              <button className="green-button">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
            </div>
            
        </div>
      </div>
    )
}
export default Drawer;