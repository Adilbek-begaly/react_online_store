import React from "react";
import Card from "../components/Card/Card";

function Home({
    searchValue,
    setSearchValue,
    changeSearchInput,
    items,
    onAddToFavorite,
    onAddToCard
}) {
    return (
        <div className="content">
          <div className="content-info">
            <h1 className="conten-h1">
              {searchValue ? 'Поиск...' : 'Все кроссовки'}
            </h1>
              <div className="search-block">
                <img src="/img/search.svg" alt="Search"/>
                  {searchValue 
                    && <img 
                         onClick={() => setSearchValue('')} 
                         className="remove-close clear" 
                         src="/img/btn-remove.svg" alt="Close"
                        />
                   }
                <input onChange={changeSearchInput} value={searchValue} placeholder="Поиск..."/>
              </div>
          </div>

          <div className="cneakers">
            {items
                .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map(item => 
                    <Card 
                        name={item.name} 
                        price={item.price} 
                        avatar={item.avatar}
                        id={item.id} 
                        key={item.id} 
                        onFavorite={(obj) =>onAddToFavorite(obj)}
                        onPlus={(obj) =>onAddToCard(obj)}
                    />)
            }
        </div>

      </div>
    )
}
export default Home;