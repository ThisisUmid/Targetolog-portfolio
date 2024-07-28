import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { CgMenuLeftAlt } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import logo from "../../img/logo.png"

export const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const navItems = [
    { label: t("Кейсы"), href: "#keysi" },
    { label: t("Отзывы"), href: "#review" },
    { label: t("Контакты"), href: "#contact" },
  ];
  const language = localStorage.getItem("i18nextLng");

  return (
    <nav className="fixed top-0 z-50 py-3 w-full bg-black">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a
              href="#"
              className="flex items-center w-[140px] h-[60px] justify-center lg:w-[120px] lg:h-[60px]"
            >
              <img
                className="h-16 w-auto mr-2"
                src={logo}
                alt="logo"
              />
            </a>
          </div>
          <ul className="hidden text-lg font-bold lg:flex ml-14 space-x-12 text-white">
            {navItems.map((item, index) => (
              <li key={index} className="hover:border-2 border-blue-700 rounded-[24px] px-4">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex">
          <button value="ru" onClick={handleChange} className="text-white p-2 border-2 border-blue-700 active:bg-blue-700">
            RU
          </button>
          <button value="uz" onClick={handleChange} className="text-white p-2 border-2 border-blue-700 active:bg-blue-700">
            UZ
          </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <MdClose className="text-white text-2xl" /> : <CgMenuLeftAlt className="text-white text-2xl"/>}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-black w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 text-white">
                  <a href={item.href} onClick={toggleNavbar}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex">
          <button value="ru" onClick={handleChange} className="text-white p-2 border-2 border-blue-700">
            RU
          </button>
          <button value="uz" onClick={handleChange} className="text-white p-2 border-2 border-blue-700">
            UZ
          </button>
          </div>
          </div>
        )}
      </div>
    </nav>
  );
};
