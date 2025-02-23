import Cabecalho from "../template/cabecalho";
import Rodape from "../template/rodape";
import Formulario from "./Formulario";

import ConteudoFaleConosco from "./ConteudoFaleConosco";

const FaleConosco = () => {
  return (
   
      <div className="flex flex-col min-h-screen">
        {/* Cabeçalho */}
        <Cabecalho />

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
