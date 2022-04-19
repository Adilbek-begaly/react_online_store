import React from "react";
import './Card.module.scss'

function Card(props) {

  const onClickButton = () => {
    alert(props.title)
  }

    return (
        <div className="card">
          <div className="favorite">
            <img src="/img/heart.svg" alt="Unliked"/>
          </div>
          <img width={133} height={122} src={props.imageUrl} alt="Sneakers"/>
          <h5>{props.title}</h5>
          <div className="card-btn">
              <div className="card-info">
                <span>Цена:</span>
                <b>{props.price} тенге</b>
              </div>
              <button className="button"onClick={props.onClick}>
                <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
    )
}
export default Card;