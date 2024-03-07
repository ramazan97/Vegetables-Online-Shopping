import React, { useContext } from "react";
import { useUrunContext } from "../../hooks/useUrunContext";
import { ProductContext } from "../../contexts/ProductContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductStock = () => {
  const { products, setProducts } = useContext(ProductContext);

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`/api/shopcart/${id}`, {

        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        toast.success("Ürün başarıyla silindi"); 

        setProducts(products);
      } else {
        toast.error("Kullanıcı silme başarısız"); 
        console.error("Kullanıcı silme hatası:", response.statusText);
      }
    } catch (error) {
      console.log("kullanıcı silme işlemi sırasında hata oluştu", error);
    }
  };

  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Ürün id
              </th>
              <th scope="col" class="px-6 py-3">
                Ürün Resmi
              </th>
              <th scope="col" class="px-6 py-3">
                Ürün ismi
              </th>
              <th scope="col" class="px-6 py-3">
                Stok
              </th>

              <th scope="col" class="px-6 py-3">
                Ucret
              </th>
              <th scope="col" class="px-6 py-3">
                Durum
              </th>
              <th scope="col" class="px-6 py-3">
                
              </th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((urun) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {urun._id}
                  </th>
                  <td class="mx-4 my-4 h-16 w-16    ">
                    <img
                      src={urun.img[0]}
                      className="h-16 w-20  "
                      alt="urun resmi"
                    />
                  </td>
                  <td class="px-6 py-4">{urun.name}</td>
                  <td class="px-6 py-4">{urun.kilogram}</td>
                  <td class="px-6 py-4">${urun.current}</td>

                  <td class="px-6 py-4 text-right">
                    <div
                      className={
                        (urun.kilogram < 3 ? "text-red-500" : "text-green-500",
                        "text-start")
                      }
                    >
                      {urun.kilogram < 3 ? `Stokda kalmadı` : `Stakda Mevcut`}
                    </div>
                  </td>
                  <td class="px-6 py-4 text-right flex items-center justify-center gap-5">
                    {/* reddet butonuna basıldığında silsin bu şekilde reddetsin*/}
                    <div className={"text-white"}>
                      <button
                        onClick={() => deleteProduct(urun._id)}
                        className="bg-red-500 p-3 rounded-lg hover:bg-red-400 transition duration-500"
                      >
                        Sil
                      </button>
                    </div>
                    {/* reddet butonuna basıldığında silsin bu şekilde reddetsin*/}
                    <div className={"text-white"}>
                      <Link
                        to={`/admin/adminupdateproduct/${urun._id}`}
                        className="bg-yellow-500 p-3 rounded-lg
                        hover:bg-yellow-400 transition duration-500"
                      >
                        Güncelle
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductStock;
