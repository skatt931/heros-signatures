import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { PEOPLE } from "@/constants/PEOPLE";

const PersonDetails = () => {
  const { id = "1", lang } = useParams();
  const numID = parseInt(id);
  const person = PEOPLE[numID];
  const { t } = useTranslation();

  const prevID = parseInt(id) - 1;
  const nextID = parseInt(id) + 1;

  return (
    <div className="flex flex-col gap-10 bg-gradient-to-b from-black to-cyan-950 pb-10 text-center md:h-auto md:px-20">
      <h1 className="text-white">{t(`person${id}.name`)}</h1>
      <div className="flex justify-center">
        <img src={person.image} alt="" className="aspect-video max-h-96" />
      </div>
      <p className="p-5 text-lg text-white md:border md:border-white md:p-10">
        {t(`person${id}.bio`)}
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
          disabled={parseInt(id) === PEOPLE.length - 1}
        >
          {t("nextBtn")}
        </Link>
      </div>
    </div>
  );
};

export default PersonDetails;
