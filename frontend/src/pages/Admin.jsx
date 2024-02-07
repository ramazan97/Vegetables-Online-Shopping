import { BrowserRouter as Router, Outlet } from "react-router-dom";

import Sidebar from "../component/Admin Panel Component/shared/Sidebar";
import Header from "../component/Admin Panel Component/shared/Header";

const Admin = () => {
  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>

    // <div className="flex flex-col items-center justify-center gap-5">
    //   <div className="border border-spacing-8 border-red-500 p-8 ">
    //     <UrunEkle />
    //   </div>
    //   <div className="border border-spacing-8 border-red-500 p-8 ">
    //     <UrunSil />
    //   </div>
    // </div>
  );
};

export default Admin;
