import React, { useState } from "react";
import Button from "./Button";
import { useUrunContext } from "../hooks/useUrunContext";
import Cart from "./Cart";
import moment from "moment";
import "moment/locale/tr";
const UrunSil = () => {
  const { urunler, dispatch } = useUrunContext();

  const handleClick = async ({ data }) => {
    const response = await fetch("/api/shopcart/" + data._id, {
      method: "DELETE",
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
