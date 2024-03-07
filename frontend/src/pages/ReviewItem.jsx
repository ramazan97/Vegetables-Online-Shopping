import React, { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { LiaStarSolid } from "react-icons/lia";

const ReviewItem = ({ text, createdAt, rating }) => {
  // const { review, user } = reviewItem;
  // const { text, createdAt, rating } = review;
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(createdAt).toLocaleDateString(
    "tr-TR",
    options
  );
  // console.log(reviewItem, `reviewItem`);

  const user = localStorage.getItem("kullanici")
    ? JSON.parse(localStorage.getItem("kullanici"))
    : null;

  return (
    <li>
      <div className="pb-3 flex items-stretch gap-x-3 ">
        <div>
          {user == null ? (
            // <img src={user?.avatar} alt="" width={60} />
            <FaRegCircleUser size={60} />
          ) : (
            <FaRegCircleUser size={60} />
          )}
        </div>
        <div className="">
          <ul className="flex items-center flex-row text-yellow-500">
            {Array.from({ length: rating }, (_, index) => {
              return (
                <li key={index}>
                  <LiaStarSolid size={25} />
                </li>
              );
            })}
          </ul>
          <div>
            <strong> {user === null ? "*****" : user?.email}</strong>

            <span> - </span>
            <time>{formattedDate}</time>
          </div>
          <div className="text-gray-800 pt-5">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
