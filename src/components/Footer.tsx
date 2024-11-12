import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function Footer({ isBlue }: { isBlue?: boolean }) {
  const { t } = useTranslation();
  return (
    <footer
      className={cn(
        "border-t bg-black p-5 text-center text-white",
        isBlue && "bg-cyan-950",
      )}
    >
      <p>{t("footer")}</p>
    </footer>
  );
}
