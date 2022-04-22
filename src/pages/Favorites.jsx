import React from "react";
import Card from "../components/Card/Card";

function Favorite({items, onAddToFavorite}) {

    return (
        <div className="content">
          <div className="content-info">
            <h1 className="conten-h1"> Мои закладки</h1>
          </div>

          <div className="cneakers">
          {items.map(item => 
                    <Card 
                        name={item.name} 
                        price={item.price} 
                        avatar={item.avatar}
                        id={item.id} 
                        key={item.id} 
                        favorited={true}
                        onFavorite={onAddToFavorite}
                    />)
            }
        </div>

      </div>
    )
}
export default Favorite;