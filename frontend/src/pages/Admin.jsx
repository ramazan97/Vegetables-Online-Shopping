import { BrowserRouter as Router, Outlet } from "react-router-dom";

import Sidebar from "../component/Admin Panel Component/shared/Sidebar";
import Header from "../component/Admin Panel Component/shared/Header";
import { Children } from "react";

const Admin = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar>
          <div className="flex flex-col ">
            {/* <Header /> */}
            <div className="flex p-4  h-full w-screen">
              <div className=" w-full mr-40  ">
                <Outlet />
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default Admin;
