import React, { useState } from "react";
import Button from "../component/Buttons/Button";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, yukleniyor, hata } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
      await login( email,password);
  };
  return (
    <form    onSubmit={handleSubmit} className="flex items-center justify-center py-14 dark:bg-neutral-900 ">
      <div className="w-full md:w-[500px] p-3 shadow-2xl rounded-md">
        <p className={`text-slate-500 dark:text-neutral-200 my-3 md:my-5 px-3 md:px-10 md:text-2xl text-center `}>
          Login
        </p>
        <input
              onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
          id="email"
          className="w-full h-12 p-3 rounded-md outline-none my-2 dark:bg-neutral-900 dark:text-neutral-200 dark:border dark:border-yellow-500 "
          required
        />
        <input
               onChange={(e) => setPassword(e.target.value)}
          placeholder="Parola"
          type="password"
          id="password"
          className="w-full h-12 p-3 rounded-md outline-none my-2 dark:bg-neutral-900 dark:text-neutral-200 dark:border dark:border-yellow-500"
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
        <div className="text-center dark:text-neutral-200 my-2 font-bold text-lg">OR</div>
        <div className=" flex items-center justify-center">
          <Button  disabled={yukleniyor} name="Google" />
        </div>
        {hata && <div className="text-red-500 font-bold"> {hata} </div>}
      </div>
 
    </form>
  );
};

export default Login;
