import React from "react";
import { useUrunContext } from "../hooks/useUrunContext";

const UrunStock = () => {
  // const [shopCart, setShopCart] = useState(null);
  const { urunler } = useUrunContext(null);

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
                Ürün ismi
              </th>
              <th scope="col" class="px-6 py-3">
                Stok
              </th>

              <th scope="col" class="px-6 py-3">
                Ucret
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Durum</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {urunler &&
              urunler.map((urun) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {urun._id}
                  </th>
                  <td class="px-6 py-4">{urun.baslik}</td>
                  <td class="px-6 py-4">{urun.kilogram}</td>
                  <td class="px-6 py-4">${urun.ucret}</td>
                  <td class="px-6 py-4 text-right">
                    <div
                      className={
                        urun.kilogram < 3 ? "text-red-500" : "text-green-500"
                      }
                    >
                      {urun.kilogram < 3 ? `Stokda kalmadı` : `Stakda Mevcut`}
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

export default UrunStock;
