import React, { useState } from "react";
import Header from "./header.jsx";
import Banner from "./banner.jsx";
import PromoSection from "./promo.jsx";
import ProductList from "./product.jsx";
import Footer from "./footer.jsx";
import ProductDetail from "./ProductDetail";


function Container() {
    const [products] = useState([
        {
          id: 1,
          name: "Oreo Frappuccino 🥤",
          price: 5.5,
          img: "asset/1.png",
          description:
            "Minuman dingin berbasis frappuccino dengan rasa Oreo yang khas, dibuat dari campuran susu, es, dan biskuit Oreo yang dihancurkan. Topping whipped cream dan serpihan Oreo menambah sensasi nikmat, menjadikannya pilihan sempurna untuk hari yang panas.",
        },
        {
          id: 2,
          name: "Berry Frappe 🍓",
          price: 3.0,
          img: "asset/2.png",
          description:
            "Minuman segar berbasis stroberi alami dengan rasa manis dan asam yang seimbang. Dibuat menggunakan buah stroberi pilihan yang di-blend sempurna dan dilengkapi topping whipped cream serta saus stroberi yang cantik.",
        },
        {
          id: 3,
          name: "Matcha Latte 🍵",
          price: 6.2,
          img: "asset/3.png",
          description:
            "Minuman latte dengan matcha premium dari Jepang, memberikan rasa lembut dan aroma teh hijau yang menenangkan. Dipadukan dengan susu segar untuk menciptakan keseimbangan rasa yang sempurna.",
        },
        {
          id: 4,
          name: "Caramel Frappe ☕",
          price: 5.0,
          img: "asset/4.png",
          description:
            "Kopi espresso yang dipadukan dengan susu hangat dan sirup karamel, menghasilkan rasa manis dan aroma khas karamel. Topping saus karamel melengkapi cita rasa yang kaya, ideal untuk menemani waktu santai.",
        },
        {
          id: 5,
          name: "Croissant 🥐",
          price: 1.5,
          img: "asset/7.png",
          description:
            "Pastry khas Prancis dengan tekstur renyah di luar dan lembut di dalam. Dibuat dengan mentega berkualitas untuk memberikan rasa yang kaya dan buttery, sempurna sebagai camilan atau teman minum kopi.",
        },
        {
          id: 6,
          name: "Egg Toast 🍳",
          price: 2.0,
          img: "asset/8.png",
          description:
            "Roti panggang yang dilapisi telur orak-arik lembut dan mentega, memberikan rasa gurih yang nikmat. Cocok untuk sarapan atau camilan di sela kesibukan.",
        },
        {
          id: 7,
          name: "Strawberry Pie 🥧",
          price: 3.2,
          img: "asset/9.png",
          description:
            "Pie dengan isian stroberi segar yang manis dan asam, dilapisi kulit pie yang renyah. Nikmati rasa buah yang segar di setiap gigitan, cocok untuk pencinta dessert.",
        },
        {
          id: 8,
          name: "Cinnamon Roll 🥯",
          price: 4.0,
          img: "asset/10.png",
          description:
            "Roti gulung manis dengan rasa kayu manis yang khas, dilengkapi dengan topping gula glaze yang menggoda. Cocok untuk memanjakan diri di pagi atau sore hari.",
        },
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
    <div className="container">
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} />
      ) : (
        <>
          <Header />
          <Banner />
          <PromoSection promos={promos} />
          <ProductList products={products} handleViewDetails={handleViewDetails} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Container;
