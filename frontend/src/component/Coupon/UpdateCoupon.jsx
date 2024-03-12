import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../Buttons/Button";

const UpdateCoupon = () => {
  const params = useParams();
  const couponId = params.id;
  const [ setCouponData] = useState();
  //   const [productData2, setProductData2] = useState();
  const [couponData2, setCouponData2] = useState();

  const [code, setCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState();

  useEffect(() => {
    const fetchSingleCategory = async () => {
      try {
        const response = await fetch(`/api/coupon/${couponId}`);
        const data = await response.json();
        setCouponData2(data);
        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      } finally {
      }
    };
    fetchSingleCategory();
  }, [couponId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/coupon/${couponId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code,
          discountPercent,
        }),
      });

      if (response.ok) {
        const updatedData = await response.json();
        setCouponData(updatedData); // Güncellenmiş veriyi state'e ata
        toast.success("Ürün başarıyla güncellendi.");

        // Input alanlarını temizle
        setCode("");
        setDiscountPercent("");
      } else {
        toast.error("Ürün güncellenirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Ürün güncelleme hatası:", error);
    } finally {
    }
  };
  return (
    <div className="flex flex-col min-h-screen p-20 gap-x-20 items-center justify-center ">
      <div className="flex-grow">
        <form
          className=" flex flex-col gap-y-5 items-center justify-center my-20"
          onSubmit={handleSubmit}
        >
          <strong className="text-gray-800 text-2xl">Ürünü Güncelle</strong>
          <div className="flex flex-col gap-y-5">
            {/* kupon codu */}
            <div className=" w-80 flex items-center justify-between ">
              <label>Baslik</label>
              <input
                className={"border border-gray-900  rounded-l-md h-[41px]  "}
                type="text"
                onChange={(e) => setCode(e.target.value)}
                value={code || couponData2?.code}
                placeholder="Ürün ismi"
              />
            </div>
            {/* kupon oranı */}
            <div className=" w-80 flex items-center justify-between ">
              <label>Resim</label>
              <input
                className={"border border-gray-900  rounded-l-md h-[41px]  "}
                onChange={(e) => setDiscountPercent(e.target.value)}
                value={discountPercent || couponData2?.discountPercent}
                placeholder="Ürün resmi"
              />
            </div>
          </div>
          <Button name={`Ekle`} />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoupon;
