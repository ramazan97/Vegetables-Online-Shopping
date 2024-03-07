import React from "react";
import { FiMessageCircle } from "react-icons/fi";
import Sidebar from "../Admin Panel Component/shared/Sidebar";

const Messages = () => {
  return (
    <Sidebar>
      {" "}
      <div className="relative overflow-x-auto   overflow-y-auto  rounded-lg md:mx-20 gap-y-5 lg:mx-56 my-32 flex flex-col items-center justify-center">
        <>
          <div className="w-full max-w-3xl p-4 m-4   shadow-md   text-gray-900  bg-white rounded-lg  gap-y-5 dark:bg-gray-800 dark:text-gray-300">
            <div className="flex items-center mb-3">
              <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                New notification
              </span>
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <span className="sr-only">Close</span>X
              </button>
            </div>
            <div className="flex items-center">
              <div className="relative text-white inline-block shrink-0">
                <img
                  className="w-12 h-12 rounded-full"
                  src="/img-1.png"
                  alt="Jese Leos image"
                />
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                  <FiMessageCircle />
                  <span className="sr-only">Message icon</span>
                </span>
              </div>
              <div className="ms-3 text-sm font-normal">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  Bonnie Green
                </div>
                <div className="text-sm font-normal">
                  commented on your photo
                </div>
                <div className="flex flex-col items-start mt-3 gap-2 justify-center">
                  {" "}
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
                    a few seconds ago
                  </span>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
                    e mail
                    {/* backende den çekilecek */}
                  </span>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
                    telefon
                    {/* backende den çekilecek */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </Sidebar>
  );
};

export default Messages;
