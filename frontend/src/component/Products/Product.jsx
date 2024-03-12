import React, { useContext, useEffect, useState } from "react";
import Button from "../Buttons/Button";
import { CartContext } from "../../contexts/CartContext";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
function PrevBtn({ onClick }) {
  return (
    <button
      // transform -translate-y-1/2  text-25
      // className="glide__arrow glide__arrow--left"
      className="bg-transparent absolute top-[50%] transform -translate-y-1/2 -translate-x-3/4 left-0"
      data-glide-dir="<"
      onClick={onClick}
      style={{
        zIndex: "2",
      }}
    >
      <MdArrowBackIos size={25} />
    </button>
  );
}

function NextBtn({ onClick }) {
  return (
    <button
      // className="glide__arrow glide__arrow--right"
      className="bg-transparent absolute top-[50%] transform -translate-y-1/2 translate-x-[90%] right-0"
      data-glide-dir=">"
      onClick={onClick}
      style={{
        zIndex: "2",
      }}
    >
      <MdArrowForwardIos size={25} />
    </button>
  );
}

const Product = ({ products }) => {
  // const { products } = useContext(ProductContext);

  const { addToCard } = useContext(CartContext);
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
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };
  return (
    <div className="flex gap-x-8 px max-w-[700px] flex-col lg:flex-row    ">
      {/* resim */}
      <div className="flex flex-col justify-center items-center lg:mb-0 ">
        <div className="my-10 flex items-center justify-center">
          <img
            className="max-w-[200px] lg:max-w-sm "
            src={`${activeImg.img}`}
            alt=""
            id="single-image"
          />
        </div>

        <div className=" flex flex-col w-[200px]  ">
          <ol className="w-full ">
            <Slider {...sliderSettings}>
              {selectedProduct.img.map((itemImg, index) => (
                <li
                  className="bg-red-500 flex flex-col items-center justify-center cursor-pointer "
                  key={index}
                  onClick={() =>
                    setActiveImg({
                      img: itemImg,
                      imgIndex: index,
                    })
                  }
                >
                  <img
                    className={`  ${
                      activeImg.imgIndex === index
                        ? "border border-gray-900"
                        : ""
                    } `}
                    src={`${itemImg}`}
                    // src={selectedProduct.img[index]}
                    alt=""
                  />
                </li>
              ))}
            </Slider>
          </ol>
        </div>
      </div>
      {/* Ürün bilgisi */}
      <div className="px-5 py-10">
        <div className="flex flex-col  w-full text-center  ">
          <h1 className="text-[26px] font-medium mb-2  mx-auto lg:mx-0 ">
            {selectedProduct.name}
          </h1>
          <div className="text-xl  font-medium mb-6">
            $<span className="text-red-500">{selectedProduct.price}</span>
          </div>

          <p className="mb-8  text-wrap ">{selectedProduct.description} </p>
          <div className=" flex items-center md:justify-center lg:justify-start">
            <Button
              onClick={() => addToCard(selectedProduct, selectedProduct.id)}
              name={"Buy Now"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
