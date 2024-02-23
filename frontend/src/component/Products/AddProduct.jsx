import React, { useState } from "react";
import Button from "../Buttons/Button";
import { useUrunContext } from "../../hooks/useUrunContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { toast } from "react-toastify";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [reviews, setReviews] = useState("");
  const [colors, setColors] = useState("");
  const [kilogram, setKilogram] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [hata, setHata] = useState(null);
  const { dispatch } = useUrunContext();
  const [bosAlanlar, setBosalanlar] = useState([]);


  // kullanıcının varlığını sorguladık kulanıcı varsa yap dedik gerek olmya bilir sadece nasıl uygulandığını göstermek için ekledim
  // const { kullanici } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // kullanıcının varlığını sorguladık kulanıcı varsa yap dedik gerek olmya bilir sadece nasıl uygulandığını göstermek için ekledim
    // if (!kullanici) {
    //   setHata("Giriş yapmalısınız");
    //   return;
    // }

    const urunVerisi = {
      name,
      img,
      reviews,
      colors,
      kilogram,
      price,
      category,
      description,
    };
console.log(name,"name");
    const response = await fetch("/api/shopcart", {
      method: "POST",
      body: JSON.stringify(urunVerisi),
      headers: {
        "Content-Type": "application/json",
        // kullanıcının varlığını sorguladık kulanıcı varsa yap dedik gerek olmya bilir sadece nasıl uygulandığını göstermek için ekledim
        // Authorization: `Bearer ${kullanici.token}`,
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
      setName("");
      setImg("");
      setReviews("");
      setColors("");
      setKilogram();
      setPrice();
      setCategory("");
      setDescription("");
      setBosalanlar([]);
      dispatch({ type: "URUN_OLUSTUR", payload: json });
      // console.log(`yeni bir not eklendi`, json);
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
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        {/* resim */}
        <div className=" w-80 flex items-center justify-between ">
          <label>Resim</label>
          <input
            className={
              bosAlanlar
                ? "border border-gray-900  rounded-l-md h-[41px]  "
                : "border border-gray-900  rounded-l-md h-[41px] border border-gray-900-red-500"
            }
            type="text"
            placeholder="Ürün resmi"
            onChange={(e) => setImg(e.target.value)}
            value={img}
          />
        </div>
        {/* colors */}
        {/* <div className=" w-80 flex items-center justify-between ">
          <label>Resim</label>
          <input
            className={
              bosAlanlar
                ? "border border-gray-900  rounded-l-md h-[41px]  "
                : "border border-gray-900  rounded-l-md h-[41px] border border-gray-900-red-500"
            }
            type="text"
            placeholder="Ürün resmi"
            onChange={(e) => setColors(e.target.value)}
            value={img}
          />
        </div> */}
        {/* kilogram */}
        <div className=" w-80 flex items-center justify-between ">
          <label>Kilogram</label>
          <input
            className={
              bosAlanlar
                ? "border border-gray-900  rounded-l-md h-[41px]  "
                : "border  rounded-l-md h-[41px] border-red-500"
            }
            type="text"
            placeholder="Ürün miktarı"
            onChange={(e) => setKilogram(e.target.value)}
            value={kilogram}
          />
        </div>

        {/* pirce */}
        <div className=" w-80 flex items-center justify-between ">
          <label>Üçret</label>
          <input
            className={
              bosAlanlar
                ? "border border-gray-900  rounded-l-md h-[41px]  "
                : "border  rounded-l-md h-[41px] border-red-500"
            }
            type="text"
            placeholder="Ürün fiyatı"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        {/* category */}

        {/* aciklama */}
        <div className=" w-80 flex items-center justify-between ">
          <div>
            <label>Aciklama</label>
          </div>
          <div>
            <input
              className={
                bosAlanlar
                  ? "border border-gray-900  rounded-l-md h-[41px]  "
                  : "border  rounded-l-md h-[41px] border-red-500"
              }
              type="text"
              placeholder="Ürün açıklaması"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
        </div>
      </div>
      <Button name={`Ekle`} />
      {hata && <div className="text-red-500 text-2xl">{hata} </div>}
    </form>
  );
};

export default AddProduct;
