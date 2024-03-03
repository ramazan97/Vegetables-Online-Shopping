import React, { useContext, useEffect } from "react";
import { useUrunContext } from "../hooks/useUrunContext";
import { useAuthContext } from "../hooks/useAuthContext";
import Card from "../component/Cards/Card";
import { ProductContext } from "../contexts/ProductContext";

const Shop = () => {
  // const [shopCart, setShopCart] = useState(null);
  const { products } = useContext(ProductContext);
  const { dispatch } = useUrunContext(null);
  const { kullanici } = useAuthContext();
  useEffect(() => {
    if (!kullanici) {
      return; // Kullanıcı yoksa işlemi durdur
    }
    try {
      const fetchUrunler = async () => {
        // const response = await fetch("/api/shopcart");

        // biz buradaki işlemleri kullanıcı sepetine ürün eklemesi için yapacağız. her kullanıcı kendi sepetindeki ürünü görmesini sağlayacağız

        const response = await fetch("/api/shopcart", {
          headers: {
            Authorization: `Bearer ${kullanici.token}`,
          },
        });

        const json = await response.json();
        if (response.ok) {
          // setShopCart(json);
          dispatch({ type: "URUN_DOLDUR", payload: json });
        }
      };

      fetchUrunler();
      if (kullanici) {
        fetchUrunler();
      }
    } catch (error) {
      console.log(
        "shop.jsx içerisinde ürünlere get işlemi atarken hata oluştır.",
        error
      );
    }
  }, [dispatch, kullanici]);


  return (
    <div id="shop" className="flex flex-col items-center mt-16 gap-y-5">
      {/* logo */}
      <div>
        {" "}
        <img src="./img-2.png" alt="corrot" />
      </div>
      {/* title */}
      <div>
        <p className="text-4xl font-bold">Our Vegatables</p>
      </div>
      {/* descprtion */}
      <div>
        <p>Reader will be distracted by the readable content of a</p>
      </div>
      {/* cart */}

      <div className="grid grid-cols-1 md:grid-cols-3 xl:md:grid-cols-4 gap-4 py-5 ">
        {products &&
          products.map((product, index) => (
            <div key={index}>
              <Card product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shop;
