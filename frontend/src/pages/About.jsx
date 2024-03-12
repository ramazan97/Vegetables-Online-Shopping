import React from "react";
import Button from "../component/Buttons/Button";

const About = () => {
  return (
    <div className="flex dark:bg-neutral-900 h-screen flex-col items-center pt-16 gap-y-5">
      {/* logo */}
      <div>
        {" "}
        <img src="./img-2.png" alt="corrot" />
      </div>
      {/* title */}
      <div>
        <p className="text-4xl font-bold dark:text-gray-200">About Our Shop</p>
      </div>
      {/* img */}
      <div>
        {" "}
        <img src="./img-3.png" alt="corrot" />
      </div>
      {/* descprtion */}
      <div className=" w-1/3">
        <p className="text-center dark:text-gray-200">
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
