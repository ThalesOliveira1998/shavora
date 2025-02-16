import Area from "../comum/Area";
import Logo from "../comum/Logo";
import RedesSociais from "@/components/template/rodape/RedesSociais";

export default function Rodape() {
    return (
        <Area className="bg-[#0A0A0A] py-1"> {/* Preto levemente suavizado */}
            <div className="flex flex-col items-center md:items-start">
                <Logo />
                
                <div className="mt-2 text-zinc-400 text-center md:text-left">
                    <div className="flex gap-1.5">
                        Conheça nossas
                        <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-red-600">
                            redes
                        </span>
                        Sociais
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center mt-14">
                <RedesSociais />
                <div className="text-zinc-100 mt-7 md:mt-0 text-center">
                    <div className="text-zinc-400 text-center md:text-left">
                        Created and developed by Thales Oliveira
                    </div>
                    <span className="font-bold text-red-500">
                        SHAVORÃ<span className="text-red-500"></span> ® {new Date().getFullYear()} - Todos os direitos reservados
                    </span>
                </div>
            </div>
        </Area>
    );
}
