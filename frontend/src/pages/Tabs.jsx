import React, { useState } from "react";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";

const Tabs = ({ products }) => {
  const [activeTab, setActiveTab] = useState("desc");

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };
  const { name, description, price, img } = products;
  return (
    <div>
      <ul className="flex items-center justify-center flex-row gap-3 ">
        <li>
          <Link
            href="#"
            className={` ${
              activeTab === "desc" ? "active:text-red-500" : "bg-green-300"
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
              activeTab === "reviews" ? "active:text-red-500" : "bg-yellow-500"
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
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: products.description }}
          >
            {products.description}
          </div>
        </div>
        {/* info */}
        {/* <div
          className={`tab-panel-information content ${
            activeTab === "info" ? "active" : ""
          }`}
          id="info"
        >
          <h3>Additional information</h3>
          <table>
            <tbody>
              <tr>
                <th>Color</th>
                <td>
                  <p>
                    Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink, Black,
                    White
                  </p>
                </td>
              </tr>
              <tr>
                <th>Size</th>
                <td>
                  <p>
                    {products.sizes.map((item, index) => (
                      <span key={index}>
                        {item.toUpperCase()}
                        {index < singleProduct.sizes.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
        {/* reviews */}
        <div className={` ${activeTab === "reviews" ? "block" : "hidden"}`}>
          <Reviews
            active={activeTab === "reviews" ? "block" : "hidden"}
            products={products}          
            // setSingleProduct={setSingleProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
