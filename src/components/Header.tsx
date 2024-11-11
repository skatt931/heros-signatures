import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

export default function Header({ absolute }: { absolute?: boolean }) {
  const { t } = useTranslation(); // Hook to access translations
  const { lang } = useParams();
  return (
    <div
      className={cn(
        "grid gap-5 py-7",
        absolute && "absolute left-1/2 translate-x-[-50%]",
      )}
    >
      <header className="flex justify-center gap-7 text-xs">
        <Link
          to={`/cz${window.location.pathname.replace(/^\/(cz|en|ua)/, "")}`}
          className={`link hover:text-orange-300 ${lang === "cz" ? "text-orange-500" : ""}`}
        >
          Čeština
        </Link>
        <Link
          to={`/en${window.location.pathname.replace(/^\/(cz|en|ua)/, "")}`}
          className={`link hover:text-orange-300 ${lang === "en" ? "text-orange-500" : ""}`}
        >
          English
        </Link>
        <Link
          to={`/ua${window.location.pathname.replace(/^\/(cz|en|ua)/, "")}`}
          className={`link hover:text-orange-300 ${lang === "ua" ? "text-orange-500" : ""}`}
        >
          Українська
        </Link>
      </header>
      <Link to={`/${lang}`}>
        <h2
          className={cn(
            "mx-auto text-center text-3xl text-orange-500",
            absolute && "hidden w-max text-[90px] md:block",
          )}
        >
          {t("flagPage.title")}
        </h2>
      </Link>
    </div>
  );
}
