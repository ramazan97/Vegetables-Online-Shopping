import React, { useState } from "react";
import Button from "../component/Button";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [parola, setParola] = useState("");
  const { login, yukleniyor, hata } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
      await login(email, parola);
  };
  return (
    <form    onSubmit={handleSubmit} className="flex items-center justify-center py-14">
      <div className="w-full md:w-[500px] p-3 shadow-2xl rounded-md">
        <p className={`text-slate-500 my-3 md:my-5 px-3 md:px-10 md:text-2xl text-center `}>
          Login
        </p>
        <input
              onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
          id="email"
          className="w-full h-12 p-3 rounded-md outline-none my-2"
          required
        />
        <input
               onChange={(e) => setParola(e.target.value)}
          placeholder="Parola"
          type="password"
          id="password"
          className="w-full h-12 p-3 rounded-md outline-none my-2"
          required
        />
        <div className=" flex items-center justify-center">
          <Button name="Giriş Yap" />
        </div>

        <div className="text-center my-2 text-sm text-red-500">
          Daha Önce Kayıt Olmadıysanız <br/> 
          <Link className="underline " to="/signup">
            buraya tıkla
          </Link>
        </div>
        <div className="text-center my-2 font-bold text-lg">OR</div>
        <div className=" flex items-center justify-center">
          <Button  disabled={yukleniyor} name="Google" />
        </div>
        {hata && <div className="text-red-500 font-bold"> {hata} </div>}
      </div>
 
    </form>
  );
};

export default Login;
