import React from "react";
import RecentOrders from "../Admin Panel Component/RecentOrders";
import Sidebar from "../Admin Panel Component/shared/Sidebar";

const Orders = () => {
  return (
    <Sidebar>
      <div className="mx-20 my-20">
        <p className=" text-4xl text-center mb-5">Siparişler</p>
        <RecentOrders />
      </div>
    </Sidebar>
  );
};

export default Orders;
