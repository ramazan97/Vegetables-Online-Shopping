import React from "react";
import Button from "../component/Button";

const About = () => {
  return (
    <div className="flex flex-col items-center mt-16 gap-y-5">
      {/* logo */}
      <div>
        {" "}
        <img src="./img-2.png" alt="corrot" />
      </div>
      {/* title */}
      <div>
        <p className="text-4xl font-bold">About Our Shop</p>
      </div>
      {/* img */}
      <div>
        {" "}
        <img src="./img-3.png" alt="corrot" />
      </div>
      {/* descprtion */}
      <div className=" w-1/3">
        <p className="text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem
        </p>
      </div>
      <div className="pb-5">
        <Button name={"Read More"} />
      </div>
    </div>
  );
};

export default About;
