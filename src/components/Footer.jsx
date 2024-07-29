import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const [loading, setLoading] = useState(false);

  const SendMessage = (event) => {
    setLoading(true);
    event.preventDefault();
    const token = "7486996857:AAHo0mc-QJHTiBAYE0VYAoW9lFWEp9GwcWA";
    const chatId = 922395119;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const question = document.getElementById("question").value;
    const message = `Name: ${name}\nNumber: ${number}\nQuestion: ${question}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chatId,
        text: message,
      },
    })
      .then((res) => {
        document.getElementById("myFormFooter").reset();
        toast.success("Message Sent Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error while sending data", error);
        toast.error("Error while sending message.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="w-full h-auto bg-footer flex flex-col items-center justify-between bg-no-repeat bg-cover bg-center">
      <div className="container my-10 ">
        <div className="lg:flex justify-between items-center">
          <div className="p-8">
            <div className="mb-20 flex flex-col items-center justify-center">
              <h1 className="text-3xl text-center text-white font-sans font-bold mb-10 mt-5 max-w-2xl md:text-5xl lg:text-5xl">
                {t("Мои контакты")}
              </h1>
              <div className="md:flex lg:flex justify-between items-center">
                <div className="flex items-center justify-between text-5xl px-5">
                  <a href="#" className="text-white p-2 hover:hover:text-blue-700">
                    <FaWhatsapp />
                  </a>
                  <a href="#" className="text-white p-2 hover:hover:text-blue-700">
                    <FaTelegramPlane />
                  </a>
                  <a href="#" className="text-white p-2 hover:hover:text-blue-700">
                    <FaViber />
                  </a>
                </div>
                <div className="flex flex-col items-center justify-between text-2xl pt-10 md:pt-0 lg:pt-0 px-5 ">
                  <a href="tel:+380986066667" className="text-white hover:hover:text-blue-700">
                    +38(098) 606 66 67
                  </a>
                  <a href="tel:+380632409679" className="text-white hover:hover:text-blue-700">
                    +38(063) 240 96 79
                  </a>
                </div>
              </div>
              <a
                href="mailto:mailto:a.a.vakulenko@gmail.com"
                className="text-white text-center block p-10 hover:hover:text-blue-700"
              >
                a.a.vakulenko@gmail.com
              </a>
              <div className="flex items-center justify-center text-4xl">
                <a href="#" className="text-white mr-10 p-2 border-2 border-white rounded-full hover:hover:text-blue-700 hover:border-blue-700">
                  <IoLogoFacebook />
                </a>
                <a href="#" className="text-white p-2 border-2 border-white rounded-full hover:hover:text-blue-700 hover:border-blue-700">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:flex flex-col items-center justify-center min-h-[485px] bg-transparent md:py-8 lg:py-8 px-14 lg:mr-10">
            <h2 className="text-lg text-white lg:text-4xl font-bold leading-10 text-center lg:text-start">
              {t("Есть вопросы? - Пишите!")}
            </h2>
            <form
              id="myFormFooter"
              action=""
              className="min-w-[220px] lg:min-w-[300px] md:px-32 lg:p-0"
              onSubmit={SendMessage}
            >
              <input
                id="name"
                type="text"
                className="flex items-center outline-none w-full h-[50px] rounded-[25px] bg-neutral-700 text-white text-base font-medium mt-[30px] p-5"
                placeholder={t("Ваше имя")}
                required
              />
              <label htmlFor="" className="relative">
                <input
                  id="number"
                  type="text"
                  className="flex items-center outline-none w-full h-[50px] rounded-[25px] bg-neutral-700 text-white text-xs sm:text-base font-medium mt-[30px] p-5"
                  placeholder="+998-90-123-45-67"
                  required
                />
              </label>
              <input
                id="question"
                type="text"
                className="flex items-center outline-none w-full h-[50px] rounded-[25px] bg-neutral-700 text-white text-base font-medium mt-[30px] p-5"
                placeholder={t("Вопрос")}
                required
              />
              <button
                type="submit"
                className="
            flex w-full items-center justify-center h-[50px] border-none outline-none rounded-[25px] bg-blue-600 text-white text-lg font-bold cursor-pointer mt-[50px] hover:bg-blue-700 "
                loading={loading}
              >
                {loading ? t("Отправляется...") : t("Получить консультацию")}
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button value="ru" onClick={handleChange} className="text-white p-5 md:p-10 lg:p-10 hover:text-blue-700">
            RU
          </button>
          <button value="uz" onClick={handleChange} className="text-white p-5 hover:text-blue-700">
            UZ
          </button>
        </div>
        <div className="text-white text-center">
            <p>{t("@ 2015-2022. Все права защищены Политика Конфиденциальности")}</p>
        </div>
      </div>
    </div>
  );
};
