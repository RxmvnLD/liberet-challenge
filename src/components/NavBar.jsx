import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//// Icons
import { GiPositionMarker } from "react-icons/gi";
import { BiFilter } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
///

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [currentLocation, setCurrentLocation] = useState("home");

  useEffect(() => {}, [currentLocation]);

  return (
    <>
      <div className="sticky top-0 z-50 w-full ">
        <nav className="flex justify-center bg-white md:shadow-xl">
          <div className="flex flex-col w-full max-w-5xl py-4 text-xs md:flex-row md:justify-center md:py-2 md:flex md:px-12 px-7 md:text-base">
            <div className="flex flex-row items-center content-center px-2 py-2 border-2 border-gray-300 rounded-lg md:mx-2">
              <GiPositionMarker className="text-3xl text-liberet-secondary-pink" />
              <input
                type="text"
                name="location-search"
                className="w-full mx-4 mr-10 text-lg md:text-base md:self-center"
                placeholder="Select location..."
                onClick={() => {
                  alert("Hi there Liberet staff!\n\n Y'all won a hug! 🫂");
                }}
              />
              <button
                className="absolute inline-flex items-center p-2 ml-3 text-3xl rounded-lg md:hidden right-10 top-4"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <div>{isOpen ? <VscClose /> : <BiFilter />}</div>
              </button>
            </div>
            <div className="flex-row items-center hidden gap-5 text-3xl md:flex ">
              <Link
                to="/"
                onClick={() => {
                  setCurrentLocation("home");
                }}
              >
                <AiOutlineHome
                  className={`${
                    currentLocation === "home"
                      ? "text-liberet-primary-orange"
                      : ""
                  }`}
                />
              </Link>
              <Link
                to="/cart"
                onClick={() => {
                  setCurrentLocation("cart");
                }}
              >
                <AiOutlineShoppingCart
                  className={`${
                    currentLocation === "cart"
                      ? "text-liberet-primary-orange"
                      : ""
                  }`}
                />
              </Link>
              <Link
                to="/account"
                onClick={() => {
                  setCurrentLocation("account");
                }}
              >
                <CgProfile
                  className={`${
                    currentLocation === "account"
                      ? "text-liberet-primary-orange"
                      : ""
                  }`}
                />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export const NavBarMobile = () => {
  const [currentLocation, setCurrentLocation] = useState("home");

  const getLocation = () => {
    if (window.location.href.includes("cart")) setCurrentLocation("cart");
    else if (window.location.href.includes("account"))
      setCurrentLocation("account");
    else setCurrentLocation("home");
  };

  useEffect(() => {}, [currentLocation]);

  return (
    <>
      <div className="absolute bottom-0 z-50 w-full mt-10 md:hidden">
        <nav className="flex justify-center p-2 bg-gray-300 sm:p-4">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-row gap-10 text-4xl">
              <Link
                to="/cart"
                onClick={() => {
                  setCurrentLocation("cart");
                }}
              >
                <AiOutlineShoppingCart
                  className={`${
                    currentLocation === "cart"
                      ? "text-liberet-primary-orange"
                      : "text-gray-500"
                  }`}
                />
              </Link>
              <Link
                to="/"
                onClick={() => {
                  setCurrentLocation("home");
                }}
              >
                <AiOutlineHome
                  className={`${
                    currentLocation === "home"
                      ? "text-liberet-primary-orange"
                      : "text-gray-500"
                  }`}
                />
              </Link>

              <Link
                to="/account"
                onClick={() => {
                  setCurrentLocation("account");
                }}
              >
                <CgProfile
                  className={`${
                    currentLocation === "account"
                      ? "text-liberet-primary-orange"
                      : "text-gray-500"
                  }`}
                />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
