import React from "react";
import { Link } from "react-router-dom";
import Button from "../component/Button";

const Register = () => {
  return (
    <div className="flex items-center justify-center py-14">
      <div className="w-full md:w-[500px] p-3 shadow-2xl rounded-md">
        <p
          className={`text-slate-500 my-3 md:my-5 px-3 md:px-10 md:text-2xl text-center `}
        >
          Register
        </p>
        <input
          placeholder="Ad"
          type="text"
          id="name"
          className="w-full h-12 p-3 rounded-md outline-none my-2"
          required
        />
        <input
          placeholder="Email"
          type="text"
          id="email"
          className="w-full h-12 p-3 rounded-md outline-none my-2"
          required
        />

        <input
          placeholder="Parola"
          type="password"
          id="password"
          className="w-full h-12 p-3 rounded-md outline-none my-2"
          required
        />
        <div className=" flex items-center justify-center">
          <Button name="Kayıt Ol" />
        </div>

        <div className="text-center my-2 text-sm text-red-500">
          Daha Önceden Kayıt Olduysan{" "}
          <Link className="underline " href="/login">
            buraya tıkla
          </Link>
        </div>
        <div className="text-center my-2 font-bold text-lg">OR</div>

        <div className=" flex items-center justify-center">
          <Button name="Google İle Üye Ol" />
        </div>
      </div>
    </div>
  );
};

export default Register;
