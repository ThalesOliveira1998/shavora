import Area from "../comum/Area";
import vantagem01 from "../../../../public/vantagem01.jpg"
import vantagem2 from "../../../../public/vantagem-2.jpg"
import vantagem3 from "../../../../public/vantagem-3.jpg"
import Vantagem from "./Vantagem";

export default function QuemSomos() {
    return (
        <Area id="Quem somos" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Vantagem
                    imagem={vantagem01}
                    titulo="Dominique Yawanawa"
                    subtitulo="Eu sou a Dominique e iniciei a minha vida espeiritual..."
                />
                <Vantagem
                    imagem={vantagem2}
                    titulo="Hukena Yawanawa"
                    subtitulo="Eu sou Hukena sou do povo Yawanawa e..."
                    inverter
                />
                <Vantagem
                    imagem={vantagem3}
                    titulo="O que é Shavorã?"
                    subtitulo="Shavorã é um termo do povo Yawanawa, que representa a união de duas mulheres do mundo espiritual. Hoje, adotamos esse nome para compartilhar e levar ao mundo a rica cultura que vivemos e honramos."
                />
            </div>
        </Area>
    )
}