import React, { useEffect, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import Sidebar from "../Admin Panel Component/shared/Sidebar";
import { toast } from "react-toastify";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await fetch("/api/messages");

        if (!response.ok) {
          throw new Error("Mesaj getirme hatası");
        }

        const data = await response.json();
        setMessages(data);
      };
      fetchProducts();
    } catch (error) {
      console.log("Mesajları getiriken bir hata oluştu", error);
    }
  }, []);

  const deleteMessage = async (id) => {
    console.log(id, "id");

    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        toast.success("Mesaj başarıyla silindi");

        setMessages(messages);
      } else {
        toast.error("Mesaj silme başarısız");
        console.error("Mesaj silme hatası:", response.statusText);
      }
    } catch (error) {
      console.log("Mesaj silme işlemi sırasında hata oluştu", error);
    }
  };

  return (
    <Sidebar>
      <div className="relative overflow-x-auto  rounded-lg md:mx-20 gap-y-5 lg:mx-56 my-32 flex flex-col items-center justify-center ">
        <>
          <div className=" max-w-3xl p-4 m-4      text-gray-900  bg-white rounded-lg  gap-y-5 dark:bg-gray-800 dark:text-gray-300">
            <div className="flex flex-col gap-y-5 items-center  h-[600px] md:h-[800px]  w-[300px] md:w-[500px]">
              {messages.map((message, i) => (
                <React.Fragment>
                  <div className="  px-3 pb-3 shadow-md w-full text-sm font-normal">
                    <div className="flex items-center mb-3">
                      <button
                        onClick={() => deleteMessage(message._id)}
                        type="button"
                        className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                      >
                        <span className="sr-only">Close</span>X
                      </button>
                    </div>
                    <div className="text-2xl  font-semibold text-gray-900 dark:text-white">
                      {message.name}
                    </div>
                    <div className="text-xl  mt-5 my-3 font-normal">
                      {message.messages}
                    </div>
                    <div className="flex flex-col items-start mt-3 gap-y-3 justify-center">
                      <span className="text-lg font-medium text-blue-600 dark:text-blue-500">
                        {message.email}
                      </span>
                      <span className="text-lg font-medium text-blue-600 dark:text-blue-500">
                        {message.phone}
                      </span>
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
                        a few seconds ago
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </>
      </div>
    </Sidebar>
  );
};

export default Messages;
