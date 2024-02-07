import React, { useEffect, useState } from "react";
import Cart from "../component/Cart";
import { useUrunContext } from "../hooks/useUrunContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Shop = () => {
  // const [shopCart, setShopCart] = useState(null);
  const { urunler, dispatch } = useUrunContext(null);
  const { kullanici } = useAuthContext();

  useEffect(() => {
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

    // fetchUrunler();
    if (kullanici) {
      fetchUrunler();
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5 ">
        {urunler &&
          urunler.map((data) => (
            <div>
              <Cart key={data._id} data={data} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shop;
