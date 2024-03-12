import React, { useCallback, useContext } from "react";

import { KullaniciContext } from "../../contexts/KullaniciContext";
import { toast } from "react-toastify";
import Sidebar from "../Admin Panel Component/shared/Sidebar";

const Customers = () => {
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

  const kullaniciOnayla = useCallback(async (kullaniciiId) => {
    try {
      const res = await fetch(`/api/kullanici/status/${kullaniciiId}`, {
        method: "PUT",
        body: JSON.stringify({ status: "Onaylandı" }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        toast.error("Status Güncellenemedi.");
        return;
      }

     
      toast.success("Status başarıyla güncellendi.");
    } catch (error) {
      console.log(error);
      toast.error("Status Güncellenemedi.");
    }
  }, []);
  const kullaniciReddet = async (kullaniciiId) => {
    try {
      const res = await fetch(`/api/kullanici/status/${kullaniciiId}`, {
        method: "PUT",
        body: JSON.stringify({ status: "Red Edildi" }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        toast.error("Status Güncellenemedi.");
        return;
      }


      toast.success("Status başarıyla güncellendi.");
    } catch (error) {
      console.log(error);
      toast.error("Status Güncellenemedi.");
    }
  };

  return (
    <Sidebar>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg md:mx-20 lg:mx-56 my-32">
        <h3 className="text-3xl">{new Date().toLocaleTimeString()} </h3>
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
            {kullanici.map((kllnc) => (
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

                <td
                  class={
                    kllnc.status === "Onay Bekliyor"
                      ? "text-orange-400"
                      : kllnc.status === "Red Edildi"
                      ? "text-red-700"
                      : "text-green-500"
                  }
                >
                  {kllnc.status}
                </td>

                <td class="px-6 py-4 text-right flex items-center justify-center gap-5">
                  <div
                    onClick={() => kullaniciOnayla(kllnc._id)}
                    className={"text-white"}
                  >
                    <button className="bg-green-500 p-3 rounded-lg hover:bg-green-400 transition duration-500 ">
                      Onayla
                    </button>
                  </div>

                  <div className={"text-white"}>
                    <button
                      onClick={() => kullaniciReddet(kllnc._id)}
                      className="bg-red-500 p-3 rounded-lg hover:bg-red-400 transition duration-500"
                    >
                      Reddet
                    </button>
                  </div>

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
