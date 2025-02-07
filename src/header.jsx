import React from 'react';


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="asset/logo.png"
          alt="MeowBuck's Logo"
          style={{ width: "80px", height: "80px" }}
        />
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#product">Products</a>
        <a href="#promo">Promotions</a>
      </nav>
    </header>
  );
}

export default Header;
