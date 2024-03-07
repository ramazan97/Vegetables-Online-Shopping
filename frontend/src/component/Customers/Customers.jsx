import React, { useCallback, useContext, useEffect, useState } from "react";

import { KullaniciContext } from "../../contexts/KullaniciContext";
import { toast } from "react-toastify";
import Sidebar from "../Admin Panel Component/shared/Sidebar";

const Customers = () => {
  // const [shopCart, setShopCart] = useState(null);

  const { kullanici, setKullanici } = useContext(KullaniciContext);

  const deleteKullanici = async (id) => {
    try {
      const response = await fetch(`/api/kullanici/${id}`, {
        // Doğru API endpoint'i
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        toast.success("Kullanıcı silindi"); // Başarı mesajı
        // Kullanıcı listesini güncellemek için gerekli işlemleri burada yapın
        // const data = kullanici;
        setKullanici(kullanici);
      } else {
        toast.error("Kullanıcı silme başarısız"); // Hata mesajı
        console.error("Kullanıcı silme hatası:", response.statusText);
      }
    } catch (error) {
      console.log("kullanıcı silme işlemi sırasında hata oluştu", error);
    }
  };

  return (
    <Sidebar>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg md:mx-20 lg:mx-56 my-32">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Muşteri id
              </th>
              <th scope="col" class="px-6 py-3">
                Kullanici
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Rol
              </th>
              <th scope="col" class="px-6 py-3">
                Onay
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Durum</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {kullanici &&
              kullanici.map((kllnc) => (
                <tr
                  key={kllnc._id}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {kllnc._id}
                  </th>
                  <td class="px-6 py-4">{kllnc.username}</td>
                  <td class="px-6 py-4">{kllnc.email}</td>
                  <td class="px-6 py-4">{kllnc.role}</td>
                  <td class={false ? "text-orange-500" : "text-green-500"}>
                    {false ? "Onay Bekliyor" : "onaylandi"}
                    {/* reddet butonuna basıldığında silsin bu şekilde reddetsin*/}
                  </td>
                  <td class="px-6 py-4 text-right flex items-center justify-center gap-5">
                    {/* onay button */}
                    <div className={"text-white"}>
                      <button className="bg-green-500 p-3 rounded-lg hover:bg-green-400 transition duration-500 ">
                        Onayla
                      </button>
                    </div>
                    {/* red button */}

                    {/* reddet butonuna basıldığında silsin bu şekilde reddetsin*/}
                    <div className={"text-white"}>
                      <button className="bg-red-500 p-3 rounded-lg hover:bg-red-400 transition duration-500">
                        Reddet
                      </button>
                    </div>
                    {/* reddet butonuna basıldığında silsin bu şekilde reddetsin*/}
                    <div className={"text-white"}>
                      <button
                        onClick={() => deleteKullanici(kllnc._id)}
                        className="bg-red-900 p-3 rounded-lg hover:bg-red-700 transition duration-500"
                      >
                        Sil
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Sidebar>
  );
};

export default Customers;
