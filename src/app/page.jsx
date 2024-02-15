"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* Image container */}
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image src="/hero.png" alt="" fill className="object-contain " />
        </div>
        {/* text container */}
        <div className="h-1/2 flex lg:h-full lg:w-1/2 flex-col gap-8 justify-center">
          {/* title */}
          <h1 className=" text-4xl md:6xl font-bold text-black">
            Crafting Digital Experiences,Designs Tomorrow.
          </h1>
          {/* paragraph */}
          <p className="text-black md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* buttons */}
          <div className=" flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              view my work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black text-black">
              contact me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
