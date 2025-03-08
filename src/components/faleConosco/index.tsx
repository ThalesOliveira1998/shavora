import Cabecalho from "../template/cabecalho";
import Rodape from "../template/rodape";
import Formulario from "./Formulario";
import ConteudoFaleConosco from "./ConteudoFaleConosco";
import { useTranslation } from "react-i18next"; // ✅ Importando o hook de tradução

const FaleConosco = () => {
  const { t } = useTranslation(); // ✅ Obtendo `t` do hook

  return (
    <div className="flex flex-col min-h-screen">
      {/* Cabeçalho */}
      <Cabecalho />

      {/* Título e Conteúdo Traduzido */}
      <div className="text-center mt-10 text-white text-4xl font-bold">
        {t("contact.title")} {/* 🔹 Traduzindo "Fale Conosco" */}
      </div>

      <ConteudoFaleConosco />

      <div className="flex flex-1 items-center justify-center p-10">
        <Formulario />
      </div>

      {/* Rodapé */}
      <Rodape />
    </div>
  );
};

export default FaleConosco;
