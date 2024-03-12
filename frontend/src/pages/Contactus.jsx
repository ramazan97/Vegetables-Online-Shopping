import React, { useState } from "react";
import Button from "../component/Buttons/Button";
import { toast } from "react-toastify";
const Contactus = () => {
  const [phone, setPhone] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const urunVerisi = {
      name: name,
      email: email,
      messages: messages,
      phone: phone,
    };

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        body: JSON.stringify(urunVerisi),
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          messages: messages,
          phone: phone,
        }),
      });

      if (!response.ok) {
        toast.error(` !response.ok değil sı var `);
      }
      if (response.ok) {
        setPhone("");
        setName("");
        setEmail("");
        setMessages("");
        toast.success("Mesaj gönderildi!");
      }
    } catch (error) {
      console.log(error, "mesaj gönderme işlemi sırasında hata oluştu ");
    }
  };

  return (
    <div className="flex flex-col h-screen dark:bg-neutral-900 items-center pt-16 gap-y-5">
      {/* logo */}
      <div>
        {" "}
        <img src="./img-2.png" alt="corrot" />
      </div>
      {/* title */}
      <div>
        <p className="text-4xl font-bold dark:text-gray-200">Contact Us</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1  lg:grid-cols-2 gap-4 py-5"
      >
        {/* input */}
        <div className="flex flex-col justify-between w-[550px] h-[480px]  ">
          <input
            className="w-full h-[51px] text-xl dark:bg-neutral-900 dark:border dark:text-gray-200 dark:border-yellow-500 text-balance border border-spacing-6 border-gray-200 "
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            className="w-full h-[51px] text-xl text-balance border dark:text-gray-200 dark:bg-neutral-900 dark:border dark:border-yellow-500 border-spacing-6 border-gray-200"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            className="w-full h-[51px] text-xl text-balance border dark:text-gray-200 dark:bg-neutral-900 dark:border dark:border-yellow-500 border-spacing-6 border-gray-200"
            type="tel"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            title="Telefon numarası 123-456-7890 formatında olmalıdır"
            required
          />
          <textarea
            className="w-full h-[153px] text-xl text-balance border dark:text-gray-200 dark:bg-neutral-900 dark:border dark:border-yellow-500 border-spacing-6 border-gray-200"
            placeholder="Message"
            onChange={(e) => setMessages(e.target.value)}
            value={messages}
          />
          <Button name={`Gönder`} />
          {/* <Link
            // to={"/login"}
            className=" flex items-center justify-center my-5"
          >
            
             <Button onClick={() => handleClick()} name={`Send`} /> 
          </Link> */}
        </div>
        {/* map */}
        <div className="  ">
          <div className="map_main">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[480px]"
                frameborder="0"
                title="Eiffel Tower Map"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
