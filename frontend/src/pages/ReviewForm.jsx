import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LiaStarSolid } from "react-icons/lia";
import Button from "../component/Buttons/Button";
import { useParams } from "react-router-dom";

const ReviewForm = ({ setSingleProduct, singleProduct }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const user = localStorage.getItem("kullanici")
    ? JSON.parse(localStorage.getItem("kullanici"))
    : null;

  const params = useParams();
  const productId = params.id;

  const selectedProduct = Array.isArray(singleProduct)
    ? singleProduct.find((product) => product._id === productId)
    : singleProduct;

  setSingleProduct(selectedProduct);

  const handleRatingChange = (e, newRating) => {
    e.preventDefault();
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0) {
      return toast.warning("Puan seçiniz!");
    }

    let reviews = selectedProduct.reviews;
    let userId = null;
    if (user !== null) {
      userId = user.id || user._id;
    }

    if (!Array.isArray(reviews)) {
      reviews = [];
    }

    const formData = {
      reviews: [
        ...reviews,
        {
          text: review,
          rating: parseInt(rating),
          user: userId,
        },
      ],
    };

   

    try {
      const res = await fetch(`/api/shopcart/${selectedProduct._id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(res, "res");
      if (!res.ok) {
        toast.error("Bir şeyler yanlış gitti11111.");
        return;
      }
      const data = await res.json();
      console.log(data, "data");
      setSingleProduct(data);
      setReview("");
      setRating(0);
      toast.success("Yorum başarıyla eklendi.");
    } catch (error) {
      console.log(error);
      toast.error("Bir şeyler yanlış gitti22222.");
    }
  };

  return (
    <form
      className="flex flex-col gap-3 mb-[550px] md:mb-[450px] "
      onSubmit={handleSubmit}
    >
      <p className="text-[14px]">
        E-posta hesabınız yayımlanmayacak. Gerekli alanlar işaretlendi
        <span className="text-red-500">*</span>
      </p>
      <div className="text-yellow-500">
        <label>
          Oyunuz
          <span className="text-red-500">*</span>
        </label>
        {/* yıldız kısmı */}
        <div className=" gap-x-3 flex flex-row">
          <Link
            href="#"
            className={`text-gray-300 focus:text-yellow-500  flex flex-row ${
              rating === 1 && "hover:text-yellow-500"
            }`}
            onClick={(e) => handleRatingChange(e, 1)}
          >
            <LiaStarSolid className="" size={25} />
          </Link>
          <Link
            href="#"
            className={`text-gray-300 focus:text-yellow-500 flex flex-row ${
              rating === 2 && "hover:text-yellow-500"
            }`}
            onClick={(e) => handleRatingChange(e, 2)}
          >
            <LiaStarSolid className="" size={25} />
            <LiaStarSolid className="" size={25} />
          </Link>
          <Link
            href="#"
            className={`text-gray-300 focus:text-yellow-500  flex flex-row ${
              rating === 3 && "hover:text-yellow-500"
            }`}
            onClick={(e) => handleRatingChange(e, 3)}
          >
            <LiaStarSolid className="" size={25} />
            <LiaStarSolid className="" size={25} />
            <LiaStarSolid className="" size={25} />
          </Link>
          <Link
            href="#"
            className={`text-gray-300 focus:text-yellow-500 flex flex-row ${
              rating === 4 && "hover:text-yellow-500"
            }`}
            onClick={(e) => handleRatingChange(e, 4)}
          >
            <LiaStarSolid className="" size={25} />
            <LiaStarSolid className="" size={25} />
            <LiaStarSolid className="" size={25} />
            <LiaStarSolid className="" size={25} />
          </Link>
          <Link
            href="#"
            className={`text-gray-300 focus:text-yellow-500 flex flex-row ${
              rating === 5 && "hover:text-yellow-500"
            }`}
            onClick={(e) => handleRatingChange(e, 5)}
          >
            <LiaStarSolid className="" size={25} />
            <LiaStarSolid className="" size={25} />
            <LiaStarSolid className="" size={25} />
            <LiaStarSolid className="" size={25} />
            <LiaStarSolid className="" size={25} />
          </Link>
        </div>
      </div>
      <div className=" flex flex-col text-sm gap-x-1">
        <label htmlFor="" className="text-yellow-500 py-2">
          Yorumunuz
          <span className="text-red-500">*</span>
        </label>
        <textarea
          id="comment"
          cols="50"
          rows="10"
          onChange={(e) => setReview(e.target.value)}
          value={review}
          required
          className="border "
        ></textarea>
      </div>
      <div className="gap-x-2 flex items-center justify-center">
        <input id="cookes" type="checkbox" />
        <label htmlFor="cookies">
          Bir dahaki sefere kullandığımda kullanılmak üzere adımı, e-posta
          adresimi ve web site adresimi bu tarayıcıya kaydet.
          <span className="">*</span>
        </label>
      </div>
      <div className="">
        <Button name="Gönder" />
      </div>
    </form>
  );
};

export default ReviewForm;
