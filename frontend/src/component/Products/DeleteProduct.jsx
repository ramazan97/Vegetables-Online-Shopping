import React from "react";
import { useUrunContext } from "../../hooks/useUrunContext";
import "moment/locale/tr";
import { ImBin } from "react-icons/im";
// import axios from "axios";
const DeleteProduct = () => {
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

  // const handleClick = async ({ data }) => {
  //   try {
  //     const response = await axios.delete(`/api/shopcart/${data._id}`);

  //     if (response.ok) {
  //       dispatch({ type: "URUN_SIL", payload: response.data }); // Updated payload
  //     } else {
  //       console.error("Error deleting product:", response.statusText);
  //       // Handle error gracefully, e.g., display an error message to the user
  //     }
  //   } catch (error) {
  //     console.error("Error deleting product:", error.message);
  //     // Handle error gracefully, e.g., display an error message to the user
  //   }
  // };

  return (
    <form className="flex flex-col min-h-screen p-20 gap-x-20 items-center justify-center  ">
      <strong className="text-2xl mb-9 text-gray-800 ">Ürün Sil</strong>
      <div className="flex-grow">
        <div className=" flex-row justify-center items-start gap-5 grid grid-cols-1 md:grid-cols-3 xl:md:grid-cols-4  py-5">
          {urunler &&
            urunler.length > 0 &&
            urunler.map((data) => (
              <div class="w-[250px]  rounded overflow-hidden shadow-lg shadow-black ">
                <div class="px-6 py-4 flex items-center flex-col">
                  <img
                    className="py-3  size-48 "
                    src={data.resim}
                    alt="tometo"
                  />
                  <div class="font-bold text-3xl mb-2 ">
                    $<span className="text-yellow-500 ">{data.ucret}</span>
                  </div>
                  <div class="font-bold text-3xl mb-2">{data.baslik}</div>
                  <div class="font-bold text-3xl mb-2">
                    {data.kilogram}
                    <span className="text-yellow-500">Kg</span>
                  </div>
                  <p class="text-gray-700 text-center ">{data.aciklama}</p>
                </div>
                {/* sil butonu */}
                <div className="w-full  flex items-center justify-center mt-10">
                  <span
                    className="text-gray-800 hover:text-red-500 transition-all duration-500 p-2 cursor-pointer"
                    onClick={() => handleClick({ data })}
                  >
                    <ImBin size={50} />
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </form>
  );
};

export default DeleteProduct;
