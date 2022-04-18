import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

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
          <Card/>
          
        </div>
      </div>

    </div>
  );
}
export default App;

// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />