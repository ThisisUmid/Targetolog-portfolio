import React from "react";
import { useTranslation } from "react-i18next";
import sergey from "../img/sergey.png";
import aleksandr from "../img/aleksandr.png";
import ruslan from "../img/ruslan.png";
import aleksandr2 from "../img/aleksandr2.png";

export const Recommend = () => {
  const { t } = useTranslation();

  const dataLeft = [
    {
      name: "Сергей",
      description: "Основатель крупнейшего ивент комьюнити. Open Event Club",
      targets: 7400,
      costPerApplication: "0,51$",
      adBudget: "3600$",
      imageUrl: sergey,
    },
    {
      name: "Руслан",
      description: "Открытка кубики",
      targets: 2000,
      costPerApplication: "0,5$",
      adBudget: "1000$",
      imageUrl: aleksandr,
    },
  ];
  const dataRight = [
    {
      name: "Александр",
      description:
        "Промышленные котлы цель которых обогрев коммерческих площадей от 1000м2",
      targets: 150,
      costPerApplication: "2,5$",
      adBudget: "450$",
      imageUrl: ruslan,
    },
    {
      name: "Александр",
      description:
        "Центральная Ипотечная Корпорация - привлечение клиентов на покупку квартир",
      targets: 140,
      costPerApplication: "3$",
      adBudget: "420$",
      imageUrl: aleksandr2,
    },
  ];
  return (
    <div className="bg-white flex items-center justify-center">
      <div className="container">
        <div className="lg:flex">
          <div className="">
            <div className="flex flex-col items-center justify-between text-center">
              <h2 className="text-3xl text-center text-black font-sans font-bold mb-10 mt-5 md:text-5xl lg:text-5xl">
                {t("Меня")}
                &nbsp;
                <span className="text-3xl text-black font-sans font-bold max-w-lg md:text-5xl lg:text-5xl  border-b-2 border-blue-700">
                  {t("рекомендуют")}
                </span>
              </h2>
              <p className="text-black pb-8 text-xl max-w-[600px]">
                {t(
                  "Сейчас у меня находится более 10 проектов на постоянном обслуживании, которым я ежемесячно привлекаю максимальное количество целевых обращений"
                )}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              {dataLeft.map((item, index) => (
                <div key={index} className="">
                  <div className="max-w-[300px] md:max-w-[500px] lg:max-w-[600px] h-[330px] border-t-4 border-blue-700 flex flex-col items-center justify-between p-10 my-10 shadow-2xl">
                    <div className="w-full flex items-center justify-between ">
                      <div className="">
                        <h4 className="text-xl font-bold">{t(item.name)}</h4>
                        <p className="max-w-72 py-4 text-neutral-400">
                          {item.description}
                        </p>
                      </div>
                      <img
                        src={item.imageUrl}
                        alt={t(item.name)}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex">
                      <div>
                        <h4 className="text-xl font-bold">{t(item.targets)}</h4>
                        <p>{t("целевых обращений")}</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold px-4">
                          {t(item.costPerApplication)}
                        </h4>
                        <p className="px-4">{t("стоимость заявки")}</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{t(item.adBudget)}</h4>
                        <p>{t("рекламный бюджет")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center">
              {dataRight.map((item, index) => (
                <div key={index} className="">
                  <div className="max-w-[300px] md:max-w-[500px] lg:max-w-[600px] h-[330px] border-t-4 border-blue-700 flex flex-col items-center justify-between p-10 my-10 shadow-2xl">
                    <div className="w-full flex items-center justify-between ">
                      <div className="">
                        <h4 className="text-xl font-bold">{t(item.name)}</h4>
                        <p className="max-w-72 py-4 text-neutral-400">
                          {t(item.description)}
                        </p>
                      </div>
                      <img
                        src={item.imageUrl}
                        alt={t(item.name)}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex">
                      <div>
                        <h4 className="text-xl font-bold">{t(item.targets)}</h4>
                        <p>{t("целевых обращений")}</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold px-4">
                          {t(item.costPerApplication)}
                        </h4>
                        <p className="px-4">{t("стоимость заявки")}</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{t(item.adBudget)}</h4>
                        <p>{t("рекламный бюджет")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center my-10 px-10">
              <h3 className="my-10 md:my-0 lg:my-0 text-2xl font-bold mx-5 text-center">
                {t("Хотите такой же результат?")}
              </h3>
              <button
                type="submit"
                className="
      flex items-center justify-center h-[50px] border-none outline-none rounded-[25px] bg-blue-600 text-white text-lg font-bold cursor-pointer hover:bg-blue-700 p-4 mx-5"
              >
                {t("Получить консультацию")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
