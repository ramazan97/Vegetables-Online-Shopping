import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function PrevBtn({ onClick }) {
  return (
    <button
      className="glide__arrow glide__arrow--left"
      data-glide-dir="<"
      onClick={onClick}
      style={{
        zIndex: "2",
      }}
    >
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}

function NextBtn({ onClick }) {
  return (
    <button
      className="glide__arrow glide__arrow--right"
      data-glide-dir=">"
      onClick={onClick}
      style={{
        zIndex: "2",
      }}
    >
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}

NextBtn.propTypes = {
  onClick: PropTypes.func,
};

PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const Gallery = () => {
  const { products } = useContext(ProductContext);

  const [activeImg, setActiveImg] = useState({
    img: "",
    imgIndex: 0,
  });
  const params = useParams();
  const productId = params.id;
  const selectedProduct = Array.isArray(products)
    ? products.find((product) => product._id === productId)
    : products;

  useEffect(() => {
    setActiveImg({ img: selectedProduct.img[0], imgIndex: 0 });
  }, [selectedProduct.img]);
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };
  return (
    <div className="">
      <div className="">
        {/* <img src={`${activeImg.img}`} id="" alt="" /> */}
      </div>
      <div className="">
        <div
          className="bg-red-500 flex items-start justify-center flex-row"
          data-glide-el="track"
        >
          <ol className="flex flex-row">
            <Slider {...sliderSettings}>
              {selectedProduct.img.map((itemImg, index) => (
                <li
                  className=""
                  key={index}
                  onClick={() =>
                    setActiveImg({
                      img: itemImg,
                      imgIndex: index,
                    })
                  }
                >
                  <img
                    src={`${itemImg}`}
                    alt=""
                    className={` w-20 h-20 ${
                      activeImg.imgIndex === index ? "" : ""
                    } `}
                  />
                </li>
              ))}
            </Slider>
          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls"></div>
      </div>
    </div>
  );
};

export default Gallery;
