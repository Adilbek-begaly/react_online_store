import React from "react";

function Card() {
    return (
        <div className="card">
          <div className="favorite">
            <img src="/img/heart.svg" alt="Unliked"/>
          </div>
          <img width={133} height={122} src="/img/sneakers/1.jpg" alt="Sneakers"/>
          <h5>Мужские Кроссовки Nike Biazer Mid Suede</h5>
          <div className="card-btn">
              <div className="card-info">
                <span>Цена:</span>
                <b>12 999 тенге</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
    )
}
export default Card;