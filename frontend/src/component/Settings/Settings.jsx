import React, { useEffect, useState } from "react";
import Sidebar from "../Admin Panel Component/shared/Sidebar";
import { toast } from "react-toastify";
import Button from "../Buttons/Button";

const Settings = () => {
  const [ setKullanici] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [setUserData] = useState();
  const [password, setPassword] = useState();

  const user = localStorage.getItem("kullanici")
    ? JSON.parse(localStorage.getItem("kullanici"))
    : null;


  const userEmail = user.email;

  useEffect(() => {
    const fetchSingleCategory = async () => {
      try {
        const response = await fetch(`/api/kullanici`);
        const data = await response.json();
        setKullanici(data);
        if (!response.ok) {
          throw new Error("kullanici verilerini getirme hatası");
        }
      } catch (error) {
        console.log("kullanici verilerini getirme hatası:", error);
      } finally {
      }
    };
    fetchSingleCategory();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/kullanici/${userEmail}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        const updatedData = await response.json();
        setUserData(updatedData); // Güncellenmiş veriyi state'e ata
        toast.success("Ürün başarıyla güncellendi.");

        // Input alanlarını temizle
        setUsername("");
        setEmail();
        setPassword();
      } else {
        toast.error("kullanici verilerini güncellenirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("kullanici verilerini güncelleme hatası:", error);
    } finally {
    }
  };

  return (
    <Sidebar>
      <div className="flex flex-col min-h-screen p-20 gap-x-20 items-center justify-center ">
        <div className="flex-grow">
          <form
            className=" flex flex-col gap-y-5 items-center justify-center my-20"
            onSubmit={handleSubmit}
          >
            <strong className="text-gray-800 text-2xl">Profil Güncelle</strong>
            <div className="flex flex-col gap-y-5">
              {/* kupon codu */}
              <div className=" w-80 flex items-center justify-between ">
                <label>İsim</label>
                <input
                  className={"border border-gray-900  rounded-l-md h-[41px]  "}
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username || setUserData?.username}
                  placeholder="Kullanıcı ismi"
                />
              </div>
              <div className=" w-80 flex items-center justify-between ">
                <label>Email</label>
                <input
                  className={"border border-gray-900  rounded-l-md h-[41px]  "}
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email || setUserData?.email}
                  placeholder="Kullanıcı Email"
                />
              </div>
              <div className=" w-80 flex items-center justify-between ">
                <label>Parola</label>
                <input
                  className={"border border-gray-900  rounded-l-md h-[41px]  "}
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password || setUserData?.password}
                  placeholder="Kullanıcı ismi"
                />
              </div>
              {/* kupon oranı */}
              {/* <div className=" w-80 flex items-center justify-between ">
                <label>Resim</label>
                <input
                  className={"border border-gray-900  rounded-l-md h-[41px]  "}
                  onChange={(e) => setDiscountPercent(e.target.value)}
                  value={discountPercent || couponData2?.discountPercent}
                  placeholder="Ürün resmi"
                />
              </div> */}
            </div>
            <Button name={`Güncelle`} />
          </form>
        </div>
      </div>
    </Sidebar>
  );
};

export default Settings;
