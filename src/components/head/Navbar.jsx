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
    { label: t("Кейсы"), href: "#" },
    { label: t("Отзывы"), href: "#about" },
    { label: t("Контакты"), href: "#service" },
  ];
  const language = localStorage.getItem("i18nextLng");

  return (
    <nav className="sticky top-0 z-50 py-3 w-full">
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
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
          <select
              value={language}
              name="Lng"
              id="lng"
              onChange={handleChange}
              className="border-2 rounded-md p-1 ml-3 mr-7 bg-blue-500"
            >
              <option value="ru">Русский</option>
              <option value="uz">Узбек</option>
              <option value="en">English</option>
            </select>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <MdClose className="text-white text-2xl" /> : <CgMenuLeftAlt className="text-white text-2xl"/>}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-slate-100 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href} onClick={toggleNavbar}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
            <select
              value={language}
              name="Lng"
              id="lng"
              onChange={handleChange}
              className="border-2 rounded-md p-1 ml-3"
            >
              <option value="ru">Русский</option>
              <option value="uz">Узбек</option>
              <option value="en">English</option>
            </select>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
