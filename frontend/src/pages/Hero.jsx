import React from "react";
import Button from "../component/Button";

const Hero = () => {
  return (
    <div className="flex items-center justify-center gap-5 px-20">
      <div className="hidden md:flex md:w-[600px]">
        <img src="./img-1.png" alt="hero" />
      </div>
      <div >
        <div className="flex flex-col gap-y-5">
          <div>
            <p className="text-wrap text-7xl font-bold  ">
              Vegetables <br />
              <span className="text-yellow-500">Shop</span>
            </p>
          </div>
          <div className="">
            <p className="text-wrap ">
              It is a long established fact that a reader will be
              <br /> distracted by the readable content of a page when <br />
              looking at its layout. The point of using Lorem
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <Button name="Buy Now" />
            <Button name="Read More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
