import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import { ProductContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";
const Reviews = ({ selectedProduct }) => {
  const [users, setUsers] = useState([]);
  const params = useParams();
  const productId = params.id;
  const thisReview = [];

  const { singleProduct, setSingleProduct } = useContext(ProductContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`/api/kullanici`);

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          toast.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchUsers();
  }, []);

  // const edProduct = Array.isArray(singleProduct)
  //   ? singleProduct.find((product) => product._id === productId)
  //   : singleProduct;

  if (selectedProduct.reviews) {
    selectedProduct.reviews.forEach((review) => {
      const matchingUsers = users?.filter((user) => user._id === review.user);
      matchingUsers.forEach((matchingUser) => {
        thisReview.push({
          review: review,
          user: matchingUser,
        });
      });
    });
  }
  const user = localStorage.getItem("kullanici")
    ? JSON.parse(localStorage.getItem("kullanici"))
    : null;

  return (
    <div>
      <>
        {selectedProduct.reviews?.length > 0 ? (
          <>
            <div className="pt-5">
              <ol className="">
                {selectedProduct.reviews.map((item, index) => (
                  <ReviewItem
                    key={index}
                    review={item.review}
                    user={item.user}
                    text={item.text}
                    createdAt={item.createdAt}
                    rating={item.rating}
                  />
                ))}
              </ol>
            </div>
          </>
        ) : (
          <h3>Hiç yorum yok...</h3>
        )}

        {user === null ? (
          ""
        ) : (
          <div className="pt-10 pb-5">
            <h2>Yorum ekle</h2>
            <ReviewForm
              singleProduct={singleProduct}
              setSingleProduct={setSingleProduct}
            />
          </div>
        )}
      </>
    </div>
  );
};

export default Reviews;
