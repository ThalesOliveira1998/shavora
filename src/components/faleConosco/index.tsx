import Cabecalho from "../template/cabecalho";
import Rodape from "../template/rodape";
import ConteudoFaleConosco from "./ConteudoFaleConosco";
import FaleConoscoModal from "./FaleConoscoModal";
import { useTranslation } from "react-i18next";

const FaleConosco = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Cabeçalho */}
      <Cabecalho />

      {/* Título */}
      <div className="text-center mt-10 text-white text-4xl font-bold">
        {t("contact.title")}
      </div>

      {/* Conteúdo */}
      <div className="mb-16 bg-black text-white">
  <ConteudoFaleConosco />
</div>

      {/* Rodapé */}
      <Rodape />
    </div>
  );
};

export default FaleConosco;
