import React from "react";

function App() {
  return (
    <div className="wrapper clear">
      <header>
        <div className="header-left">
          <img width={40} height={40} src="/img/logo.png"/>
          <div>
            <h3>Online Store</h3>
            <p>Онлайн интернет магазин</p>
          </div>
        </div>
        <ul className="header-rigth">
          <li>
            <img width={18} height={18} src="/img/cart.svg"/>
            <span>1204 тенге</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg"/>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1 className="conten-h1">Все кроссовки</h1>
        <div className="cneakers">
          
        <div className="card">
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

        <div className="card">
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

        <div className="card">
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

        <div className="card">
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
        

        </div>
      </div>
    </div>
  );
}
export default App;

// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />