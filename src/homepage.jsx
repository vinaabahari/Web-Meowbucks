import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import ProductDetail from "./ProductDetail";

function HomePage() {
  const [products] = useState([
    { id: 1, name: "Oreo Frappuccino", price: 5.5, img: "asset/1.png" },
    { id: 2, name: "Strawberry Frappe", price: 3.0, img: "asset/2.png" },
    { id: 3, name: "Matcha Latte", price: 6.2, img: "asset/3.png" },
    { id: 4, name: "Caramel Macchiato", price: 5.0, img: "asset/4.png" },
    { id: 5, name: "Croissant", price: 1.5, img: "asset/7.png" },
    { id: 6, name: "Egg Toast", price: 2.0, img: "asset/8.png" },
    { id: 7, name: "Strawberry Pie", price: 3.2, img: "asset/9.png" },
    { id: 8, name: "Cinnamon Roll", price: 4.0, img: "asset/10.png" },
  ]);

  const [promos] = useState([
    {
      id: 1,
      name: "ColdBrew",
      originalPrice: 3.5,
      promoPrice: 2.4,
      img: "asset/5.png",
    },
    {
      id: 2,
      name: "Ice Bubble",
      originalPrice: 4.0,
      promoPrice: 3.0,
      img: "asset/6.png",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product); 
  };

  

  return (
    <div className="homepage">
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} />
      ) : (
        
        <>
          <header className="header">
            <div className="logo">
              <img
                src="asset/logo.png"
                alt="MeowBuck's Logo"
                style={{ width: "80px", height: "80px" }}
              />
            </div>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="#product">Products</a>
              <a href="#promo">Promotions</a>
            </nav>
          </header>

          {/* Banner */}
          <div className="content">
            <div className="banner">
              <h1>It's not just a coffee</h1>
              <h1>
                It's <span className="span">MeowBuck's</span>
              </h1>
              <p>Discover a drink that's made for you</p>
            </div>
            <div className="imgBox">
              <img src="asset/0.png" alt="Banner" style={{ width: "90%" }} />
            </div>
          </div>

          {/* Promo */}
          <div className="promo" id="promo">
            <h1> MeowBuck's Sale </h1>
            <div className="promo-list">
              {promos.map((promo) => (
                <div className="promo-item" key={promo.id}>
                  <img src={promo.img} alt={promo.name} />
                  <div className="teksP">
                    <h3>{promo.name}</h3>
                    <div className="rating">
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                    <p>
                      <s>${promo.originalPrice}</s>{" "}
                      <span className="promo-price">${promo.promoPrice}</span>
                    </p>
                    <button>
                      <i className="fa fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Produk */}
          <h1 className="product-title">MeowBuck's Menu</h1>
          <div id="product-list" className="product-list">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img
                  src={product.img}
                  alt={product.name}
                  onClick={() => handleViewDetails(product)}
                  style={{ cursor: "pointer" }}
                />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button>
                    <i className="fa fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            ))}
            {/* footer */}
           <footer className="footer">
           <p>&copy; 2024 MeowBuck's. All rights reserved.</p>
           <div className="social-media">
           <a href="#">MeowFood</a>
           <a href="#">Instameow</a>
        </div>
      </footer>
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
