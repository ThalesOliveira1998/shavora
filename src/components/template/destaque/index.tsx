import Area from "../comum/Area";
import Slogan from "./Slogan";
import principal from "../../../../public/principal.jpg";
import ImagemResponsiva from "../comum/ImagemResponsiva";
import { TFunction } from "i18next";

interface DestaqueProps {
    t: TFunction;
}

export default function Destaque({ t }: DestaqueProps) {
    return (
        <Area id="inicio" className="pt-20 bg-[#0A0A0A]">
            <div className="flex flex-col-reverse md:flex-row items-center justify-around h-auto md:h-[500px]">
                <Slogan t={t} /> {/* Agora Slogan recebe `t` */}
                <ImagemResponsiva
                    imagem={principal}
                    className="rotate-3 w-full max-w-[400px] md:max-w-[500px] hidden md:block"
                />
            </div>
        </Area>
    );
}
