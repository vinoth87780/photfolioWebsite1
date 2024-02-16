"use client";
import { motion } from "framer-motion";
import { useState } from "react";
const ContactPage = () => {
  const text = "Say Hello";
  const [success, setSucess] = useState(false);
  const [error, setError] = useState(false);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full  flex flex-col lg:flex-row px-4 sm:px-12 md:px-12 lg:px-29 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className=" h-1/2 w-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                className="text-black"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
          <span className="text-black">Dear Lama Dev,</span>
          <textarea
            rows={6}
            name="user_message"
            className="text-black bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span className="text-black">My mail address is:</span>
          <input
            type="text"
            className="text-black bg-transparent border-b-2 border-b-black outline-none"
          />
          <span className="text-black">Regards</span>
          <button className=" bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>

          {success && (
            <span className="text-green-600 font-semibold">
              your message is sent sucessfully!
            </span>
          )}
          {success && (
            <span className="text-red-600 font font-semibold">
              Something went wrong
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
