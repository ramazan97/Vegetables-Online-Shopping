import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="h-[250px] bg-neutral-900 text-white pb-3 flex items-stretch justify-center gap-28 border-b ">
        {/* adress */}
        <div className="pb-5 pt-5 flex flex-col gap-y-5  ">
          <p className="text-2xl">Address</p>
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center gap-3">
              <IoLocationSharp />
              <p>No.123 Chalingt Gates,</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone />
              <p>( +01 9876543210 )</p>
            </div>
            <div className="flex items-center gap-3">
              <SlEnvolope /> <p>Locations</p>
            </div>
          </div>
        </div>
        {/* Social link */}
        <div className="pb-5 pt-5 flex flex-col gap-y-5 ">
          {" "}
          <p className="text-2xl">Social link</p>
          <div className="flex flex-col gap-y-5">
            <div className="flex items-center gap-3">
              <FaFacebook />
              <p>FaceBook</p>
            </div>
            <div className="flex items-center gap-3">
              <FaTwitter />
              <p>Twitter</p>
            </div>
            <div className="flex items-center gap-3">
              <BsInstagram /> <p>Instegram</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedinIn /> <p>LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="h-[50px] bg-neutral-900 text-white  flex items-center justify-center">
        <p className=" text-center ">
          Copyright 2023 All Right Reserved Free html Templates
        </p>
      </div>
    </div>
  );
};

export default Footer;
