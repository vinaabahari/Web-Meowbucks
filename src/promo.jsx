import React from 'react';
import "./ProductDetail.module.css";
import "./ProductDetail.css";

function PromoSection({ promos, handleViewPromo }) {
  return (
    <div className="promo" id="promo">
      <h1> MeowBuck's Sale </h1>
      <div className="promo-list">
        {promos.map((promo) => (
          <div className="promo-item" key={promo.id}>
            <img src={promo.img} alt={promo.name} />
            <div className="teksP">
              <h3>{promo.name}</h3>
              <div className="rating">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p>
                <s>${promo.originalPrice}</s>{" "}
                <span className="promo-price">${promo.promoPrice}</span>
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromoSection;
