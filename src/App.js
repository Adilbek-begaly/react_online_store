import React from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {title:'Мужские Кроссовки Nike Biazer Mid Suede 1', price:12999,imageUrl:'/img/sneakers/1.jpg', id:1},
  {title:'Мужские Кроссовки Nike Biazer Mid Suede 2', price:12999,imageUrl:'/img/sneakers/2.jpg', id:2},
  {title:'Мужские Кроссовки Nike Biazer Mid Suede 3', price:12999,imageUrl:'/img/sneakers/3.jpg', id:3},
  {title:'Мужские Кроссовки Nike Biazer Mid Suede 4', price:12999,imageUrl:'/img/sneakers/4.jpg', id:4}
]
function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header />

      <div className="content">
        <div className="content-info">
          <h1 className="conten-h1">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="cneakers">
          {arr.map(obj => <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} key={obj.id} onClick={() =>console.log(obj)}/>)}
        </div>
      </div>

    </div>
  );
}
export default App;

// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />