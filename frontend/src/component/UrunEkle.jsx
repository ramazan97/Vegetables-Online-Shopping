import React, { useState } from "react";
import Button from "./Button";
import { useUrunContext } from "../hooks/useUrunContext";
import { useAuthContext } from "../hooks/useAuthContext";

const UrunEkle = () => {
  const [resim, setResim] = useState("");
  const [ucret, setUcret] = useState("");
  // const [rating, setRating] = useState("");
  // const [rate, setRate] = useState("");
  // const [count, setCount] = useState("");
  const [baslik, setBaslik] = useState("");
  const [kilogram, setKilogram] = useState("");
  const [aciklama, setAciklama] = useState("");
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
      resim,
      ucret,
      baslik,
      kilogram,
      aciklama,
      // rating,
      // rate,
      // count,
    };

    const response = await fetch("http://localhost:3000/api/shopcart", {
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
    }
    if (response.ok) {
      setHata(null);
      setResim("");
      setUcret("");
      // setRating("");
      // setRate("");
      // setCount("");
      setBaslik("");
      setKilogram("");
      setAciklama("");
      setBosalanlar([]);
      dispatch({ type: "URUN_OLUSTUR", payload: json });
      // console.log(`yeni bir not eklendi`, json);
    }
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <h3>Yeni Bir Ürün Ekle</h3>
      <div>
        {/* resim */}
        <div>
          <label>Resim</label>
          <input
            className={
              bosAlanlar
                ? "border  rounded-l-md h-[41px]  "
                : "border  rounded-l-md h-[41px] border-red-500"
            }
            type="text"
            onChange={(e) => setResim(e.target.value)}
            value={resim}
          />
        </div>
        {/* ücret */}
        <div>
          <label>Üçret</label>
          <input
            className={
              bosAlanlar
                ? "border  rounded-l-md h-[41px]  "
                : "border  rounded-l-md h-[41px] border-red-500"
            }
            type="text"
            onChange={(e) => setUcret(e.target.value)}
            value={ucret}
          />
        </div>
        {/* baslik */}
        <div>
          <label>Baslik</label>
          <input
            className={
              bosAlanlar
                ? "border  rounded-l-md h-[41px]  "
                : "border  rounded-l-md h-[41px] border-red-500"
            }
            type="text"
            onChange={(e) => setBaslik(e.target.value)}
            value={baslik}
          />
        </div>
        {/* kilogram */}
        <div>
          <label>Kilogram</label>
          <input
            className={
              bosAlanlar
                ? "border  rounded-l-md h-[41px]  "
                : "border  rounded-l-md h-[41px] border-red-500"
            }
            type="text"
            onChange={(e) => setKilogram(e.target.value)}
            value={kilogram}
          />
        </div>
        {/* raitng */}
        {/* <div>
          <label>rating</label>
          <input
            className={
              bosAlanlar
                ? "border  rounded-l-md h-[41px]  "
                : "border  rounded-l-md h-[41px] border-red-500"
            }
            type="text"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
        </div> */}
        {/* rate */}
        {/* <div>
          <label>Rate</label>
          <input
            className={
              bosAlanlar
                ? "border  rounded-l-md h-[41px]  "
                : "border  rounded-l-md h-[41px] border-red-500"
            }
            type="text"
            onChange={(e) => setRate(e.target.value)}
            value={rate}
          />
        </div> */}
        {/* count */}
        {/* <div>
          <label>Count</label>
          <input
            className={
              bosAlanlar
                ? "border  rounded-l-md h-[41px]  "
                : "border  rounded-l-md h-[41px] border-red-500"
            }
            type="text"
            onChange={(e) => setCount(e.target.value)}
            value={count}
          />
        </div> */}
        {/* aciklama */}
        <div>
          <label>Aciklama</label>
          <input
            className={
              bosAlanlar
                ? "border  rounded-l-md h-[41px]  "
                : "border  rounded-l-md h-[41px] border-red-500"
            }
            type="text"
            onChange={(e) => setAciklama(e.target.value)}
            value={aciklama}
          />
        </div>
      </div>
      <Button name={`Ekle`} />
      {hata && <div className="text-red-500 text-2xl">{hata} </div>}
    </form>
  );
};

export default UrunEkle;
