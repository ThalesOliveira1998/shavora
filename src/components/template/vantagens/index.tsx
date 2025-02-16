import Area from "../comum/Area";
import Vantagem from "./Vantagem";

export default function QuemSomos() {
    return (
        <Area id="Quem somos" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Vantagem
                    imagem={{ src: "/vantagem-1.jpg", width: 500, height: 300 }}  
                    titulo="Dominique Yawanawa"
                    subtitulo="Eu sou a Dominique e iniciei a minha vida espiritual..."
                />
                <Vantagem
                    imagem={{ src: "/vantagem-2.jpg", width: 500, height: 300 }}  
                    titulo="Hukena Yawanawa"
                    subtitulo="Eu sou Hukena, sou do povo Yawanawa e..."
                    inverter
                />
                <Vantagem
                    imagem={{ src: "/vantagem-3.jpg", width: 500, height: 300 }}  
                    titulo="O que é Shavorã?"
                    subtitulo="Shavorã é um termo do povo Yawanawa, que representa a união de duas mulheres do mundo espiritual..."
                />
            </div>
        </Area>
    );
}
