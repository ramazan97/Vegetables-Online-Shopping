import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import Button from "../component/Buttons/Button";

import { BsCheckCircleFill } from "react-icons/bs";
const Success = () => {
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    setCart([]);
  }, [setCart]);

  return (
    <div className="flex gap-y-14 flex-col min-h-screen items-center justify-center">
      <div className="text-green-600">
        <BsCheckCircleFill size={200} />
      </div>
      <div>
        <p className="text-2xl text-center text-orange-600 font-bold">
          Siparişiniz başarı ile alınmıştır.
          <br /> Mutlu Alış Verişler dileriz...
        </p>
      </div>
      <div className="flex items-center justify-center flex-row gap-x-10 ">
        <Link to={"/"}>
          <Button name={"Ana Sayfa"} />
        </Link>
        <Link to={"/shop"}>
          <Button name={"Alışverişe Devam Et"} />
        </Link>
      </div>
    </div>
  );
};

export default Success;
