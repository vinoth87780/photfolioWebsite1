"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  const [open, setopen] = useState(false);
  const topVariants = {
    closed: {
      rotate: 0,
      backgroundColor: "rgb(000, 000, 000)",
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
      backgroundColor: "rgb(000, 000, 000)",
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
      backgroundColor: "rgb(000, 000, 000)",
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const listVarients = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVarients = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      {/* Links */}
      <div className=" hidden md:flex gap-4 w-1/3">
        {links.map((links) => (
          <NavLink link={links} key={links.title} />
        ))}
      </div>
      {/* Logo */}

      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Lama</span>
          <span className="w-12 h-8 roundef bg-white text-black flex items-center justify-center ">
            .dev
          </span>
        </Link>
      </div>
      {/* Social */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href={"/"}>
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"/"}>
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"/"}>
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"/"}>
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>

        <Link href={"/"}>
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href={"/"}>
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* Responsive */}
      <div className="md:hidden ">
        {/* menu button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setopen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
        {/* menu list */}
        {open && (
          <motion.div
            variants={listVarients}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-40"
          >
            {links.map((links) => (
              <motion.div
                variants={listItemVarients}
                className=""
                key={links.title}
              >
                <Link href={links.url}>{links.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
