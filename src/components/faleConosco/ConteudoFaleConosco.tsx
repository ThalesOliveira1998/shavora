import Area from "@/components/template/comum/Area";
import { useTranslation } from "react-i18next";
import FaleConoscoModal from "./FaleConoscoModal";

export default function ConteudoFaleConosco() {
  const { t } = useTranslation();

  return (
    <Area id="inicio" className="pt-20 bg-[#0A0A0A] text-white text-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-around h-auto md:h-[500px]">
        <div className="max-w-2xl mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t("contact.inviteTitle")}
          </h2>
          <p className="text-lg md:text-xl mb-6">
            {t("contact.inviteText")}
          </p>

          {/* Botão estilizado Mantine */}
          <div className="flex justify-center">
            <FaleConoscoModal />
          </div>
        </div>
      </div>
    </Area>
  );
}
