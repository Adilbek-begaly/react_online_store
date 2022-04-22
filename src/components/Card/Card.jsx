import React, { useState } from "react";
import './Card.module.scss'

function Card({id,name, avatar, price, onFavorite, onPlus, favorited=false}) {

  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(favorited)

  const onClickPlus = () => {
    onPlus({name, avatar, price})
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    onFavorite({name, avatar, price, id})
    setIsFavorite(!isFavorite)
  }

    return (
        <div className="card">
          <div className="favorite" onClick={onClickFavorite}>
            <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg" } alt="Unliked" />
          </div>
          <img width={133} height={122} src={avatar} alt="Sneakers"/>
          <h5>{name}</h5>
          <div className="card-btn">
              <div className="card-info">
                <span>Цена:</span>
                <b>{price} тенге</b>
              </div>
              <img 
                className="plus" 
                onClick={onClickPlus} 
                src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } 
                alt="Plus"
              />
            </div>
          </div>
    )
}
export default Card;