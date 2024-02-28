import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
const ReviewItem = ({ review, user, text, createdAt, rating }) => {
  // const { review, user } = reviewItem;
  // const { text, createdAt, rating } = review;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(createdAt).toLocaleDateString(
    "tr-TR",
    options
  );
  // console.log(reviewItem, `reviewItem`);

  return (
    <li>
      <div>
        {user !== null ? (
          <img src={user?.avatar} alt="" width={60} />
        ) : (
          <FaRegCircleUser />
        )}
      </div>
      <div>
        <ul>
          {Array.from({ length: rating }, (_, index) => {
            return (
              <li key={index}>
                <i className="bi bi-star-fill"></i>
              </li>
            );
          })}
        </ul>
        <div>
          <strong> {user?.username}</strong>
          <span> - </span>
          <time>{formattedDate}</time>
        </div>
        <div>
          <p>{text}</p>{" "}
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
