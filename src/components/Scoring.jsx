import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import avatar from "../img/avatar.jpeg";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Scoring = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [val, setVal] = useState(30);

  const SendMessage = (event) => {
    setLoading(true);
    event.preventDefault();
    const token = "7486996857:AAHo0mc-QJHTiBAYE0VYAoW9lFWEp9GwcWA";
    const chatId = 922395119;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const region = document.getElementById("region").value;
    const bill = document.getElementById("bill").value;
    const clients = val;  // Using the state value directly
    const message = `Name: ${name}\nNumber: ${number}\nRegion: ${region}\nBill: ${bill}\nClients: ${clients}`;

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
        toast.success(t("Message Sent Successfully!"), {
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
        toast.error(t("Error while sending message."), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
      });
  };

  const handleChangeRange = (event, newValue) => {
    setVal(newValue);
  };

  return (
    <div className="bg-black flex flex-col items-center justify-between h-auto">
      <div className="container">
        <div className="lg:flex items-center justify-between">
          <div className="flex flex-col items-center justify-center bg-transparent py-8 px-4 lg:px-14 md:px-14 mr-10 w-full lg:w-[60%]">
            <h2 className="text-3xl text-center text-white font-sans font-bold mb-10 mt-5 md:text-5xl lg:text-5xl">
              {t("Есть конкретная")}
              &nbsp;
              <span className="text-3xl text-white font-sans font-bold max-w-lg md:text-5xl lg:text-5xl  border-b-2 border-blue-700">
                {t("цель?")}
              </span>
            </h2>
            <p className="text-white py-8 text-xl">
              {t(
                "Заполняйте форму и укажите желаемое количество клиентов, а я предложу путь к достижению Ваших целей"
              )}
            </p>
            <form
              id="myForm"
              className="w-full max-w-md"
              onSubmit={SendMessage}
            >
              <input
                id="name"
                type="text"
                className="flex items-center outline-none w-full h-[50px] rounded-[25px] bg-white text-neutral-800 text-base font-medium mt-[30px] p-5"
                placeholder={t("Имя")}
                required
              />
              <label htmlFor="number" className="relative">
                <input
                  id="number"
                  type="text"
                  className="flex items-center outline-none w-full h-[50px] rounded-[25px] bg-white text-neutral-800 text-xs sm:text-base font-medium mt-[30px] p-5"
                  placeholder="+998-90-123-45-67"
                  required
                />
              </label>
              <input
                id="region"
                type="text"
                className="flex items-center outline-none w-full h-[50px] rounded-[25px] bg-white text-neutral-800 text-base font-medium mt-[30px] p-5"
                placeholder={t("Регион продвижение")}
                required
              />
              <input
                id="bill"
                type="text"
                className="flex items-center outline-none w-full h-[50px] rounded-[25px] bg-white text-neutral-800 text-base font-medium mt-[30px] p-5"
                placeholder={t("Средний чек")}
                required
              />
              <p className="text-white py-5">
                {t("Сколько клиентов необходимо до цели?")}
              </p>
              <Box sx={{ padding: "0 10px", paddingTop: "15px" }}>
                <Slider
                  step={10}
                  value={val}
                  valueLabelDisplay="on"
                  min={30}
                  max={500}
                  onChange={handleChangeRange}
                />
                <Box
                  className="text-white"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    variant="body2"
                    onClick={() => setVal(30)}
                    sx={{ cursor: "pointer" }}
                  >
                    {30}
                  </Typography>
                  <Typography
                    variant="body2"
                    onClick={() => setVal(500)}
                    sx={{ cursor: "pointer" }}
                  >
                    {500}
                  </Typography>
                </Box>
              </Box>
              <button
                type="submit"
                className="flex w-full items-center justify-center h-[50px] border-none outline-none rounded-[25px] bg-blue-600 text-white text-lg font-bold cursor-pointer mt-[50px] hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? t("Отправляется...") : t("Получить консультацию")}
              </button>
            </form>
            <ToastContainer />
          </div>
          <div className="w-full flex items-center justify-center lg:w-[50%]">
            <img
              src={avatar}
              className="w-full  max-w-[500px] object-cover"
              alt="Description of the image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
