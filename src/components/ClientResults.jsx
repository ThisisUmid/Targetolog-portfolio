import React from "react";
import { useTranslation } from "react-i18next";

export const ClientResults = () => {
  const { t } = useTranslation();
  return (
    <div id="keysi" className="bg-repeat-y bg-center md:bg-clients lg:bg-clients">
      <div className="flex flex-col items-center justify-between">
        <div className="container mb-10">
          <div className="w-full p-8 flex flex-col items-center justify-center">
            <h2 className="text-3xl text-center text-black font-sans font-bold mb-10 mt-5 md:text-5xl lg:text-5xl">
              <span className="text-3xl text-black font-sans font-bold max-w-lg md:text-5xl lg:text-5xl  border-b-2 border-blue-700">
                {t("Результаты")}
              </span>
              &nbsp;
              {t("моих клиентов")}
            </h2>
            <div className="">
              <p className="text-base font-sans font-semibold text-black max-w-lg lg:text-xl text-center">
                {t(
                  "Ознакомьтесь с моими кейсами, где с помощью инструментов таргетированной рекламы я сгенерировал более 1 000 000$ прибыли клиентам"
                )}
              </p>
            </div>
          </div>
          <div
            className="flex items-center justify-center lg:justify-start
           mt-20"
          >
            <div className="flex items-center justify-center lg:w-[80%] bg-cover bg-center bg-gelik lg:shadow-none hover:shadow-[0_35px_60px_-15px_rgba(1,1,1,1)]">
              <div className="hidden md:block md:w-[70%] lg:block lg:w-[70%]"></div>
              <div className="p-8 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">{t("Пригон элитных авто")}</h2>
                <p className="mb-8">{t("Пригон элитных автомобилей под заказ")}</p>
                <div className="md:flex lg:flex items-start justify-between py-2">
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">2800$</p>
                    <p>{t("Инвестиции в рекламу")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2 lg:pr-4 md:pr-4">
                    <p className="text-xl font-semibold ">90</p>
                    <p>{t("Продажи")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">{t("3,6 млн $")}</p>
                    <p>{t("Продали авто на")}</p>
                  </div>
                </div>
                <button className="px-6 py-2 border-2 rounded-[24px] hover:hover:text-blue-700 hover:border-blue-700">
                  {t("ХОЧУ ТАК ЖЕ")}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end mt-20">
            <div className="flex items-center justify-center lg:w-[80%] bg-cover bg-center bg-subbit lg:shadow-none hover:shadow-[0_35px_60px_-15px_rgba(1,1,1,1)]">
              <div className="p-8 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">{t("Realty Summit")}</h2>
                <p className="mb-8">{t("Продажа билетов на саммит.")}</p>
                <div className="md:flex lg:flex items-start justify-between py-2">
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">2594$</p>
                    <p>{t("Инвестиции в рекламу")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2 lg:pr-4 md:pr-4">
                    <p className="text-xl font-semibold ">473</p>
                    <p>{t("Продажи")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">56 059$</p>
                    <p>{t("Чистой прибыли")}</p>
                  </div>
                </div>
                <button className="px-6 py-2 border-2 rounded-[24px] hover:hover:text-blue-700 hover:border-blue-700">
                  {t("ХОЧУ ТАК ЖЕ")}
                </button>
              </div>
              <div className="hidden md:block md:w-[70%] lg:block lg:w-[70%]"></div>
            </div>
          </div>
          <div
            className="flex items-center justify-center lg:justify-start
           mt-20"
          >
            <div className="flex items-center justify-center lg:w-[80%] bg-cover bg-center bg-chevrolet lg:shadow-none hover:shadow-[0_35px_60px_-15px_rgba(1,1,1,1)]">
              <div className="hidden md:block md:w-[70%] lg:block lg:w-[70%]"></div>
              <div className="p-8 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">{t("Пригон авто из США")}</h2>
                <p className="mb-8">{t("Пригон автомобилей под заказ")}</p>
                <div className="md:flex lg:flex items-start justify-between py-2">
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">500</p>
                    <p>{t("целевых обращений")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2 lg:pr-4 md:pr-4">
                    <p className="text-xl font-semibold ">0,8$</p>
                    <p>{t("стоимость заявки")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">{t("2 мес.")}</p>
                    <p>{t("длительность компании")}</p>
                  </div>
                </div>
                <button className="px-6 py-2 border-2 rounded-[24px] hover:hover:text-blue-700 hover:border-blue-700">
                  {t("ХОЧУ ТАК ЖЕ")}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end mt-20">
            <div className="flex items-center justify-center lg:w-[80%] bg-cover bg-center bg-houses lg:shadow-none hover:shadow-[0_35px_60px_-15px_rgba(1,1,1,1)]">
              <div className="p-8 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">TOWNHOUSE</h2>
                <p className="mb-8">{t("Продажа таун-хаусов")}</p>
                <div className="md:flex lg:flex items-start justify-between py-2">
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">870</p>
                    <p>{t("целевых обращений")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2 lg:pr-4 md:pr-4">
                    <p className="text-xl font-semibold ">0,68$</p>
                    <p>{t("стоимость заявки")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">{t("3 мес.")}</p>
                    <p>{t("длительность компании")}</p>
                  </div>
                </div>
                <button className="px-6 py-2 border-2 rounded-[24px] hover:hover:text-blue-700 hover:border-blue-700">
                  {t("ХОЧУ ТАК ЖЕ")}
                </button>
              </div>
              <div className="hidden md:block md:w-[70%] lg:block lg:w-[70%]"></div>
            </div>
          </div>
          <div
            className="flex items-center justify-center lg:justify-start
           mt-20"
          >
            <div className="flex items-center justify-center lg:w-[80%] bg-cover bg-center bg-kinder lg:shadow-none hover:shadow-[0_35px_60px_-15px_rgba(1,1,1,1)]">
              <div className="hidden md:block md:w-[70%] lg:block lg:w-[70%]"></div>
              <div className="p-8 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">{t("Большие киндеры")}</h2>
                <p className="mb-8">{t("Привлечение клиентов покупку больших подарочных киндеров")}</p>
                <div className="md:flex lg:flex items-start justify-between py-2">
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">1200</p>
                    <p>{t("целевых обращений")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2 lg:pr-4 md:pr-4">
                    <p className="text-xl font-semibold ">0,87$</p>
                    <p>{t("стоимость заявки")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">{t("2 мес.")}</p>
                    <p>{t("длительность кампании")}</p>
                  </div>
                </div>
                <button className="px-6 py-2 border-2 rounded-[24px] hover:hover:text-blue-700 hover:border-blue-700">
                  {t("ХОЧУ ТАК ЖЕ")}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end mt-20">
            <div className="flex items-center justify-center lg:w-[80%] bg-cover bg-center bg-tree lg:shadow-none hover:shadow-[0_35px_60px_-15px_rgba(1,1,1,1)]">
              <div className="p-8 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">{t("Продажа елок в США")}</h2>
                <p className="mb-8">{t("Продажа дизайнерских деревянных елок на территории США")}</p>
                <div className="md:flex lg:flex items-start justify-between py-2">
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">15000$</p>
                    <p>{t("продали на сумму")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2 lg:pr-4 md:pr-4">
                    <p className="text-xl font-semibold ">800$</p>
                    <p>{t("рекламный бюджет")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">{t("1 мес.")}</p>
                    <p>{t("длительность компании")}</p>
                  </div>
                </div>
                <button className="px-6 py-2 border-2 rounded-[24px] hover:hover:text-blue-700 hover:border-blue-700">
                  {t("ХОЧУ ТАК ЖЕ")}
                </button>
              </div>
              <div className="hidden md:block md:w-[70%] lg:block lg:w-[70%]"></div>
            </div>
          </div>
          <div
            className="flex items-center justify-center lg:justify-start
           mt-20"
          >
            <div className="flex items-center justify-center lg:w-[80%] bg-cover bg-center bg-plane lg:shadow-none hover:shadow-[0_35px_60px_-15px_rgba(1,1,1,1)]">
              <div className="hidden md:block md:w-[70%] lg:block lg:w-[70%]"></div>
              <div className="p-8 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">{t("Авиационный центр в Латвии")}</h2>
                <p className="mb-8">{t("Рекламная кампания была нацелен на привлечение абитуриентов на обучение профессии авиамеханик")}</p>
                <div className="md:flex lg:flex items-start justify-between py-2">
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">500</p>
                    <p>{t("целевых обращений")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2 lg:pr-4 md:pr-4">
                    <p className="text-xl font-semibold ">1,2$</p>
                    <p>{t("стоимость заявки")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">{t("1 мес.")}</p>
                    <p>{t("длительность компании")}</p>
                  </div>
                </div>
                <button className="px-6 py-2 border-2 rounded-[24px] hover:hover:text-blue-700 hover:border-blue-700">
                  {t("ХОЧУ ТАК ЖЕ")}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end mt-20">
            <div className="flex items-center justify-center lg:w-[80%] bg-cover bg-center bg-dishes lg:shadow-none hover:shadow-[0_35px_60px_-15px_rgba(1,1,1,1)]">
              <div className="p-8 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">{t("Оптовая продажа экопосуды")}</h2>
                <p className="mb-8">{t("Целью рекламной кампании было привлечение оптовых клиентов на покупок биоразлагаемой посуды")}</p>
                <div className="md:flex lg:flex items-start justify-between py-2">
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">1200</p>
                    <p>{t("целевых обращений")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2 lg:pr-4 md:pr-4">
                    <p className="text-xl font-semibold ">0,7$</p>
                    <p>{t("стоимость заявки")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">{t("2 мес.")}</p>
                    <p>{t("длительность компании")}</p>
                  </div>
                </div>
                <button className="px-6 py-2 border-2 rounded-[24px] hover:hover:text-blue-700 hover:border-blue-700">
                  {t("ХОЧУ ТАК ЖЕ")}
                </button>
              </div>

              <div className="hidden md:block md:w-[70%] lg:block lg:w-[70%]"></div>
            </div>
          </div>
          <div
            className="flex items-center justify-center lg:justify-start
           mt-20"
          >
            <div className="flex items-center justify-center lg:w-[80%] bg-cover bg-center bg-pansionat lg:shadow-none hover:shadow-[0_35px_60px_-15px_rgba(1,1,1,1)]">
              <div className="hidden md:block md:w-[70%] lg:block lg:w-[70%]"></div>
              <div className="p-8 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">{t("Пансионат для престарелых")}</h2>
                <p className="mb-8">{t("Привлечение клиентов для обслуживания их пожилых родственников")}</p>
                <div className="md:flex lg:flex items-start justify-between py-2">
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">122</p>
                    <p>{t("целевых обращений")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2 lg:pr-4 md:pr-4">
                    <p className="text-xl font-semibold ">2$</p>
                    <p>{t("стоимость заявки")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">{t("3 нед.")}</p>
                    <p>{t("длительность компании")}</p>
                  </div>
                </div>
                <button className="px-6 py-2 border-2 rounded-[24px] hover:hover:text-blue-700 hover:border-blue-700">
                  {t("ХОЧУ ТАК ЖЕ")}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end mt-20">
            <div className="flex items-center justify-center lg:w-[80%] bg-cover bg-center bg-china lg:shadow-none hover:shadow-[0_35px_60px_-15px_rgba(1,1,1,1)]">
              <div className="p-8 rounded-lg shadow-lg text-white">
                <h2 className="text-2xl font-bold mb-4">{t("Бизнес с Китаем")}</h2>
                <p className="mb-8">{t("Привлечение клиентов для для полного сопровождения бизнеса связанного с Китаем")}</p>
                <div className="md:flex lg:flex items-start justify-between py-2">
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">280</p>
                    <p>{t("целевых обращений")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2 lg:pr-4 md:pr-4">
                    <p className="text-xl font-semibold ">1,6$</p>
                    <p>{t("стоимость заявкидажи")}</p>
                  </div>
                  <div className="py-10 md:py-2 lg:py-2">
                    <p className="text-xl font-semibold">{t("1 мес.")}</p>
                    <p>{t("длительность компании")}</p>
                  </div>
                </div>
                <button className="px-6 py-2 border-2 rounded-[24px] hover:hover:text-blue-700 hover:border-blue-700">
                  {t("ХОЧУ ТАК ЖЕ")}
                </button>
              </div>
              <div className="hidden md:block md:w-[70%] lg:block lg:w-[70%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

