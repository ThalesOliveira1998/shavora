import Area from "../comum/Area";
import Logo from "../comum/Logo";
import RedesSociais from "./RedesSociais";
import { useTranslation } from "react-i18next"; // ✅ Importando o hook corretamente

export default function Rodape() {
  const { t } = useTranslation(); // ✅ Pegando `t` corretamente do hook

  return (
    <Area id="rodape" className="bg-[#0A0A0A] py-1">
      <div className="flex flex-col items-center md:items-start">
        <Logo />

        <div className="mt-2 text-zinc-400 text-center md:text-left">
          <div className="flex gap-1.5">
            {t("footer.knowOur")}
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-red-600">
              {t("footer.networks")}
            </span>
            {t("footer.social")}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-14">
        <RedesSociais />
        <div className="text-zinc-100 mt-7 md:mt-0 text-center">
          <div className="text-zinc-400 text-center md:text-left">
            {t("footer.createdBy")} <span className="font-semibold">Thales Oliveira</span>
          </div>
          <span className="font-bold text-red-500">
            SHAVORÃ ® {new Date().getFullYear()} - {t("footer.rights")}
          </span>
        </div>
      </div>
    </Area>
  );
}
