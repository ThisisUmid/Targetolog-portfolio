import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Hero = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const SendMessage = (event) => {
    setLoading(true);
    event.preventDefault();
    const token = "7486996857:AAHo0mc-QJHTiBAYE0VYAoW9lFWEp9GwcWA";
    const chatId = 922395119;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const message = `Name: ${name}\nNumber: ${number}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chatId,
        text: message,
      },
    })
      .then((res) => {
        document.getElementById("myForm").reset();
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
    <div className="container mb-10 ">
      <div className="flex justify-between items-center rounded-3xl ">
        <div className="w-full p-8">
          <div className="mb-20">
            <span className="text-3xl text-white font-sans font-bold max-w-lg md:text-7xl lg:text-7xl  border-b-2 border-blue-700">
              {t("Таргетолог")}
            </span>
            <h2 className="text-3xl text-white font-sans font-bold mb-10 mt-5 max-w-2xl md:text-7xl lg:text-7xl">
              Антон Вакуленко
            </h2>
            <div className="flex justify-between items-start">
              <p className="text-base font-sans text-white max-w-lg lg:text-xl">
                {t(
                  "Увеличу продажи с помощью рекламы в интернете и предоставлю первые обращения клиентов уже через 48 часов"
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-center justify-center min-h-[485px] max-w-[470px] bg-transparent backdrop-brightness-50 py-8 px-14 mr-10 border-2 border-blue-700">
          <h2 className="text-lg text-white lg:text-[24px] font-bold leading-10">
            {t("СТРАТЕГИЯ БЕСПЛАТНО")}
          </h2>
          <p className="text-white text-center py-8">
            {t(
              "Напишу стратегию по Таргетированной Рекламе для Вашей компании бесплатно и презентую ее!"
            )}
          </p>
          <form id="myForm" action="" className="w-full" onSubmit={SendMessage}>
            <input
              id="name"
              type="text"
              className="flex items-center outline-none w-full h-[50px] rounded-[25px] bg-neutral-700 border-2 border-red-700 text-neutral-800 text-base font-medium mt-[30px] p-5"
              placeholder={t("Ваше имя")}
              required
            />
            <label htmlFor="" className="relative">
              <input
                id="number"
                type="text"
                className="flex items-center outline-none w-full h-[50px] border-2 border-red-700 rounded-[25px] bg-neutral-700 text-neutral-800 text-xs sm:text-base font-medium mt-[30px] p-5"
                placeholder="+998-90-123-45-67"
                required
              />
            </label>
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
    </div>
  );
};
