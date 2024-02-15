"use client";
import { motion } from "framer-motion";
import SignatureSvg from "../Components/signatureSvg";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="">
        {/*  text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:64">
          {/* boigraphy container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1>BIOGRAPHY</h1>
            {/* BIOGRAPHY Desc */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>
            {/* BIOGRAPHY Qotes */}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY Sign SVG */}
            <div className="">
              <SignatureSvg />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
          </div>

          {/* slills container */}
          <div className="">SKILLS</div>
          {/*  experience container */}
          <div className="">EXPERIENCE</div>
        </div>
        {/* svg container */}
        <SignatureSvg />

        <div className=""></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
