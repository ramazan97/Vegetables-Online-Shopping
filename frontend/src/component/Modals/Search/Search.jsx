import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Search = () => {
  const [searchResults, setSearchResults] = useState(null);

  const handleCloseModal = () => {
    setSearchResults(null);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    const productName = e.target[0].value;

    if (productName.trim().length === 0) {
      toast.warning("Boş karakter arayamazsınız!");
      return;
    }

    try {
      const res = await fetch(`/api/shopcart/search/${productName.trim()}`);

      if (!res.ok) {
        toast.error("Ürün getirme hatası!");
        return;
      }
      const data = await res.json();

      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal w-1/2 h-2/3">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={handleCloseModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-6 top-6"
            >
              <RxCross1 size={25} />
            </button>
          </form>

          <div>
            <h3 className="font-bold text-4xl p-4 m-4 ">Ürün Ara</h3>
            <p className="px-6 text-xl text-gray-600 ">
              Aradığınız ürünleri görmek için yazmaya başlayın.
            </p>
          </div>

          <div className="flex flex-auto m-5 py-5 border-b border-t gap-y-10 border-gray-300 ">
            <form
              onSubmit={handleSearch}
              className="relative flex items-start w-full"
            >
              <HiOutlineSearch
                fontSize={25}
                className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
              />
              <input
                type="text"
                placeholder="Search..."
                className="text-xl focus:outline-none active:outline-none border w-full  border-gray-300  h-16 pl-11 pr-4 rounded-sm"
              />
            </form>
          </div>
          <div className="flex-auto m-5  border  border-gray-200 ">
            <div className="border  pb-4 ">
              <h3 className="text-2xl pt-4 font-bold">Ürün Sonuçları</h3>
            </div>
            <div className="grid grid-cols-2 ">
              {!searchResults && <p>Ürün Ara...</p>}
              {searchResults?.length === 0 && (
                <p>😔Aradığınız Ürün Bulunamadı😔</p>
              )}
              {searchResults?.length > 0 &&
                searchResults?.map((resultItem) => (
                  <Link
                    to={`/cart/${resultItem._id}`}
                    key={resultItem._id}
                    className=""
                  >
                    <div className="flex items-center flex-row border border-gray-200 ">
                      <div className="p-5">
                        <img src={resultItem.img[0]} alt="" />
                      </div>
                      <div className="">
                        <p className="text-2xl pb-3">{resultItem.name}</p>
                        <p className="text-red-500">
                          ${resultItem.price}
                          {/* ${resultItem.price.current.toFixed(2)} */}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Search;
