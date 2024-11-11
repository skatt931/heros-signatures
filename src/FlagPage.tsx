import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import Avatar from "./components/Avatar";
import { PEOPLE } from "@/constants/PEOPLE";

const FlagPage = () => {
  const { t } = useTranslation(); // Hook to access translations
  const { lang } = useParams();

  return (
    <main className="bg-black">
      <section className="w-full scroll-smooth pb-10 text-center text-stone-300">
        <div>
          <div className="flex justify-center">
            <img
              src="./azov-flag.jpeg"
              alt="azov image"
              className="aspect-video w-full"
            />
          </div>
          <div className="grid gap-5 p-5 md:gap-10">
            <p>{t("flagPage.description")}</p>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
              {PEOPLE.map((signature) => (
                <Link to={`/${lang}/person/${signature.id}`} key={signature.id}>
                  <Avatar
                    className="justify-center"
                    name={t(`person${signature.id}.name`)}
                    shortDescription={t(`person${signature.id}.shortInfo`)}
                    imageUrl={signature.image}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <footer className="bg-black p-5 text-center text-stone-300">
        <p>{t("flagPage.footer")}</p>
      </footer> */}
    </main>
  );
};

export default FlagPage;
