import React from 'react';
import "font-awesome/css/font-awesome.min.css";

function ProductList({ products, handleViewDetails }) {
  return (
    <div id="product" className="product">
      <h1 className='product-title'>MeowBuck's Menu</h1>
      <div className='product-list'>
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
            <button onClick={() => handleViewDetails(product)}
            style={{ cursor: "pointer" }}>
              <i className="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ProductList;
