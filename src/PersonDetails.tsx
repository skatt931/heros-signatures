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
    <div className="flex h-screen flex-col gap-10 bg-black pb-10 text-center md:h-auto">
      <h1 className="text-white">{t(`person${id}.name`)}</h1>
      <div className="flex justify-center">
        <img src={person.image} alt="" className="aspect-video max-h-96" />
      </div>
      <p className="text-stone-300">{t(`person${id}.bio`)}</p>
      <div className="col-span-1 grid grid-cols-subgrid px-3">
        <Link
          className="btn btn-lg col-start-1"
          to={`/${lang}/person/${prevID}`}
          // @ts-ignore
          disabled={id === "0"}
        >
          Попередній
        </Link>
        <Link
          className="btn btn-lg col-start-3"
          to={`/${lang}/person/${nextID}`}
          // @ts-ignore
          disabled={parseInt(id) === PEOPLE.length - 1}
        >
          Наступний
        </Link>
      </div>
    </div>
  );
};

export default PersonDetails;
