import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import { ProductContext } from "../contexts/ProductContext";
const Reviews = ({ products, active }) => {
  const [users, setUsers] = useState([]);

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

  if (singleProduct.reviews) {
    singleProduct.reviews.forEach((review) => {
      const matchingUsers = users?.filter((user) => user._id === review.user);
      matchingUsers.forEach((matchingUser) => {
        thisReview.push({
          review: review,
          user: matchingUser,
        });
      });
    });
  }

  return (
    <div>
      <>
        {singleProduct.reviews?.length > 0 ? (
          <>
            <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
            <div className="comments">
              <ol className="comment-list">
                {singleProduct.reviews.map((item, index) => (
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

        <div className="pt-10 pb-5">
          <h2>Add a review</h2>
          <ReviewForm
            singleProduct={singleProduct}
            setSingleProduct={setSingleProduct}
          />
        </div>
      </>
    </div>
  );
};

export default Reviews;
