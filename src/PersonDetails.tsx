import { useTranslation } from "react-i18next";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import UA_TRANSLATIONS from "@/locales/ua.json";

const PersonDetails = () => {
  const { id = "1", lang } = useParams();
  const numID = parseInt(id);
  const person = UA_TRANSLATIONS.heroes[numID];
  const { t } = useTranslation();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const prevID = parseInt(id) - 1;
  const nextID = parseInt(id) + 1;

  return (
    <div className="flex flex-col gap-10 overflow-hidden bg-gradient-to-b from-black to-cyan-950 pb-10 text-center md:h-auto md:px-20">
      <h1 className="text-white">{t(`heroes.${id}.name`)}</h1>
      <div className="flex justify-center">
        <img
          src={person.image}
          alt=""
          className="aspect-video max-h-96 object-cover"
        />
      </div>
      <p className="self-center p-5 text-justify text-lg text-white md:max-w-3xl md:border md:border-white md:p-10">
        {t(`heroes.${id}.bio`)}
      </p>
      <div className="col-span-1 grid grid-cols-subgrid px-3">
        <Link
          className="btn btn-lg col-start-1"
          to={`/${lang}/${prevID}`}
          // @ts-ignore
          disabled={id === "0"}
        >
          {t("prevBtn")}
        </Link>
        <Link
          className="btn btn-lg col-start-3"
          to={`/${lang}/${nextID}`}
          // @ts-ignore
          disabled={parseInt(id) === UA_TRANSLATIONS.heroes.length - 1}
        >
          {t("nextBtn")}
        </Link>
      </div>
    </div>
  );
};

export default PersonDetails;
