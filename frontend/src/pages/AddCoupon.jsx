import React, { useState } from "react";

import { toast } from "react-toastify";
import { useUrunContext } from "../hooks/useUrunContext";
import Button from "../component/Buttons/Button";
const AddCoupon = () => {

  const [code, setCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState();

  const [hata, setHata] = useState(null);
  const { dispatch } = useUrunContext();
  const [bosAlanlar, setBosalanlar] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const couponVerisi = {
        code,
        discountPercent,

    };
    console.log(code, "code");
    const response = await fetch("/api/coupon", {
      method: "POST",
      body: JSON.stringify(couponVerisi),
      headers: {
        "Content-Type": "application/json",

      },
    });

    const json = await response.json();
    if (!response.ok) {
      setHata(json.hata);
      setBosalanlar(json.bosAlanlar);
      toast.error(` ${json.hata} sı var `);
    }
    if (response.ok) {
      setHata(null);
      setCode("");
      setDiscountPercent();
      setBosalanlar([]);
      dispatch({ type: "URUN_OLUSTUR", payload: json });

      toast.success("yeni bir not eklendi!");
    }
  };

  return (
    <form
      className=" flex flex-col gap-y-5 items-center justify-center my-20"
      onSubmit={handleSubmit}
    >
      <strong className="text-gray-800 text-2xl">Yeni Bir Ürün Ekle</strong>
      <div className="flex flex-col gap-y-5">
        {/* baslik */}
        <div className=" w-80 flex items-center justify-between ">
          <label>Baslik</label>
          <input
            className={
              bosAlanlar
                ? "border border-gray-900  rounded-l-md h-[41px]  "
                : "border  rounded-l-md h-[41px] border-red-500"
            }
            type="text"
            placeholder="Ürün ismi"
            onChange={(e) => setCode(e.target.value)}
            value={code}
          />
        </div>
        {/* resim */}
        <div className=" w-80 flex items-center justify-between ">
          <label>Resim</label>
          <input
            className={
              bosAlanlar
                ? "border border-gray-900  rounded-l-md h-[41px]  "
                : "border border-gray-900  rounded-l-md h-[41px] border-gray-900-red-500"
            }
            type="text"
            placeholder="Ürün resmi"
            onChange={(e) => setDiscountPercent(e.target.value)}
            value={discountPercent}
          />
        </div>
        

      </div>
      <Button name={`Ekle`} />
      {hata && <div className="text-red-500 text-2xl">{hata} </div>}
    </form>
  );
};

export default AddCoupon;
