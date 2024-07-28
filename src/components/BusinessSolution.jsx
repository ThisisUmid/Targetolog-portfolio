import React from "react";
import {
  FaLightbulb,
  FaBullhorn,
  FaDraftingCompass,
  FaUsers,
  FaBullseye,
  FaPen,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const BusinessSolution = () => {
  const { t } = useTranslation();

  const leftSideData = [
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Брендинг",
      description:
        "Идея, концепция, фирменные цвета и шрифты, позиционирование.",
    },
    {
      icon: <FaDraftingCompass className="text-2xl" />,
      title: "Landing",
      description:
        "Прототип, продающие тексты, дизайн, верстка, триггеры, лид-формы.",
    },
    {
      icon: <FaBullhorn className="text-2xl" />,
      title: "Дизайн",
      description: "Креативы, баннеры, лендинги, оформление соц.сетей.",
    },
  ];

  const rightSideData = [
    {
      icon: <FaUsers className="text-2xl" />,
      title: "SMM",
      description:
        "Контент-план, хештеги, посты, общение с аудиторией, акции и конкурсы.",
    },
    {
      icon: <FaBullseye className="text-2xl" />,
      title: "Таргетинг",
      description:
        "Офферы, креативы, объявления, сегментация под ЦА, улучшение.",
    },
    {
      icon: <FaPen className="text-2xl" />,
      title: "Копирайтинг",
      description:
        "Контент-планы, офферы, продающие тексты, коммерческие предложения.",
    },
  ];
  return (
    <div className="bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full p-8 flex flex-col items-center justify-center">
            <h2 className="text-3xl text-center text-black font-sans font-bold mb-10 mt-5 md:text-5xl lg:text-5xl">
              <span className="text-3xl text-black font-sans font-bold max-w-lg md:text-5xl lg:text-5xl  border-b-2 border-blue-700">
                {t("Лучшие")}
              </span>
              &nbsp;
              {t("решения для бизнеса")}
            </h2>
            <div className="">
              <p className="text-base font-sans font-semibold text-black max-w-lg lg:text-xl">
                {t(
                  "Комплексный подход для стартапов и малых предприятий, ищущих партнеров для своих цифровых медиа, дизайна и развития, лидогенерации и коммуникаций – это те услуги, которые я, предоставляю для достижения результата"
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center gap-8 p-4 my-10">
            <div className="flex flex-col gap-4">
              {leftSideData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg shadow-inner flex flex-col items-start justify-between gap-4 hover:bg-gradient-to-b from-[#b5d5fe] to-[#f2a8ff] border-t-4 border-blue-700 h-60 w-56 bg-white"
                >
                  {item.icon}

                  <h3 className="text-lg font-bold">{t(item.title)}</h3>
                  <p>{t(item.description)}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 translate-y">
              {rightSideData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg shadow-inner flex flex-col items-start justify-between gap-4 hover:bg-gradient-to-b from-[#b5d5fe] to-[#f2a8ff] border-t-4 border-blue-700
                  h-60 w-56 -translate-y-10 bg-white" 
                >
                  {item.icon}

                  <h3 className="text-lg font-bold">{t(item.title)}</h3>
                  <p>{t(item.description)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
