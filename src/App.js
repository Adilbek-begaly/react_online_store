import React, { useEffect, useState } from "react";
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorites";


function App() {

  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    // fetch('https://625fb88353a42eaa07f9ae39.mockapi.io/items')
    //   .then(response =>  response.json())
    //   .then(data => setItems(data))

      axios.get('https://625fb88353a42eaa07f9ae39.mockapi.io/items')
        .then(response => setItems(response.data))
      
      axios.get('https://625fb88353a42eaa07f9ae39.mockapi.io/cart')
        .then(response => setCartItems(response.data))

      axios.get('https://625fb88353a42eaa07f9ae39.mockapi.io/favorites')
        .then(response => setFavorites(response.data))
      
  },[])
  
  const onAddToCard = (obj) => {
    axios.post('https://625fb88353a42eaa07f9ae39.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  } 

  const onRemoveItem = (id) => {
    axios.delete(`https://625fb88353a42eaa07f9ae39.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://625fb88353a42eaa07f9ae39.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter(item => item.id !== obj.id))
      } else {
        const {data} = await axios.post('https://625fb88353a42eaa07f9ae39.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
        alert('Не удалось добавить закладки')
    }
  }

  const changeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">

      {  cartOpened 
            && <Drawer 
                  onRemove={onRemoveItem}
                  items={cartItems} 
                  onClose={() =>setCartOpened(false)}
                />
      }
      <Header onClickCart={() =>setCartOpened(true)}/>

      <Routes>
        <Route path="/*" element={<Home searchValue={searchValue}
                                        setSearchValue={setSearchValue}
                                        changeSearchInput={changeSearchInput}
                                        items={items}
                                        onAddToFavorite={onAddToFavorite}
                                        onAddToCard ={onAddToCard}
                                  />}
        />
        <Route path="/favorites" element={ <Favorite  items={favorites}
                                                      onAddToFavorite={onAddToFavorite}
                                                      onAddToCard ={onAddToCard}/>}
        />
      </Routes>

    </div>
  );
}
export default App;

// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />