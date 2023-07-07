import React, { useState } from "react";
import { navLinks } from "../constant";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { mustafaLogo } from "../assets";

const Navbar = () => {
  const [active, SetActive] = useState("");
  const [toggle, SetToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full 
      flex itms-center
       py-f fixed 
       top-0 z-20
        bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          className=" flex items-center gap-2"
          onClick={() => {
            SetActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            className="w-18 h-12 object-contain "
            src={mustafaLogo}
            alt="M"
          />
          <p className=" text-white text-[18px] font-bold cursor-pointer">
            Mustafa <span className="sm:block hidden"> | Front End</span>
          </p>
        </Link>
        <ul className=" list-none hidden  sm:flex flex-row gap-10">
          {navLinks.map((Link) => {
            return (
              <li
                className={`${
                  active === Link.title ? "text-white" : "text-secondary"
                }
              hover:text-white text-[19px] font-medium cursor-pointer`}
                key={Link.title}
                onClick={() => {
                  SetActive(Link.title);
                }}
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            onClick={() => {
              SetToggle(!toggle);
            }}
            alt="menu"
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 min-2 w-[140px] z-10 rounded-xl`}
          >

<ul className=" list-none flex   justify-end itens-start flex-col gap-4">
          {navLinks.map((Link) => {
            return (
              <li
                className={`${
                  active === Link.title ? "text-white" : "text-secondary"
                }
              hover:text-white text-[19px] font-medium cursor-pointer`}
                key={Link.title}
                onClick={() => {
                  SetActive(Link.title);
                  SetToggle(!toggle)
                }}
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            );
          })}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
