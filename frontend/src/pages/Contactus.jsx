import React from "react";
import Button from "../component/Buttons/Button";
import { toast } from "react-toastify";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link, useNavigate } from "react-router-dom";
const Contactus = () => {
  const { kullanici } = useAuthContext();
  const navigate = useNavigate();
  const handleClick = (product, id) => {
    if (!kullanici) {
      navigate("/login");
    } else {
      // müşteriden gelen mesajları burada kaydedip veri tabanına gönderen sonrada admin panelde mesajlar kısmında gösteren kodu yaz
      navigate("/contactus");
    }
  };
  return (
    <div className="flex flex-col items-center mt-16 gap-y-5">
      {/* logo */}
      <div>
        {" "}
        <img src="./img-2.png" alt="corrot" />
      </div>
      {/* title */}
      <div>
        <p className="text-4xl font-bold">Contact Us</p>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 py-5">
        {/* input */}
        <div className="flex flex-col justify-between w-[550px] h-[480px]  ">
          <input
            className="w-full h-[51px] text-xl text-balance border border-spacing-6 border-gray-200 "
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="w-full h-[51px] text-xl text-balance border border-spacing-6 border-gray-200"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="w-full h-[51px] text-xl text-balance border border-spacing-6 border-gray-200"
            type="tel"
            placeholder="Phone Number"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
          <textarea
            className="w-full h-[153px] text-xl text-balance border border-spacing-6 border-gray-200"
            placeholder="Message"
          />
          <Link
            to={"/login"}
            className=" flex items-center justify-center my-5"
          >
            <Button onClick={() => handleClick()} name={`Send`} />
          </Link>
        </div>
        {/* map */}
        <div className="  ">
          <div className="map_main">
            <div className="map-responsive">
              {/* <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                width="600"
                height="480"
                frameborder="0"
                // style="border:0; width: 100%;"
                title="Eiffel Tower Map"
                allowfullscreen
              ></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[480px]"
                frameborder="0"
                title="Eiffel Tower Map"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
