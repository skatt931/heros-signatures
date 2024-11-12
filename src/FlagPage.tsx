import { useTranslation } from "react-i18next";
import { Link, useLocation, useParams } from "react-router-dom";
import Avatar from "./components/Avatar";
import { useEffect } from "react";
import UA_TRANSLATIONS from "@/locales/ua.json";

const FlagPage = () => {
  const { t } = useTranslation(); // Hook to access translations
  const { lang } = useParams();
  const { pathname } = useLocation();
  const heroes = UA_TRANSLATIONS.heroes;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="bg-black">
      <section className="w-full scroll-smooth pb-10 text-center text-white">
        <div>
          <div className="flex justify-center">
            <img
              src="./azov-flag.jpeg"
              alt="azov image"
              className="aspect-video w-full"
            />
          </div>
          <div className="grid gap-9 p-5 md:gap-16 md:px-20">
            <div className="grid gap-5">
              <h3 className="text-xl md:text-3xl">Якийсь текст</h3>
              <p className="justify-self-center text-white hover:text-white md:w-3/5 md:text-xl">
                {t("flagPage.description")}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {heroes.map((signature, index) => (
                <Link to={`/${lang}/${index}`} key={index}>
                  <Avatar
                    className="justify-center"
                    name={t(`heroes.${index}.name`)}
                    shortDescription={t(`heroes.${index}.shortInfo`)}
                    imageUrl={signature.image}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FlagPage;
