import Area from "../comum/Area";
import Vantagem from "./Vantagem";

export default function QuemSomos() {
    return (
        <Area id="Quem somos" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Vantagem
                    imagem={{ src: "/vantagem-1.jpg", width: 500, height: 300 }}  
                    titulo="Dominique Yawanawá"
                    subtitulo="Eu sou a Dominique e iniciei a minha vida espiritual..."
                />
                <Vantagem
                    imagem={{ src: "/vantagem-2.jpg", width: 500, height: 300 }}  
                    titulo="Hukena Yawanawá"
                    subtitulo="Eu sou Hukena, sou do povo Yawanawá e..."
                    inverter
                />
                <Vantagem
                    imagem={{ src: "/vantagem-3.jpg", width: 500, height: 300 }}  
                    titulo="O que é Shavorã?"
                    subtitulo="Shavorã é um termo do povo Yawanawá, que representa a união de duas mulheres do mundo espiritual..."
                />
                   <Vantagem
                    imagem={{ src: "/vantagem-4.jpg", width: 500, height: 300 }}  
                    titulo="Quem são os Yawanawá?"
                    subtitulo="Os Yawanawá são um povo indígena que vive na Terra Indígena Rio Gregório, no município de Tarauacá, no Acre. A palavra Yawanawá é composta por yawa queixada e nawa gente."
                    inverter
                />
                   <Vantagem
                    imagem={{ src: "/vantagem-5.jpg", width: 500, height: 300 }}  
                    titulo="O que é medicina da espiritual?"
                    subtitulo="A medicina espiritual Yawanawá usa plantas sagradas, cantos e rituais para cura e conexão espiritual. Guiada por lideres, tem na ayahuasca (Uni) um meio de autoconhecimento e preservação cultural."
                />
            </div>
        </Area>
    );
}
