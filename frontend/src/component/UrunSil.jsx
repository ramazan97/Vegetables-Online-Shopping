import React, { useState } from "react";
import Button from "./Button";
import { useUrunContext } from "../hooks/useUrunContext";
import Cart from "./Cart";
import moment from "moment";
import "moment/locale/tr";
import { useAuthContext } from "../hooks/useAuthContext";
const UrunSil = () => {
  const { urunler, dispatch } = useUrunContext();

  // kullanıcının varlığını sorguladık kulanıcı varsa yap dedik gerek olmya bilir sadece nasıl uygulandığını göstermek için ekledim

  // const { kullanici } = useAuthContext();
  const handleClick = async ({ data }) => {
    // kullanıcının varlığını sorguladık kulanıcı varsa yap dedik gerek olmya bilir sadece nasıl uygulandığını göstermek için ekledim
    // if (!kullanici) {
    //   return;
    // }

    const response = await fetch("/api/shopcart/" + data._id, {
      method: "DELETE",
      // kullanıcının varlığını sorguladık kulanıcı varsa yap dedik gerek olmya bilir sadece nasıl uygulandığını göstermek için ekledim

      // headers: {
      //   Authorization: `Bearer ${kullanici.token}`,
      // },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "URUN_SIL", payload: json });
    }
  };

  return (
    <form className="">
      <h3>Ürün Sil</h3>
      <div>
        <div className="flex flex-row justify-center items-center gap-5">
          {urunler &&
            urunler.length > 0 &&
            urunler.map((data) => (
              <div>
                <div>
                  {" "}
                  <span
                    className="bg-red-500 p-2 cursor-pointer"
                    onClick={() => handleClick({ data })}
                  >
                    X
                  </span>
                </div>
                <div>
                  <Cart key={data._id} data={data} />
                </div>
                <div> {moment(new Date(data.createdAt)).fromNow()}</div>
              </div>
            ))}
        </div>
      </div>
      {/* <Button name={`Ekle`} /> */}
    </form>
  );
};

export default UrunSil;
