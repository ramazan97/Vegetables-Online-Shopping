import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const UpdateProduct = () => {
  const [setProductData] = useState();
  const params = useParams();
  const productId = params.id;
  const [productData2, setProductData2] = useState();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [kilogram, setKilogram] = useState();
  const [price, setPrice] = useState();
  const [bosAlanlar] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchSingleCategory = async () => {
      try {
        const response = await fetch(`/api/shopcart/${productId}`);
        const data = await response.json();
        setProductData2(data);
        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      } finally {
      }
    };
    fetchSingleCategory();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgLinks = img.split("\n").map((link) => link.trim());
    try {
      const response = await fetch(`/api/shopcart/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          img: imgLinks,
          kilogram: kilogram,
          price: price,
          description: description,
        }),
      });

      toast.success("Ürün başarıyla güncellendi.");
      if (response.ok) {
        const updatedData = await response.json();
        setProductData(updatedData);
   
        setName("");
        setImg("");
        setKilogram("");
        setPrice("");
        setDescription("");
      } else {
        toast.error("Ürün güncellenirken bir hata oluştu.");
      }
    } catch (error) {
      console.error("Ürün güncelleme hatası:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-20 gap-x-20 items-center justify-center ">
      <div className="flex-grow">
        <form
          className=" flex flex-col gap-y-5 items-center justify-center my-20"
          onSubmit={handleSubmit}
        >
          <strong className="text-gray-800 text-2xl">Ürünü Güncelle</strong>
          <div className="flex flex-col gap-y-5">
            {/* baslik */}
            <div className=" w-80 flex items-center justify-between ">
              <label>Baslik</label>
              <input
                className={"border border-gray-900  rounded-l-md h-[41px]  "}
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name || productData2?.name}
                placeholder="Ürün ismi"
              />
            </div>
            {/* resim */}
            <div className=" w-80 flex items-center justify-between ">
              <label>Resim</label>
              <textarea
                className={
                  bosAlanlar
                    ? "border border-gray-900  rounded-l-md  h-32 "
                    : "border border-gray-900  rounded-l-md   border-gray-900-red-500  h-32 "
                }
                onChange={(e) => setImg(e.target.value)}
                value={img || productData2?.img}
                type="text"
                placeholder="Ürün resmi"
              />
            </div>

            <div className=" w-80 flex items-center justify-between ">
              <label>Kilogram</label>
              <input
                className={"border border-gray-900  rounded-l-md h-[41px]  "}
                onChange={(e) => setKilogram(e.target.value)}
                value={kilogram || productData2?.kilogram}
                placeholder="Ürün kilosu"
              />
            </div>

            {/* pirce */}
            <div className=" w-80 flex items-center justify-between ">
              <label>Üçret</label>
              <input
                className={"border border-gray-900  rounded-l-md h-[41px]  "}
                onChange={(e) => setPrice(e.target.value)}
                value={price || productData2?.price}
                placeholder="Ürün fiyatı"
              />
            </div>

            {/* aciklama */}
            <div className=" w-80 flex items-center justify-between ">
              <div>
                <label>Aciklama</label>
              </div>
              <div>
                <input
                  className={"border border-gray-900  rounded-l-md h-[41px]  "}
                  onChange={(e) => setDescription(e.target.value)}
                  value={description || productData2?.description}
                  placeholder="Ürün aciklaması"
                />
              </div>
            </div>
          </div>
          <Button name={`Güncelle`} />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
