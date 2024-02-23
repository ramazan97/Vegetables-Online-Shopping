import React, { useState } from "react";
import Button from "../component/Buttons/Button";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, yukleniyor, hata } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password);
  };


  return (
    <form
      className="flex items-center justify-center py-14"
      onSubmit={handleSubmit}
    >
      <div className="w-full md:w-[500px] p-3 shadow-2xl rounded-md">
        <p
          className={`text-slate-500 my-3 md:my-5 px-3 md:px-10 md:text-2xl text-center `}
        >
          Sign up
        </p>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="isim"
          type="text"
          id="isim"
          className="w-full h-12 p-3 rounded-md outline-none my-2"
          required
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
          id="email"
          className="w-full h-12 p-3 rounded-md outline-none my-2"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parola"
          type="password"
          id="password"
          className="w-full h-12 p-3 rounded-md outline-none my-2"
          required
        />
        <div className=" flex items-center justify-center">
          <Button name="Üye ol" />
        </div>

        <div className="text-center my-2 text-sm text-red-500">
          Daha Önce Üye Olduysanız <br />
          <Link className="underline " to="/login">
            buraya tıkla
          </Link>
        </div>
        <div className="text-center my-2 font-bold text-lg">OR</div>
        <div className=" flex items-center justify-center">
          <Button disabled={yukleniyor} name="Google" />
        </div>
        {hata && <div className="text-red-500 font-bold"> {hata} </div>}
      </div>
    </form>
  );
};

export default Signup;
