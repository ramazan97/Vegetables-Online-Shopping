import React, { useContext } from "react";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { CouponContext } from "../../contexts/CouponContext";

const Coupon = () => {
  const { coupons, setCoupons } = useContext(CouponContext);
  const  deleteCoupon = async (id) => {
    try {
      const response = await fetch(`/api/coupon/${id}`, {
        // Doğru API endpoint'i
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        toast.success("Ürün başarıyla silindi"); // Başarı mesajı
        // Kullanıcı listesini güncellemek için gerekli işlemleri burada yapın
        // const data = kullanici;
        setCoupons(coupons);
      } else {
        toast.error("Kullanıcı silme başarısız"); // Hata mesajı
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
                Kupon kodu
              </th>
              <th scope="col" class="px-6 py-3">
                Kupon oranı
              </th>
            </tr>
          </thead>
          <tbody>
            {coupons &&
              coupons.map((coupon) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="px-6 py-4">{coupon.code}</td>
                  <td class="px-6 py-4">{coupon.discountPercent}</td>

                  <td class="px-6 py-4 text-right flex items-center justify-center gap-5">
                    {/* reddet butonuna basıldığında silsin bu şekilde reddetsin*/}
                    <div className={"text-white"}>
                      <button
                        onClick={() => deleteCoupon(coupon._id)}
                        className="bg-red-500 p-3 rounded-lg hover:bg-red-400 transition duration-500"
                      >
                        Sil
                      </button>
                    </div>
                    {/* reddet butonuna basıldığında silsin bu şekilde reddetsin*/}
                    <div className={"text-white"}>
                      <Link
                        to={`/admin/adminupdatecoupon/${coupon._id}`}
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

export default Coupon;
