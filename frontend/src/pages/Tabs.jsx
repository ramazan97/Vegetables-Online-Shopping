import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Reviews from "./Reviews";

const Tabs = ({ products }) => {
  const [activeTab, setActiveTab] = useState("desc");
  const params = useParams();
  const productId = params.id;

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };
  const { name, description, price, img } = products;
  console.log(products.description,"products");

  const selectedProduct = Array.isArray(products)
    ? products.find((product) => product._id === productId)
    : products;



  return (
    <div>
      <ul className="flex items-center justify-start w-full  flex-row gap-3 border border-gray-800 rounded-md">
        <li>
          <Link
            href="#"
            className={` ${
              activeTab === "desc"
                ? "focus:text-yellow-500 text-xl  "
                : "text-xl"
            }`}
            onClick={(e) => handleTabClick(e, "desc")}
          >
            Description
          </Link>
        </li>

        <li>
          <Link
            // href="#"
            className={` ${
              activeTab === "reviews"
                ? "focus:text-yellow-500 text-xl "
                : "text-xl"
            }`}
            onClick={(e) => handleTabClick(e, "reviews")}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <div className="">
        {/* desc */}
        <div className={` ${activeTab === "desc" ? "block" : "hidden"}`}>
          <div className="">{selectedProduct.description}</div>
        </div>
    
       
        {/* reviews */}
        <div className={` ${activeTab === "reviews" ? "block" : "hidden"}`}>
          <Reviews
            active={activeTab === "reviews" ? "block" : "hidden"}
           
            // setSingleProduct={setSingleProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
