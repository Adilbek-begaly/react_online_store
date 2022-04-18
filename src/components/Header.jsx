import React from "react";


function Header() {
    return (
        <header>
          <div className="header-left">
            <img width={40} height={40} src="/img/logo.png" alt="Logo"/>
            <div>
                <h3>Online Store</h3>
                <p>Онлайн интернет магазин</p>
            </div>
          </div>
          <ul className="header-rigth">
            <li>
                <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
                <span>1204 тенге</span>
            </li>
            <li>
            <img width={18} height={18} src="/img/user.svg" alt="User"/>
            </li>
          </ul>
      </header>
    )
}

export default Header;