import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CiStar } from "react-icons/ci";
import Button from "../component/Buttons/Button";
import { useParams } from "react-router-dom";
const ReviewForm = ({ setSingleProduct, singleProduct }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
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

    let reviews = singleProduct.reviews;
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

    // console.log(formData, "formdata");

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
  // console.log(singleProduct._id, "singleProduct._id");
  return (
    <form
      className="flex flex-col gap-3 mb-[550px] md:mb-[450px] "
      onSubmit={handleSubmit}
    >
      <p className="text-[14px]">
        Your email address will not be published. Required fields are marked
        <span className="text-red-500">*</span>
      </p>
      <div className="text-yellow-500">
        <label>
          Your rating
          <span className="text-red-500">*</span>
        </label>
        {/* yıldız kısmı */}
        <div className=" gap-x-3 flex flex-row">
          <Link
            href="#"
            className={`text-gray-500  flex flex-row ${
              rating === 1 && "hover:text-yellow-500"
            }`}
            onClick={(e) => handleRatingChange(e, 1)}
          >
            <CiStar size={15} />
          </Link>
          <Link
            href="#"
            className={`text-gray-500 flex flex-row ${
              rating === 2 && "hover:text-yellow-500"
            }`}
            onClick={(e) => handleRatingChange(e, 2)}
          >
            <CiStar size={15} />
            <CiStar size={15} />
          </Link>
          <Link
            href="#"
            className={`text-gray-500 flex flex-row ${
              rating === 3 && "hover:text-yellow-500"
            }`}
            onClick={(e) => handleRatingChange(e, 3)}
          >
            <CiStar size={15} />
            <CiStar size={15} />
            <CiStar size={15} />
          </Link>
          <Link
            href="#"
            className={`text-gray-500 flex flex-row ${
              rating === 4 && "hover:text-yellow-500"
            }`}
            onClick={(e) => handleRatingChange(e, 4)}
          >
            <CiStar size={15} />
            <CiStar size={15} />
            <CiStar size={15} />
            <CiStar size={15} />
          </Link>
          <Link
            href="#"
            className={`text-gray-500 flex flex-row ${
              rating === 5 && "hover:text-yellow-500"
            }`}
            onClick={(e) => handleRatingChange(e, 5)}
          >
            <CiStar size={15} />
            <CiStar size={15} />
            <CiStar size={15} />
            <CiStar size={15} />
            <CiStar size={15} />
          </Link>
        </div>
      </div>
      <div className=" flex flex-col text-sm gap-x-1">
        <label htmlFor="" className="text-yellow-500">
          Your review
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
          Save my name, email, and website in this browser for the next time I
          comment.
          <span className="">*</span>
        </label>
      </div>
      <div className="">
        <Button name="Gönder" />
        {/* <input type="submit" className="btn submit" /> */}
      </div>
    </form>
  );
};

export default ReviewForm;
