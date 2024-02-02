import React from "react";

import UrunEkle from "../component/UrunEkle";
import UrunSil from "../component/UrunSil";

const Admin = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="border border-spacing-8 border-red-500 p-8 ">
        <UrunEkle />
      </div>
      <div className="border border-spacing-8 border-red-500 p-8 ">
        <UrunSil />
      </div>
    </div>
  );
};

export default Admin;
