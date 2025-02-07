import React from 'react';

function Banner() {
  return (
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
  );
}

export default Banner;
