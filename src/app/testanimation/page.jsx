"use client";
import { motion } from "framer-motion";
const variants = {
  variant1: {
    x: 100,
    y: 300,
    opacity: 0.5,
  },
  variant2: {
    x: 100,
    y: -300,
    rotation: 90,
  },
};
const TestPage = () => {
  return (
    <div className="h-full justify-center items-center flex ">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        animate="variant2"
        variants={variants}
        transition={{ delay: 2, duration: 4 }}
      ></motion.div>
    </div>
  );
};

export default TestPage;
