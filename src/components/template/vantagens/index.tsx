import Area from "../comum/Area";
import Vantagem from "./Vantagem";
import ExpandableText from "@/components/template/vantagens/ExpansaoDeTexto";
import { TFunction } from "i18next";

interface QuemSomosProps {
    t: TFunction;
}

export default function QuemSomos({ t }: QuemSomosProps) {
    return (
        <Area id="Quem somos" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Vantagem
                    imagem={{ src: "/IMG_5429.jpg", width: 500, height: 300 }}
                    titulo={t("whoweare.shavoraTitle")}
                    subtitulo={
                        <ExpandableText
                            text={t("whoweare.shavoraText")}
                            maxWords={30}
                        />
                    }
                />
                <Vantagem
                    imagem={{ src: "/vantagem-1.jpg", width: 500, height: 300 }}
                    titulo={t("whoweare.nawaemaTitle")}
                    subtitulo={
                        <ExpandableText
                            text={t("whoweare.nawaemaText")}
                            maxWords={30}
                        />
                    }
                    inverter
                />
                <Vantagem
                    imagem={{ src: "/vantagem-2.jpg", width: 500, height: 300 }}
                    titulo={t("whoweare.hukenaTitle")}
                    subtitulo={
                        <ExpandableText
                            text={t("whoweare.hukenaText")}
                            maxWords={30}
                        />
                    }
                />
                <Vantagem
                    imagem={{ src: "/vantagem-4.jpg", width: 500, height: 300 }}
                    titulo={t("whoweare.yawanawaTitle")}
                    subtitulo={
                        <ExpandableText
                            text={t("whoweare.yawanawaText")}
                            maxWords={30}
                        />
                    }
                    inverter
                />
            </div>
        </Area>
    );
}
