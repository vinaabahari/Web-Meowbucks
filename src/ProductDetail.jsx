import React from "react";
import styles from "./ProductDetail.module.css";
import "./ProductDetail.css";

const ProductDetail = ({ product}) => {
  const inlineStyles = {
    productInfo: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "20px",
    },
    productPrice: {
      fontSize: "1.5rem",
      color: "#920000",
      margin: "10px 0",
    },
    addToCartButton: {
      backgroundColor: "#006b3f",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    orderNowButton: {
      backgroundColor: "#920000",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <div className="header">
        <div className="logo">
              <img
                src="asset/logo.png"
                alt="MeowBuck's Logo"
                style={{ width: "80px", height: "80px" }}
              />
            </div>
        <nav className="nav">
              <a href="home"> Back </a>
            </nav>
      </div>
      <div className="product-detail">
        <div className="product-image">
          <img src={product.img} alt={product.name}/>
        </div>
        <div className={styles.productInfo}>
          <h2 className="productTitle">{product.name}</h2>
          <p style={inlineStyles.productPrice}>${product.price}</p>
          <div className="product-rating">
          <span>⭐⭐⭐⭐⭐</span>
          </div>
          <div className="product-size">
            <label>Size: </label>
            <select>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="jumbo">Large</option>
            </select>
          </div>
          <div className="product-quantity">
            <label>Jumlah: </label>
            <input type="number" min="1" defaultValue="1" />
          </div>
          <div className="product-buttons">
            <button style={inlineStyles.addToCartButton}>
              Tambah ke Keranjang
            </button>
            <button className="orderNow" style={inlineStyles.orderNowButton}>Pesan</button>
          </div>
          <div className="product-description">
            <h2>Deskripsi Produk</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
