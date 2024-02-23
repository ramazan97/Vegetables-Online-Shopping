import React from "react";
import Button from "../component/Buttons/Button";

const Vegetables = () => {
  return (
    <div className="flex flex-col items-center mt-16 gap-y-5">
      {/* logo */}
      <div>
        {" "}
        <img src="./img-2.png" alt="corrot" />
      </div>
      {/* title */}
      <div>
        <p className="text-4xl font-bold">Why Choose Us</p>
      </div>
      {/* img */}
      <div>
        {" "}
        <img src="./img-14.png" alt="corrot" />
      </div>
      {/* descprtion */}
      <div className=" w-1/3">
        <p className="text-center">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation
        </p>
      </div>
      <div className="pb-5">
        <Button name={"Read More"} />
      </div>
    </div>
  );
};

export default Vegetables;
